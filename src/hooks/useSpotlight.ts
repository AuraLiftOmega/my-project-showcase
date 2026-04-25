import { useEffect, useRef } from "react";

/**
 * Adds spotlight cursor + parallax tilt to elements with [data-spotlight].
 * Throttled with rAF, no library dependency.
 */
export const useSpotlight = () => {
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        raf.current = null;
        const els = document.querySelectorAll<HTMLElement>("[data-spotlight]");
        els.forEach((el) => {
          const r = el.getBoundingClientRect();
          const x = e.clientX - r.left;
          const y = e.clientY - r.top;
          el.style.setProperty("--mx", `${x}px`);
          el.style.setProperty("--my", `${y}px`);
        });
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
};
