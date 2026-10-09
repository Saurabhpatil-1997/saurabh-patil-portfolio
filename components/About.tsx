"use client";

import { motion } from "framer-motion";
import { ABOUT_HIGHLIGHTS, ABOUT_PARAGRAPHS } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionEyebrow stage="SOURCE" label="About" />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            {ABOUT_PARAGRAPHS.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-balance leading-relaxed text-ink-soft"
              >
                {p}
              </motion.p>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ABOUT_HIGHLIGHTS.map((h, i) => {
              const colors = ["#ACDDDE", "#CAF1DE", "#FFE7C7", "#F7D8BA"];
              return (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="rounded-card border border-line bg-surface p-5"
                  style={{ borderTopColor: colors[i % colors.length], borderTopWidth: 3 }}
                >
                  <p className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">{h.label}</p>
                  <p className="mt-2 font-display text-xl font-semibold text-ink">{h.value}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-faint">{h.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionEyebrow({ stage, label }: { stage: string; label: string }) {
  return (
    <div className="mb-10 flex items-center gap-3">
      <span className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
        {stage}
      </span>
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{label}</h2>
    </div>
  );
}
