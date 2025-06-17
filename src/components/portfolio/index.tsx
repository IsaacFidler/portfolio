'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import {
  Calendar,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Send,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: 'Farmer App (BX)',
      description:
        'A Next.js application for farmers to digitise operations, track environmental impact, and manage soil carbon credit projects.',
      technologies: ['Next.js', 'TypeScript', 'Firebase', 'GCP'],
      liveUrl: '#',
      githubUrl: 'https://github.com/IsaacFidler',
    },
    {
      title: 'Customer App (BX)',
      description:
        'A React-based dashboard for retailers to monitor farmer performance, yields, and sustainability metrics.',
      technologies: ['React', 'Node.js', 'Mixpanel', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: 'https://github.com/IsaacFidler',
    },
    {
      title: 'Internal Admin Tools (BX)',
      description:
        'Tools for data uploads, user management, and sandbox environments, including a bespoke Material UI component library (NPM package).',
      technologies: ['Material UI', 'NPM', 'Node.js', 'TypeScript'],
      liveUrl: '#',
      githubUrl: 'https://github.com/IsaacFidler',
    },
    {
      title: 'AI-powered ETL Pipeline',
      description:
        'Automated data transformation pipeline using Google Cloud Functions, API Gateway, Pub/Sub, and OpenAI API.',
      technologies: ['GCP', 'API Gateway', 'OpenAI', 'Terraform'],
      liveUrl: '#',
      githubUrl: 'https://github.com/IsaacFidler',
    },
  ];

  const experience = [
    {
      title: 'Software Engineer',
      company: 'BX',
      period: '2021 - Present',
      description:
        'Led development of web and backend applications, built and maintained the core API with the team, built component libraries, optimised performance, integrated third-party APIs, managed cloud infrastructure, and mentored junior engineers.',
    },
    {
      title: 'Music Computing, BSc',
      company: 'Goldsmiths University',
      period: '2017 - 2021',
      description:
        'Studied Music Computing, focusing on creative technology and software development.',
    },
  ];

  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'Material UI',
    'Tailwind',
    'Vercel',
    'GCP',
    'Firebase',
    'Terraform',
    'API Gateway',
    'ETL',
    'Jest',
    'Mixpanel',
    'Sentry',
    'Hotjar',
    'Express.js',
    'NestJS',
    'NPM',
    'Agile',
    'Mentoring',
    'Performance Optimisation',
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="font-bold text-xl">
              <Link href="#home">Isaac Fidler</Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-sm font-medium hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-sm font-medium hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block text-sm font-medium hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-sm font-medium hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center space-y-8">
            <Avatar className="w-32 h-32 md:w-40 md:h-40">
              <AvatarImage
                src="/placeholder.svg?height=160&width=160"
                alt="Isaac Fidler"
              />
              <AvatarFallback className="text-2xl">IF</AvatarFallback>
            </Avatar>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Isaac Fidler
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                Full-stack Web Developer
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Full-stack web developer with a passion for building scalable,
                user-focused applications. Skilled in React, Next.js,
                TypeScript, and Node.js, with strong experience in performance
                optimisation, cloud infrastructure, and front-end architecture.
                At BX, I've led projects across the full stack, mentored junior
                engineers, and played a key role in growing the engineering team
                and culture.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                <Badge variant="secondary">zac.fidler2@gmail.com</Badge>
                <Badge variant="secondary">+44 7368 318988</Badge>
                <Badge variant="secondary">London</Badge>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => scrollToSection('projects')}>
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              experience in web development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" asChild>
                        <Link href={project.liveUrl}>
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button size="sm" variant="ghost" asChild>
                        <Link href={project.githubUrl}>
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                      <Link href={project.liveUrl}>View Project</Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.githubUrl}>GitHub</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn more about my background, experience, and what drives my
              passion for web development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-6">My Story</h3>
              <div className="prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a full-stack web developer based in London, passionate
                  about building scalable, user-focused applications. My
                  expertise spans React, Next.js, TypeScript, Node.js, and cloud
                  infrastructure. At BX, I've led the development of web and
                  mobile apps, built component libraries, and mentored junior
                  engineers. I thrive in agile teams and enjoy solving complex
                  technical challenges.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I have a strong background in web development, front-end &
                  backend architecture, and cloud deployments. I enjoy working
                  with modern JavaScript frameworks and have experience
                  integrating third-party APIs, optimising Core Web Vitals,
                  managing infrastructure as code, and building component
                  libraries.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Experience</h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-6 border-l-2 border-muted"
                  >
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-1"></div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">{exp.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{exp.company}</span>
                        <Separator orientation="vertical" className="h-4" />
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h4 className="font-semibold mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear
              from you. Send me a message and let's create something amazing
              together.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <Badge variant="secondary">zac.fidler2@gmail.com</Badge>
              <Badge variant="secondary">+44 7368 318988</Badge>
              <Badge variant="secondary">London</Badge>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or just say hello!"
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-6">
              <Button variant="ghost" size="sm" asChild>
                <Link
                  href="https://github.com/IsaacFidler"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link
                  href="https://www.linkedin.com/in/isaac-fidler/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="mailto:zac.fidler2@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              <p>
                &copy; {new Date().getFullYear()} Isaac Fidler. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
