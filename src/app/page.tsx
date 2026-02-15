import { AsciiLayout } from '@/components/layout/ascii-layout';
import { AsciiList, Button, Divider, Panel } from '@/components/ui/ascii-primitives';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <AsciiLayout
      title="Home"
      aside={
        <Panel border="dotted" header="Contact">
          <AsciiList
            items={[
              { prefix: '→', content: 'zac.fidler2@gmail.com' },
              { prefix: '→', content: '+44 7368 318988' },
              { prefix: '→', content: 'London' },
            ]}
          />
        </Panel>
      }
    >
      <div style={{ display: 'grid', gap: 24 }}>
        <Image
          src="/isaacAvatarImage.JPG"
          alt="Isaac Fidler"
          width={128}
          height={128}
          style={{ objectFit: 'cover', border: '1px dotted var(--ascii-border)' }}
        />

        <section>
          <h1>Isaac Fidler</h1>
          <p style={{ color: 'var(--ascii-muted)' }}>Full-Stack Developer</p>
          <p>
            Full-stack developer with a background in music computing. I build
            scalable web applications with a focus on clean code, great UX, and
            solving real problems. Passionate about shipping quality software.
          </p>
          <Divider />
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/projects">
              <Button>View My Work</Button>
            </Link>
            <Link href="/about">
              <Button>About Me</Button>
            </Link>
          </div>
        </section>
      </div>
    </AsciiLayout>
  );
}
