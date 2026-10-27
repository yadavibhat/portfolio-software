"use client";

import { useEffect, useRef } from "react";

/** Counts up from 0 with an ease-out curve. Server HTML already holds the final value. */
export default function Counter({ to, dp = 0 }: { to: number; dp?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const final = to.toFixed(dp);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = final;
      return;
    }
    el.textContent = (0).toFixed(dp);
    let raf = 0;
    let start: number | null = null;
    const run = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / 1600, 1);
      el.textContent = p === 1 ? final : (to * (1 - Math.pow(1 - p, 3))).toFixed(dp);
      if (p < 1) raf = requestAnimationFrame(run);
    };
    const t = window.setTimeout(() => {
      raf = requestAnimationFrame(run);
    }, 700);
    return () => {
      window.clearTimeout(t);
      cancelAnimationFrame(raf);
      el.textContent = final;
    };
  }, [to, dp]);

  return (
    <span ref={ref} suppressHydrationWarning>
      {to.toFixed(dp)}
    </span>
  );
}
