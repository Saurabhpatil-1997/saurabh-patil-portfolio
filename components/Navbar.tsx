"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Github, FileText } from "lucide-react";
import { PERSONAL_LINKS } from "@/data/links";
import { PROFILE } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8" aria-label="Primary">
        <Link href="#hero" className="font-display text-base font-semibold tracking-tight text-ink">
          {PROFILE.name}
          <span className="ml-2 hidden font-mono text-xs font-normal text-ink-faint sm:inline">/{PROFILE.role.toLowerCase().replace(" ", "-")}</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-ink-soft transition-colors hover:text-ink">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href={PERSONAL_LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
            aria-label="Open GitHub profile in a new tab"
          >
            <Github size={15} aria-hidden="true" />
            GitHub
          </a>
          <a
            href={PERSONAL_LINKS.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-1.5 text-sm text-paper transition-opacity hover:opacity-85"
            aria-label="Open resume in a new tab"
          >
            <FileText size={15} aria-hidden="true" />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            className="flex items-center justify-center rounded-md p-2 text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-paper px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-sm text-ink-soft hover:bg-mint/40 hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex gap-3">
            <a
              href={PERSONAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded-full border border-line px-3.5 py-2 text-center text-sm text-ink-soft"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_LINKS.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded-full bg-ink px-3.5 py-2 text-center text-sm text-paper"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
