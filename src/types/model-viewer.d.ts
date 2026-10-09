import type { DetailedHTMLProps, HTMLAttributes } from "react";

export type ModelElement = HTMLElement & {
  cameraOrbit: string;
  autoRotate: boolean;
  resetTurntableRotation: (theta?: number) => void;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": DetailedHTMLProps<
        HTMLAttributes<ModelElement>,
        ModelElement
      > & {
        src: string;
        poster?: string;
        alt: string;
      };
    }
  }
}
