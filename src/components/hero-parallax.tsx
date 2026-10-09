/* eslint-disable @next/next/no-img-element -- layered local assets; dimensions are reserved by CSS. */
"use client";

import { useEffect, useRef } from "react";

// How far outside the card (px) the cursor still steers it.
const REACH = 160;
// Smoothing time constant (ms); higher is softer. Frame-rate independent.
const SMOOTHING = 160;

export function HeroParallax({
  backdrop,
  subject,
  alt,
}: {
  backdrop: string;
  subject: string;
  alt: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const allowed = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    if (!allowed.matches) return;

    const target = { x: 0, y: 0, hover: 0 };
    const current = { x: 0, y: 0, hover: 0 };
    let frame = 0;
    let last = 0;

    const render = (now: number) => {
      const step =
        1 - Math.exp(-Math.min(now - (last || now - 16), 100) / SMOOTHING);
      last = now;
      current.x += (target.x - current.x) * step;
      current.y += (target.y - current.y) * step;
      current.hover += (target.hover - current.hover) * step;
      element.style.setProperty("--px", current.x.toFixed(4));
      element.style.setProperty("--py", current.y.toFixed(4));
      element.style.setProperty("--hover", current.hover.toFixed(4));
      const settled =
        Math.abs(target.x - current.x) < 0.001 &&
        Math.abs(target.y - current.y) < 0.001 &&
        Math.abs(target.hover - current.hover) < 0.001;
      frame = settled ? 0 : requestAnimationFrame(render);
      if (settled) last = 0;
    };
    const kick = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    const onMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const near =
        event.clientX > rect.left - REACH &&
        event.clientX < rect.right + REACH &&
        event.clientY > rect.top - REACH &&
        event.clientY < rect.bottom + REACH;
      if (near) {
        const clamp = (v: number) => Math.max(-1, Math.min(1, v));
        target.x = clamp(((event.clientX - rect.left) / rect.width) * 2 - 1);
        target.y = clamp(((event.clientY - rect.top) / rect.height) * 2 - 1);
        target.hover = 1;
      } else {
        target.x = 0;
        target.y = 0;
        target.hover = 0;
      }
      kick();
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      target.hover = 0;
      kick();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <figure ref={ref} className="media-slot hero-media hero-parallax">
      <div className="parallax-card">
        <div className="media-frame">
          <img
            className="parallax-layer parallax-backdrop"
            src={backdrop}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
          />
          <img
            className="parallax-layer parallax-subject"
            src={subject}
            alt={alt}
            fetchPriority="high"
          />
          <span className="parallax-glare" aria-hidden="true" />
        </div>
      </div>
    </figure>
  );
}
