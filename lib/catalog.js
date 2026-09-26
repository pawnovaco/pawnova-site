import products from "../data/products.json";
import guides from "../data/guides.json";

export { products, guides };
export const categoryMap = {
  "beds-and-comfort": {
    "label": "Beds & Comfort",
    "description": "Beds, blankets, calming spaces, and comfort gear."
  },
  "cleanup-and-home": {
    "label": "Cleanup & Home",
    "description": "Pee pads, cleanup tools, and home-protection essentials."
  },
  "crates-and-playpens": {
    "label": "Crates & Playpens",
    "description": "Crates, pens, and safe-space equipment."
  },
  "dog-food": {
    "label": "Dog Food",
    "description": "Dry, wet, and specialty dog food options to compare."
  },
  "dog-treats": {
    "label": "Dog Treats",
    "description": "Training rewards, chews, and everyday treat options."
  },
  "feeding-and-hydration": {
    "label": "Feeding & Hydration",
    "description": "Bowls, feeders, fountains, storage, and mealtime tools."
  },
  "grooming-and-hygiene": {
    "label": "Grooming & Hygiene",
    "description": "Coat, bath, dental, ear, paw, and everyday hygiene finds."
  },
  "health-and-supplements": {
    "label": "Health & Supplements",
    "description": "Supplements and wellness products that need extra care and context."
  },
  "pet-essentials": {
    "label": "Pet Essentials",
    "description": "Practical everyday gear for life with pets."
  },
  "toys-and-enrichment": {
    "label": "Toys & Enrichment",
    "description": "Chew, fetch, puzzle, tug, and enrichment ideas."
  },
  "training": {
    "label": "Training",
    "description": "Training tools and practical behavior-support gear."
  },
  "travel-and-car": {
    "label": "Travel & Car",
    "description": "Car seats, carriers, travel gear, and road-trip essentials."
  },
  "walking-and-outdoor": {
    "label": "Walking & Outdoor",
    "description": "Leashes, harnesses, outdoor gear, and walk-time essentials."
  }
};
export function getProduct(slug){ return products.find((p)=>p.slug===slug); }
export function getGuide(slug){ return guides.find((g)=>g.slug===slug); }
const legacyCategoryBridge={
  "grooming":["grooming-and-hygiene"],
  "walking-travel":["travel-and-car","walking-and-outdoor"],
  "beds-comfort":["beds-and-comfort","crates-and-playpens"],
  "feeding":["feeding-and-hydration","dog-food","dog-treats","health-and-supplements"],
  "play-enrichment":["toys-and-enrichment","training"],
  "everyday-essentials":["pet-essentials","cleanup-and-home"]
};
export function productsForCategory(category){ const cats=legacyCategoryBridge[category]||[category]; return products.filter((p)=>cats.includes(p.category)); }
