import { AsciiLayout } from '@/components/layout/ascii-layout';
import {
  AsciiList,
  Divider,
  Panel,
  TextLink,
} from '@/components/ui/ascii-primitives';
import { personalProjects, professionalProjects } from '@/data/projects';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects - Isaac Fidler',
  description:
    'Full-stack web development projects by Isaac Fidler - enterprise applications and personal projects.',
};

export default function ProjectsPage() {
  return (
    <AsciiLayout title="Projects">
      <p>
        A collection of full-stack applications spanning enterprise development
        and personal projects. From production systems to creative tools.
      </p>

      <Divider />

      <h2>Professional Work</h2>
      <p>
        Enterprise applications built during my time at BX, a sustainable
        agriculture startup.
      </p>

      <div style={{ display: 'grid', gap: 16 }}>
        {professionalProjects.map((project) => (
          <Panel key={project.title} border="dotted" header={`${project.icon} ${project.title}`}>
            <p>{project.description}</p>
            <AsciiList
              items={project.technologies.map((technology) => ({
                prefix: '[*]',
                content: technology,
              }))}
            />
          </Panel>
        ))}
      </div>

      <Divider />

      <h2>Personal Projects</h2>
      <p>
        Side projects exploring different ideas and technologies, with a focus
        on creative tools for musicians.
      </p>

      <div style={{ display: 'grid', gap: 16 }}>
        {personalProjects.map((project) => (
          <Panel key={project.title} border="solid" header={`${project.icon} ${project.title}`}>
            {project.screenshot ? (
              <Image
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                width={800}
                height={420}
                style={{ width: '100%', height: 'auto', border: '1px dotted var(--ascii-border)' }}
              />
            ) : null}
            <p>{project.description}</p>
            <p>Status: {project.status}</p>
            <AsciiList
              items={project.technologies.map((technology) => ({
                prefix: '→',
                content: technology,
              }))}
            />
            <Link href={project.githubUrl} target="_blank" rel="noreferrer noopener">
              <TextLink>Source Code</TextLink>
            </Link>
          </Panel>
        ))}
      </div>
    </AsciiLayout>
  );
}
