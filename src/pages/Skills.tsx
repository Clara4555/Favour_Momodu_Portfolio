import { Code, Server, Sparkles, Wrench } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { Reveal, Stagger, StaggerItem } from '@/components/animations';
import { skillCategories } from '@/data/skills';

const categoryIcons: Record<string, typeof Code> = {
  frontend: Code,
  backend: Server,
  ai: Sparkles,
  tools: Wrench,
};

export function Skills() {
  return (
    <>
      <SEO title="Skills" description="My digital toolkit — frontend development, backend technologies, AI & creative technology, and tools. No fake percentages, just the technologies I work with." />

      <PageHeader
        label="Technical Toolkit"
        title="My Digital Toolkit"
        description="The technologies and tools I work with across frontend development, backend, AI creative work, and daily workflows. Organized by discipline — no skill bars or fake percentages."
      />

      <section className="container-page py-12 lg:py-16">
        <Stagger className="grid gap-8 lg:grid-cols-2">
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.id] ?? Code;
            return (
              <StaggerItem key={category.id}>
                <div className="surface h-full p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-ink-600/60 bg-ink-800/50">
                      <Icon className="h-5 w-5 text-accent-400" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">
                        {category.title}
                      </h3>
                      <p className="mt-1 text-sm text-ink-400">{category.description}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="tag cursor-default px-3.5 py-1.5 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/40 hover:bg-accent-500/5 hover:text-accent-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* Note */}
      <section className="container-page py-8 lg:py-12">
        <Reveal>
          <p className="text-sm text-ink-500">
            These are technologies I've worked with across projects and roles. I don't claim equal
            expertise in every one — some are daily tools, others I've used for specific projects.
          </p>
        </Reveal>
      </section>
    </>
  );
}
