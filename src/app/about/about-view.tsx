'use client';

import { useEffect, useRef } from 'react';
import { experience } from '@/data/experience';
import { skills } from '@/data/skills';

const STATEMENT =
  'I design and build the whole thing — interface, API, and the infrastructure underneath.';

const SUBLINE = 'TypeScript · React · Next.js · Node.js · PostgreSQL · GCP';

const CAPS = [
  {
    n: '01',
    h: 'Product engineering',
    p: 'React, Next.js and TypeScript from first commit to production. I led production apps at BX for four years — sustainability platforms managing 60,000+ acres — scoping, building and iterating without ceremony.',
    l: ['React', 'Next.js', 'TypeScript', 'Design systems'],
  },
  {
    n: '02',
    h: 'Systems & APIs',
    p: 'Backends that stay boring: predictable schemas, honest error states, and observability from day one. NestJS services on GCP, PostgreSQL migrations, and CI/CD on every merge with Sentry and Slack alerting.',
    l: ['NestJS', 'PostgreSQL', 'GCP', 'Terraform'],
  },
  {
    n: '03',
    h: 'Interface craft',
    p: 'Motion, type and layout treated as engineering concerns. Built a company-wide component library — 40+ components published to NPM with Storybook docs — standardising UI across every product.',
    l: ['React', 'Storybook', 'Accessibility', 'Performance'],
  },
];

const MARQUEE = [...skills, ...skills, ...skills, ...skills];

export function AboutView() {
  const stmtRef = useRef<HTMLDivElement>(null);
  const b1Ref = useRef<HTMLDivElement>(null);
  const b2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => stmtRef.current?.classList.add('in'), 180);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const b1 = b1Ref.current;
    const b2 = b2Ref.current;
    if (!b1 || !b2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let mx = 0;
    let my = 0;
    let sc = 0;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX - window.innerWidth / 2;
      my = e.clientY - window.innerHeight / 2;
    };
    const onScroll = () => {
      sc = window.scrollY;
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('scroll', onScroll, { passive: true });

    const loop = () => {
      const k = 0.02;
      b1.style.transform = `translate3d(${mx * 0.035}px,${
        my * 0.035 - sc * 0.05
      }px,0) rotate(${sc * k}deg)`;
      b2.style.transform = `translate3d(${mx * -0.05}px,${
        my * -0.03 - sc * 0.09
      }px,0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="page" data-page="about">
      <div className="stmt" ref={stmtRef}>
        <div className="blob" ref={b1Ref} />
        <div className="blob b2" ref={b2Ref} />
        <h1 className="stmt-t">
          {STATEMENT.split(' ').map((w, i, arr) => (
            <span key={i}>
              <span className="w">
                <i style={{ transitionDelay: `${i * 0.035}s` }}>{w}</i>
              </span>
              {i < arr.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h1>
        <div className="stmt-sub mono mut rv">{SUBLINE}</div>
      </div>

      <div className="mq" aria-hidden="true">
        <div>
          {MARQUEE.map((item, i) => (
            <span key={i}>
              {item}
              <span className="mut" style={{ paddingLeft: 34 }}>
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="caps">
        {CAPS.map((c, i) => (
          <div className="cap rv" key={c.n} style={{ ['--i' as string]: i }}>
            <span className="mono mut">{c.n}</span>
            <h3>{c.h}</h3>
            <p>{c.p}</p>
            <ul>
              {c.l.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="xp">
        <div className="xp-head">
          <div className="mono mut">/ Experience &amp; background</div>
          <span className="n mono mut">2017 — present</span>
        </div>
        <div className="xp-intro">
          <p>
            Started at Goldsmiths studying Music Computing — programming, audio,
            and creative technology. Built audio visualisers, sequencers, and
            experimental instruments before moving into professional software
            engineering.
          </p>
          <p>
            After CodeWorks bootcamp I joined BX as a software engineer, spending
            four years building web applications for sustainable agriculture. I
            led production apps, built a company-wide component library,
            established CI/CD pipelines, and helped grow the engineering team.
            Now working as a Senior Front End Engineer at a London-based company.
          </p>
        </div>
        {experience.map((e) => (
          <div className="xrow" key={`${e.company}-${e.period}`}>
            <div className="mono mut">{e.period}</div>
            <div>
              <div className="role">{e.title}</div>
              <div className="org mono">{e.company}</div>
              <p>{e.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pgfoot mono mut">
        <span>About — 03 / 04</span>
        <span>Next: Contact →</span>
      </div>
    </section>
  );
}
