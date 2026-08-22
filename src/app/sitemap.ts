import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { SERVICES } from "@/data/services";
import { ROUTES } from "@/data/routes";
import { DESTINATIONS } from "@/data/destinations";
import { TRAVEL_GUIDE_ARTICLES } from "@/data/travelGuide";

const STATIC_PATHS = [
  "",
  "/services",
  "/routes",
  "/destinations",
  "/char-dham",
  "/fleet",
  "/about",
  "/contact",
  "/reviews",
  "/travel-guide",
  "/privacy-policy",
  "/terms-and-conditions",
  "/cancellation-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceEntries: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const routeEntries: MetadataRoute.Sitemap = ROUTES.map((r) => ({
    url: `${site.url}/routes/${r.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const destinationEntries: MetadataRoute.Sitemap = DESTINATIONS.map((d) => ({
    url: `${site.url}/destinations/${d.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const guideEntries: MetadataRoute.Sitemap = TRAVEL_GUIDE_ARTICLES.map((a) => ({
    url: `${site.url}/travel-guide/${a.slug}`,
    lastModified: a.publishedAt,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...serviceEntries, ...routeEntries, ...destinationEntries, ...guideEntries];
}
