"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/data/projects";
import { PROJECT_REPO_LINKS } from "@/data/links";
import { PipelineDiagram } from "./PipelineDiagram";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const repoUrl = PROJECT_REPO_LINKS[project.id];
  const accents = ["#ACDDDE", "#CAF1DE", "#E1F8DC", "#FFE7C7"];

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
      className="group flex flex-col rounded-card border border-line bg-surface p-6 shadow-card transition-shadow hover:shadow-cardHover"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-lg font-semibold leading-snug text-ink">{project.name}</h3>
        {project.featured && (
          <span
            className="shrink-0 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-soft"
            style={{ backgroundColor: accents[index % accents.length] }}
          >
            Featured
          </span>
        )}
      </div>

      <div className="mt-4 space-y-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">Problem</p>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">{project.problem}</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">Solution</p>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">{project.solution}</p>
        </div>
      </div>

      <div className="mt-5">
        <p className="mb-2.5 font-mono text-[10px] uppercase tracking-widest text-ink-faint">Pipeline</p>
        <PipelineDiagram stages={project.pipeline} orientation="horizontal" size="sm" />
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.concepts.map((concept) => (
          <span key={concept} className="rounded-md border border-line bg-paper px-2 py-1 text-[11px] text-ink-soft">
            {concept}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4 border-t border-line pt-4">
        <Link
          href={`/projects/${project.id}`}
          className="flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-ink-soft"
        >
          Project details
          <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </Link>

        {repoUrl ? (
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-auto flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-ink"
          >
            <Github size={15} aria-hidden="true" />
            View Repository
          </a>
        ) : (
          <span
            className="ml-auto flex items-center gap-1.5 text-sm text-ink-faint"
            title="Repository link not yet added"
          >
            <Github size={15} aria-hidden="true" />
            Repository link coming soon
          </span>
        )}
      </div>
    </motion.article>
  );
}
