'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MobileNav() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'index' },
    { href: '/projects', label: 'work' },
    { href: '/about', label: 'about' },
  ];

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="mobile-nav">
      <pre
        style={{
          margin: 0,
          fontFamily: 'inherit',
          fontSize: 10,
          lineHeight: 1,
          userSelect: 'none',
          opacity: 0.8,
        }}
      >
        IF/26
      </pre>
      <nav className="mobile-nav-links">
        {links.map((link) => (
          <Link key={link.href} href={link.href} data-active={isActive(link.href)}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
