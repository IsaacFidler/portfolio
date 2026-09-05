'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Home, LayoutGrid, User, Mail, type LucideIcon } from 'lucide-react';

const NAV: { label: string; href: string; Icon: LucideIcon }[] = [
  { label: 'Index', href: '/', Icon: Home },
  { label: 'Work', href: '/projects', Icon: LayoutGrid },
  { label: 'About', href: '/about', Icon: User },
  { label: 'Contact', href: '/contact', Icon: Mail },
];

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'dark' : 'light');
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* ignore */
    }
  };

  return (
    <header>
      <Link href="/" className="brand mono">
        <span className="sq" /> Isaac Fidler
      </Link>
      <nav className="mono">
        {NAV.map(({ label, href, Icon }) => (
          <Link
            key={href}
            href={href}
            aria-label={label}
            aria-current={isActive(pathname, href) ? 'page' : undefined}
            className={isActive(pathname, href) ? 'on' : undefined}
          >
            <Icon strokeWidth={1.5} aria-hidden="true" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
      <div className="tools mono">
        <button
          type="button"
          className="theme-btn"
          onClick={toggle}
          aria-label="Toggle colour theme"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
        <span className="mut">©2026</span>
      </div>
    </header>
  );
}
