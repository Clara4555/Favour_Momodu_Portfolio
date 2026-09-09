export const skills = {
  frontend: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'React Native',
    'Tailwind CSS',
    'Bootstrap',
  ],
  backend: [
    'PHP',
    'Laravel',
    'Node.js',
    'Express',
    'MySQL',
    'MongoDB',
    'REST APIs',
  ],
  ai: [
    'Generative AI',
    'Prompt Engineering',
    'AI Content Creation',
    'AI Image Generation',
    'AI Video Generation',
    'AI Storytelling',
    'Creative AI Workflows',
  ],
  tools: [
    'Git',
    'GitHub',
    'VS Code',
    'Figma',
    'Canva',
    'CapCut',
    'ChatGPT',
    'Google Gemini',
    'Grok',
    'Google Flow',
    'ElevenLabs',
  ],
};

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Building responsive, accessible interfaces and web applications.',
    items: skills.frontend,
  },
  {
    id: 'backend',
    title: 'Backend / Server-Side',
    description: 'Working with server technologies, databases, and APIs.',
    items: skills.backend,
  },
  {
    id: 'ai',
    title: 'AI & Creative Technology',
    description: 'Exploring generative AI for content creation, storytelling, and visual work.',
    items: skills.ai,
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'Development and creative tools used in daily workflows.',
    items: skills.tools,
  },
];
