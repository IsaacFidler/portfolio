'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

const RAMP = ' .,:;+*#%@';
const BAYER = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];

function generatePortrait(cols: number, rows: number, t: number): string {
  const L = RAMP.length - 1;
  let out = '';
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const nx = (x / cols) * 2 - 1;
      const ny = (y / rows) * 2 - 1;

      // Portrait silhouette (head + shoulders)
      const headR = Math.sqrt(nx * nx * 2.2 + (ny + 0.2) * (ny + 0.2) * 2.5);
      const shoulders = Math.max(
        0,
        1 - Math.sqrt(nx * nx * 0.8 + Math.max(0, ny - 0.4) * (ny - 0.4) * 4),
      );
      const head = Math.max(0, 1 - headR);
      const mass = Math.max(head, shoulders);

      // Multi-layer diagonal waves at distinct speeds & angles
      const w1 = Math.sin(x * 0.38 + y * 0.55 + t * 2.2) * 0.18;
      const w2 = Math.sin(x * 0.62 - y * 0.30 + t * 1.5) * 0.13;
      const w3 = Math.sin(x * 0.20 + y * 0.78 - t * 1.0) * 0.11;
      const w4 = Math.cos(x * 0.48 + y * 0.42 + t * 1.8) * 0.09;
      const wave = w1 + w2 + w3 + w4;

      let v: number;
      if (mass > 0) {
        // Waves ripple through the portrait's density
        v = 0.3 + mass * 0.6 + wave;
      } else {
        // Animated background field (uses absolute wave so it never goes flat)
        v = 0.05 + Math.abs(wave) * 0.55;
      }

      // Bayer ordered dithering
      const threshold = BAYER[y % 4][x % 4] / 16 - 0.5;
      v = Math.max(0, Math.min(1, v + threshold * 0.12));
      out += RAMP[Math.round(v * L)];
    }
    if (y < rows - 1) out += '\n';
  }
  return out;
}

/** Backward-compat stub — used by the classic ascii-layout backdrop */
export function AsciiField() {
  return null;
}

type AsciiPortraitProps = {
  cols?: number;
  rows?: number;
  fontSize?: number;
};

export function AsciiPortrait({ cols = 60, rows = 38, fontSize = 10 }: AsciiPortraitProps) {
  const [t, setT] = useState(0);
  const lastRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReducedMotion) return;

    let rafId: number;
    lastRef.current = performance.now();

    const loop = (now: number) => {
      setT((prev) => prev + (now - lastRef.current) * 0.001);
      lastRef.current = now;
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const text = useMemo(() => generatePortrait(cols, rows, t), [cols, rows, t]);

  return (
    <pre
      style={{
        fontFamily: "'JetBrains Mono', ui-monospace, monospace",
        fontSize,
        lineHeight: 1,
        margin: 0,
        whiteSpace: 'pre',
        color: 'var(--fg)',
        userSelect: 'none',
        display: 'block',
      }}
    >
      {text}
    </pre>
  );
}
