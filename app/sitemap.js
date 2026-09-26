import { products, guides } from "../lib/catalog";

const base = "https://pawnovaco.com";

const staticRoutes = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/products", changeFrequency: "weekly", priority: 0.9 },
  { path: "/guides", changeFrequency: "weekly", priority: 0.9 },
  { path: "/grooming", changeFrequency: "weekly", priority: 0.8 },
  { path: "/feeding", changeFrequency: "weekly", priority: 0.8 },
  { path: "/walking-travel", changeFrequency: "weekly", priority: 0.8 },
  { path: "/beds-comfort", changeFrequency: "weekly", priority: 0.8 },
  { path: "/play-enrichment", changeFrequency: "weekly", priority: 0.8 },
  { path: "/everyday-essentials", changeFrequency: "weekly", priority: 0.8 },
  { path: "/gives-back", changeFrequency: "monthly", priority: 0.6 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.5 },
  { path: "/affiliate-disclosure", changeFrequency: "yearly", priority: 0.3 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap() {
  const siteUpdated = new Date("2026-09-26");

  return [
    ...staticRoutes.map(({ path, changeFrequency, priority }) => ({
      url: `${base}${path}`,
      lastModified: siteUpdated,
      changeFrequency,
      priority,
    })),
    ...products.map((product) => ({
      url: `${base}/products/${product.slug}`,
      lastModified: new Date(product.updated || "2026-09-26"),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...guides.map((guide) => ({
      url: `${base}/guides/${guide.slug}`,
      lastModified: new Date(guide.updated || "2026-09-26"),
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
