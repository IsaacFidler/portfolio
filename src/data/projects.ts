export interface PersonalProject {
  title: string;
  description: string;
  technologies: string[];
  status: 'Active' | 'Prototype' | 'Personal Tool';
  githubUrl: string;
  icon: string;
  gradient: string;
  screenshot?: string;
}

export interface ProfessionalProject {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  icon: string;
}

// Personal projects
export const personalProjects: PersonalProject[] = [
  {
    title: 'Stems',
    description:
      'Full-stack music project management platform for tracking productions from idea to release. Features Kanban-style boards with customisable stages (Sketch → Polish → Mixing → Mastering → Released), task management with priorities, activity feed, BPM/key/genre metadata, collaborator support, and release grouping.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    status: 'Active',
    githubUrl: 'https://github.com/IsaacFidler',
    icon: '🎹',
    gradient: 'from-purple-500/20 to-pink-500/10',
    screenshot: '/projectImages/stems-home.png',
  },
  {
    title: 'Playlist Purchase',
    description:
      'Spotify integration app that extracts playlist data via OAuth and cross-references tracks with iTunes Store and Discogs marketplace to surface purchase links and vinyl pricing.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Spotify API'],
    status: 'Prototype',
    githubUrl: 'https://github.com/IsaacFidler',
    icon: '🎧',
    gradient: 'from-green-500/20 to-emerald-500/10',
    screenshot: '/projectImages/playlist-purchase-homepage.png',
  },
  {
    title: 'Beat Weaver',
    description:
      'Web-based sampler sequencer for generating randomised drum loops from sample libraries. Enables rapid idea generation for music production workflows.',
    technologies: ['React', 'Web Audio API'],
    status: 'Personal Tool',
    githubUrl: 'https://github.com/IsaacFidler',
    icon: '🥁',
    gradient: 'from-orange-500/20 to-yellow-500/10',
    screenshot: '/projectImages/beatweaver-screenshot.png',
  },
];

// Professional projects at BX
export const professionalProjects: ProfessionalProject[] = [
  {
    title: 'SaaS Platform',
    description:
      'Production-grade Next.js application managing sustainability data for 60,000+ acres. Built geospatial visualisations with Mapbox, complex multi-step form workflows, and optimised Core Web Vitals for performance on rural networks. Served as sole engineer for 4 months during a critical transition, maintaining the entire production ecosystem.',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'GCP', 'Mapbox'],
    icon: '🌱',
  },
  {
    title: 'Core API',
    description:
      'Backend API serving multiple client applications across web and mobile. Designed RESTful endpoints, implemented authentication with Firebase Auth, and managed PostgreSQL migrations. Established CI/CD pipelines deploying NestJS to GCP on every merge, with Sentry monitoring and Slack alerting for production reliability.',
    technologies: ['NestJS', 'PostgreSQL', 'Firebase', 'GCP', 'Terraform'],
    icon: '⚡',
  },
  {
    title: 'Component Library',
    description:
      'Company-wide React component library published to NPM, standardising UI/UX patterns across all products. Built 40+ reusable components with TypeScript and comprehensive Storybook documentation. Significantly reduced frontend development time and ensured consistent design language.',
    technologies: ['React', 'TypeScript', 'Storybook', 'styled-components'],
    icon: '🎨',
  },
  {
    title: 'AI ETL Pipeline',
    description:
      'AI-powered data transformation system using serverless architecture for automated processing of large environmental datasets. Built event-driven workflows with Cloud Pub/Sub and OpenAI API for extracting structured data from unstructured documents.',
    technologies: ['Python', 'GCP', 'OpenAI', 'Terraform', 'Pub/Sub'],
    icon: '🤖',
  },
  {
    title: 'AI Chatbot',
    description:
      'LLM-powered chatbot built by forking and customising the open-source Flowise platform. Enabled users to query documentation, complete tasks, navigate to relevant pages, and upload files through a conversational interface.',
    technologies: ['Flowise', 'OpenAI', 'TypeScript', 'Node.js'],
    icon: '💬',
  },
  {
    title: 'Internal Admin Tools',
    description:
      'Bespoke internal tooling for data uploads, user management, and sandbox environments. Automated manual engineering tasks and streamlined operations for the support and product teams.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Firebase'],
    icon: '🛠️',
  },
];
