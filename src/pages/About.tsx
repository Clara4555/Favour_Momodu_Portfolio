import { Link } from 'react-router-dom';
import { ArrowRight, Code, Sparkles, Share2 } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal, Stagger, StaggerItem } from '@/components/animations';

const principles = [
  {
    icon: Code,
    title: 'Build With Purpose',
    description: 'Technology should solve meaningful problems. Every project I build starts with understanding what it needs to do for the people who use it.',
  },
  {
    icon: Sparkles,
    title: 'Create With Curiosity',
    description: 'AI creates new possibilities for experimentation and storytelling. I explore generative AI not as a novelty, but as a genuine creative medium.',
  },
  {
    icon: Share2,
    title: 'Share What You Learn',
    description: 'Technology becomes more valuable when people can understand and use it. Teaching is how I sharpen my own understanding while helping others grow.',
  },
];

const personality = [
  'Curious',
  'Creative',
  'Always learning',
  'Interested in the future of technology',
  'Passionate about technology and creativity',
  'Interested in creating opportunities through technology',
];

export function About() {
  return (
    <>
      <SEO title="About" description="About Favour Momodu — Frontend Developer, AI Creative, and Technology Educator working at the intersection of technology, creativity, artificial intelligence, and education." />

      {/* Hero */}
      <section className="container-page pt-32 pb-16 sm:pt-40 lg:pt-44">
        <Reveal>
          <span className="section-label">About Favour</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 text-display-xl text-gradient">I'm Favour.</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-display-sm font-display font-medium text-text-secondary">
            Frontend Developer. AI Creative. Technology Educator.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-8 max-w-2xl text-lg text-text-secondary leading-relaxed">
            My work sits at the intersection of technology, creativity, artificial intelligence,
            and education. I build digital experiences, explore what AI can create, and teach
            what I learn along the way. These aren't separate interests — they're parts of the
            same practice, each one strengthening the others.
          </p>
        </Reveal>
      </section>

      {/* Professional Philosophy */}
      <section className="container-page py-20 lg:py-28">
        <Reveal>
          <span className="section-label">Professional Philosophy</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-display-md text-gradient text-balance">
            What Guides My Work
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid gap-8 md:grid-cols-3">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <StaggerItem key={principle.title}>
                <div className="h-full">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-bg-surface">
                    <Icon className="h-6 w-6 text-accent-300" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-text-primary">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm text-text-muted leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* Beyond the Screen */}
      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <Reveal>
              <span className="section-label">What Drives Me</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-display-md text-gradient text-balance">
                Beyond the Screen
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-text-secondary leading-relaxed">
                At the core of everything I do is a simple question: "How can this technology make
                life better?"
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                This question drives me as a developer, creator, and educator. I don't just build
                websites — I build tools that solve real problems. Whether it's a seamless e-commerce
                experience, an AI-powered content workflow, or a student writing their first line of
                code, I focus on the human outcome.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                My process is disciplined: understand the problem deeply, prototype rapidly, iterate
                based on feedback, and deliver with excellence. I believe in writing clean, maintainable
                code and designing experiences that are both beautiful and accessible.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                When I'm not coding or creating, I'm thinking about the future of technology —
                how AI will reshape creativity, how education can be democratized, and how we can
                build a more connected world. I'm always open to interesting conversations and
                opportunities that push boundaries.
              </p>
            </Reveal>
          </div>

          <Stagger className="flex flex-wrap gap-3 self-center">
            {personality.map((trait) => (
              <StaggerItem key={trait}>
                <span className="tag px-4 py-2 text-sm hover:border-accent-500/40 hover:text-accent-300">
                  {trait}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20 lg:py-28">
        <Reveal>
          <div className="surface relative overflow-hidden p-10 sm:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-transparent" />
            <div className="relative flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-display-sm text-gradient text-balance">
                  Want to know more?
                </h2>
                <p className="mt-4 max-w-md text-text-secondary">
                  Explore my work, read my CVs, or get in touch — I'm always open to interesting
                  conversations and collaborations.
                </p>
              </div>
              <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
                <Link to="/work" className="btn-primary">
                  Explore My Work
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/cv" className="btn-ghost">
                  View My CVs
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}