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
  liveUrl: string;
  githubUrl: string;
  icon: string;
  gradient: string;
  screenshot?: string;
}

// Personal music-tech projects - shown first
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
  },
];

// Professional projects - shown second
export const professionalProjects: ProfessionalProject[] = [
  {
    title: 'Farmer App (BX)',
    description:
      'Next.js application enabling farmers to digitise operations and track environmental impact. Optimised Core Web Vitals for performance on rural networks. Worked with geospatial data visualisation (Mapbox), complex multi-step form workflows, and data processing.',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'GCP', 'Mapbox'],
    liveUrl: '#',
    githubUrl: 'https://github.com/IsaacFidler',
    icon: '🌱',
    gradient: 'from-green-600/20 to-lime-500/10',
  },
  {
    title: 'API (BX)',
    description:
      'Core backend API serving multiple client applications across web and mobile. Contributed to designing RESTful endpoints, implementing authentication flows with Firebase Auth, and managing PostgreSQL migrations. Set up CI/CD pipelines with GitHub Actions and infrastructure-as-code with Terraform for reproducible deployments.',
    technologies: ['Node.js', 'PostgreSQL', 'Firebase', 'GCP', 'Terraform', 'NestJS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/IsaacFidler',
    icon: '⚡',
    gradient: 'from-blue-500/20 to-cyan-500/10',
  },
  {
    title: 'UI Library (BX)',
    description:
      'Internal component library published to NPM and used across 3 applications. Built 40+ reusable components with TypeScript and comprehensive Storybook documentation. Reduced frontend development time across the team and ensured consistent design language.',
    technologies: ['Material UI', 'styled-components', 'TypeScript', 'Storybook'],
    liveUrl: '#',
    githubUrl: 'https://github.com/IsaacFidler',
    icon: '🎨',
    gradient: 'from-violet-500/20 to-purple-500/10',
  },
  {
    title: 'AI-powered ETL Pipeline',
    description:
      'Automated data transformation system using serverless architecture. Contributed to designing event-driven workflows with Cloud Pub/Sub and implemented OpenAI-powered data extraction from unstructured documents.',
    technologies: ['Python', 'GCP', 'OpenAI', 'Terraform', 'Pub/Sub'],
    liveUrl: '#',
    githubUrl: 'https://github.com/IsaacFidler',
    icon: '🤖',
    gradient: 'from-slate-500/20 to-zinc-500/10',
  },
  {
    title: 'AI Chatbot (BX)',
    description:
      'LLM-powered chatbot built by forking and customising Flowwise for our use case. Enabled users to query documentation, complete tasks, navigate to relevant pages, and upload files directly through a conversational interface.',
    technologies: ['Flowwise', 'LLM', 'TypeScript', 'Node.js'],
    liveUrl: '#',
    githubUrl: 'https://github.com/IsaacFidler',
    icon: '💬',
    gradient: 'from-indigo-500/20 to-blue-500/10',
  },
];
