import { Code, GraduationCap, Sparkles, Briefcase, Users } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/animations';
import { experiences, type ExperienceItem } from '@/data/experiences';

const typeConfig: Record<
  ExperienceItem['type'],
  { icon: typeof Code; label: string; color: string }
> = {
  development: { icon: Code, label: 'Development', color: 'text-accent-400' },
  teaching: { icon: GraduationCap, label: 'Teaching', color: 'text-success-500' },
  ai: { icon: Sparkles, label: 'AI Creative', color: 'text-warning-500' },
  administration: { icon: Briefcase, label: 'Administration', color: 'text-ink-300' },
  other: { icon: Users, label: 'Other', color: 'text-ink-300' },
};

export function Experience() {
  return (
    <>
      <SEO title="Experience" description="Professional experience and career growth of Favour Momodu — frontend development, teaching, AI creative work, and administrative experience across multiple organizations." />

      <PageHeader
        label="Experience & Professional Growth"
        title="My Professional Journey"
        description="A complete view of my professional experience — from frontend development and teaching to AI creative work and administrative roles. Each experience has contributed to how I work today."
      />

      {/* Timeline */}
      <section className="container-page py-12 lg:py-16">
        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-border via-border/30 to-transparent sm:left-8" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const config = typeConfig[exp.type];
              const Icon = config.icon;
              return (
                <Reveal key={exp.id} delay={i * 0.03}>
                  <div className="relative flex gap-6 sm:gap-8">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-bg-surface sm:h-16 sm:w-16">
                      <Icon className={`h-5 w-5 ${config.color} sm:h-6 sm:w-6`} />
                    </div>

                    <div className="flex-1 pb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`tag text-xs ${config.color}`}>{config.label}</span>
                        <span className="font-mono text-xs text-text-muted">{exp.date}</span>
                      </div>
                      <h3 className="mt-3 font-display text-xl font-semibold text-text-primary sm:text-2xl">
                        {exp.role}
                      </h3>
                      <p className="mt-1 text-sm text-accent-300">{exp.organization}</p>
                      <p className="mt-3 max-w-2xl text-sm text-text-secondary leading-relaxed">
                        {exp.description}
                      </p>

                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {exp.responsibilities.map((resp) => (
                          <li
                            key={resp}
                            className="flex items-start gap-2 text-sm text-text-muted"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-text-muted" />
                            {resp}
                          </li>
                        ))}
                      </ul>

                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span key={tech} className="tag text-xs">{tech}</span>
                          ))}
                        </div>
                      )}

                      {/* Project Images */}
                      {exp.projectImages && exp.projectImages.length > 0 && (
                        <div className="mt-6">
                          <p className="mb-3 text-xs font-mono uppercase tracking-wider text-text-muted">
                            Project Screenshots
                          </p>
                          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            {exp.projectImages.map((image) => (
                              <div
                                key={image.src}
                                className="group relative overflow-hidden rounded-xl border border-border bg-bg-elevated"
                              >
                                <img
                                  src={image.src}
                                  alt={image.alt}
                                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                  }}
                                />
                                {image.label && (
                                  <div className="absolute bottom-0 left-0 right-0 bg-bg-primary/80 p-2 text-center text-xs font-medium text-text-secondary backdrop-blur-sm">
                                    {image.label}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transferable skills note */}
      <section className="container-page py-12 lg:py-20">
        <Reveal>
          <div className="surface p-8 sm:p-10">
            <span className="section-label">Beyond Development</span>
            <h2 className="mt-4 text-display-sm text-gradient text-balance">
              Transferable Skills
            </h2>
            <p className="mt-4 max-w-2xl text-text-secondary leading-relaxed">
              My broader professional experience — including administrative, sales support, and
              team leadership roles — has strengthened skills that directly support my
              development and teaching work:
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                'Organization',
                'Communication',
                'Coordination',
                'Documentation',
                'Problem solving',
                'Client relations',
                'Operational support',
              ].map((skill) => (
                <span key={skill} className="tag px-4 py-2 text-sm hover:border-accent-500/40 hover:text-accent-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}