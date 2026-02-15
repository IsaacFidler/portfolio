import '@fontsource/jetbrains-mono/400.css';
import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
