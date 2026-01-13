export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const experience: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'BX',
    period: '2021 - December 2024',
    description:
      'Led development of web and backend applications, built and maintained the core API with the team, built component libraries, optimised performance, integrated third-party APIs, managed cloud infrastructure, and mentored junior engineers.',
  },
  {
    title: 'Web Development Bootcamp',
    company: 'CodeWorks',
    period: '2021',
    description:
      'Intensive full-stack web development programme covering modern JavaScript frameworks, React, Node.js, and industry best practices.',
  },
  {
    title: 'Music Computing, BSc',
    company: 'Goldsmiths University',
    period: '2017 - 2021',
    description:
      'Studied Music Computing, focusing on creative technology and software development. Built audio visualisers, sequencers, and experimental instruments.',
  },
];
