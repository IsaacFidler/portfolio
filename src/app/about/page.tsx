import { Footer, Navbar } from '@/components/layout';
import {
  ContactForm,
  ExperienceTimeline,
  MyStory,
  SkillsGrid,
} from '@/components/sections';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Isaac Fidler',
  description:
    'From music computing at Goldsmiths to full-stack development. Learn about my journey.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <MyStory />
        <ExperienceTimeline />
        <SkillsGrid />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
