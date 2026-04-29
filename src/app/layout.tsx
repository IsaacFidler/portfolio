import type { Metadata } from 'next';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import '@fontsource/jetbrains-mono/700.css';
import './globals.css';
import { Sidebar } from '@/components/layout/sidebar';
import { MobileNav } from '@/components/layout/mobile-nav';

export const metadata: Metadata = {
  title: 'Isaac Fidler — Full-Stack Developer',
  description:
    'Full-stack developer building scalable web apps with TypeScript, React, and Node.js. 5 years experience, based in London.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Inline script prevents flash of wrong theme on load */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme');if(!t)t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t);})();` }} />
      </head>
      <body>
        <MobileNav />
        <div className="layout-shell">
          <Sidebar />
          <main className="layout-main">{children}</main>
        </div>
      </body>
    </html>
  );
}
