/* eslint-disable @next/next/no-img-element -- local replaceable asset manifest; dimensions are reserved by CSS. */
import { site } from "@/lib/site";
import type { MediaAsset } from "@/lib/media";

export function MediaSlot({
  asset,
  label,
  className = "",
  priority = false,
}: {
  asset: MediaAsset | null;
  label: string;
  className?: string;
  priority?: boolean;
}) {
  if (!asset && !site.showPlaceholders) return null;
  return (
    <figure
      className={`media-slot ${asset ? "has-asset" : "is-pending"} ${className}`}
      data-scroll-media={
        className === "portrait" ? undefined : priority ? "hero" : "ambient"
      }
    >
      <div className="media-frame">
        {asset ? (
          <img
            src={asset.src}
            alt={asset.alt}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            style={{
              objectFit:
                asset.fit ?? (asset.kind === "cad" ? "contain" : "cover"),
            }}
          />
        ) : (
          <div className="color-fill" aria-hidden="true" />
        )}
        <span className="crop-marks" aria-hidden="true" />
      </div>
      {!asset && (
        <figcaption className="placeholder-caption">
          <span>{label}</span>
          <span>Image to follow</span>
        </figcaption>
      )}
      {asset?.kind === "concept" && (
        <figcaption className="media-caption">Concept visualization</figcaption>
      )}
    </figure>
  );
}
