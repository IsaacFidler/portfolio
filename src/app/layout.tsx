import type { Metadata } from 'next';
import '@fontsource-variable/archivo';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import './globals.css';
import { Header } from '@/components/layout/header';

export const metadata: Metadata = {
  title: 'Isaac Fidler — Full-Stack Developer',
  description:
    'Full-stack developer building scalable web apps with TypeScript, React, and Node.js. 5 years experience, based in London.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Inline script prevents flash of wrong theme on load */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='dark'&&t!=='light')t='light';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`,
          }}
        />
      </head>
      <body>
        <div id="grid" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
