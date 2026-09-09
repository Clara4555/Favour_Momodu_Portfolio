export const siteConfig = {
  name: 'Favour Momodu',
  role: 'Frontend Developer & AI Creative',
  tagline: 'Frontend Developer. AI Creative. Technology Educator.',
  description:
    'Frontend Developer & AI Creative building modern digital experiences and exploring the intersection of technology, creativity, and artificial intelligence.',
  email: 'favour.momoduu@gmail.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/techyfavour/',
    github: 'https://github.com/Clara4555',
  },
  nav: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Work', path: '/work' },
    { label: 'AI Lab', path: '/ai-lab' },
    { label: 'Teaching', path: '/teaching' },
    { label: 'Experience', path: '/experience' },
    { label: 'CV', path: '/cv' },
    { label: 'Contact', path: '/contact' },
  ],
};

export type NavItem = (typeof siteConfig.nav)[number];
