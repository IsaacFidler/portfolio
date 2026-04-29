'use client';

import { useEffect, useRef, useState } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#_01';

type ScrambleTextProps = {
  children: string;
  active: boolean;
};

export function ScrambleText({ children, active }: ScrambleTextProps) {
  const text = String(children);
  const [out, setOut] = useState(text);
  const running = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!active) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      running.current = false;
      setOut(text);
      return;
    }

    if (running.current) return;
    running.current = true;

    const speed = 22;
    const duration = Math.ceil(text.length * 1.2);
    const start = performance.now();

    const tick = (now: number) => {
      const frame = Math.floor((now - start) / speed);
      let res = '';
      for (let i = 0; i < text.length; i++) {
        if (frame >= i + 6) {
          res += text[i];
        } else if (frame >= i) {
          res += CHARS[Math.floor(Math.random() * CHARS.length)];
        } else {
          res += text[i] === ' ' ? ' ' : '';
        }
      }
      setOut(res.padEnd(text.length, ' '));
      if (frame < duration) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setOut(text);
        running.current = false;
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      running.current = false;
    };
  }, [active, text]);

  return <span style={{ fontFamily: 'inherit' }}>{out}</span>;
}
