import { FileText, ExternalLink, Download, Eye } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { Reveal, Stagger, StaggerItem } from '@/components/animations';
import { cvs, getCvViewUrl, getCvDownloadUrl } from '@/data/cvs';

export function CVCenter() {
  return (
    <>
      <SEO title="CV Center" description="Three professional CVs for three directions — Frontend Developer, Technology & Coding Educator, and Generative AI Content Specialist. One Favour Momodu." />

      <PageHeader
        label="CV Center"
        title="Three Directions. One Favour."
        description="Three professional directions. One Favour Momodu. Each CV is tailored for a specific career path — download or view the one that matches your opportunity."
      />

      {/* CV Panels */}
      <section className="container-page py-12 lg:py-16">
        <Stagger className="grid gap-6 lg:grid-cols-3">
          {cvs.map((cv, i) => (
            <StaggerItem key={cv.id}>
              <div className="surface surface-hover group flex h-full flex-col p-8">
                {/* CV number */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-ink-500">
                    CV 0{i + 1}
                  </span>
                  <FileText className="h-5 w-5 text-ink-500 transition-colors group-hover:text-accent-400" />
                </div>

                {/* Name */}
                <h3 className="mt-6 font-display text-xl font-semibold text-black-900 sm:text-2xl lg:text-3xl">
                  {cv.name}
                </h3>

                {/* Focus */}
                <p className="mt-2 text-xs font-mono uppercase tracking-wider text-accent-400">
                  {cv.focus}
                </p>

                {/* Description */}
                <p className="mt-4 flex-1 text-sm text-ink-400 leading-relaxed">
                  {cv.description}
                </p>

                {/* Filename */}
                <p className="mt-6 truncate font-mono text-[10px] text-ink-500">
                  {cv.filename}
                </p>

                {/* Buttons */}
                <div className="mt-4 flex flex-col gap-2.5">
                  <a
                    href={getCvViewUrl(cv.fileId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center"
                  >
                    <Eye className="h-4 w-4" />
                    View CV
                  </a>
                  <a
                    href={getCvDownloadUrl(cv.fileId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost w-full justify-center"
                  >
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Note */}
      <section className="container-page py-8 lg:py-12">
        <Reveal>
          <div className="surface p-6">
            <div className="flex items-start gap-3">
              <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-ink-500" />
              <p className="text-sm text-ink-400 leading-relaxed">
                CVs are hosted on Google Drive. Clicking "View CV" opens the document in a new tab.
                "Download CV" opens the Google Drive document where you can download it directly —
                if download permissions are restricted by Drive settings, the document will still
                be fully viewable.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
