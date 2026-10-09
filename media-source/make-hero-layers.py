"""Split media-source/robot-hero.png into the two hero parallax layers.

Run from the project root (needs numpy, scipy, Pillow and cwebp):
    python3 media-source/make-hero-layers.py
Writes public/media/robot-hero-subject.webp (robot + its floor shadow, transparent)
and public/media/robot-hero-backdrop.webp (robot removed, gap filled with the gradient).
"""
import subprocess
import tempfile
from pathlib import Path

import numpy as np
from PIL import Image
from scipy import ndimage as ndi

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "media-source" / "robot-hero.png"
OUT = ROOT / "public" / "media"

im = np.asarray(Image.open(SRC).convert("RGB")).astype(float)
H, W = im.shape[:2]


def largest(mask):
    lab, n = ndi.label(mask)
    sizes = ndi.sum(mask, lab, range(1, n + 1))
    return lab == (np.argmax(sizes) + 1)


def disk(r):
    return np.add.outer(np.arange(-r, r + 1) ** 2, np.arange(-r, r + 1) ** 2) <= r * r


# The backdrop is a smooth gradient, so the robot is whatever is enclosed by edges.
L = ndi.gaussian_filter(im.mean(axis=2), 1.0)
edges = np.hypot(ndi.sobel(L, 1), ndi.sobel(L, 0)) > 18
edges = ndi.binary_closing(edges, structure=np.ones((3, 3)), iterations=3)
m0 = largest(ndi.binary_fill_holes(edges))

# Drop thin floor/horizon lines, then restore the slender lift pole.
body = largest(ndi.binary_opening(m0, structure=disk(6)))
pole = np.zeros_like(m0)
pole[280:740, 220:390] = True
mask = largest(ndi.binary_fill_holes(body | (m0 & pole)))

# Subject: slightly eroded, softly feathered alpha.
alpha = ndi.gaussian_filter(ndi.binary_erosion(mask, iterations=1).astype(float), 0.9)
alpha = np.clip(alpha * 1.15, 0, 1)
subject = np.dstack([im, alpha * 255]).astype(np.uint8)

# Backdrop: fill the hole by normalized convolution at growing scales.
hole = ndi.binary_dilation(mask, iterations=5)
known = (~hole).astype(float)
fill = np.zeros_like(im)
got = np.zeros((H, W), bool)
for sigma in (6, 14, 30, 60, 120):
    wsum = ndi.gaussian_filter(known, sigma)
    est = np.dstack(
        [ndi.gaussian_filter(im[..., c] * known, sigma) for c in range(3)]
    ) / np.maximum(wsum, 1e-6)[..., None]
    ok = (wsum > 0.25) & ~got & hole
    fill[ok] = est[ok]
    got |= ok
fill[hole & ~got] = est[hole & ~got]
blend = ndi.gaussian_filter(hole.astype(float), 2.0)[..., None]
back = im * (1 - blend) + np.where(hole[..., None], fill, im) * blend
back = ndi.gaussian_filter(back, (1.2, 1.2, 0)) * blend + back * (1 - blend)
back = np.clip(back, 0, 255).astype(np.uint8)

with tempfile.TemporaryDirectory() as tmp:
    Image.fromarray(subject, "RGBA").save(f"{tmp}/subject.png")
    Image.fromarray(back).save(f"{tmp}/backdrop.png")
    subprocess.run(["cwebp", "-quiet", "-q", "88", "-alpha_q", "100", "-m", "6",
                    f"{tmp}/subject.png", "-o", str(OUT / "robot-hero-subject.webp")], check=True)
    subprocess.run(["cwebp", "-quiet", "-q", "82", "-m", "6",
                    f"{tmp}/backdrop.png", "-o", str(OUT / "robot-hero-backdrop.webp")], check=True)
print("Wrote", OUT / "robot-hero-subject.webp", "and", OUT / "robot-hero-backdrop.webp")
