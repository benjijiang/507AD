"use client";

import { useEffect, useRef, useState } from "react";
import { media, robotModel } from "@/lib/media";
import { site } from "@/lib/site";
import { Icon } from "./icon";
import { MediaSlot } from "./media-slot";
import type { ModelElement } from "@/types/model-viewer";

export function RobotViewer() {
  const [mode, setMode] = useState<"poster" | "loading" | "model" | "error">(
    "poster",
  );
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const viewer = useRef<ModelElement>(null);
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    if (stage.current) observer.observe(stage.current);
    return () => {
      query.removeEventListener("change", sync);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (mode !== "model" || !viewer.current) return;
    const element = viewer.current;
    let loaded = false;
    const onLoad = () => {
      loaded = true;
      setMode("model");
    };
    const onError = () => setMode("error");
    const onInteract = () => setInteracted(true);
    element.addEventListener("load", onLoad);
    element.addEventListener("error", onError);
    element.addEventListener("pointerdown", onInteract);
    element.addEventListener("keydown", onInteract);
    const timeout = window.setTimeout(() => {
      if (!loaded) setMode("error");
    }, 30000);
    return () => {
      window.clearTimeout(timeout);
      element.removeEventListener("load", onLoad);
      element.removeEventListener("error", onError);
      element.removeEventListener("pointerdown", onInteract);
      element.removeEventListener("keydown", onInteract);
    };
  }, [mode]);
  useEffect(() => {
    if (viewer.current)
      viewer.current.autoRotate = !reduced && visible && !interacted;
  }, [reduced, visible, interacted, mode]);

  async function loadModel() {
    if (!robotModel) return;
    setMode("loading");
    try {
      await import("@google/model-viewer");
      setMode("model");
    } catch {
      setMode("error");
    }
  }

  if (!robotModel && !media.robotPoster && !site.showPlaceholders) return null;
  return (
    <div className="robot-stage" ref={stage}>
      <dl className="title-block">
        <div>
          <dt>Subject</dt>
          <dd>507-AD robot</dd>
        </div>
        <div>
          <dt>View</dt>
          <dd>{mode === "model" ? "3D model" : "Product view"}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>{site.status}</dd>
        </div>
      </dl>
      {mode === "model" && robotModel ? (
        <model-viewer
          ref={viewer}
          src={robotModel.src}
          poster={media.robotPoster?.src}
          alt="507-AD robot CAD model. Drag to rotate, or use the arrow keys."
          camera-controls
          camera-orbit="35deg 75deg auto"
          min-camera-orbit="auto 45deg auto"
          max-camera-orbit="auto 90deg auto"
          disable-zoom
          shadow-intensity="1"
          environment-image="neutral"
          touch-action="pan-y"
          interaction-prompt="none"
          rotation-per-second="8deg"
          className="model-viewer"
        />
      ) : (
        <MediaSlot
          asset={media.robotPoster}
          label="The robot · Product view"
          className="robot-poster"
        />
      )}
      <div className="robot-toolbar">
        <span aria-live="polite">
          {mode === "error"
            ? "3D unavailable. Showing the static view."
            : mode === "loading"
              ? "Preparing the 3D viewer…"
              : mode === "model"
                ? "Drag to explore · Arrow keys to rotate"
                : robotModel
                  ? "Explore the design in 3D"
                  : media.robotPoster
                    ? "CAD render · Static view"
                    : "Product assets will be added here"}
        </span>
        {robotModel && mode !== "model" && (
          <button
            className="button button-light button-small"
            onClick={loadModel}
            disabled={mode === "loading"}
          >
            {mode === "error" ? "Retry 3D" : "Explore in 3D"}
          </button>
        )}
        {mode === "model" && (
          <div className="viewer-actions">
            <button
              className="button button-light button-small"
              onClick={() => setMode("poster")}
            >
              Static view
            </button>
            <button
              className="button button-light button-small"
              onClick={() => {
                if (viewer.current) {
                  viewer.current.cameraOrbit = "35deg 75deg auto";
                  viewer.current.resetTurntableRotation();
                }
              }}
            >
              <Icon name="reset" />
              Reset view
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
