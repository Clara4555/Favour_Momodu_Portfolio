import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ExternalLink, Check } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/animations';
import { getProjectBySlug } from '@/data/projects';
import { NotFound } from './NotFound';

export function ProjectCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) return <NotFound />;

  return (
    <>
      <SEO title={project.name} description={project.description} />

      {/* Hero */}
      <section className="container-page pt-32 pb-12 sm:pt-40 lg:pt-44">
        <Reveal>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm text-ink-400 transition-colors hover:text-accent-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Work
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="mt-8 inline-block tag text-accent-300">{project.category}</span>
        </Reveal>
        <Reveal delay={0.15}>
          <h1 className="mt-4 text-display-lg text-gradient text-balance">{project.name}</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg text-ink-300 leading-relaxed">
            {project.description}
          </p>
        </Reveal>
        {project.image && (
          <Reveal delay={0.25}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-ink-800 bg-ink-900">
              {project.previewType === 'video' ? (
                <video
                  src={project.image}
                  className="aspect-[16/9] w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              ) : (
                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  className="aspect-[16/9] w-full object-cover"
                />
              )}
            </div>
          </Reveal>
        )}
      </section>

      {/* Overview */}
      <section className="container-page py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <span className="section-label">Project Overview</span>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-ink-300 leading-relaxed">
                {project.description}{' '}
                {project.technologies.join(', ')}.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="surface p-6">
              <dl className="space-y-4">
                <div>
                  <dt className="text-xs font-mono uppercase tracking-wider text-ink-500">Category</dt>
                  <dd className="mt-1 text-sm text-ink-200">{project.category}</dd>
                </div>
                <div>
                  <dt className="text-xs font-mono uppercase tracking-wider text-ink-500">Technologies</dt>
                  <dd className="mt-1.5 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tag text-xs">{tech}</span>
                    ))}
                  </dd>
                </div>
                {project.liveUrl && (
                  <div>
                    <dt className="text-xs font-mono uppercase tracking-wider text-ink-500">Live URL</dt>
                    <dd className="mt-1">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-accent-400 hover:text-accent-300"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        {project.liveUrl}
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      {project.features.length > 0 && (
        <section className="container-page py-12 lg:py-16">
          <Reveal>
            <span className="section-label">Verified Features</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-display-md text-gradient">Implemented Functionality</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div key={feature} className="surface flex items-start gap-3 p-5">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/15">
                    <Check className="h-3.5 w-3.5 text-accent-400" />
                  </div>
                  <p className="text-sm text-ink-200">{feature}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {/* Technologies */}
      <section className="container-page py-12 lg:py-16">
        <Reveal>
          <span className="section-label">Technologies</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-display-md text-gradient">Built With</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span key={tech} className="tag px-4 py-2 text-sm">
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Live project */}
      <section className="container-page py-12 lg:py-16">
        <Reveal>
          <div className="surface relative overflow-hidden p-10 sm:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-transparent" />
            <div className="relative flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-display-sm text-gradient">See It Live</h2>
                <p className="mt-4 max-w-md text-ink-300">
                  {project.liveUrl
                    ? 'Visit the live project to explore it in action.'
                    : 'Live link unavailable for this project.'}
                </p>
              </div>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Visit Project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : (
                <span className="text-sm text-ink-500">Live link unavailable</span>
              )}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
