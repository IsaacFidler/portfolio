import { FadeIn, StaggerChildren } from '@/components/animations';
import { Footer } from '@/components/layout';
import { Navbar } from '@/components/layout';
import { ProjectCard } from '@/components/sections';
import { personalProjects, professionalProjects } from '@/data/projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Isaac Fidler',
  description:
    'Music-tech and full-stack web development projects by Isaac Fidler',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl heading-display mb-4">Projects</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                A collection of music-tech tools and full-stack applications.
                Personal projects are built for musicians and producers;
                professional work demonstrates enterprise-scale development.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Personal Projects - Music Tech (shown first) */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl heading-display mb-4">
                  Music-Tech Projects
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Personal projects exploring the intersection of music
                  production and software development.
                </p>
              </div>
            </FadeIn>

            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {personalProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  githubUrl={project.githubUrl}
                  status={project.status}
                  icon={project.icon}
                  gradient={project.gradient}
                  screenshot={project.screenshot}
                />
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Professional Projects */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl heading-display mb-4">
                  Professional Work
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Enterprise applications built during my time at BX, a
                  sustainable agriculture startup.
                </p>
              </div>
            </FadeIn>

            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {professionalProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                  icon={project.icon}
                  gradient={project.gradient}
                />
              ))}
            </StaggerChildren>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
