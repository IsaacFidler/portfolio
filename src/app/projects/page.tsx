import type { Metadata } from 'next';
import { selectedWork } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Work — Isaac Fidler',
  description: 'Selected work — six projects, 2023—2026.',
};

export default function WorkPage() {
  return (
    <section className="page" data-page="work">
      <div className="shead">
        <h1 className="rv" style={{ ['--i' as string]: 0 }}>
          Selected
          <br />
          Work
        </h1>
        <span className="n mono mut rv" style={{ ['--i' as string]: 1 }}>
          06 projects
          <br />
          2023—2026
        </span>
      </div>

      <div className="work">
        {selectedWork.map((p, i) => (
          <div
            key={p.num}
            className="row rv"
            style={{ ['--i' as string]: 2 + i }}
          >
            <span className="mono mut">{p.num}</span>
            <span className="t">{p.title}</span>
            <span className="d mono mut">{p.blurb}</span>
            <span className="y mono mut">&apos;{p.year}</span>
          </div>
        ))}
      </div>

      <div className="pgfoot mono mut">
        <span>Work — 02 / 04</span>
        <span>All selected work</span>
      </div>
    </section>
  );
}
