export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  date: string;
  location?: string;
  type: 'development' | 'teaching' | 'ai' | 'administration' | 'other';
  description: string;
  responsibilities: string[];
  technologies?: string[];
  projectImages?: { src: string; alt: string; label?: string }[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'eduschola',
    role: 'Frontend & Mobile Development',
    organization: 'Eduschola',
    date: '2024 — 2025',
    type: 'development',
    description:
      'Frontend and mobile development work building responsive interfaces and cross-platform application features.',
    responsibilities: [
      'Frontend component development',
      'Responsive dashboards',
      'Student portals',
      'Admin portals',
      'Cross-platform application work',
      'Laravel API integration',
      'Team collaboration',
    ],
    technologies: ['React', 'React Native', 'Tailwind CSS', 'Laravel'],
    projectImages: [
      { src: '/src/assets/eduschola-dashboard.png', alt: 'Eduschola Admin Dashboard', label: 'Admin Dashboard' },
      { src: '/src/assets/eduschola-portal.png', alt: 'Eduschola Student Portal', label: 'Student Portal' },
    ],
  },
  {
    id: 'gilteck',
    role: 'Frontend Development',
    organization: 'Gilteck Organization',
    date: '2024',
    type: 'development',
    description:
      'Frontend development for a job listing platform with responsive UI and application workflows.',
    responsibilities: [
      'Job listing platform development',
      'Responsive UI implementation',
      'Tailwind CSS styling',
      'Job search and application workflows',
    ],
    technologies: ['Tailwind CSS', 'Laravel'],
  },
  {
    id: 'freelance-development',
    role: 'Freelance Frontend Developer',
    organization: 'Freelance',
    date: '2023 — Present',
    type: 'development',
    description:
      'Freelance frontend development building websites, mobile applications, and deploying projects for various clients.',
    responsibilities: [
      'Website development',
      'Mobile application development',
      'React-based projects',
      'HTML and Tailwind CSS implementations',
      'SEO basics',
      'Deployment assistance',
    ],
    technologies: ['React', 'React Native', 'HTML', 'Tailwind CSS'],
    projectImages: [
      { src: '/src/assets/gluto-catalog.png', alt: 'Gluto International Catalog', label: 'Gluto Catalog' },
      { src: '/src/assets/yaahmaan-foods.png', alt: 'Yaahmaan Foods', label: 'Yaahmaan Foods' },
    ],
  },
  {
    id: 'tresbon-tech',
    role: 'Technology Educator',
    organization: 'TresbonTech',
    date: '2024',
    type: 'teaching',
    description:
      'Teaching AI content creation and coding classes to learners exploring technology and creative AI.',
    responsibilities: [
      'AI Content Creation instruction',
      'Coding classes',
    ],
  },
  {
    id: 'blooming-kids',
    role: 'Technology Educator',
    organization: 'Blooming Kids',
    date: '2024',
    type: 'teaching',
    description:
      'Teaching Generative AI concepts to young learners, introducing them to creative AI tools and workflows.',
    responsibilities: [
      'Generative AI instruction',
    ],
  },
  {
    id: 'tech-hustle-academy',
    role: 'Technology Educator',
    organization: 'Tech Hustle Academy',
    date: '2024',
    type: 'teaching',
    description:
      'Teaching Scratch programming and web development to students building their first projects.',
    responsibilities: [
      'Scratch programming instruction',
      'Web development teaching',
    ],
  },
  {
    id: 'vodega',
    role: 'Administrative & Business Support',
    organization: 'Vodega',
    date: '2023',
    type: 'administration',
    description:
      'Administrative and business support role encompassing sales support, operations, and client coordination.',
    responsibilities: [
      'Administration',
      'Sales support',
      'Order tracking',
      'Inventory management',
      'Client / customer coordination',
      'Sales records',
      'Reporting',
      'Business support',
    ],
  },
  {
    id: 'social-media-leadership',
    role: 'Social Media Team Lead',
    organization: 'Professional Experience',
    date: '2022 — 2023',
    type: 'other',
    description:
      'Social media and team leadership experience developing communication, coordination, and content management skills.',
    responsibilities: [
      'Social media management',
      'Team leadership',
      'Content coordination',
    ],
  },
];