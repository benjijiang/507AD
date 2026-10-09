"use client";

import { useEffect, useRef, useState } from "react";
import { navigation, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (event.key !== "Tab") return;
      const items = [
        toggle.current,
        ...Array.from(
          panel.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [],
        ),
      ].filter(Boolean) as HTMLElement[];
      if (event.shiftKey && document.activeElement === items[0]) {
        event.preventDefault();
        items.at(-1)?.focus();
      } else if (!event.shiftKey && document.activeElement === items.at(-1)) {
        event.preventDefault();
        items[0]?.focus();
      }
    };
    const query = window.matchMedia("(min-width: 901px)");
    const resize = () => {
      if (query.matches) setOpen(false);
    };
    document.addEventListener("keydown", close);
    query.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", close);
      query.removeEventListener("change", resize);
    };
  }, [open]);

  return (
    <header className="site-header">
      <a
        href="#home"
        className="wordmark"
        aria-label="507-AD home"
        onClick={() => setOpen(false)}
      >
        507-<span>AD</span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a
        className="button button-small header-cta"
        href={site.meetingUrl ?? "#contact"}
        {...(site.meetingUrl
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        Book a meeting
      </a>
      <button
        ref={toggle}
        className={`menu-toggle ${open ? "is-open" : ""}`}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
      </button>
      <div
        ref={panel}
        className={`mobile-menu ${open ? "is-open" : ""}`}
        id="mobile-menu"
        inert={!open}
      >
        <nav aria-label="Mobile navigation">
          {navigation.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.meetingUrl ?? "#contact"}
            onClick={() => setOpen(false)}
          >
            Book a meeting
          </a>
        </nav>
      </div>
    </header>
  );
}
