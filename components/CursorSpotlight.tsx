"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/lib/theme";

const EXCLUDE_SELECTOR = 'a, button, input, textarea, select, img, [role="button"], .no-spotlight';
const RADIUS = 63;
const LERP = 0.14;
const RECOMPUTE_DEBOUNCE_MS = 120;
const SHUFFLE_INTERVAL_MS = 650;
const GRID_COLS = 7;
const GRID_ROWS = 7;
const TILE_SIZE = 108;

function isEligible() {
  if (typeof window === "undefined") return false;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const tooNarrow = window.innerWidth < 768;
  return !reducedMotion && !coarsePointer && !tooNarrow;
}

export default function CursorSpotlight() {
  const { theme } = useTheme();
  const [enabled, setEnabled] = useState(false);

  const rootRef = useRef<SVGSVGElement | null>(null);
  const circleRef = useRef<SVGCircleElement | null>(null);
  const cutoutGroupRef = useRef<SVGGElement | null>(null);
  const patternRef = useRef<SVGGElement | null>(null);

  const initialDigits = Array.from({ length: GRID_COLS * GRID_ROWS }, (_, i) => (i % 2 === 0 ? "0" : "1"));

  useEffect(() => {
    const update = () => setEnabled(isEligible());
    update();

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerQuery = window.matchMedia("(pointer: coarse)");
    motionQuery.addEventListener("change", update);
    pointerQuery.addEventListener("change", update);

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(update, RECOMPUTE_DEBOUNCE_MS);
    };
    window.addEventListener("resize", onResize);

    return () => {
      motionQuery.removeEventListener("change", update);
      pointerQuery.removeEventListener("change", update);
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { ...target };

    const onPointerMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    let rafId: number;
    const tick = () => {
      current.x += (target.x - current.x) * LERP;
      current.y += (target.y - current.y) * LERP;

      const root = rootRef.current;
      if (root) {
        root.style.setProperty("--cursor-x", `${current.x}px`);
        root.style.setProperty("--cursor-y", `${current.y}px`);
      }
      if (circleRef.current) {
        circleRef.current.setAttribute("cx", String(current.x));
        circleRef.current.setAttribute("cy", String(current.y));
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const recompute = () => {
      const g = cutoutGroupRef.current;
      if (!g) return;

      const elements = document.querySelectorAll<HTMLElement>(EXCLUDE_SELECTOR);
      const rects: DOMRect[] = [];
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        if (rect.bottom < 0 || rect.top > window.innerHeight || rect.right < 0 || rect.left > window.innerWidth) {
          return;
        }
        rects.push(rect);
      });

      const pad = 4;
      g.innerHTML = rects
        .map(
          (r) =>
            `<rect x="${r.left - pad}" y="${r.top - pad}" width="${r.width + pad * 2}" height="${r.height + pad * 2}" rx="6" fill="black" />`
        )
        .join("");
    };

    let rafId: number | null = null;
    const schedule = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        recompute();
      });
    };

    recompute();
    window.addEventListener("resize", schedule);
    window.addEventListener("scroll", schedule, { passive: true, capture: true });

    const mutationObserver = new MutationObserver(schedule);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener("resize", schedule);
      window.removeEventListener("scroll", schedule, { capture: true });
      mutationObserver.disconnect();
      resizeObserver.disconnect();
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const pattern = patternRef.current;
    if (!pattern) return;
    const nodes = pattern.querySelectorAll("text");

    const shuffle = (count: number) => {
      if (nodes.length === 0) return;
      for (let i = 0; i < count; i++) {
        const node = nodes[Math.floor(Math.random() * nodes.length)];
        node.textContent = Math.random() < 0.5 ? "0" : "1";
      }
    };

    shuffle(nodes.length);
    const interval = setInterval(() => shuffle(2 + Math.floor(Math.random() * 2)), SHUFFLE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [enabled]);

  if (!enabled) return null;

  const isLight = theme === "light";
  const glowColor = isLight ? "#05070d" : "#fff2d9";
  const glowBlend = isLight ? "multiply" : "screen";
  const binaryColor = isLight ? "#1c2028" : "#fdf6e6";

  return (
    <svg
      ref={rootRef}
      aria-hidden="true"
      focusable="false"
      className="pointer-events-none fixed inset-0 z-40"
      width="100%"
      height="100%"
    >
      <defs>
        <radialGradient id="spotlight-gradient">
          <stop offset="0%" stopColor="white" stopOpacity="0.55" />
          <stop offset="45%" stopColor="white" stopOpacity="0.28" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>

        <mask id="spotlight-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
          <rect x="0" y="0" width="100%" height="100%" fill="black" />
          <circle ref={circleRef} cx="-1000" cy="-1000" r={RADIUS} fill="url(#spotlight-gradient)" />
          <g ref={cutoutGroupRef} />
        </mask>

        <pattern id="spotlight-binary" patternUnits="userSpaceOnUse" width={TILE_SIZE} height={TILE_SIZE}>
          <g
            ref={patternRef}
            opacity="0.55"
            fill={binaryColor}
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            fontSize="10"
          >
            {initialDigits.map((digit, i) => {
              const col = i % GRID_COLS;
              const row = Math.floor(i / GRID_COLS);
              return (
                <text key={i} x={6 + col * (TILE_SIZE / GRID_COLS)} y={12 + row * (TILE_SIZE / GRID_ROWS)}>
                  {digit}
                </text>
              );
            })}
          </g>
        </pattern>
      </defs>

      <rect
        width="100%"
        height="100%"
        fill={glowColor}
        mask="url(#spotlight-mask)"
        style={{ mixBlendMode: glowBlend }}
      />
      <rect width="100%" height="100%" fill="url(#spotlight-binary)" mask="url(#spotlight-mask)" />
    </svg>
  );
}
