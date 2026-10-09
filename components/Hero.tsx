"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, FileText } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { PERSONAL_LINKS } from "@/data/links";
// import { PipelineDiagram } from "./PipelineDiagram";

// const HERO_PIPELINE = ["Source", "Ingestion", "Raw", "Transform", "Warehouse", "Mart", "Analytics"];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20">
      {/* Ambient pastel wash — restrained, kept to the hero only */}
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, #CAF1DE 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[-8%] top-24 h-[300px] w-[300px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, #FFE7C7 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-content">
        {/* <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]"> */}
        <div className="grid grid-cols-1 items-center gap-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-ink-soft"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-mint ring-2 ring-mint/40" />
              {PROFILE.location} · {PROFILE.yearsExperience}+ yrs
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.2rem]"
            >
              {PROFILE.name}
              <span className="mt-2 block text-2xl font-medium text-ink-soft sm:text-3xl">{PROFILE.role}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-soft"
            >
              {PROFILE.heroTagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.17 }}
              className="mt-3 max-w-xl text-balance leading-relaxed text-ink-faint"
            >
              {PROFILE.heroSubtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="mt-7 flex flex-wrap gap-2"
            >
              {PROFILE.heroStack.map((tech, i) => {
                const colors = ["#ACDDDE", "#CAF1DE", "#E1F8DC", "#FEF8DD", "#FFE7C7", "#F7D8BA", "#ACDDDE"];
                return (
                  <span
                    key={tech}
                    className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-soft"
                    style={{ backgroundColor: `${colors[i % colors.length]}55` }}
                  >
                    {tech}
                  </span>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a
                href={PERSONAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
              >
                <Github size={16} aria-hidden="true" />
                GitHub
              </a>
              <a
                href={PERSONAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
              >
                <Linkedin size={16} aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={PERSONAL_LINKS.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
              >
                <FileText size={16} aria-hidden="true" />
                Resume
              </a>
            </motion.div>
          </div>

          {/* <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-card border border-line bg-surface p-6 shadow-card"
          >
            <p className="mb-5 font-mono text-xs uppercase tracking-widest text-ink-faint">Pipeline shape</p>
            <PipelineDiagram stages={HERO_PIPELINE} orientation="vertical" />
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
