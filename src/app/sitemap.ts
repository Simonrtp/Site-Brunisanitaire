import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();
  const routes = ["", "/depannage-rapide", "/chauffe-eaux", "/syndic-copro", "/mentions-legales"] as const;

  return routes.map((path) => ({
    url: path === "" ? base : `${base}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
