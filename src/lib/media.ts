export type MediaAsset = {
  src: string;
  alt: string;
  kind: "cad" | "photo" | "concept" | "video";
  fit?: "contain" | "cover";
  // Document origin and CAD version when adding an asset.
  source: string;
  version?: string;
};

// Add files to public/media, then use paths such as /media/robot-hero.webp.
// null intentionally means no supplied asset. No fictional replacement media.
export const media: Record<
  | "hero"
  | "robotPoster"
  | "robotDetail"
  | "deliveryFlow"
  | "dormLife"
  | "dormEnvironment"
  | "benPortrait"
  | "timmyPortrait"
  | "teamPhoto"
  | "hardwareProgress"
  | "testVideo",
  MediaAsset | null
> = {
  hero: {
    src: "/media/robot-hero.webp",
    alt: "507-AD delivery robot CAD render: a white rounded cargo body with a front display and a vertical lift arm on one side.",
    kind: "cad",
    fit: "cover",
    source: "Team-supplied exterior CAD render (three-quarter view)",
  },
  robotPoster: {
    src: "/media/robot-poster.webp",
    alt: "Low-angle CAD render of the 507-AD robot showing the front display and the lead-screw lift arm with its orange carriage.",
    kind: "cad",
    fit: "cover",
    source: "Team-supplied exterior CAD render (low-angle front view)",
  },
  robotDetail: null,
  deliveryFlow: null,
  dormLife: null,
  dormEnvironment: null,
  benPortrait: null,
  timmyPortrait: null,
  teamPhoto: null,
  hardwareProgress: null,
  testVideo: null,
};

// Parallax layers cut from the hero render (media-source/make-hero-layers.py).
// Regenerate them whenever the hero image changes, or set to null to use the flat image.
export const heroLayers: { backdrop: string; subject: string } | null = {
  backdrop: "/media/robot-hero-backdrop.webp",
  subject: "/media/robot-hero-subject.webp",
};

export const robotModel: {
  src: string;
  version: string;
  source: string;
} | null = null;
