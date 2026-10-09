import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, CheckCircle2 } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { PROJECT_REPO_LINKS } from "@/data/links";
import { PipelineDiagram } from "@/components/PipelineDiagram";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.id }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = PROJECTS.find((p) => p.id === params.slug);
  if (!project) return {};
  return {
    title: `${project.name} | Project`,
    description: project.problem,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.id === params.slug);
  if (!project) notFound();

  const repoUrl = PROJECT_REPO_LINKS[project.id];

  return (
    <article className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-ink"
        >
          <ArrowLeft size={15} aria-hidden="true" />
          Back to projects
        </Link>

        <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">Project</p>
        <h1 className="mt-2 text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {project.name}
        </h1>

        {repoUrl ? (
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            <Github size={16} aria-hidden="true" />
            View GitHub Repository
          </a>
        ) : (
          <p className="mt-6 font-mono text-xs text-ink-faint">Repository link not yet added.</p>
        )}

        <section className="mt-12">
          <h2 className="font-display text-lg font-semibold text-ink">Overview</h2>
          <div className="mt-4 space-y-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">Problem</p>
              <p className="mt-1.5 leading-relaxed text-ink-soft">{project.problem}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">Solution</p>
              <p className="mt-1.5 leading-relaxed text-ink-soft">{project.solution}</p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-lg font-semibold text-ink">Architecture &amp; Data Flow</h2>
          <div className="mt-5 rounded-card border border-line bg-surface p-6">
            <PipelineDiagram stages={project.pipeline} orientation="vertical" />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-lg font-semibold text-ink">Technologies</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-xs text-ink-soft">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-lg font-semibold text-ink">Key Engineering Decisions &amp; Implementation</h2>
          <ul className="mt-4 space-y-3">
            {project.points.map((point, idx) => (
              <li key={idx} className="flex gap-3 leading-relaxed text-ink-soft">
                <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-ink-faint" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-lg font-semibold text-ink">Key Engineering Concepts</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.concepts.map((concept) => (
              <span key={concept} className="rounded-full bg-mint/50 px-3 py-1 text-xs text-ink-soft">
                {concept}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-16 border-t border-line pt-8">
          <Link href="/#projects" className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink">
            <ArrowLeft size={15} aria-hidden="true" />
            Back to all projects
          </Link>
        </div>
      </div>
    </article>
  );
}
