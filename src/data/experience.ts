export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const experience: Experience[] = [
  {
    title: 'Full-Stack Engineer',
    company: 'BX',
    period: '2021 - December 2024',
    description:
      'Helped scale the engineering team from 2 to 11 contributors, conducting technical interviews and defining onboarding processes. Led development of production applications, built company-wide component libraries, and established CI/CD pipelines. Mentored junior engineers through weekly training sessions.',
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
