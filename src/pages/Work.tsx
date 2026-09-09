import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { ProjectCard } from '@/components/ProjectCard';
import { projects, projectFilters, type ProjectFilter } from '@/data/projects';

export function Work() {
  const [filter, setFilter] = useState<ProjectFilter>('All');

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <>
      <SEO title="Work" description="Development work by Favour Momodu — real websites, web applications and React projects built with HTML, CSS, JavaScript, React, and modern frontend tools." />

      <PageHeader
        label="Development Work"
        title="Selected Work"
        description="Real digital experiences, websites and applications I've built. From corporate websites to functional React applications with cart, order processing, and admin dashboards."
      />

      {/* Filters */}
      <section className="container-page">
        <div className="flex flex-wrap gap-2 border-b border-ink-800 pb-8">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                filter === f
                  ? 'text-white'
                  : 'text-ink-400 hover:text-ink-200'
              }`}
            >
              {filter === f && (
                <motion.span
                  layoutId="work-filter"
                  className="absolute inset-0 rounded-full bg-accent-500/15 border border-accent-500/30"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Project grid */}
      <section className="container-page py-12 lg:py-16">
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
        {filtered.length === 0 && (
          <p className="py-20 text-center text-ink-400">No projects in this category yet.</p>
        )}
      </section>
    </>
  );
}
