"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Scroll-reveal wrapper: fades/slides children in when they enter the viewport.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("in-view");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className ?? ""}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/**
 * Pointer-tracked 3D tilt. Writes --rx/--ry CSS vars on the element.
 */
export function Tilt3D({
  children,
  className,
  max = 7,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--ry", `${px * max * 2}deg`);
    el.style.setProperty("--rx", `${-py * max * 2}deg`);
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} className={`tilt3d ${className ?? ""}`}>
      {children}
    </div>
  );
}

/**
 * Animated counter that counts up when scrolled into view.
 */
export function CountUp({
  value,
  lang,
  duration = 1400,
  className,
}: {
  value: number;
  lang: "fa" | "en";
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const fmt = (n: number) => n.toLocaleString(lang === "fa" ? "fa-IR" : "en-US");

    if (typeof IntersectionObserver === "undefined") {
      el.textContent = fmt(value);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((x) => x.isIntersecting)) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = fmt(Math.round(value * eased));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, lang, duration]);

  return (
    <span ref={ref} className={className}>
      ۰
    </span>
  );
}

/**
 * Floating back-to-top button with a scroll progress ring.
 */
export function BackToTop() {
  const ref = useRef<HTMLButtonElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const btn = ref.current;
    const ring = ringRef.current;
    if (!btn || !ring) return;
    let ticking = false;

    function update() {
      ticking = false;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      btn!.classList.toggle("show", y > 480);
      const p = max > 0 ? y / max : 0;
      ring!.style.setProperty("--progress", `${151 - 151 * p}`);
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="backtop-wrap" dir="ltr">
      <button
        ref={ref}
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="backtop-btn"
      >
        <svg className="ring" width="54" height="54" viewBox="0 0 54 54" aria-hidden>
          <circle ref={ringRef} cx="27" cy="27" r="24" />
        </svg>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
