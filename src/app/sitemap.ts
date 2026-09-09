import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const BASE_URL = "https://sapiohome.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/projects",
    "/properties",
    "/company-profile",
    "/property-management",
    "/team",
    "/careers",
    "/faq",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
