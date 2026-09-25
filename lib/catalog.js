import products from "../data/products.json";
import guides from "../data/guides.json";

export { products, guides };
export const categoryMap = {
  "grooming": {
    "label": "Grooming",
    "description": "Coat, bath, nail, dental, and everyday grooming tools"
  },
  "walking-travel": {
    "label": "Walking & Travel",
    "description": "Harnesses, leashes, car gear, and portable essentials"
  },
  "beds-comfort": {
    "label": "Beds & Comfort",
    "description": "Rest, crate, cooling, warming, and home comfort picks"
  },
  "feeding": {
    "label": "Feeding & Hydration",
    "description": "Bowls, feeders, storage, hydration, and mealtime tools"
  },
  "play-enrichment": {
    "label": "Play & Enrichment",
    "description": "Chew, fetch, puzzle, tug, and enrichment ideas"
  },
  "everyday-essentials": {
    "label": "Everyday Essentials",
    "description": "Cleanup, home care, safety, and practical daily basics"
  }
};
export function getProduct(slug){ return products.find((p)=>p.slug===slug); }
export function getGuide(slug){ return guides.find((g)=>g.slug===slug); }
export function productsForCategory(category){ return products.filter((p)=>p.category===category); }
