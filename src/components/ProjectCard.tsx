import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
  variant?: 'featured' | 'standard';
}

export const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(function ProjectCard(
  { project, index = 0, variant = 'standard' },
  ref,
) {
  const isFeatured = variant === 'featured';

  if (isFeatured) {
    return (
      <motion.div
        ref={ref}
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
      >
        <Link
          to={`/work/${project.slug}`}
          className="group block surface surface-hover overflow-hidden"
        >
          {project.image && (
            <div className="aspect-[16/9] overflow-hidden border-b border-border bg-bg-elevated">
              {project.previewType === 'video' ? (
                <video
                  src={project.image}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              )}
            </div>
          )}
          <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="tag border-accent-500/30 text-accent-300">{project.category}</span>
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-text-primary transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl">
                {project.name}
              </h3>
              <p className="mt-3 max-w-xl text-sm text-text-secondary leading-relaxed">
                {project.description}
              </p>
              {project.features.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                  {project.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-1.5 text-xs text-text-muted">
                      <span className="h-1 w-1 rounded-full bg-accent-300" />
                      {feat}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent-300" />
          </div>
          {project.liveUrl && (
            <div className="mt-6 flex items-center gap-2 border-t border-border pt-4">
              <ExternalLink className="h-3.5 w-3.5 text-text-muted" />
              <span className="font-mono text-xs text-text-muted">{project.liveUrl}</span>
            </div>
          )}
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
    >
      <Link
        to={`/work/${project.slug}`}
        className="group block surface surface-hover h-full overflow-hidden"
      >
        {project.image && (
          <div className="aspect-[16/9] overflow-hidden border-b border-border bg-bg-elevated">
            {project.previewType === 'video' ? (
              <video
                src={project.image}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            ) : (
              <img
                src={project.image}
                alt={`${project.name} project preview`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            )}
          </div>
        )}
        <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <span className="tag text-accent-300">{project.category}</span>
          <ArrowUpRight className="h-4 w-4 text-text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-300" />
        </div>
        <h3 className="mt-4 font-display text-lg font-semibold text-text-primary transition-transform duration-500 group-hover:translate-x-0.5">
          {project.name}
        </h3>
        <p className="mt-2 text-sm text-text-muted leading-relaxed">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag text-xs">{tech}</span>
          ))}
        </div>
        {project.liveUrl ? (
          <div className="mt-4 flex items-center gap-1.5 border-t border-border pt-3">
            <ExternalLink className="h-3 w-3 text-text-muted" />
            <span className="font-mono text-[10px] text-text-muted truncate">{project.liveUrl}</span>
          </div>
        ) : (
          <div className="mt-4 border-t border-border pt-3">
            <span className="text-xs text-text-muted">Live link unavailable</span>
          </div>
        )}
        </div>
      </Link>
    </motion.div>
  );
});