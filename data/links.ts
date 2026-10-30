/**
 * Centralized external link configuration.
 *
 * The resume text only contained the literal words "linkedin" / "github"
 * (no actual URLs), so those two, plus the resume file and marksheet link,
 * are left as clearly marked placeholders below. Nothing here is invented —
 * fill in the real destinations and every button/link on the site updates
 * automatically.
 */

export const SITE_URL = "https://saurabhpatil.dev"; // TODO: replace with your real deployed domain

export const PERSONAL_LINKS = {
  email: "saurabhpatil.mca@gmail.com",
  phone: "+91 86520 70500",
  location: "Mumbai, Maharashtra, India",

  // TODO: paste your real LinkedIn profile URL
  linkedin: "https://www.linkedin.com/in/saurabhmohanpatil",

  // TODO: paste your real GitHub profile URL
  github: "https://github.com/Saurabhpatil-1997",

  // TODO: add your resume PDF to /public/docs/resume.pdf and this will
  // point to it automatically. Or replace with a hosted URL.
  resumeUrl: "/docs/SaurabhPatilCV.pdf",

  // TODO: replace with your marksheet's Google Drive share link
  // (Drive links open in a new tab in-browser by default — no changes needed
  // on the component side once this is set).
  marksheetUrl: "https://drive.google.com/REPLACE_ME",
};

/**
 * Per-project GitHub repository links. Keys match `id` in data/projects.ts.
 * Leave a project's value as `null` until you have a real repo URL —
 * the UI will hide the "View Repository" button rather than show a dead link.
 */
export const PROJECT_REPO_LINKS: Record<string, string | null> = {
  "kipp-baltimore": null, // TODO: add repo URL
  "dpps": null, // TODO: add repo URL
  "inspiroz-insights": null, // TODO: add repo URL
  "zoho-automation": null, // TODO: add repo URL
};
