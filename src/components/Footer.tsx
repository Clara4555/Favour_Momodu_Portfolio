import { Link } from 'react-router-dom';
import { Linkedin, Github, Mail } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <h3 className="font-display text-xl font-semibold text-text-primary">
              {siteConfig.name}
            </h3>
            <p className="mt-2 text-sm text-text-secondary">{siteConfig.role}</p>
            <p className="mt-6 max-w-xs text-sm text-text-muted">
              Built with curiosity, creativity and code.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-mono uppercase tracking-[0.2em] text-text-muted">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-text-secondary transition-colors hover:text-accent-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-mono uppercase tracking-[0.2em] text-text-muted">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-text-secondary transition-colors hover:text-accent-300"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-text-secondary transition-colors hover:text-accent-300"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2.5 text-sm text-text-secondary transition-colors hover:text-accent-300"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Frontend Developer & AI Creative
          </p>
        </div>
      </div>
    </footer>
  );
}