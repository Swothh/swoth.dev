export type PortfolioLink = {
  label: string;
  href: string;
};

type ProjectDetails = {
  name: string;
  description: string;
  stack: readonly string[];
};

export type Project = ProjectDetails & (
  | { href: string; repository?: string }
  | { href?: string; repository: string }
);

export type TimelineEntry = {
  year: string;
  description: string;
};

export type TechnologyGroup = {
  category: string;
  items: readonly string[];
};

export type Portfolio = {
  profile: {
    name: string;
    handle: string;
    descriptor: string;
    headline: string;
    bio: string;
    email: string;
  };
  featuredProject: Project;
  projects: readonly Project[];
  background: readonly TimelineEntry[];
  technologies: readonly TechnologyGroup[];
  links: readonly PortfolioLink[];
  footer: {
    buildLabel: string;
    locationPrefix: string;
    location: string;
  };
  contact: {
    heading: readonly [string, string];
  };
  seo: {
    siteUrl: string;
    author: string;
    language: string;
    locale: string;
    socialHandle: string;
  };
};

export const portfolio = {
  profile: {
    name: 'swoth.dev',
    handle: '@swothh',
    descriptor: 'developer',
    headline: "Hello, I'm Mustafa.",
    bio: 'I build thoughtful digital products, tools, and experiments for the web.',
    email: 'me@swoth.dev',
  },
  featuredProject: {
    name: 'swoth.dev',
    description: 'a portfolio that speaks for me 🔧',
    stack: ['TypeScript', 'Astro', 'Tailwind'],
    href: 'https://github.com/Swothh/swoth.dev',
    repository: 'Swothh/swoth.dev',
  },
  projects: [
    {
      name: 'Taleon',
      description: 'write it raw, read beautifully 📖',
      stack: ['TypeScript', 'Bun', 'Next.js', 'Tailwind'],
      href: 'https://taleon.swoth.dev',
    },
  ],
  background: [
    {
      year: '2024',
      description: 'Started university.',
    },
    {
      year: '2023',
      description: 'Graduated from high school.',
    },
    {
      year: '2017',
      description: 'Wrote my first lines of code.',
    },
    {
      year: '2010',
      description: 'Swam for the first time. Not sure why this is here.',
    },
  ],
  technologies: [
    {
      category: 'Languages',
      items: ['TypeScript', 'JavaScript', 'Rust', 'Go', 'Java'],
    },
    {
      category: 'Front-end',
      items: ['React', 'Next.js', 'Astro', 'Tailwind CSS', 'shadcn/ui'],
    },
    {
      category: 'Back-end',
      items: ['Node.js', 'Bun', 'Elysia', 'Hono', 'OpenAPI'],
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'Redis', 'MongoDB', 'Supabase'],
    },
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/Swothh' },
    { label: 'X', href: 'https://x.com/Swoth_' },
  ],
  footer: {
    buildLabel: 'Built with',
    locationPrefix: 'in',
    location: 'Antalya',
  },
  contact: {
    heading: ['For projects, ideas,', 'or a simple hello.'],
  },
  seo: {
    siteUrl: 'https://swoth.dev',
    author: 'Mustafa',
    language: 'en',
    locale: 'en_US',
    socialHandle: '@Swoth_',
  },
} as const satisfies Portfolio;
