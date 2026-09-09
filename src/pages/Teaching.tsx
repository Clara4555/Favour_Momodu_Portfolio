import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { Reveal, Stagger, StaggerItem } from '@/components/animations';
import generativeAiClassImage from '@/Project-images/classes/generative Ai class.png';
import scratchClassImage from '@/Project-images/classes/scratch class.png';
import webDevelopmentClassImage from '@/Project-images/classes/Web dev.png';
import { studentProjects, teachingExperiences, teachingSubjects } from '@/data/teaching';

export function Teaching() {
  return (
    <>
      <SEO title="Teaching" description="Technology education by Favour Momodu — teaching Generative AI, AI Content Creation, Coding, Web Development, and Scratch programming at TresbonTech, Blooming Kids, and Tech Hustle Academy." />

      <PageHeader
        label="Technology Education"
        title="I Teach What I Learn."
        description="Technology becomes more powerful when knowledge is shared. I teach coding, web development, Scratch, Generative AI, and AI content creation — and every class sharpens my own understanding."
      />

      {/* Teaching Experience */}
      <section className="container-page py-12 lg:py-16">
        <Reveal>
          <span className="section-label">Teaching Experience</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-display-md text-gradient">Where I Teach</h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teachingExperiences.map((item) => (
            <StaggerItem key={item.id}>
              <div className="surface surface-hover h-full p-6">
                <p className="font-mono text-xs text-text-muted">{item.date}</p>
                <h3 className="mt-3 font-display text-lg font-semibold text-text-primary">
                  {item.organization}
                </h3>
                <p className="mt-1 text-sm text-accent-300">{item.subject}</p>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.topics.map((topic) => (
                    <span key={topic} className="tag text-xs">{topic}</span>
                  ))}
                </div>

              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Live in class */}
      <section className="container-page py-12 lg:py-16">
        <Reveal>
          <span className="section-label">Live in Class</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-display-md text-gradient">Teaching in Action</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { src: generativeAiClassImage, alt: 'Live Generative AI class' },
            { src: scratchClassImage, alt: 'Live Scratch programming class' },
            { src: webDevelopmentClassImage, alt: 'Live web development class' },
          ].map((classImage, index) => (
            <Reveal key={classImage.src} delay={index * 0.08}>
              <div className="overflow-hidden rounded-2xl border border-border bg-bg-elevated">
                <img
                  src={classImage.src}
                  alt={classImage.alt}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Student AI portfolio */}
      <section className="container-page py-12 lg:py-16">
        <Reveal>
          <span className="section-label">Student Portfolio</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-display-md text-gradient text-balance">
            Generative AI in Practice
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 max-w-2xl text-text-muted leading-relaxed">
            Students learned to turn ideas into visual work by planning prompts, generating
            images, creating short videos, and refining each result through creative iteration.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2">
          {studentProjects.map((project) => (
            <StaggerItem key={project.id}>
              <article className="surface surface-hover h-full overflow-hidden">
                <video
                  src={project.video}
                  className="aspect-video w-full bg-bg-elevated object-cover"
                  controls
                  muted
                  preload="metadata"
                  playsInline
                />
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-text-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Teaching Subjects */}
      <section className="container-page py-12 lg:py-20">
        <Reveal>
          <span className="section-label">Learning Areas</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-display-md text-gradient text-balance">
            What I Teach
          </h2>
        </Reveal>

        <div className="mt-12 space-y-6">
          {teachingSubjects.map((subject, i) => (
            <Reveal key={subject.id} delay={i * 0.05}>
              <div className="surface surface-hover p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-bg-elevated">
                    <BookOpen className="h-5 w-5 text-accent-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-text-primary">
                      {subject.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-muted leading-relaxed">
                      {subject.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {subject.topics.map((topic) => (
                        <span key={topic} className="tag text-xs">{topic}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-12 lg:py-20">
        <Reveal>
          <div className="surface relative overflow-hidden p-10 sm:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-transparent" />
            <div className="relative flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-display-sm text-gradient text-balance">
                  Want to learn together?
                </h2>
                <p className="mt-4 max-w-md text-text-secondary">
                  Whether you need a technology educator for your organization or want to
                  collaborate on a workshop, let's connect.
                </p>
              </div>
              <Link to="/contact" className="btn-primary flex-shrink-0">
                Get In Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}