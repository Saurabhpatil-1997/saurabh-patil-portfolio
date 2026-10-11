
// "use client";

// import { motion, useReducedMotion } from "framer-motion";
// import { ArrowRight, Github, Linkedin, FileText } from "lucide-react";
// import Image from "next/image";

// import { PROFILE } from "@/data/portfolio";
// import { PERSONAL_LINKS } from "@/data/links";

// const TECH_COLORS = [
//   { bg: "#ACDDDE", text: "#30494A" },
//   { bg: "#CAF1DE", text: "#365548" },
//   { bg: "#E1F8DC", text: "#43583E" },
//   { bg: "#FEF8DD", text: "#665A38" },
//   { bg: "#FFE7C7", text: "#6A4F36" },
//   { bg: "#F7D8BA", text: "#654B38" },
//   { bg: "#ACDDDE", text: "#30494A" },
// ];

// export function Hero() {
//   const reduceMotion = useReducedMotion();
//   const technologies = PROFILE.heroStack;

//   return (
//     <section
//       id="hero"
//       className="relative overflow-hidden px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20"
//     >
//       {/* Ambient pastel background */}
//       <div
//         className="pointer-events-none absolute -right-[10%] -top-32 h-[420px] w-[420px] rounded-full opacity-60 blur-3xl"
//         style={{
//           background:
//             "radial-gradient(circle, #CAF1DE 0%, transparent 70%)",
//         }}
//         aria-hidden="true"
//       />

//       <div
//         className="pointer-events-none absolute left-[-8%] top-24 h-[300px] w-[300px] rounded-full opacity-50 blur-3xl"
//         style={{
//           background:
//             "radial-gradient(circle, #FFE7C7 0%, transparent 70%)",
//         }}
//         aria-hidden="true"
//       />

//       <div className="relative mx-auto max-w-content">
//         <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
//           {/* LEFT: Introduction */}
//           <div className="min-w-0">
//             <motion.p
//               initial={reduceMotion ? false : { opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-ink-soft"
//             >
//               <span className="h-1.5 w-1.5 rounded-full bg-mint ring-2 ring-mint/40" />
//               {PROFILE.location} · {PROFILE.yearsExperience}+ yrs
//             </motion.p>

//             <motion.h1
//               initial={reduceMotion ? false : { opacity: 0, y: 14 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.55, delay: 0.05 }}
//               className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.2rem]"
//             >
//               {PROFILE.name}
//               <span className="mt-2 block text-2xl font-medium text-ink-soft sm:text-3xl">
//                 {PROFILE.role}
//               </span>
//             </motion.h1>

//             <motion.p
//               initial={reduceMotion ? false : { opacity: 0, y: 14 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.55, delay: 0.12 }}
//               className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-soft"
//             >
//               {PROFILE.heroTagline}
//             </motion.p>

//             <motion.p
//               initial={reduceMotion ? false : { opacity: 0, y: 14 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.55, delay: 0.17 }}
//               className="mt-3 max-w-xl text-balance leading-relaxed text-ink-faint"
//             >
//               {PROFILE.heroSubtext}
//             </motion.p>

//             {/* Technology stack below introduction */}
//             <motion.div
//               initial={reduceMotion ? false : { opacity: 0, y: 14 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.55, delay: 0.22 }}
//               className="mt-7 flex flex-wrap gap-2"
//             >
//               {technologies.map((tech, i) => {
//                 const color = TECH_COLORS[i % TECH_COLORS.length];

//                 return (
//                   <span
//                     key={tech}
//                     className="rounded-full border px-3 py-1 font-mono text-xs"
//                     style={{
//                       backgroundColor: `${color.bg}55`,
//                       borderColor: `${color.bg}99`,
//                       color: color.text,
//                     }}
//                   >
//                     {tech}
//                   </span>
//                 );
//               })}
//             </motion.div>

//             {/* Action buttons */}
//             <motion.div
//               initial={reduceMotion ? false : { opacity: 0, y: 14 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.55, delay: 0.28 }}
//               className="mt-9 flex flex-wrap items-center gap-3"
//             >
//               <a
//                 href="#projects"
//                 className="group flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
//               >
//                 View Projects
//                 <ArrowRight
//                   size={16}
//                   className="transition-transform group-hover:translate-x-0.5"
//                   aria-hidden="true"
//                 />
//               </a>

//               <a
//                 href={PERSONAL_LINKS.github}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
//               >
//                 <Github size={16} aria-hidden="true" />
//                 GitHub
//               </a>

//               <a
//                 href={PERSONAL_LINKS.linkedin}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
//               >
//                 <Linkedin size={16} aria-hidden="true" />
//                 LinkedIn
//               </a>

//               <a
//                 href={PERSONAL_LINKS.resumeUrl}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
//               >
//                 <FileText size={16} aria-hidden="true" />
//                 Resume
//               </a>
//             </motion.div>
//           </div>

//           {/* RIGHT: Portrait and single rotating technology orbit */}
//           <motion.div
//             initial={reduceMotion ? false : { opacity: 0, x: 24 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center"
//           >
//             {/* Static inner circle */}
//             <div
//               className="absolute inset-[17%] rounded-full border border-line"
//               aria-hidden="true"
//             />

//             {/* Static outer ring */}
//             <div
//               className="absolute inset-[2%] rounded-full border border-mint/30"
//               aria-hidden="true"
//             />

//             {/* Rotating orbit: all badges follow one circular path */}
//             <motion.div
//               className="absolute inset-[2%] z-20"
//               animate={reduceMotion ? undefined : { rotate: 360 }}
//               transition={{
//                 duration: 40,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             >
//               {/* Dashed orbital path */}
//               <div
//                 className="absolute inset-0 rounded-full border border-dashed border-mint/70"
//                 aria-hidden="true"
//               />

              
//               {technologies.map((tech, i) => {
//                 const angle = (360 / technologies.length) * i;
//                 const color = TECH_COLORS[i % TECH_COLORS.length];

//                 return (
//                   <div
//                     key={tech}
//                     className="absolute inset-0"
//                     style={{ rotate: `${angle}deg` }}
//                   >
//                     {/* Position the badge on the circular path */}
//                     <div
//                       className="absolute left-1/2 top-0"
//                       style={{ translate: "-100% -100%" }}
//                     >
//                       {/* Counter-rotate to keep the label horizontal */}
//                       <motion.div
//                         animate={
//                           reduceMotion
//                             ? undefined
//                             : { rotate: [0, -360] }
//                         }
//                         transition={{
//                           duration: 40,
//                           repeat: Infinity,
//                           ease: "linear",
//                         }}
//                         style={{ rotate: `${-angle}deg` }}
//                       >
//                         <span
//                           className="block whitespace-nowrap rounded-full border px-3 py-1.5 font-mono text-xs shadow-sm backdrop-blur-md"
//                           style={{
//                             backgroundColor: `${color.bg}EE`,
//                             borderColor: color.bg,
//                             color: color.text,
//                           }}
//                         >
//                           {tech}
//                         </span>
//                       </motion.div>
//                     </div>
//                   </div>
//                 );
//               })}
//               </motion.div>
//             {/* Glowing node */}
//             <motion.span
//               animate={
//                 reduceMotion
//                   ? undefined
//                   : {
//                       opacity: [0.65, 1, 0.65],
//                       scale: [0.9, 1.1, 0.9],
//                     }
//               }
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="absolute left-1/2 top-[2%] z-30 h-3 w-3 -translate-x-1/2 rounded-full bg-mint shadow-[0_0_18px_#ACDDDE]"
//               aria-hidden="true"
//             />

//             {/* Stationary portrait: outside the rotating container */}
//             <div className="relative z-10 h-[65%] w-[55%] overflow-hidden rounded-[48%_48%_24px_24px] border border-mint/60 bg-surface shadow-[0_0_70px_rgba(172,221,222,0.25)]">
//               <Image
//                 src="/saurabh.jpeg"
//                 alt={`${PROFILE.name} — Data Engineer`}
//                 fill
//                 priority
//                 sizes="(max-width: 1024px) 55vw, 231px"
//                 className="object-cover object-top"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowRight, Github, Linkedin, FileText } from "lucide-react";
import Image from "next/image";

import { PROFILE } from "@/data/portfolio";
import { PERSONAL_LINKS } from "@/data/links";

const TECH_COLORS = [
  { bg: "#ACDDDE", text: "#30494A" },
  { bg: "#CAF1DE", text: "#365548" },
  { bg: "#E1F8DC", text: "#43583E" },
  { bg: "#FEF8DD", text: "#665A38" },
  { bg: "#FFE7C7", text: "#6A4F36" },
  { bg: "#F7D8BA", text: "#654B38" },
  { bg: "#ACDDDE", text: "#30494A" },
];

const DEG = Math.PI / 180;

/** Seconds for the technology badges to complete one full lap. */
const ORBIT_SECONDS = 40;

/**
 * Orbit radius is a CSS variable (--orbit-r, set on the container below) so the
 * badge path, the dashed ring and the static ring always share one radius, and
 * the radius can be smaller on phones to keep badges from being clipped.
 */
const ORBIT_INSET = "calc(50% - var(--orbit-r))";

/* -------------------------------------------------------------------------- */
/* Orbiting badge                                                              */
/* -------------------------------------------------------------------------- */
/**
 * The badge is never rotated. Its position is computed from the orbit angle
 * (sin/cos), so the text stays perfectly horizontal at every moment and the
 * loop is seamless: 360° maps to exactly the same point as 0°.
 */
function OrbitBadge({
  tech,
  color,
  baseAngle,
  progress,
}: {
  tech: string;
  color: { bg: string; text: string };
  baseAngle: number;
  progress: MotionValue<number>;
}) {
  const left = useTransform(progress, (p) => {
    const a = (baseAngle + p) * DEG;
    return `calc(50% + var(--orbit-r) * ${Math.sin(a).toFixed(4)})`;
  });
  const top = useTransform(progress, (p) => {
    const a = (baseAngle + p) * DEG;
    return `calc(50% - var(--orbit-r) * ${Math.cos(a).toFixed(4)})`;
  });

  return (
    <motion.div className="absolute" style={{ left, top, x: "-50%", y: "-50%" }}>
      <span
        className="block whitespace-nowrap rounded-full border px-2.5 py-1 font-mono text-[10px] shadow-sm backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-xs"
        style={{
          backgroundColor: `${color.bg}EE`,
          borderColor: color.bg,
          color: color.text,
        }}
      >
        {tech}
      </span>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Floating glow particle                                                      */
/* -------------------------------------------------------------------------- */
/**
 * Independent of the badge orbit: it has its own clock and its own path — a
 * tilted ellipse whose radius gently breathes in and out. Position, scale and
 * opacity all derive from that one clock, so it feels like it drifts nearer
 * and farther. It sits below the portrait and the badges, so it can pass behind
 * either but never covers them.
 */
function FloatingParticle({
  duration,
  rx,
  ry,
  drift,
  tilt,
  phase,
  direction,
  size,
  strength,
  reduceMotion,
}: {
  duration: number;
  rx: number;
  ry: number;
  drift: number;
  tilt: number;
  phase: number;
  direction: 1 | -1;
  size: number;
  strength: number;
  reduceMotion: boolean;
}) {
  const t = useMotionValue(0);

  useEffect(() => {
    if (reduceMotion) return;
    const controls = animate(t, 360, {
      duration,
      ease: "linear",
      repeat: Infinity,
    });
    return () => controls.stop();
  }, [t, duration, reduceMotion]);

  const point = (v: number) => {
    const a = (direction * v + phase) * DEG;
    const wobble = drift * Math.sin(2 * a + 1.3); // inward / outward drift
    const px = (rx + wobble) * Math.cos(a);
    const py = (ry + wobble * 0.8) * Math.sin(a);
    const c = Math.cos(tilt * DEG);
    const s = Math.sin(tilt * DEG);
    return {
      x: 50 + px * c - py * s,
      y: 50 + px * s + py * c,
      depth: (Math.sin(a) + 1) / 2, // 0 = far, 1 = near
    };
  };

  const left = useTransform(t, (v) => `${point(v).x.toFixed(3)}%`);
  const top = useTransform(t, (v) => `${point(v).y.toFixed(3)}%`);
  const scale = useTransform(t, (v) => 0.75 + 0.5 * point(v).depth);
  const opacity = useTransform(t, (v) => strength * (0.5 + 0.5 * point(v).depth));

  const pulse = reduceMotion
    ? undefined
    : { opacity: [0.7, 1, 0.7], scale: [0.9, 1.15, 0.9] };

  return (
    <motion.div
      className="pointer-events-none absolute z-[5]"
      style={{ left, top, x: "-50%", y: "-50%", scale, opacity, width: size, height: size }}
      aria-hidden="true"
    >
      {/* soft halo */}
      <motion.span
        className="absolute -inset-3 rounded-full bg-mint/60 blur-md"
        animate={pulse}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* core */}
      <motion.span
        className="relative block h-full w-full rounded-full bg-aqua shadow-[0_0_14px_3px_rgba(172,221,222,0.7)]"
        animate={pulse}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */
export function Hero() {
  const reduceMotion = useReducedMotion();
  const technologies = PROFILE.heroStack;

  // One shared clock (degrees) drives every orbiting badge.
  const orbitProgress = useMotionValue(0);

  useEffect(() => {
    if (reduceMotion) return;
    const controls = animate(orbitProgress, 360, {
      duration: ORBIT_SECONDS,
      ease: "linear",
      repeat: Infinity,
    });
    return () => controls.stop();
  }, [orbitProgress, reduceMotion]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20"
    >
      {/* Ambient pastel background */}
      <div
        className="pointer-events-none absolute -right-[10%] -top-32 h-[420px] w-[420px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #CAF1DE 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Glow behind the introduction — drifts very slowly */}
      <motion.div
        className="pointer-events-none absolute left-[-8%] top-24 h-[300px] w-[300px] rounded-full opacity-50 blur-3xl will-change-transform"
        style={{
          background:
            "radial-gradient(circle, #FFE7C7 0%, transparent 70%)",
        }}
        animate={
          reduceMotion
            ? undefined
            : { x: [0, 28, 0], y: [0, -16, 0], scale: [1, 1.08, 1] }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-content">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          {/* LEFT: Introduction */}
          <div className="min-w-0">
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-ink-soft"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-mint ring-2 ring-mint/40" />
              {PROFILE.location} · {PROFILE.yearsExperience}+ yrs
            </motion.p>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.2rem]"
            >
              {PROFILE.name}
              <span className="mt-2 block text-2xl font-medium text-ink-soft sm:text-3xl">
                {PROFILE.role}
              </span>
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-soft"
            >
              {PROFILE.heroTagline}
            </motion.p>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.17 }}
              className="mt-3 max-w-xl text-balance leading-relaxed text-ink-faint"
            >
              {PROFILE.heroSubtext}
            </motion.p>

            {/* Technology stack — chips reveal one after another */}
            {/* <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="mt-7 flex flex-wrap gap-2"
            >
              {technologies.map((tech, i) => {
                const color = TECH_COLORS[i % TECH_COLORS.length];

                return (
                  <motion.span
                    key={tech}
                    initial={
                      reduceMotion ? false : { opacity: 0, y: 8, scale: 0.92 }
                    }
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.34 + i * 0.06,
                      ease: "easeOut",
                    }}
                    className="rounded-full border px-3 py-1 font-mono text-xs"
                    style={{
                      backgroundColor: `${color.bg}55`,
                      borderColor: `${color.bg}99`,
                      color: color.text,
                    }}
                  >
                    {tech}
                  </motion.span>
                );
              })}
            </motion.div> */}

            {/* Action buttons — existing links preserved */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <motion.a
                href="#projects"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -2, boxShadow: "0 10px 22px -10px rgba(18,25,27,0.45)" }
                }
                whileTap={reduceMotion ? undefined : { scale: 0.98, y: 0 }}
                transition={{ type: "spring", stiffness: 380, damping: 26 }}
                className="group flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper"
              >
                View Projects
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </motion.a>

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

          {/* RIGHT: Portrait at the centre of an atom-like orbit system */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto flex aspect-square w-full max-w-[320px] items-center justify-center [--orbit-r:44%] sm:max-w-[420px] sm:[--orbit-r:47%]"
          >
            {/* Static inner circle */}
            <div
              className="absolute inset-[17%] rounded-full border border-line"
              aria-hidden="true"
            />

            {/* Static outer ring (same radius as the badge orbit) */}
            <div
              className="absolute rounded-full border border-mint/30"
              style={{ inset: ORBIT_INSET }}
              aria-hidden="true"
            />

            {/* Dashed orbital path — turns with the badges */}
            <motion.div
              className="absolute rounded-full border border-dashed border-mint/70"
              style={{ inset: ORBIT_INSET }}
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: ORBIT_SECONDS, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />

            {/* Secondary tilted elliptical orbit — slower, clockwise */}
            <motion.svg
              viewBox="0 0 100 100"
              className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            >
              <ellipse
                cx="50"
                cy="50"
                rx="40"
                ry="15"
                transform="rotate(32 50 50)"
                fill="none"
                stroke="#ACDDDE"
                strokeOpacity="0.75"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            </motion.svg>

            {/* Tertiary tilted ellipse — slower still, opposite direction */}
            <motion.svg
              viewBox="0 0 100 100"
              className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
              animate={reduceMotion ? undefined : { rotate: -360 }}
              transition={{ duration: 130, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            >
              <ellipse
                cx="50"
                cy="50"
                rx="40"
                ry="15"
                transform="rotate(-32 50 50)"
                fill="none"
                stroke="#F7D8BA"
                strokeOpacity="0.8"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            </motion.svg>

            {/* Floating glow particles — independent of the badge orbit */}
            <FloatingParticle
              duration={22}
              rx={40}
              ry={34}
              drift={4}
              tilt={-20}
              phase={30}
              direction={1}
              size={10}
              strength={1}
              reduceMotion={!!reduceMotion}
            />
            <FloatingParticle
              duration={34}
              rx={42}
              ry={30}
              drift={3}
              tilt={25}
              phase={200}
              direction={-1}
              size={6}
              strength={0.5}
              reduceMotion={!!reduceMotion}
            />

            {/* Stationary portrait */}
            <div className="relative z-10 h-[58%] w-[48%] overflow-hidden rounded-[48%_48%_24px_24px] border border-mint/60 bg-surface shadow-[0_0_70px_rgba(172,221,222,0.25)] sm:h-[62%] sm:w-[52%]">
              <Image
                src="/saurabh.jpeg"
                alt={`${PROFILE.name} — Data Engineer`}
                fill
                priority
                sizes="(max-width: 1024px) 55vw, 231px"
                className="object-cover object-top"
              />
            </div>

            {/* Technology badges: positioned on the circle, never rotated */}
            <div
              className="pointer-events-none absolute inset-0 z-20"
              aria-hidden="true"
            >
              {technologies.map((tech, i) => (
                <OrbitBadge
                  key={tech}
                  tech={tech}
                  color={TECH_COLORS[i % TECH_COLORS.length]}
                  baseAngle={(360 / technologies.length) * i}
                  progress={orbitProgress}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
