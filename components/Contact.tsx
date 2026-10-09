"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { PERSONAL_LINKS } from "@/data/links";
import { SectionEyebrow } from "./About";

export function Contact() {
  return (
    <section id="contact" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionEyebrow stage="CONNECT" label="Contact" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-card border border-line bg-surface px-6 py-14 text-center sm:px-14"
          style={{ backgroundImage: "linear-gradient(135deg, #E1F8DC22, #ACDDDE22)" }}
        >
          <p className="mx-auto mt-4 max-w-lg text-ink-soft">
            Let&apos;s make data do more.
          </p>
          <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
             Good things happen downstream.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-ink-soft">
            Looking to build reliable data platforms, scalable pipelines, and analytics-ready systems that turn complex data into meaningful outcomes.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${PERSONAL_LINKS.email}`}
              className="flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              <Mail size={16} aria-hidden="true" />
              {PERSONAL_LINKS.email}
            </a>
            <a
              href={PERSONAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-2.5 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
            >
              <Linkedin size={16} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={PERSONAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-2.5 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
            >
              <Github size={16} aria-hidden="true" />
              GitHub
            </a>
            <a
              href={PERSONAL_LINKS.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-2.5 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
            >
              <FileText size={16} aria-hidden="true" />
              Resume
            </a>
          </div>

          <p className="mt-6 font-mono text-xs text-ink-faint">{PERSONAL_LINKS.phone} · {PERSONAL_LINKS.location}</p>
        </motion.div>
      </div>
    </section>
  );
}
