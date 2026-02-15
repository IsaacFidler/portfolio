import { AsciiLayout } from '@/components/layout/ascii-layout';
import {
  AsciiList,
  Button,
  Divider,
  Panel,
  TextLink,
} from '@/components/ui/ascii-primitives';
import { experience } from '@/data/experience';
import { skills } from '@/data/skills';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About - Isaac Fidler',
  description:
    'From music computing at Goldsmiths to full-stack development. Learn about my journey.',
};

export default function AboutPage() {
  return (
    <AsciiLayout title="About">
      <h2>My Story</h2>
      <p>
        My journey into software began at Goldsmiths, University of London,
        where I studied Music Computing — a degree that combined my love for
        music production with programming and creative technology.
      </p>
      <p>
        At Goldsmiths, I learned to think about software differently: as a
        creative medium, not just a tool. I built audio visualisers,
        sequencers, and experimental instruments while developing a solid
        foundation in computer science.
      </p>
      <p>
        After graduating, I attended CodeWorks — an intensive web development
        bootcamp where I honed my skills in modern JavaScript frameworks,
        full-stack development, and industry best practices.
      </p>
      <p>
        I then joined BX as a Software Engineer, where I spent four years
        building web applications for sustainable agriculture. I led the
        development of farmer-facing apps, built our core API with the team,
        created component libraries, and helped grow the engineering culture.
      </p>
      <p>
        Today, I'm building full-stack applications across different domains.
        My personal projects explore creative tools for musicians, but I'm
        equally excited by any technically challenging problem that lets me
        ship quality software.
      </p>

      <Divider />
      <h2>Experience</h2>
      <AsciiList
        items={experience.map((entry) => ({
          prefix: '[*]',
          content: (
            <>
              <strong>{entry.title}</strong> · {entry.company} · {entry.period}
              <br />
              <span style={{ color: 'var(--ascii-muted)' }}>{entry.description}</span>
            </>
          ),
        }))}
      />

      <Divider />
      <h2>Skills</h2>
      <p>{skills.join(' · ')}</p>

      <Divider />
      <h2>Get In Touch</h2>
      <p>
        Have a project in mind or want to collaborate? I'd love to hear from
        you. Send me a message and let's create something amazing together.
      </p>
      <AsciiList
        items={[
          { prefix: '→', content: 'zac.fidler2@gmail.com' },
          { prefix: '→', content: '+44 7368 318988' },
          { prefix: '→', content: 'London' },
        ]}
      />

      <Panel border="dotted" header="Send me a message">
        <p>
          Fill out the form below and I'll get back to you as soon as possible.
        </p>
        <form
          action="https://formsubmit.co/zac.fidler2@gmail.com"
          method="POST"
          style={{ display: 'grid', gap: 12 }}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="New message from portfolio site"
          />
          <label htmlFor="name">Name</label>
          <input id="name" name="name" placeholder="Your name" />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project or just say hello!"
            rows={6}
          />
          <Button type="submit">Send Message</Button>
        </form>
      </Panel>

      <Divider />
      <p>
        <Link href="https://github.com/IsaacFidler" target="_blank" rel="noreferrer noopener">
          <TextLink>GitHub</TextLink>
        </Link>{' '}
        ·{' '}
        <Link href="https://www.linkedin.com/in/isaac-fidler/" target="_blank" rel="noreferrer noopener">
          <TextLink>LinkedIn</TextLink>
        </Link>
      </p>
    </AsciiLayout>
  );
}
