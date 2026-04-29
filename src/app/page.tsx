'use client';

import { AsciiPortrait } from '@/components/ascii-field';
import { ScrambleText } from '@/components/ui/scramble-text';
import { useState } from 'react';

const ACCENT = '#FF5B22';

const selectedWork = [
  { num: '01', title: 'Stems',            blurb: 'music project management · next.js/supabase', year: '25' },
  { num: '02', title: 'Playlist Purchase', blurb: 'spotify × vinyl pricing · typescript',        year: '25' },
  { num: '03', title: 'Beat Weaver',      blurb: 'web sampler sequencer · react/web audio',      year: '24' },
  { num: '04', title: 'SaaS Platform',    blurb: 'sustainability data · 60k+ acres',             year: '25' },
  { num: '05', title: 'Core API',         blurb: 'nestjs backend · gcp/postgresql',              year: '24' },
  { num: '06', title: 'Component Lib',    blurb: '40+ components · npm published',               year: '23' },
];

export default function HomePage() {
  const [focusCard, setFocusCard] = useState<string | null>(null);

  return (
    <div className="hero-outer">
      {/* Hero */}
      <div className="hero-grid">
        {/* Hero text */}
        <div>
          <div style={{ fontSize: 10, letterSpacing: 1.4, opacity: 0.55, marginBottom: 18 }}>
            ──── PORTFOLIO · 2026 EDITION ────
          </div>

          <h1 className="hero-h1">
            <div>I build</div>
            <div>
              software{' '}
              <span style={{ color: ACCENT, fontStyle: 'italic' }}>for</span>
            </div>
            <div className="hero-sub">the people who use it.</div>
          </h1>

          <div style={{ marginTop: 32, fontSize: 13, lineHeight: 1.55, maxWidth: 440, opacity: 0.8 }}>
            Isaac, full-stack web developer with 5 years of experience —{' '}
            <span style={{ color: ACCENT }}>TypeScript</span>,{' '}
            <span style={{ color: ACCENT }}>React</span>,{' '}
            <span style={{ color: ACCENT }}>Node.js</span>. I build tools,
            platforms, and APIs that don&apos;t waste your time.
          </div>

          <div style={{ marginTop: 28, display: 'flex', gap: 16, alignItems: 'center', fontSize: 12, flexWrap: 'wrap' }}>
            <a href="/projects" className="btn-primary">
              VIEW WORK{' '}
              <span style={{ color: ACCENT, animation: 'blink 1.06s step-end infinite' }}>▊</span>
            </a>
            <a href="mailto:zac.fidler2@gmail.com" className="btn-secondary">
              ↳ zac.fidler2@gmail.com
            </a>
          </div>
        </div>

        {/* ASCII dither portrait — hidden on tablet/mobile via CSS */}
        <div className="hero-portrait">
          <AsciiPortrait cols={60} rows={38} fontSize={10} />
          <div className="dither-label" style={{
            position: 'absolute', top: 8, left: 10, fontSize: 9, opacity: 0.55,
            letterSpacing: 1, padding: '2px 6px',
          }}>
            DITHER · SRC: PORTRAIT_00
          </div>
          <div style={{ position: 'absolute', bottom: 8, right: 10, fontSize: 9, opacity: 0.55 }}>
            60×38 · 10pt · bayer
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="work-divider">
        <div style={{ borderTop: '1px dashed var(--border-dashed)', width: '100%', opacity: 0.5 }} />
      </div>

      {/* Selected Work */}
      <div className="work-section">
        <div style={{ fontSize: 10, opacity: 0.5, letterSpacing: 1.2, marginBottom: 16 }}>
          /SELECTED WORK ————
        </div>
        <div className="work-grid">
          {selectedWork.map((p) => {
            const focused = focusCard === p.num;
            return (
              <div
                key={p.num}
                className="project-card"
                data-focused={focused}
                onMouseEnter={() => setFocusCard(p.num)}
                onMouseLeave={() => setFocusCard(null)}
                style={{ padding: '14px 16px' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, opacity: 0.6, letterSpacing: 1 }}>
                  <span>PROJ.{p.num}</span>
                  <span>&apos;{p.year}</span>
                </div>
                <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: -0.8, marginTop: 4 }}>
                  <ScrambleText active={focused}>{p.title}</ScrambleText>
                </div>
                <div style={{ fontSize: 11, opacity: focused ? 0.8 : 0.65, marginTop: 4 }}>
                  {p.blurb}
                </div>
                {focused && (
                  <a href="/projects" style={{ position: 'absolute', top: 12, right: 16, color: ACCENT, fontSize: 14 }}>
                    →
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
