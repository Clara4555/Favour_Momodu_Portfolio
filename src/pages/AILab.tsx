import { motion, useReducedMotion } from 'framer-motion';
import { Lightbulb, Wand2, FileText, Cpu, Sparkles, Check, Play } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { Reveal, Stagger, StaggerItem } from '@/components/animations';
import { aiProjects, aiWorkflowStages, aiTools } from '@/data/aiProjects';

const stageIcons = [Lightbulb, Wand2, FileText, Cpu, Sparkles, Check];

export function AILab() {
  const reduce = useReducedMotion();

  return (
    <>
      <SEO title="AI Lab" description="The AI Lab — where ideas become experiments. Favour Momodu's AI creative work including generative AI, prompt engineering, AI content creation, AI image and video generation, and AI storytelling." />

      <PageHeader
        label="The AI Lab"
        title="Where Ideas Become Experiments"
        description="This is where I explore what AI can create — not just listing tools, but showing how ideas move through a creative AI workflow from concept to finished content."
      />

      {/* Focus areas */}
      <section className="container-page py-12 lg:py-16">
        <Reveal>
          <span className="section-label">Focus Areas</span>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              'AI Content Creation',
              'Generative AI',
              'Prompt Engineering',
              'AI Image Generation',
              'AI Video Generation',
              'AI Storytelling',
              'Character Consistency',
              'Creative AI Workflows',
            ].map((area) => (
              <span key={area} className="tag px-4 py-2 text-sm hover:border-accent-500/40 hover:text-accent-300">
                {area}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Interactive Workflow */}
      <section className="container-page py-12 lg:py-20">
        <Reveal>
          <span className="section-label">The Creative AI Workflow</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-display-md text-gradient text-balance">
            From Idea to Final Creation
          </h2>
        </Reveal>

        <div className="mt-16 space-y-0">
          {aiWorkflowStages.map((stage, i) => {
            const Icon = stageIcons[i] ?? Lightbulb;
            const isLast = i === aiWorkflowStages.length - 1;
            return (
              <Reveal key={stage.id} delay={i * 0.05}>
                <div className="flex gap-6 sm:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-bg-surface">
                      <Icon className="h-5 w-5 text-accent-300" />
                    </div>
                    {!isLast && (
                      <div className="my-2 w-px flex-1 bg-gradient-to-b from-border to-transparent min-h-[60px]" />
                    )}
                  </div>
                  <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-12'}`}>
                    <p className="font-mono text-xs text-text-muted">
                      Stage 0{i + 1}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-text-primary">
                      {stage.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-sm text-text-muted leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* AI Projects */}
      <section className="container-page py-12 lg:py-20">
        <Reveal>
          <span className="section-label">AI Projects</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-display-md text-gradient text-balance">
            Creative AI Work
          </h2>
        </Reveal>

        <Stagger className="mt-12 space-y-8">
          {aiProjects.map((project) => (
            <StaggerItem key={project.id}>
              <div className="surface surface-hover p-8 sm:p-10">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <span className="tag text-accent-300">{project.category}</span>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-text-primary sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-text-secondary leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      {project.workflow.map((step, si) => (
                        <div key={step} className="flex items-center gap-2">
                          <span className="rounded-md border border-border bg-bg-elevated px-2.5 py-1 text-xs text-text-secondary">
                            {step}
                          </span>
                          {si < project.workflow.length - 1 && (
                            <span className="text-text-muted">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Video Samples */}
                {project.videos && project.videos.length > 0 && (
                  <div className="mt-6">
                    <p className="mb-3 text-xs font-mono uppercase tracking-wider text-text-muted">
                      Video Samples
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {project.videos.map((video, idx) => {
                        const isVideoAsset = video.toLowerCase().endsWith('.mp4') || video.toLowerCase().endsWith('.webm');
                        const isRestaurantProject = project.id === 'elevation-restaurant-ai-advert';

                        return (
                          <div key={idx} className="relative overflow-hidden rounded-xl border border-border bg-bg-elevated">
                            <div className={isRestaurantProject ? 'aspect-[9/16]' : 'aspect-video'}>
                              {isVideoAsset ? (
                                <video
                                  src={video}
                                  controls
                                  className={isRestaurantProject ? 'h-full w-full object-cover' : 'w-full h-full object-cover'}
                                  poster="/src/assets/video-placeholder.jpg"
                                />
                              ) : (
                                <img
                                  src={video}
                                  alt="AI Lab project visual"
                                  className={isRestaurantProject ? 'h-full w-full object-cover' : 'w-full h-full object-cover'}
                                />
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="mt-6 border-t border-border pt-6">
                  <p className="mb-3 text-xs font-mono uppercase tracking-wider text-text-muted">
                    Tools Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="tag">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* AI Tools Display */}
      <section className="container-page py-12 lg:py-20">
        <Reveal>
          <span className="section-label">AI Tools</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-display-md text-gradient text-balance">
            Tools in My Creative Workflow
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 max-w-xl text-sm text-text-muted">
            These are tools used in my creative workflow. I don't claim ownership of these
            technologies — they're instruments that help bring ideas to life.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {Object.entries(aiTools).map(([category, tools]) => (
            <StaggerItem key={category}>
              <div className="surface h-full p-6">
                <p className="mb-4 text-xs font-mono uppercase tracking-wider text-accent-300">
                  {category === 'ideation' && 'AI Thinking / Ideation'}
                  {category === 'visual' && 'AI Visual / Video Generation'}
                  {category === 'voice' && 'AI Voice'}
                </p>
                <ul className="space-y-3">
                  {tools.map((tool) => (
                    <li key={tool.name}>
                      <p className="text-sm font-medium text-text-secondary">{tool.name}</p>
                      <p className="text-xs text-text-muted">{tool.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}