import { Reveal } from './animations';

interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <header className="container-page pt-32 pb-12 sm:pt-40 lg:pt-44">
      <Reveal>
        <span className="section-label">{label}</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="mt-4 text-display-lg text-gradient text-balance">{title}</h1>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg text-ink-300 leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </header>
  );
}
