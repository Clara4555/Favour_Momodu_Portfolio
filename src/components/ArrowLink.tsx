import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ArrowLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function ArrowLink({ to, children, className = '', external }: ArrowLinkProps) {
  const cls = `group inline-flex items-center gap-2 text-sm font-medium text-accent-400 transition-colors hover:text-accent-300 ${className}`;
  const arrow = (
    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
  );

  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        {arrow}
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      {children}
      {arrow}
    </Link>
  );
}
