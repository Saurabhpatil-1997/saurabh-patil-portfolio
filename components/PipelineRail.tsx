"use client";

import { useEffect, useState } from "react";
import { STAGE_COLORS } from "./PipelineDiagram";

const STAGES = [
  { id: "hero", label: "Hello, Meet Saurabh" },
  { id: "about", label: "The Payload" },
  { id: "skills", label: "My Stack" },
  { id: "experience", label: "In Production" },
  { id: "projects", label: "Things I Built" },
  { id: "education", label: "Schema Defined" },
  { id: "contact", label: "Let's Connect" },
];

export function PipelineRail() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sections = STAGES.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      let current = 0;
      sections.forEach((el, i) => {
        if (el.offsetTop <= scrollPos) current = i;
      });
      setActiveIndex(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pipeline-rail hidden xl:block" aria-hidden="true">
      {STAGES.map((stage, i) => (
        <div
          key={stage.id}
          className="absolute flex items-center"
          style={{ top: `${(i / (STAGES.length - 1)) * 78 + 10}%` }}
        >
          <span
            className={`pipeline-node ${i <= activeIndex ? "active" : ""}`}
            style={
              i <= activeIndex
                ? {
                    backgroundColor: STAGE_COLORS[i % STAGE_COLORS.length],
                    borderColor: STAGE_COLORS[i % STAGE_COLORS.length],
                  }
                : undefined
            }
          />
          <span
            className={`font-mono text-[10px] tracking-widest whitespace-nowrap absolute left-4 transition-opacity duration-300 ${
              i === activeIndex ? "opacity-100 text-ink" : "opacity-0 text-ink-faint"
            }`}
          >
            {stage.label}
          </span>
        </div>
      ))}
    </div>
  );
}
