import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
}

export function SEO({ title, description }: SEOProps) {
  const location = useLocation();
  const fullTitle = title
    ? `${title} — Favour Momodu`
    : 'Favour Momodu — Frontend Developer & AI Creative';
  const desc =
    description ||
    'Frontend Developer & AI Creative building modern digital experiences at the intersection of technology, creativity, and artificial intelligence.';

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', desc);
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', desc, 'property');
    setMeta('og:url', `https://favouromomodu.com${location.pathname}`, 'property');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', desc);
  }, [fullTitle, desc, location.pathname]);

  return null;
}
