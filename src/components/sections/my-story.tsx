'use client';

import { FadeIn } from '@/components/animations';

export function MyStory() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl heading-display mb-8">My Story</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey into software began at Goldsmiths, University of
                London, where I studied Music Computing — a degree that combined
                my love for music production with programming and creative
                technology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Goldsmiths, I learned to think about software differently: as
                a creative medium, not just a tool. I built audio visualisers,
                sequencers, and experimental instruments while developing a solid
                foundation in computer science.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                After graduating, I attended CodeWorks — an intensive web
                development bootcamp where I honed my skills in modern JavaScript
                frameworks, full-stack development, and industry best practices.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I then joined BX as a Software Engineer, where I spent three
                years building web applications for sustainable agriculture. I
                led the development of farmer-facing apps, built our core API
                with the team, created component libraries, and helped grow the
                engineering culture.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, I'm channelling my energy back into music-tech. My
                personal projects — Stems, Playlist Purchase, and Beat Weaver —
                reflect my belief that the best tools for musicians are built by
                people who understand both the code and the creative process.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
