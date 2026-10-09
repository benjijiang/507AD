"use client";

import { useEffect, useRef, useState } from "react";
import { deliverySteps } from "@/lib/site";
import { Icon } from "./icon";

export function DeliveryFlow() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const motion = () => {
      setReduced(query.matches);
      if (query.matches) setPlaying(false);
    };
    motion();
    query.addEventListener("change", motion);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );
    if (container.current) observer.observe(container.current);
    return () => {
      query.removeEventListener("change", motion);
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    if (!playing || !visible || reduced) return;
    const timer = window.setInterval(() => {
      if (!document.hidden)
        setStep((value) => (value + 1) % deliverySteps.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [playing, visible, reduced]);

  const select = (index: number) => {
    setStep(index);
    setPlaying(false);
  };
  const current = deliverySteps[step];
  return (
    <div className="delivery-experience" ref={container}>
      <div className="flow-stage">
        <div className="stage-top">
          <span className="eyebrow">ENTRANCE → ROOM</span>
          <span className="interface-label">Interface concept</span>
        </div>
        <div className="journey-line" aria-hidden="true">
          {deliverySteps.map((_, index) => (
            <div
              className={`journey-stop ${index <= step ? "reached" : ""}`}
              key={index}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {index < 2 && <i />}
            </div>
          ))}
        </div>
        <div
          className="delivery-card"
          role="tabpanel"
          id={`flow-panel-${step}`}
          aria-labelledby={`flow-tab-${step}`}
        >
          <div className="delivery-card-icon">
            <Icon
              name={
                step === 0 ? "route" : step === 1 ? "elevator" : "notification"
              }
            />
          </div>
          <div>
            <span className="card-overline">{current.location}</span>
            <h3>{current.state}</h3>
            <p>{current.detail}</p>
          </div>
        </div>
        <div className="stage-bottom">
          <span>Planned delivery experience</span>
          <button
            className="flow-play"
            disabled={reduced}
            aria-label={
              playing
                ? "Pause delivery demonstration"
                : "Play delivery demonstration"
            }
            onClick={() => setPlaying(!playing)}
          >
            <Icon name={playing ? "pause" : "play"} />
            <span>
              {reduced ? "Motion reduced" : playing ? "Pause" : "Play demo"}
            </span>
          </button>
        </div>
      </div>
      <div className="step-tabs" role="tablist" aria-label="Delivery steps">
        {deliverySteps.map((item, index) => (
          <button
            key={item.title}
            ref={(node) => {
              tabs.current[index] = node;
            }}
            className={`step-tab ${step === index ? "active" : ""}`}
            role="tab"
            id={`flow-tab-${index}`}
            aria-selected={step === index}
            aria-controls={step === index ? `flow-panel-${index}` : undefined}
            tabIndex={step === index ? 0 : -1}
            onClick={() => select(index)}
            onKeyDown={(event) => {
              let next: number | undefined;
              if (["ArrowRight", "ArrowDown"].includes(event.key))
                next = (index + 1) % 3;
              if (["ArrowLeft", "ArrowUp"].includes(event.key))
                next = (index + 2) % 3;
              if (event.key === "Home") next = 0;
              if (event.key === "End") next = 2;
              if (next !== undefined) {
                event.preventDefault();
                select(next);
                tabs.current[next]?.focus();
              }
            }}
          >
            <span className="step-number">0{index + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
