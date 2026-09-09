import generativeAiClassImage from '@/Project-images/classes/generative Ai class.png';
import scratchClassImage from '@/Project-images/classes/scratch class.png';
import webDevelopmentClassImage from '@/Project-images/classes/Web dev.png';
import studentVideoOne from '@/Project-images/ai-images/student-project/SaveClip.App_AQM4UHRuGbamdfod3zb9cen6MhmTbDMdB7aVrUIcGep0O0BROpPKdmKT0iwkw5JknczUC-MopfOEfQ3bDrtBABGKTUdukQuUeAX9iu0.mp4';
import studentVideoTwo from '@/Project-images/ai-images/student-project/SaveClip.App_AQMg8nbN5pkDlcaC9YEggA55rpKSBYIy7O3BWnX-L6Kje_7LmHMB7ilacwJOiMvOB5dV3io1YLMYE_jEeziMjEhe8fy1M5v25_44p70.mp4';
import studentVideoThree from '@/Project-images/ai-images/student-project/SaveClip.App_AQPIXCu4mPX9oiv1yzKKAuOzV4PvxMVist8AOPygIujkzfkX__az9wTfgvkRlGtdx_Gbk0n4hza1WXwgysDh45ROG29cnH6q8qr6qbU.mp4';
// import studentVideoFour from '@/Project-images/ai-images/HOW TO BE FELT WITHOUT BEING LOUD.mp4';

export interface TeachingItem {
  id: string;
  organization: string;
  role: string;
  subject: string;
  date: string;
  description: string;
  topics: string[];
  evidenceImages?: { src: string; alt: string; caption?: string }[];
  evidenceNote?: string;
}

export const teachingExperiences: TeachingItem[] = [
  {
    id: 'tresbon-tech',
    organization: 'TresbonTech',
    role: 'Technology Educator',
    subject: 'AI Content Creation & Coding',
    date: '2024',
    description:
      'Live classes in AI content creation and coding, focused on practical creative workflows and digital projects.',
    topics: ['AI Content Creation', 'Coding'],
  },
  {
    id: 'blooming-kids',
    organization: 'Blooming Kids',
    role: 'Technology Educator',
    subject: 'Generative AI',
    date: '2024',
    description:
      'Live Generative AI classes introducing creative prompting, AI image generation, AI video generation, and responsible tool use.',
    topics: ['Generative AI'],
  },
  {
    id: 'tech-hustle-academy',
    organization: 'Tech Hustle Academy',
    role: 'Technology Educator',
    subject: 'Scratch & Web Development',
    date: '2024',
    description:
      'Live Scratch and web development classes covering programming logic, website structure, HTML, CSS, and creative project building.',
    topics: ['Scratch', 'Web Development'],
  },
];

export interface StudentProject {
  id: string;
  title: string;
  description: string;
  video: string;
}

export const studentProjects: StudentProject[] = [
  {
    id: 'student-ai-project-one',
    title: 'Prompt to Storyboard',
    description:
      'Students planned a visual idea with structured prompts, generated supporting images, and arranged the results into a clear visual story.',
    video: studentVideoOne,
  },
  {
    id: 'student-ai-project-two',
    title: 'AI Image Direction',
    description:
      'Students explored how subject, setting, mood, composition, and style prompts influence generated images, then refined their prompts through iteration.',
    video: studentVideoTwo,
  },
  {
    id: 'student-ai-project-three',
    title: 'From Images to Motion',
    description:
      'Students developed short video concepts by planning scenes, generating visual assets, and using AI video workflows to bring still ideas into motion.',
    video: studentVideoThree,
  },
  // {
  //   id: 'student-ai-project-four',
  //   title: 'Creative AI Presentation',
  //   description:
  //     'Students combined prompt writing, image planning, and video storytelling to communicate an original concept with a consistent creative direction.',
  //   video: studentVideoFour,
  // },
];

export const teachingSubjects = [
  {
    id: 'generative-ai',
    title: 'Generative AI',
    description: 'Understanding and working with AI tools that generate text, images, and video.',
    topics: [
      'Introduction to AI',
      'Generative AI',
      'Prompting',
      'AI image creation',
      'AI video creation',
      'Creative AI workflows',
    ],
  },
  {
    id: 'ai-content-creation',
    title: 'AI Content Creation',
    description: 'Using AI to ideate, script, and produce creative content from concept to final output.',
    topics: [
      'Content ideation',
      'Script development',
      'Prompting',
      'Image generation',
      'Video generation',
      'Storytelling',
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Building websites from the ground up with modern frontend technologies.',
    topics: [
      'HTML',
      'CSS',
      'JavaScript',
      'Website structure',
      'Semantic HTML',
      'Frontend development',
    ],
  },
  {
    id: 'scratch',
    title: 'Scratch Programming',
    description: 'Visual programming that teaches programming logic through interactive projects.',
    topics: [
      'Visual programming',
      'Programming logic',
      'Interactive projects',
      'Creative problem solving',
    ],
  },
];