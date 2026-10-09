"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/skills";
import { SectionEyebrow } from "./About";

const CARD_ACCENTS = ["#ACDDDE", "#CAF1DE", "#E1F8DC", "#FEF8DD", "#FFE7C7", "#F7D8BA"];

export function Skills() {
  return (
    <section id="skills" className="bg-surface/60 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionEyebrow stage="STAGED" label="Technical Skills" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              className="rounded-card border border-line bg-paper p-5"
            >
              <div className="mb-1 flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: CARD_ACCENTS[i % CARD_ACCENTS.length] }}
                  aria-hidden="true"
                />
                <h3 className="font-display text-base font-semibold text-ink">{cat.title}</h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-ink-faint">{cat.description}</p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[11px] text-ink-soft"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
