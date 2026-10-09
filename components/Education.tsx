"use client";

import { motion } from "framer-motion";
import { GraduationCap, FileText, ExternalLink } from "lucide-react";
import { EDUCATION } from "@/data/education";
import { PERSONAL_LINKS } from "@/data/links";
import { SectionEyebrow } from "./About";

export function Education() {
  return (
    <section id="education" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionEyebrow stage="FOUNDATION" label="Education" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="rounded-card border border-line bg-surface p-6"
            >
              <GraduationCap size={20} className="text-ink-soft" aria-hidden="true" />
              <h3 className="mt-3 font-display text-base font-semibold leading-snug text-ink">{edu.degree}</h3>
              <p className="mt-1 text-sm text-ink-soft">{edu.institution}</p>
              <p className="text-sm text-ink-faint">{edu.parent}</p>
              <p className="mt-3 font-mono text-xs text-ink-faint">{edu.duration}</p>
            </motion.div>
          ))}
        </div>

        {/* Academic Records — subtle, secondary to the education cards above */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-card border border-dashed border-line bg-paper p-5"
        >
          <div className="flex items-center gap-3">
            <FileText size={18} className="text-ink-faint" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium text-ink">Academic Records</p>
              <p className="text-xs text-ink-faint">Marksheet / academic record</p>
            </div>
          </div>
          <a
            href={PERSONAL_LINKS.marksheetUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
          >
            View Marksheet
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
