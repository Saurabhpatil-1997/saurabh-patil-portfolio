import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base neutrals now read from CSS variables (see app/globals.css) so
        // toggling the `dark` class on <html> re-themes the whole site
        // without touching any component.
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        ink: {
          DEFAULT: "rgb(var(--color-ink) / <alpha-value>)",
          soft: "rgb(var(--color-ink-soft) / <alpha-value>)",
          faint: "rgb(var(--color-ink-faint) / <alpha-value>)",
        },
        line: "rgb(var(--color-line) / <alpha-value>)",
        // Locked palette — used only as accents, never as body text color.
        aqua: "#ACDDDE",
        mint: "#CAF1DE",
        leaf: "#E1F8DC",
        cream: "#FEF8DD",
        peach: "#FFE7C7",
        clay: "#F7D8BA",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(18,25,27,0.04), 0 8px 24px -12px rgba(18,25,27,0.10)",
        cardHover: "0 1px 2px rgba(18,25,27,0.05), 0 16px 36px -14px rgba(18,25,27,0.16)",
      },
      borderRadius: {
        card: "14px",
      },
      keyframes: {
        flow: {
          "0%": { strokeDashoffset: "24" },
          "100%": { strokeDashoffset: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        flow: "flow 1.2s linear infinite",
        fadeUp: "fadeUp 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
