export interface CV {
  id: string;
  name: string;
  filename: string;
  focus: string;
  description: string;
  fileId: string;
}

export const cvs: CV[] = [
  {
    id: 'frontend-software-developer',
    name: 'Frontend / Software Developer',
    filename: 'Favour_Momodu_Frontend_Software_Developer_CV.pdf',
    focus: 'Frontend development, software development, web development',
    description:
      'CV tailored for frontend development, software development, web development and related technical opportunities.',
    fileId: '1FlcVXDIrIkrDFTI6x1F4zSgQm9hME2va',
  },
  {
    id: 'technology-coding-educator',
    name: 'Technology & Coding Educator',
    filename: 'Favour_Momodu_Technology_Coding_Educator_CV.pdf',
    focus: 'Coding education, technology education, tutoring, web development teaching',
    description:
      'CV tailored for coding education, technology education, tutoring, web development teaching and related educational opportunities.',
    fileId: '1_eWlJpO28j0QlFjMNPvoC6STs5kW4BBT',
  },
  {
    id: 'generative-ai-content-specialist',
    name: 'Generative AI Content Specialist',
    filename: 'Favour_Momodu_Generative_AI_Content_Specialist_CV.pdf',
    focus: 'Generative AI, AI content creation, AI video, AI storytelling, creative AI',
    description:
      'CV tailored for Generative AI, AI content creation, AI video, AI storytelling, creative AI and related opportunities.',
    fileId: '1eNBXuOYeAyGRycIH_iHK4pAvmWhRDV0U',
  },
];

export function getCvViewUrl(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
}

export function getCvDownloadUrl(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
}
