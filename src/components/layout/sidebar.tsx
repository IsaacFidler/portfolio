'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const ACCENT = '#FF5B22';

const navTree = [
  {
    group: 'pages',
    items: [
      { id: 'index', label: 'index', href: '/' },
      { id: 'work', label: 'work', href: '/projects' },
      { id: 'about', label: 'about', href: '/about' },
      {
        id: 'cv',
        label: 'cv',
        href: 'https://www.linkedin.com/in/isaac-fidler/',
        external: true,
      },
    ],
  },
  {
    group: 'elsewhere',
    items: [
      {
        id: 'gh',
        label: 'github',
        href: 'https://github.com/IsaacFidler',
        external: true,
      },
      {
        id: 'li',
        label: 'linkedin',
        href: 'https://www.linkedin.com/in/isaac-fidler/',
        external: true,
      },
      {
        id: 'em',
        label: 'email',
        href: 'mailto:zac.fidler2@gmail.com',
        external: true,
      },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [hoverNav, setHoverNav] = useState<string | null>(null);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <aside className="layout-sidebar">
      {/* Logo block */}
      <div style={{ marginBottom: 26 }}>
        <pre
          style={{
            margin: 0,
            fontFamily: 'inherit',
            fontSize: 11,
            lineHeight: 1.05,
            color: 'var(--fg)',
            userSelect: 'none',
          }}
        >{`╭─────────╮\n│  IF/26  │\n╰─────────╯`}</pre>
        <div style={{ fontSize: 11, marginTop: 8, fontWeight: 500, letterSpacing: 0.3 }}>
          Isaac Fidler
        </div>
        <div style={{ fontSize: 10, opacity: 0.55, marginTop: 2 }}>
          full-stack web developer
        </div>
      </div>

      {/* Navigation tree */}
      <nav style={{ fontFamily: 'inherit', fontSize: 12, lineHeight: 1.7 }}>
        {navTree.map((group, gi) => (
          <div key={group.group} style={{ marginBottom: gi < navTree.length - 1 ? 18 : 0 }}>
            <div
              style={{
                fontSize: 10,
                opacity: 0.45,
                letterSpacing: 1.2,
                marginBottom: 4,
              }}
            >
              ── {group.group} ──
            </div>
            {group.items.map((item, i) => {
              const last = i === group.items.length - 1;
              const connector = last ? '└─' : '├─';
              const active = isActive(item.href);
              const hover = hoverNav === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer noopener' : undefined}
                  onMouseEnter={() => setHoverNav(item.id)}
                  onMouseLeave={() => setHoverNav(null)}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 6,
                    textDecoration: 'none',
                    color: 'inherit',
                    padding: '1px 0',
                  }}
                >
                  <span style={{ opacity: 0.4, fontSize: 11 }}>{connector}</span>
                  <span
                    style={{
                      color: active || hover ? ACCENT : 'inherit',
                      width: 10,
                      display: 'inline-block',
                      fontSize: 11,
                    }}
                  >
                    {active ? '◆' : hover ? '◇' : '·'}
                  </span>
                  <span
                    style={{
                      textDecoration: active || hover ? 'underline' : 'none',
                      textUnderlineOffset: 3,
                      textDecorationColor: ACCENT,
                      fontWeight: active ? 500 : 400,
                      flex: 1,
                    }}
                  >
                    {item.label}
                  </span>
                  {item.external && (
                    <span style={{ opacity: 0.4, fontSize: 10 }}>↗</span>
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      <div style={{ flex: 1 }} />

      {/* Status */}
      <div
        style={{
          fontSize: 10,
          opacity: 0.6,
          marginTop: 18,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            background: ACCENT,
            display: 'inline-block',
            animation: 'pulse 1.6s infinite',
          }}
        />
        available · q3 &apos;26
      </div>
      <div style={{ fontSize: 10, opacity: 0.4, marginTop: 4 }}>── © mmxxvi ──</div>
    </aside>
  );
}
