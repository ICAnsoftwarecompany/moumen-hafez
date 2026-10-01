"use client";

import { CSSProperties, ReactNode, useEffect, useRef } from "react";

type RevealProps = {
  children: ReactNode;
  index?: number;
  className?: string;
};

/**
 * Fade-up-on-scroll wrapper used for repeated section content (cards, list rows).
 *
 * Content is visible in the server HTML. It is only hidden (and then revealed on
 * scroll) after this component has hydrated, via the `reveal-ready` class on
 * <html>. So if JavaScript doesn't run — e.g. Safari older than 16.4, which
 * Next 16 doesn't support — the content still shows instead of staying at
 * opacity 0. Styles live in globals.css; prefers-reduced-motion skips the effect.
 */
export function Reveal({ children, index = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.setAttribute("data-revealed", "");
    // In view, or already scrolled past (a fast flick can skip over an element).
    const reached = () => el.getBoundingClientRect().top < window.innerHeight - 80;

    // Anything already on screen is shown right away, so it never flickers out.
    if (reached()) {
      show();
      document.documentElement.classList.add("reveal-ready");
      return;
    }
    document.documentElement.classList.add("reveal-ready");

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        if (reached()) {
          show();
          stop();
        }
      });
    };
    const stop = () => {
      window.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(frame);
    };

    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return stop;
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      data-reveal=""
      style={{ "--reveal-delay": `${Math.min(index * 0.06, 0.3)}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
