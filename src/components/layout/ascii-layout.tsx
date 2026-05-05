'use client';

import {
  AsciiCheckbox,
  AsciiList,
  Divider,
  GridShell,
  Panel,
  TextLink,
} from '@/components/ui/ascii-primitives';
import { AsciiField } from '@/components/ascii-field';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useState } from 'react';

const navItems = [
  { href: '/', label: 'Home', token: 'H-1' },
  { href: '/projects', label: 'Projects', token: 'P-1' },
  { href: '/about', label: 'About', token: 'A-1' },
];

export function AsciiLayout({
  title,
  children,
  aside,
}: {
  title: string;
  children: ReactNode;
  aside?: ReactNode;
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const [statusChecked, setStatusChecked] = useState(true);

  const navList = (
    <Panel border="dotted" header="Navigation">
      <AsciiList
        items={navItems.map((item) => ({
          prefix: pathname === item.href ? '[x]' : '[ ]',
          content: (
            <Link href={item.href}>
              <TextLink>{item.label}</TextLink>
            </Link>
          ),
        }))}
      />
    </Panel>
  );

  return (
    <GridShell
      backdrop={<AsciiField />}
      sidebar={
        <>
          {navList}
          <Divider />
          <Panel border="dotted" header="Version">
            <Link href="/classic">
              <TextLink>Show old site version</TextLink>
            </Link>
          </Panel>
          <Divider />
          <Panel border="solid">
            <p>[*] Isaac Fidler</p>
            <p>Full-stack developer based in London.</p>
            <AsciiCheckbox
              id="status"
              label="Available for work"
              checked={statusChecked}
              onChange={setStatusChecked}
            />
          </Panel>
        </>
      }
      mobileHeader={
        <>
          <div style={{ display: 'flex', gap: 14 }}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <TextLink>{item.token}</TextLink>
              </Link>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            style={{ border: 0, borderLeft: '1px dotted var(--ascii-border)', background: 'transparent', font: 'inherit', padding: '8px 12px' }}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          >
            ≡
          </button>
        </>
      }
      mobileMenu={
        menuOpen ? (
          <div id="mobile-nav">
            {navList}
            <div style={{ marginTop: 8 }}>
              <Link href="/classic">
                <TextLink>Show old site version</TextLink>
              </Link>
            </div>
          </div>
        ) : undefined
      }
      main={
        <article>
          <Panel border="solid" header={title}>
            {children}
          </Panel>
        </article>
      }
      tertiary={aside}
    />
  );
}
