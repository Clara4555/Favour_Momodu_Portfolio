import baddieVideoTwo from '@/Project-images/ai-images/Boundaries Over Approval (1).png';
import fearverseVideoOne from '@/Project-images/ai-images/Tales Of The Red Hand edit.mp4';
import fearverseVideoTwo from '@/Project-images/ai-images/Tales Of The Red Hand Episode 2 .mp4';
import elevationRestaurantVideo from '@/Project-images/ai-images/Elevation  Restaurant Ai Ad.mp4';

export interface AIProject {
  id: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  workflow: string[];
  videos?: string[];
  links?: {
    instagram?: string;
    youtube?: string;
  };
  featured: boolean;
}

export const aiProjects: AIProject[] = [
  {
    id: 'baddie-etiquette',
    title: 'Baddie.Etiquette',
    category: 'AI Content Creation / Personal Brand Storytelling',
    description:
      'A self-expression and confidence-focused AI content series about boundaries, identity, and emotional clarity. The work turns personal themes into short-form visual storytelling through concept development, creative direction, prompt design, and polished social content.',
    tools: [
      'ChatGPT',
      'Google Gemini',
      'Grok Video Generator',
      'Google Flow Video Generator',
      'Canva',
      'CapCut',
    ],
    workflow: ['Idea', 'Concept', 'Prompt', 'Generate', 'Refine', 'Final Creation'],
    videos: [baddieVideoTwo],
    links: {
      instagram: 'https://www.instagram.com/baddieetiquette?stkn=cWJ0eGxocTdjZDk2&utm_source=qr',
    },
    featured: true,
  },
  {
    id: 'fearverse',
    title: 'Fearverse',
    category: 'Faceless AI Storytelling',
    description:
      'A faceless storytelling experiment built around suspense, voice, atmosphere, and cultural symbolism. The project uses AI-assisted scripting, visual planning, voice direction, and narrative editing to turn the Red Hand series into a mood-driven creative world.',
    tools: ['ChatGPT', 'Google Gemini', 'ElevenLabs', 'Canva', 'CapCut'],
    workflow: ['Concept', 'Story', 'Script', 'Voice', 'Visuals', 'Final content'],
    videos: ['https://www.youtube.com/@FearVerseStories'],
    featured: true,
  },
  {
    id: 'elevation-restaurant-ai-advert',
    title: 'Elevation Restaurant — AI Restaurant Campaign',
    category: 'AI Creative Campaign',
    description:
      'An AI-led restaurant campaign for Elevation Restaurant, using image direction, narrative atmosphere, menu storytelling, and motion design to build a premium social-first food brand experience that feels warm, intentional, and memorable.',
    tools: [
      'ChatGPT',
      'Google Gemini',
      'Google Flow Video Generator',
      'Canva',
      'CapCut',
    ],
    workflow: [
      'Concept development',
      'Visual direction',
      'Prompt engineering',
      'Image generation',
      'Video generation',
      'Final campaign',
    ],
    videos: [elevationRestaurantVideo],
    featured: true,
  },
];

export const aiWorkflowStages = [
  {
    id: 'idea',
    title: 'Idea',
    description:
      'Every creative AI project begins with a concept — a story to tell, a message to convey, or an experience to design.',
  },
  {
    id: 'concept',
    title: 'Concept',
    description:
      'The idea takes shape through visual direction, narrative structure, and creative planning.',
  },
  {
    id: 'prompt',
    title: 'Prompt',
    description:
      'Crafting precise prompts that guide AI models toward the intended creative output.',
  },
  {
    id: 'generate',
    title: 'Generate',
    description:
      'AI models produce images, video, voice, and text based on the engineered prompts.',
  },
  {
    id: 'refine',
    title: 'Refine',
    description:
      'Iterative refinement — adjusting prompts, selecting outputs, and polishing results.',
  },
  {
    id: 'final',
    title: 'Final Creation',
    description:
      'The finished creative work — a complete piece of AI-assisted content ready to share.',
  },
];

export const aiTools = {
  ideation: [
    { name: 'ChatGPT', description: 'AI thinking & ideation' },
    { name: 'Google Gemini', description: 'AI thinking & ideation' },
    { name: 'Claude Ai', description: 'AI thinking & ideation' },
  ],
  visual: [
    { name: 'Grok Video Generator', description: 'AI visual / video generation' },
    { name: 'Google Flow', description: 'AI visual / video generation' },
    { name: 'Canva', description: 'Design, layout, and visual direction' },
    { name: 'CapCut', description: 'Editing and short-form video finishing' },
  ],
  voice: [
    { name: 'ElevenLabs', description: 'AI voice generation' },
  ],
};

