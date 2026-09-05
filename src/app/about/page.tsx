import type { Metadata } from 'next';
import { AboutView } from './about-view';

export const metadata: Metadata = {
  title: 'About — Isaac Fidler',
  description:
    'From music computing at Goldsmiths to full-stack engineering. 5 years building production systems.',
};

export default function AboutPage() {
  return <AboutView />;
}
