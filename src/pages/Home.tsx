
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  ArrowDown,
  Code,
  Sparkles,
  GraduationCap,
} from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

import { SEO } from '@/components/SEO';
import { Reveal, Stagger, StaggerItem } from '@/components/animations';
import { ArrowLink } from '@/components/ArrowLink';
import { HeroVisual } from '@/components/HeroVisual';
import { ProjectCard } from '@/components/ProjectCard';

import { getFeaturedProjects } from '@/data/projects';
import { aiProjects } from '@/data/aiProjects';
import { teachingExperiences } from '@/data/teaching';

const introPanels = [
  {
    icon: Code,
    label: 'Build',
    title: 'Frontend Development',
    description:
      'Building modern websites, interfaces and web applications with React, JavaScript and modern frontend tools.',
    link: '/work',
    linkText: 'View Development Work',
  },
  {
    icon: Sparkles,
    label: 'Create',
    title: 'AI Creative Work',
    description:
      'Exploring generative AI for content creation, visual storytelling, AI video and creative AI workflows.',
    link: '/ai-lab',
    linkText: 'Explore AI Lab',
  },
  {
    icon: GraduationCap,
    label: 'Teach',
    title: 'Technology Education',
    description:
      'Teaching coding, web development, Scratch, Generative AI and AI content creation to learners at every level.',
    link: '/teaching',
    linkText: 'See Teaching',
  },
];

export function Home() {
  const reduce = useReducedMotion();

  const featured = getFeaturedProjects();
  const featuredAi = aiProjects.slice(0, 2);

  return (
    <>
      <SEO />

      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative min-h-screen overflow-hidden">
        {/* Background texture */}
        <div className="pointer-events-none absolute inset-0 grid-noise opacity-40" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg-primary/50 via-bg-secondary to-bg-secondary" />

        <div className="container-page relative flex min-h-screen flex-col justify-center pt-28 pb-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.18fr_0.82fr]">

            {/* =====================================================
                HERO CONTENT
            ====================================================== */}

            <div className="max-w-3xl">
              {/* Eyebrow */}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mb-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-border
                  bg-bg-surface/50
                  px-4
                  py-2
                  font-mono
                  text-[11px]
                  uppercase
                  tracking-[0.22em]
                  text-accent-300
                  backdrop-blur-sm
                "
              >
                <Sparkles className="h-3.5 w-3.5" />

                Frontend Developer · AI Creative · Educator
              </motion.div>

              {/* Greeting */}
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-lg text-text-secondary"
              >
                Hi, I'm Favour Momodu.
              </motion.p>

              {/* Main heading */}
              <motion.h2
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.12,
                }}
                className="text-display-xl text-gradient min-h-[4.5rem] sm:min-h-[6rem]"
              >
                <Typewriter
                  words={[
                    'I Build Digital Experiences.',
                    'I Create With AI.',
                    'I Turn Ideas Into Experiences.',
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mt-8
                  max-w-2xl
                  text-base
                  leading-relaxed
                  text-text-secondary
                  sm:text-lg
                "
              >
                I design, build and teach digital products at the intersection
                of frontend development, AI creativity and technology
                education.
              </motion.p>

              {/* Skills */}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.32,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                {['React', 'JavaScript', 'AI Creative', 'Frontend'].map(
                  (item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  )
                )}
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.42,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <Link to="/work" className="btn-primary">
                  Explore My Work
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link to="/contact" className="btn-ghost">
                  Let's Connect
                </Link>
              </motion.div>

              {/* Secondary links */}
              <motion.div
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                }}
                className="mt-8 flex flex-wrap items-center gap-6"
              >
                <Link
                  to="/cv"
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    text-sm
                    text-text-muted
                    transition-colors
                    hover:text-accent-300
                  "
                >
                  <ArrowRight className="h-3.5 w-3.5" />

                  View My CV
                </Link>

                <span
                  className="
                    font-mono
                    text-[11px]
                    uppercase
                    tracking-[0.2em]
                    text-text-muted
                  "
                >
                  Available for projects
                </span>
              </motion.div>
            </div>

            {/* =====================================================
                HERO VISUAL
                
                IMPORTANT:
                Previously this used `hidden lg:flex`, which completely
                removed the HeroVisual below the lg breakpoint.

                It now renders on all screen sizes.
            ====================================================== */}

            <motion.div
              initial={
                reduce
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.95,
                    }
              }
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                flex
                w-full
                justify-self-center
                lg:justify-self-end
              "
            >
              <HeroVisual />
            </motion.div>
          </div>
        </div>

        {/* =========================================================
            SCROLL INDICATOR
        ========================================================== */}

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.6,
          }}
          className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
          "
        >
          <div className="flex flex-col items-center gap-2">
            <span
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-text-muted
              "
            >
              Scroll to explore
            </span>

            <div className="h-12 w-px bg-gradient-to-b from-border to-transparent" />

            <ArrowDown className="h-3 w-3 animate-bounce text-text-muted" />
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          WHO I AM
      ========================================================== */}

      <section className="container-page py-24 lg:py-32">
        <Reveal>
          <span className="section-label">
            Who I Am
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-4 text-display-lg text-gradient text-balance">
            I Build. I Create. I Teach.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            className="
              mt-6
              max-w-2xl
              text-lg
              leading-relaxed
              text-text-secondary
            "
          >
            I'm a multidisciplinary technology professional working at the
            intersection of frontend development, AI creative work, and
            technology education. Each area strengthens the others — building
            sharpens my technical understanding, creating expands my creative
            range, and teaching deepens my communication.
          </p>
        </Reveal>

        <Stagger className="mt-16 grid gap-6 md:grid-cols-3">
          {introPanels.map((panel) => {
            const Icon = panel.icon;

            return (
              <StaggerItem key={panel.label}>
                <Link
                  to={panel.link}
                  className="
                    group
                    block
                    h-full
                    surface
                    surface-hover
                    p-8
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-border
                      bg-bg-elevated
                    "
                  >
                    <Icon className="h-5 w-5 text-accent-300" />
                  </div>

                  <p
                    className="
                      mt-6
                      font-mono
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      text-accent-300
                    "
                  >
                    {panel.label}
                  </p>

                  <h3
                    className="
                      mt-2
                      font-display
                      text-xl
                      font-semibold
                      text-text-primary
                    "
                  >
                    {panel.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-relaxed
                      text-text-muted
                    "
                  >
                    {panel.description}
                  </p>

                  <span
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      text-accent-300
                      transition-colors
                      group-hover:text-accent-200
                    "
                  >
                    {panel.linkText}

                    <ArrowRight
                      className="
                        h-3.5
                        w-3.5
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* =========================================================
          FEATURED WORK
      ========================================================== */}

      <section className="container-page py-24 lg:py-32">
        <div
          className="
            flex
            flex-col
            items-start
            justify-between
            gap-6
            sm:flex-row
            sm:items-end
          "
        >
          <div>
            <Reveal>
              <span className="section-label">
                Selected Work
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-4 text-display-lg text-gradient text-balance">
                Real Digital Experiences
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-4 max-w-xl text-text-secondary">
                Real digital experiences, websites and applications I've
                built.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <ArrowLink to="/work">
              View All Projects
            </ArrowLink>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              variant="featured"
            />
          ))}
        </div>
      </section>

      {/* =========================================================
          AI LAB PREVIEW
      ========================================================== */}

      <section className="container-page py-24 lg:py-32">
        <div
          className="
            flex
            flex-col
            items-start
            justify-between
            gap-6
            sm:flex-row
            sm:items-end
          "
        >
          <div>
            <Reveal>
              <span className="section-label">
                AI Creative Lab
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-4 text-display-lg text-gradient text-balance">
                Where Ideas Become Experiments
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <ArrowLink to="/ai-lab">
              Explore the AI Lab
            </ArrowLink>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
          {featuredAi.map((project) => (
            <StaggerItem key={project.id}>
              <div
                className="
                  group
                  h-full
                  surface
                  surface-hover
                  p-8
                "
              >
                <span className="tag text-accent-300">
                  {project.category}
                </span>

                <h3
                  className="
                    mt-4
                    font-display
                    text-2xl
                    font-semibold
                    text-text-primary
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-relaxed
                    text-text-muted
                  "
                >
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* =========================================================
          TEACHING PREVIEW
      ========================================================== */}

      <section className="container-page py-24 lg:py-32">
        <div
          className="
            flex
            flex-col
            items-start
            justify-between
            gap-6
            sm:flex-row
            sm:items-end
          "
        >
          <div>
            <Reveal>
              <span className="section-label">
                Technology Education
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-4 text-display-lg text-gradient text-balance">
                I Teach What I Learn
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-4 max-w-xl text-text-secondary">
                Technology becomes more powerful when knowledge is shared.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <ArrowLink to="/teaching">
              See Teaching Experience
            </ArrowLink>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {teachingExperiences.map((item) => (
            <StaggerItem key={item.id}>
              <div
                className="
                  h-full
                  surface
                  surface-hover
                  p-6
                "
              >
                <p className="font-mono text-xs text-text-muted">
                  {item.date}
                </p>

                <h3
                  className="
                    mt-3
                    font-display
                    text-lg
                    font-semibold
                    text-text-primary
                  "
                >
                  {item.organization}
                </h3>

                <p className="mt-1 text-sm text-accent-300">
                  {item.subject}
                </p>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-relaxed
                    text-text-muted
                  "
                >
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* =========================================================
          CONTACT CTA
      ========================================================== */}

      <section className="container-page py-24 lg:py-32">
        <Reveal>
          <div
            className="
              surface
              relative
              overflow-hidden
              p-10
              text-center
              sm:p-16
              lg:p-24
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-br
                from-accent-500/5
                via-transparent
                to-transparent
              "
            />

            <div className="relative">
              <p className="section-label justify-center">
                Have an idea?
              </p>

              <h2
                className="
                  mt-6
                  text-display-lg
                  text-gradient
                  text-balance
                "
              >
                Let's Build Something Interesting.
              </h2>

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-xl
                  text-text-secondary
                "
              >
                Whether you're looking for a frontend developer, AI creative
                collaborator, or technology educator — I'd love to hear from
                you.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary">
                  Get In Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link to="/work" className="btn-ghost">
                  Explore My Work
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
