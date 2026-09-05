'use client';

import { useEffect, useState } from 'react';

const WORD = 'ISAAC';

export default function HomePage() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setEntered(true)),
    );
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="page" data-page="home">
      <div className="hero">
        <div className="hero-mid" data-mode="off">
          <div className="hcol">
            <p className="lede rv" style={{ ['--i' as string]: 0 }}>
              Isaac - Senior full-stack web developer with five years building products
              end to end. TypeScript, React, Node.js. Tools, platforms, APIs —
              all that good stuff.
            </p>
            <div className="lede-meta mono rv" style={{ ['--i' as string]: 1 }}>
              <span className="mut">Senior Frontend Engineer</span>
              <span className="mut">London</span>
            </div>
          </div>
        </div>

        <div className="rule" />
        <div className="mono mut" style={{ padding: '8px 0 0' }}>
          Portfolio — selected work 2023—2026
        </div>

        <div className="wordwrap">
          <div
            className="blk"
            style={{
              transform: entered ? 'none' : 'scale(0,1)',
              transition: 'transform 1.05s cubic-bezier(.16,1,.3,1) .08s',
            }}
          />
          <div className="word" aria-label={WORD}>
            {[...WORD].map((ch, i) => (
              <span
                key={i}
                className="ch"
                aria-hidden="true"
                style={{
                  transform: entered ? 'none' : 'translateY(105%)',
                  transition: `transform 1.05s cubic-bezier(.16,1,.3,1) ${
                    i * 0.055
                  }s`,
                }}
              >
                {ch}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pgfoot mono mut">
        <span>Index — 01 / 04</span>
        <span>Next: Work →</span>
      </div>
    </section>
  );
}
