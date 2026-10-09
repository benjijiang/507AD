"use client";

import { useEffect, useRef } from "react";

// How far outside the text (px) the cursor starts to light it up.
const REACH = 40;

export function SpotlightText({ children }: { children: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!pointer.matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const update = () => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      const dx = Math.max(rect.left - x, 0, x - rect.right);
      const dy = Math.max(rect.top - y, 0, y - rect.bottom);
      const strength = Math.max(0, 1 - Math.hypot(dx, dy) / REACH);
      element.style.setProperty("--spot-x", `${x - rect.left}px`);
      element.style.setProperty("--spot-y", `${y - rect.top}px`);
      element.style.setProperty("--spot", strength.toFixed(3));
    };
    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onLeave = () => element.style.setProperty("--spot", "0");

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <span ref={ref} className="spotlight-text">
      {children}
      <span className="spotlight-glow" aria-hidden="true">
        {children}
      </span>
    </span>
  );
}
