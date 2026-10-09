import { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";
import { SITE_URL } from "@/data/links";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", ...PROJECTS.map((p) => `/projects/${p.id}`)];
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
