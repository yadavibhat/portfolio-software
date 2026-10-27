"use client";

import { useEffect, useRef } from "react";

/**
 * Page-wide behaviour: intro iris, scroll progress bar, custom cursor reticle,
 * scroll-reveal for every `.r` element, and removal of the `pre` intro state.
 * All DOM work lives in one effect so server-rendered sections stay static.
 */
export default function Effects() {
  const iris = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const ret = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    // 1. Iris intro: hide it once finished (or immediately if it already ran before hydration)
    const ir = iris.current;
    if (ir) {
      const hide = () => {
        ir.style.display = "none";
      };
      if (reduce) {
        hide();
      } else {
        const anims = typeof ir.getAnimations === "function" ? ir.getAnimations() : [];
        if (anims.length && anims.every((a) => a.playState === "finished")) {
          hide();
        } else {
          ir.addEventListener("animationend", hide, { once: true });
          const t = window.setTimeout(hide, 2800); // safety net
          cleanups.push(() => window.clearTimeout(t));
        }
      }
    }

    // 2. Release the intro state so the name, portrait and frame corners animate in
    let raf = requestAnimationFrame(() => {
      const t = window.setTimeout(() => document.body.classList.remove("pre"), 120);
      cleanups.push(() => window.clearTimeout(t));
    });
    cleanups.push(() => cancelAnimationFrame(raf));

    // 3. Scroll progress bar
    const b = bar.current;
    const onScroll = () => {
      if (!b) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      b.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    });

    // 4. Cursor reticle (mouse and pen only), grows over links, figures and projects
    const r = ret.current;
    const onMove = (e: PointerEvent) => {
      if (!r || e.pointerType === "touch") return;
      r.classList.add("on");
      r.style.left = e.clientX + "px";
      r.style.top = e.clientY + "px";
      const t = e.target as Element | null;
      r.classList.toggle("b2", !!t?.closest?.("a,figure,.proj"));
    };
    const onLeave = () => r?.classList.remove("on");
    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("pointerleave", onLeave);
    cleanups.push(() => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    });

    // 5. Scroll-reveal
    const els = Array.from(document.querySelectorAll<HTMLElement>(".r"));
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((x) => {
            if (x.isIntersecting) {
              x.target.classList.add("in");
              io.unobserve(x.target);
            }
          }),
        { threshold: 0.1 }
      );
      els.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <>
      <div id="iris" ref={iris} />
      <div id="bar" ref={bar} />
      <div id="ret" ref={ret} />
    </>
  );
}
