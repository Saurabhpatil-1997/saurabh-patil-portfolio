"use client";

import { PROJECTS } from "@/data/projects";
import { SectionEyebrow } from "./About";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="bg-surface/60 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionEyebrow stage="TRANSFORMED" label="Featured Projects" />
        <p className="-mt-6 mb-10 max-w-2xl text-ink-faint">
          Real pipelines I designed and built — problem, solution, and the data flow behind each one.
        </p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
