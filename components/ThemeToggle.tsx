"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // The blocking script in layout.tsx already set the class on <html>
  // before hydration (to avoid a flash of the wrong theme) — this just
  // reads that state into React so the switch renders correctly.
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // localStorage unavailable (e.g. private browsing) — theme just
      // won't persist across visits, which is a fine fallback.
    }
  };

  // Reserve the same footprint before mount so nothing shifts on hydration.
  if (!mounted) {
    return <div className="h-8 w-14 rounded-full border border-line bg-surface" aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggle}
      className="relative flex h-8 w-14 shrink-0 items-center rounded-full border border-line bg-surface px-1 transition-colors"
    >
      <span
        className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-paper shadow-sm transition-transform duration-300 ease-out"
        style={{ transform: dark ? "translateX(24px)" : "translateX(0px)" }}
      >
        {dark ? <Moon size={13} aria-hidden="true" /> : <Sun size={13} aria-hidden="true" />}
      </span>
    </button>
  );
}
