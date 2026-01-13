import { DotOrbit } from '@/components/dot-orbit';
import { GrainOverlay } from '@/components/grain-overlay';
import { ThemeProvider } from '@/components/theme-provider';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import '@fontsource/montserrat/800.css';
import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/600.css';
import '@fontsource/space-grotesk/700.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Isaac Fidler - Full-Stack Developer',
  description:
    'Full-stack developer specializing in React, Next.js, TypeScript, and Node.js. Building scalable web applications with clean code and great UX.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="system">
          <DotOrbit />
          <GrainOverlay />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
