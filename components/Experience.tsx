"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { EXPERIENCE } from "@/data/experience";
import { SectionEyebrow } from "./About";

export function Experience() {
  return (
    <section id="experience" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionEyebrow stage="DEPLOYED" label="Professional Experience" />

        <div className="relative">
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-line sm:block" aria-hidden="true" />

          <div className="space-y-12">
            {EXPERIENCE.map((entry, i) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative sm:pl-9"
              >
                <span
                  className="absolute left-0 top-1.5 hidden h-3.5 w-3.5 rounded-full border-2 border-paper bg-ink sm:block"
                  aria-hidden="true"
                />

                <div className="rounded-card border border-line bg-surface p-6 shadow-card">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">{entry.title}</h3>
                      <p className="mt-0.5 text-sm text-ink-soft">{entry.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-ink-faint">
                        {entry.start} – {entry.end}
                      </p>
                      <p className="mt-0.5 text-xs text-ink-faint">{entry.location}</p>
                    </div>
                  </div>

                  {entry.current && (
                    <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-mint/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-soft">
                      Current role
                    </span>
                  )}

                  <ul className="mt-4 space-y-2.5">
                    {entry.points.map((point, idx) => (
                      <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                        {point.toLowerCase().includes("recognized") || point.toLowerCase().includes("award") ? (
                          <Award size={15} className="mt-0.5 shrink-0 text-clay" aria-hidden="true" />
                        ) : (
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" aria-hidden="true" />
                        )}
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {entry.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-cream/70 px-2 py-1 font-mono text-[11px] text-ink-soft"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
