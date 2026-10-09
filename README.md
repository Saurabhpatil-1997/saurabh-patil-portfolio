# Saurabh Patil — Data Engineer Portfolio

A premium, content-driven portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. All personal content comes from `saurabhpatil.mca@gmail.com`'s resume — nothing was invented.

## Before you deploy — fill these in

Every external link lives in **one file**: `data/links.ts`. Open it and replace:

| Placeholder | What to do |
|---|---|
| `PERSONAL_LINKS.linkedin` | Paste your real LinkedIn profile URL |
| `PERSONAL_LINKS.github` | Paste your real GitHub profile URL |
| `PERSONAL_LINKS.resumeUrl` | Drop your resume PDF into `public/docs/resume.pdf` (already wired up), or replace with a hosted URL |
| `PERSONAL_LINKS.marksheetUrl` | Paste your marksheet's Google Drive share link |
| `PROJECT_REPO_LINKS` | Add each project's real GitHub repo URL. Leave `null` and the "View Repository" button hides itself automatically rather than showing a dead link |
| `SITE_URL` (top of file) | Your real deployed domain, once you have one — used for SEO metadata and the sitemap |

No certifications section was built, since the resume didn't list any — add `data/certifications.ts` and a `<Certifications />` component later if that changes.

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no config needed. Deploy.
4. Once you have your real domain, update `SITE_URL` in `data/links.ts` and redeploy.

## Where content lives

```
data/
  portfolio.ts     — name, summary, hero copy, about highlights/paragraphs
  skills.ts         — categorized technical skills
  experience.ts     — professional experience timeline
  projects.ts        — project problem/solution/pipeline/concepts
  education.ts       — degrees
  links.ts            — every external URL, in one place
```

Edit these files to update content — no need to touch any component.

## Project structure

```
app/
  layout.tsx              — global chrome, SEO metadata
  page.tsx                 — assembles all homepage sections
  projects/[slug]/page.tsx — dedicated project detail pages
  sitemap.ts / robots.ts   — SEO
components/
  Navbar, Hero, About, Skills, Experience, Projects,
  ProjectCard, PipelineDiagram, PipelineRail, Education,
  Contact, Footer
```

## Design notes

- Palette is the exact pastel set provided, used only as accents against a near-white base — never as body text color.
- Type system: Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono (labels/badges/data) — all self-hosted via `@fontsource` packages, so there are no external font requests.
- Signature element: the left-edge "pipeline rail" (desktop only) reframes the page itself as a pipeline — Source → Raw → Staged → Modeled → Transformed → Validated → Served — tracking scroll position through the site's own sections.
- Every project's data pipeline is rendered from its actual technology list in `data/projects.ts`, not a generic template.
