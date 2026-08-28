const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/dog-finds", priority: 0.9, changeFrequency: "weekly" },
  { path: "/grooming", priority: 0.8, changeFrequency: "weekly" },
  { path: "/play-enrichment", priority: 0.8, changeFrequency: "weekly" },
  { path: "/walking-travel", priority: 0.8, changeFrequency: "weekly" },
  { path: "/beds-comfort", priority: 0.8, changeFrequency: "weekly" },
  { path: "/feeding", priority: 0.8, changeFrequency: "weekly" },
  { path: "/everyday-essentials", priority: 0.8, changeFrequency: "weekly" },
  { path: "/gives-back", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.4, changeFrequency: "yearly" },
  { path: "/affiliate-disclosure", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" }
];

export default function sitemap() {
  const base = "https://pawnovaco.com";
  const now = new Date();

  return routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}
