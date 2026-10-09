"use client";

import { motion } from "framer-motion";

export const STAGE_COLORS = ["#ACDDDE", "#CAF1DE", "#E1F8DC", "#FEF8DD", "#FFE7C7", "#F7D8BA"];

export function PipelineDiagram({
  stages,
  orientation = "vertical",
  size = "md",
}: {
  stages: string[];
  orientation?: "vertical" | "horizontal";
  size?: "sm" | "md";
}) {
  const isSmall = size === "sm";

  if (orientation === "horizontal") {
    return (
      <div className="pipeline-scroll flex items-stretch gap-0 overflow-x-auto pb-3">
        {stages.map((stage, i) => (
          <div key={stage} className="flex shrink-0 items-center">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className={`flex flex-col items-center justify-center rounded-lg border border-line bg-surface text-center shrink-0 ${
                isSmall ? "px-3 py-2 min-w-[100px]" : "px-4 py-3 min-w-[130px]"
              }`}
              style={{ borderTopColor: STAGE_COLORS[i % STAGE_COLORS.length], borderTopWidth: 3 }}
            >
              <span className={`font-mono uppercase tracking-wide text-ink ${isSmall ? "text-[10px]" : "text-xs"}`}>
                {stage}
              </span>
            </motion.div>
            {i < stages.length - 1 && (
              <svg width="28" height="2" className="shrink-0 mx-1" aria-hidden="true">
                <line
                  x1="0"
                  y1="1"
                  x2="28"
                  y2="1"
                  stroke="#B7C4C3"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  className="animate-flow"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start">
      {stages.map((stage, i) => (
        <div key={stage} className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <span
              className="flex h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: STAGE_COLORS[i % STAGE_COLORS.length] }}
              aria-hidden="true"
            />
            <span className="font-mono text-xs uppercase tracking-wide text-ink-soft">{stage}</span>
          </motion.div>
          {i < stages.length - 1 && (
            <div className="ml-[4.5px] h-6 w-px bg-line" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  );
}
