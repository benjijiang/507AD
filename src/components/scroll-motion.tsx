"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollMotion() {
  useEffect(() => {
    const root = document.getElementById("main");
    if (!root) return;
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    let disposed = false;
    let refreshFrame = 0;

    media.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        desktop:
          "(min-width: 1000px) and (min-height: 740px) and (hover: hover) and (pointer: fine)",
      },
      (context) => {
        const { motion, desktop } = context.conditions!;
        if (!motion) return;
        root.dataset.scrollMotion = desktop ? "desktop" : "light";
        const scope = gsap.context(() => {
          root
            .querySelectorAll<HTMLElement>("[data-scroll-reveal]")
            .forEach((element) => {
              gsap.fromTo(
                element,
                { y: desktop ? 28 : 14, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 1.1,
                  ease: "expo.out",
                  clearProps: "transform,opacity",
                  scrollTrigger: {
                    trigger: element,
                    start: "top 92%",
                    once: true,
                  },
                },
              );
            });
          root
            .querySelectorAll<HTMLElement>("[data-scroll-stagger]")
            .forEach((group) => {
              gsap.fromTo(
                Array.from(group.children),
                { y: desktop ? 26 : 12, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 1.05,
                  stagger: 0.09,
                  ease: "expo.out",
                  clearProps: "transform,opacity",
                  scrollTrigger: {
                    trigger: group,
                    start: "top 92%",
                    once: true,
                  },
                },
              );
            });
          const closing = root.querySelector<HTMLElement>("[data-scroll-mask]");
          if (closing)
            gsap.fromTo(
              closing,
              { clipPath: "inset(0% 0% 100% 0%)", y: 18 },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                y: 0,
                duration: 0.95,
                ease: "power3.out",
                clearProps: "clipPath,transform",
                scrollTrigger: {
                  trigger: closing,
                  start: "top 90%",
                  once: true,
                },
              },
            );

          // Touch gets simple entrances; desktop adds continuous scroll-linked motion.
          if (!desktop) return;
          const hero = root.querySelector<HTMLElement>(".hero");
          const visual = root.querySelector<HTMLElement>(".hero-visual");
          const copy = root.querySelector<HTMLElement>(".hero-copy");
          if (hero && visual)
            gsap.to(visual, {
              y: 46,
              scale: 0.98,
              ease: "none",
              scrollTrigger: {
                trigger: hero,
                start: "top top",
                end: "bottom top",
                scrub: 0.6,
              },
            });
          if (hero && copy)
            gsap.to(copy, {
              y: -28,
              ease: "none",
              scrollTrigger: {
                trigger: hero,
                start: "top top",
                end: "bottom top",
                scrub: 0.6,
              },
            });

          root
            .querySelectorAll<HTMLElement>(
              '[data-scroll-media="ambient"] .media-frame',
            )
            .forEach((frame) => {
              if (
                frame.closest(".robot-pin-stage") ||
                frame.closest(".portrait")
              )
                return;
              const content =
                frame.querySelector<HTMLElement>("img,.color-fill");
              if (content)
                gsap.fromTo(
                  content,
                  { y: -20, scale: 1.12 },
                  {
                    y: 20,
                    scale: 1.12,
                    ease: "none",
                    scrollTrigger: {
                      trigger: frame,
                      start: "top bottom",
                      end: "bottom top",
                      scrub: 0.7,
                    },
                  },
                );
            });

          const layout = root.querySelector<HTMLElement>(
            ".robot-scroll-layout",
          );
          const stage = root.querySelector<HTMLElement>(".robot-pin-stage");
          if (
            layout &&
            stage &&
            stage.offsetHeight < window.innerHeight - 136 &&
            layout.offsetHeight > stage.offsetHeight + 80
          ) {
            ScrollTrigger.create({
              id: "507-ad-robot-pin",
              trigger: stage,
              pin: stage,
              pinSpacing: false,
              start: "top 112px",
              end: () =>
                `+=${Math.max(1, layout.offsetHeight - stage.offsetHeight)}`,
              invalidateOnRefresh: true,
              anticipatePin: 1,
            });
          }
          root
            .querySelectorAll<HTMLElement>("[data-scroll-feature]")
            .forEach((feature) => {
              gsap.fromTo(
                feature,
                { y: 18 },
                {
                  y: 0,
                  ease: "none",
                  scrollTrigger: {
                    trigger: feature,
                    start: "top 85%",
                    end: "top 45%",
                    scrub: 0.4,
                  },
                },
              );
              ScrollTrigger.create({
                trigger: feature,
                start: "top 60%",
                end: "bottom 60%",
                toggleClass: { targets: feature, className: "is-current" },
              });
            });
        }, root);
        return () => {
          scope.revert();
          delete root.dataset.scrollMotion;
          root
            .querySelectorAll(".is-current")
            .forEach((element) => element.classList.remove("is-current"));
        };
      },
    );

    // Font/image changes can alter trigger positions. Observe dimensions, never
    // scroll positions; this does not create a perpetual animation loop.
    const refresh = () => {
      if (disposed || refreshFrame) return;
      refreshFrame = requestAnimationFrame(() => {
        refreshFrame = 0;
        if (!disposed) ScrollTrigger.refresh();
      });
    };
    void document.fonts.ready.then(refresh);
    const sizes = new WeakMap<Element, string>();
    const observer = new ResizeObserver((entries) => {
      let changed = false;
      for (const entry of entries) {
        const size = `${Math.round(entry.contentRect.width)}:${Math.round(entry.contentRect.height)}`;
        if (sizes.get(entry.target) !== size) {
          sizes.set(entry.target, size);
          changed = true;
        }
      }
      if (changed) refresh();
    });
    root
      .querySelectorAll(".robot-scroll-layout,.robot-pin-stage")
      .forEach((element) => observer.observe(element));
    return () => {
      disposed = true;
      observer.disconnect();
      cancelAnimationFrame(refreshFrame);
      media.revert();
    };
  }, []);
  return null;
}
