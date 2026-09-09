import balticImage from '@/Project-images/baltic.png';
import chevronImage from '@/Project-images/chevron.png';
import concordImage from '@/Project-images/concrd.png';
import embexImage from '@/Project-images/Embex.png';
import egpnImage from '@/Project-images/epgn.png';
import equusImage from '@/Project-images/Equus.png';
import glutoImage from '@/Project-images/gluto.catalogue.png';
import livramentoImage from '@/Project-images/livramento.png';
import mafinaImage from '@/Project-images/MAFINA.png';
import mjahomePreview from '@/Project-images/mjahome.mp4';
import montalexImage from '@/Project-images/Montalex.png';
import pippaImage from '@/Project-images/pippa.png';
import premierImage from '@/Project-images/premieroiltuna.png';
import rotraImage from '@/Project-images/Rotra.png';
import saronImage from '@/Project-images/Saron.png';
import seatransImage from '@/Project-images/seatrans.png';
import touchByDebbyPreview from '@/Project-images/touchbydebby.mp4';
import uralskoblgazImage from '@/Project-images/uralskolgas.png';
import yaahmaanImage from '@/Project-images/yaahmandrinks.png';

export interface Project {
  id: string;
  slug: string;
  name: string;
  category: 'Websites' | 'React' | 'Functional Applications' | 'Multilingual';
  technologies: string[];
  features: string[];
  description: string;
  image?: string;
  previewType?: 'image' | 'video';
  liveUrl?: string;
  liveUrlNote?: string;
  featured: boolean;
  caseStudy: boolean;
}

export const projects: Project[] = [
  {
    id: 'mjahome',
    slug: 'mjahome',
    name: 'MJAHome',
    category: 'Websites',
    technologies: ['Web Development', 'E-commerce', 'Responsive Design'],
    features: ['Furniture and collectible catalog', 'Product-focused browsing experience', 'Responsive storefront design'],
    description:
      'A refined furniture and collectibles website designed to showcase distinctive pieces through an elegant, product-focused browsing experience. The site presents MJAHome\'s collection with a polished visual identity and a responsive layout that makes exploring each piece feel natural across devices.',
    image: mjahomePreview,
    previewType: 'video',
    liveUrl: 'https://example.com/mjahome',
    liveUrlNote: 'Private project link temporarily replaced with a placeholder.',
    featured: true,
    caseStudy: true,
  },
  {
    id: 'touch-by-debby',
    slug: 'touch-by-debby',
    name: 'Touch by Debby',
    category: 'Websites',
    technologies: ['Web Development', 'Email Integration', 'Booking System'],
    features: ['Makeup artist portfolio', 'Email integration', 'Client booking integration', 'Admin dashboard'],
    description:
      'A polished portfolio website for makeup artist Touch by Debby, created to present her artistry, services, and client experience in a visually engaging way. The platform combines email communication, appointment booking, and an admin dashboard to support both client enquiries and day-to-day business management.',
    image: touchByDebbyPreview,
    previewType: 'video',
    liveUrl: 'https://example.com/touch-by-debby',
    liveUrlNote: 'Private project link temporarily replaced with a placeholder.',
    featured: true,
    caseStudy: true,
  },
  {
    id: 'gluto-international-catalog',
    slug: 'gluto-international-catalog',
    name: 'Gluto International Catalog',
    category: 'React',
    technologies: ['React', 'Nodemailer', 'JavaScript'],
    features: ['Cart functionality', 'Order processing', 'Nodemailer implementation', 'Admin dashboard'],
    description:
      'React-based catalog application with cart, order processing, Nodemailer integration, and an admin dashboard.',
    image: glutoImage,
    liveUrl: 'https://www.catalog.glutointernational.com/',
    featured: true,
    caseStudy: true,
  },
  {
    id: 'yaahmaan-foods',
    slug: 'yaahmaan-foods',
    name: 'Yaahmaan Foods',
    category: 'Functional Applications',
    technologies: ['Web Development', 'Nodemailer'],
    features: ['Nodemailer integration'],
    description: 'Website with Nodemailer integration for contact and order communication.',
    image: yaahmaanImage,
    liveUrl: 'https://yaahmaanfoods.com/',
    featured: true,
    caseStudy: true,
  },
  {
    id: 'kazakhstan-baltic-energy-corporation',
    slug: 'kazakhstan-baltic-energy-corporation',
    name: 'Kazakhstan Baltic Energy Corporation',
    category: 'Multilingual',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: ['Language translation / multilingual functionality'],
    description:
      'Frontend website featuring language translation / multilingual functionality.',
    image: balticImage,
    liveUrl: 'https://kazbalticenergycorp.kz/',
    featured: true,
    caseStudy: true,
  },
  {
    id: 'uralskoblgaz-llp',
    slug: 'uralskoblgaz-llp',
    name: 'Uralskoblgaz LLP',
    category: 'Websites',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [],
    description: 'Frontend website developed using HTML, CSS and JavaScript.',
    image: uralskoblgazImage,
    liveUrl: 'https://www.uralskoblgazllp.kz',
    featured: false,
    caseStudy: false,
  },
  {
    id: 'montalex-shipping-bv',
    slug: 'montalex-shipping-bv',
    name: 'Montalex Shipping B.V.',
    category: 'Websites',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [],
    description: 'Frontend website developed using HTML, CSS and JavaScript.',
    image: montalexImage,
    liveUrl: 'https://www.montalexshippingbv.eu',
    featured: false,
    caseStudy: false,
  },
  {
    id: 'embex-bv',
    slug: 'embex-bv',
    name: 'Embex B.V.',
    category: 'Websites',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [],
    description: 'Frontend website developed using HTML, CSS and JavaScript.',
    image: embexImage,
    liveUrl: 'https://www.embexbv.com',
    featured: false,
    caseStudy: false,
  },
  {
    id: 'saron-bv',
    slug: 'saron-bv',
    name: 'Saron B.V.',
    category: 'Websites',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [],
    description: 'Frontend website developed using HTML, CSS and JavaScript.',
    image: saronImage,
    liveUrl: 'https://www.saronbv.com',
    featured: false,
    caseStudy: false,
  },
  {
    id: 'equus-petroleum-bv',
    slug: 'equus-petroleum-bv',
    name: 'Equus Petroleum B.V.',
    category: 'Websites',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [],
    description: 'Frontend website developed using HTML, CSS and JavaScript.',
    image: equusImage,
    liveUrl: 'https://www.equuspetroleumbv.com',
    featured: false,
    caseStudy: false,
  },
  {
    id: 'rotra-horizon-bv',
    slug: 'rotra-horizon-bv',
    name: 'Rotra Horizon B.V.',
    category: 'Websites',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [],
    description: 'Frontend website developed using HTML, CSS and JavaScript.',
    image: rotraImage,
    liveUrl: 'https://www.rotrahrznbv.com/',
    featured: false,
    caseStudy: false,
  },
  {
    id: 'mafina-bv',
    slug: 'mafina-bv',
    name: 'Mafina B.V.',
    category: 'Websites',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [],
    description: 'Frontend website developed using HTML, CSS and JavaScript.',
    image: mafinaImage,
    liveUrl: 'https://www.mafinabv.com/',
    featured: false,
    caseStudy: false,
  },
  {
    id: 'pippa-shipping',
    slug: 'pippa-shipping',
    name: 'Pippa Shipping',
    category: 'Websites',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [],
    description: 'Frontend website developed using HTML, CSS and JavaScript.',
    image: pippaImage,
    liveUrl: 'https://pippashipping.com',
    featured: false,
    caseStudy: false,
  },
  {
    id: 'egpn-bulk-carrier-us-llc',
    slug: 'egpn-bulk-carrier-us-llc',
    name: 'EGPN Bulk Carrier U.S. LLC',
    category: 'Websites',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [],
    description: 'Frontend website developed using HTML, CSS and JavaScript.',
    image: egpnImage,
    liveUrl: 'https://www.egpnbulkcarrier.us',
    featured: false,
    caseStudy: false,
  },
  {
    id: 'chevron-caspian-exploration-bv',
    slug: 'chevron-caspian-exploration-bv',
    name: 'Chevron Caspian Exploration B.V.',
    category: 'Websites',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [],
    description: 'Frontend website developed using HTML, CSS and JavaScript.',
    image: chevronImage,
    liveUrl: 'https://www.chevroncasexp.com',
    featured: false,
    caseStudy: false,
  },
  {
    id: 'concord-bulk-carrier-inc',
    slug: 'concord-bulk-carrier-inc',
    name: 'Concord Bulk Carrier Inc.',
    category: 'Websites',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [],
    description: 'Frontend website developed using HTML, CSS and JavaScript.',
    image: concordImage,
    liveUrl: 'https://www.concordbulkcarrier.com',
    featured: false,
    caseStudy: false,
  },
  {
    id: 'livramento-shipping',
    slug: 'livramento-shipping',
    name: 'Livramento Shipping',
    category: 'Websites',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [],
    description: 'Frontend website developed using HTML, CSS and JavaScript.',
    image: livramentoImage,
    liveUrl: 'https://livramentoshipping.nl',
    featured: false,
    caseStudy: false,
  },
  {
    id: 'premier-oil-tuna-bv',
    slug: 'premier-oil-tuna-bv',
    name: 'Premier Oil Tuna B.V.',
    category: 'Websites',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [],
    description: 'Frontend website developed using HTML, CSS and JavaScript.',
    image: premierImage,
    liveUrl: 'https://www.premieroiltunabv.com',
    featured: false,
    caseStudy: false,
  },
  {
    id: 'seatrans-shipping-singapore',
    slug: 'seatrans-shipping-singapore',
    name: 'Seatrans Shipping (Singapore) Pte. Ltd.',
    category: 'Websites',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [],
    description: 'Frontend website developed using HTML, CSS and JavaScript.',
    image: seatransImage,
    liveUrl: 'https://www.sgsemo.com',
    featured: false,
    caseStudy: false,
  },
];

export const projectFilters = ['All', 'Websites', 'React', 'Functional Applications', 'Multilingual'] as const;
export type ProjectFilter = (typeof projectFilters)[number];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
