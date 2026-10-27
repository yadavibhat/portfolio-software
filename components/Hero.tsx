"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Counter from "./Counter";
import { stats } from "@/lib/data";

// Intrinsic size of the filmstrip images used as the lettering fill
const SW = 4992;
const SH = 560;

export default function Hero() {
  const hero = useRef<HTMLElement>(null);
  const nm = useRef<HTMLDivElement>(null);
  const n1 = useRef<HTMLHeadingElement>(null);
  const n3 = useRef<HTMLDivElement>(null);
  const tc = useRef<HTMLElement>(null);

  useEffect(() => {
    const heroEl = hero.current;
    const nmEl = nm.current;
    const a = n1.current;
    const c = n3.current;
    if (!heroEl || !nmEl || !a || !c) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // The cursor "develops" the letters into colour; when idle, the light drifts by itself
    let last = 0;
    const onMove = (e: PointerEvent) => {
      const b = nmEl.getBoundingClientRect();
      nmEl.style.setProperty("--mx", e.clientX - b.left + "px");
      nmEl.style.setProperty("--my", e.clientY - b.top + "px");
      last = performance.now();
    };
    heroEl.addEventListener("pointermove", onMove);

    // Cache size so the animation loop never forces layout
    const size = { w: 1, h: 1 };
    const ro = new ResizeObserver(() => {
      const b = nmEl.getBoundingClientRect();
      size.w = b.width || 1;
      size.h = b.height || 1;
    });
    ro.observe(nmEl);

    // Only animate while the hero is on screen
    let visible = true;
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    });
    io.observe(heroEl);

    let raf = 0;
    const pan = (t: number) => {
      if (visible) {
        const w = (SW * size.h) / SH;
        const x = reduce ? 0 : -((t * 0.04) % w);
        a.style.backgroundPositionX = x + "px";
        c.style.backgroundPositionX = x + "px";
        if (!reduce && t - last > 2500) {
          nmEl.style.setProperty("--mx", size.w * (0.5 + 0.38 * Math.sin(t / 2600)) + "px");
          nmEl.style.setProperty("--my", size.h * (0.5 + 0.2 * Math.cos(t / 3100)) + "px");
        }
      }
      raf = requestAnimationFrame(pan);
    };
    raf = requestAnimationFrame(pan);

    // Camera timecode (HH:MM:SS:FF at 25 fps)
    let timer = 0;
    if (!reduce) {
      const pad = (n: number) => String(n).padStart(2, "0");
      timer = window.setInterval(() => {
        const ms = performance.now();
        const s = (ms / 1000) | 0;
        const f = ((ms / 40) | 0) % 25;
        if (tc.current) tc.current.textContent = `00:${pad(((s / 60) | 0) % 60)}:${pad(s % 60)}:${pad(f)}`;
      }, 40);
    }

    return () => {
      heroEl.removeEventListener("pointermove", onMove);
      ro.disconnect();
      io.disconnect();
      cancelAnimationFrame(raf);
      window.clearInterval(timer);
    };
  }, []);

  return (
    <section id="hero" ref={hero}>
      <div className="hud mono">
        <span className="recd">
          <i />
          REC <b ref={tc} suppressHydrationWarning>00:00:00:00</b>
        </span>
        <span>AF-S · 1/250 · ƒ/1.8 · ISO 400</span>
      </div>
      <i className="cb c1" />
      <i className="cb c2" />
      <i className="cb c3" />
      <i className="cb c4" />
      <div className="wrap">
        <div className="mono top">Software engineering · Computer Science, NMIT Bengaluru · Class of 2028</div>
        <div className="nm" ref={nm}>
          <h1 className="n2" ref={n1}>
            Yadavi Bhat
          </h1>
          <div className="n2 col" ref={n3} aria-hidden="true">
            Yadavi Bhat
          </div>
        </div>
        <div className="low">
          <div>
            <p className="sub">
              I build full-stack and AI-driven systems from first prototype to deployment, lead student engineering
              teams, and document the work so others can use it. Currently seeking a Software Engineering internship.
            </p>
            <div className="mono hint">↳ Move your cursor: the letters develop into colour</div>
          </div>
          <div className="meta">
            {stats.map((s) => (
              <div className="mono" key={s.label}>
                {s.label}
                <b>
                  <Counter to={s.n} dp={s.d ?? 0} />
                </b>
              </div>
            ))}
          </div>
          <figure className="pol">
            <Image src="/images/portrait.jpg" alt="Portrait of Yadavi Bhat" width={304} height={304} priority />
            <figcaption className="mono">Yadavi Bhat · Bengaluru</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
