'use client';

import { ScrambleText } from '@/components/ui/scramble-text';
import { personalProjects, professionalProjects } from '@/data/projects';
import { useState } from 'react';

const ACCENT = '#FF5B22';

const cardBase = {
  padding: '18px 20px',
  borderBottom: '1px dashed var(--border-dashed)',
  borderRight: '1px dashed var(--border-dashed)',
};

export default function ProjectsPage() {
  const [focusPro, setFocusPro] = useState<string | null>(null);
  const [focusPersonal, setFocusPersonal] = useState<string | null>(null);

  return (
    <div className="page-content">
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 10, letterSpacing: 1.4, opacity: 0.55, marginBottom: 18 }}>
          ──── ALL WORK · 2026 ────
        </div>
        <h1 className="hero-h1">
          <div>Selected</div>
          <div>
            projects{' '}
            <span style={{ color: ACCENT, fontStyle: 'italic' }}>&amp;</span>
          </div>
          <div className="hero-sub">professional work.</div>
        </h1>
        <p style={{ marginTop: 20, fontSize: 13, lineHeight: 1.55, maxWidth: 520, opacity: 0.7 }}>
          Five years of full-stack engineering across sustainability tech, creative
          tools, and developer infrastructure. Below is a mix of production systems
          and personal projects.
        </p>
      </div>

      <div style={{ borderTop: '1px dashed var(--border-dashed)', opacity: 0.5, marginBottom: 28 }} />

      {/* Professional Work */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 10, opacity: 0.5, letterSpacing: 1.2, marginBottom: 16 }}>
          /PROFESSIONAL WORK · BX (2022–2025) ————
        </div>
        <div className="projects-pro-grid">
          {professionalProjects.map((p) => {
            const focused = focusPro === p.title;
            return (
              <div
                key={p.title}
                className="project-card"
                data-focused={focused}
                onMouseEnter={() => setFocusPro(p.title)}
                onMouseLeave={() => setFocusPro(null)}
                style={cardBase}
              >
                <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: -0.5, marginBottom: 8 }}>
                  <ScrambleText active={focused}>{p.title}</ScrambleText>
                </div>
                <p style={{ fontSize: 12, lineHeight: 1.55, opacity: focused ? 0.85 : 0.65, margin: '0 0 12px' }}>
                  {p.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, fontSize: 10, letterSpacing: 0.5 }}>
                  {p.technologies.map((tech) => (
                    <span key={tech} className="tech-tag" style={{ opacity: 0.7, border: '1px solid var(--border)', padding: '2px 6px' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ borderTop: '1px dashed var(--border-dashed)', opacity: 0.5, marginBottom: 28 }} />

      {/* Personal Projects */}
      <div>
        <div style={{ fontSize: 10, opacity: 0.5, letterSpacing: 1.2, marginBottom: 16 }}>
          /PERSONAL PROJECTS ————
        </div>
        <div className="projects-personal-grid">
          {personalProjects.map((p) => {
            const focused = focusPersonal === p.title;
            return (
              <div
                key={p.title}
                className="project-card"
                data-focused={focused}
                onMouseEnter={() => setFocusPersonal(p.title)}
                onMouseLeave={() => setFocusPersonal(null)}
                style={cardBase}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, opacity: 0.55, letterSpacing: 1, marginBottom: 6 }}>
                  <span>{p.status.toUpperCase()}</span>
                  <a href={p.githubUrl} target="_blank" rel="noreferrer noopener" style={{ opacity: 0.7, color: 'inherit' }}>
                    gh ↗
                  </a>
                </div>
                <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: -0.5, marginBottom: 8 }}>
                  <ScrambleText active={focused}>{p.title}</ScrambleText>
                </div>
                <p style={{ fontSize: 12, lineHeight: 1.55, opacity: focused ? 0.85 : 0.65, margin: '0 0 12px' }}>
                  {p.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, fontSize: 10 }}>
                  {p.technologies.map((tech) => (
                    <span key={tech} className="tech-tag" style={{ opacity: 0.7, border: '1px solid var(--border)', padding: '2px 6px' }}>
                      {tech}
                    </span>
                  ))}
                </div>
                {focused && (
                  <div style={{ position: 'absolute', top: 14, right: 16, color: ACCENT, fontSize: 14 }}>◆</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
