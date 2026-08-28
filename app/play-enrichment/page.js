import CategoryPage from "../../components/CategoryPage";

export const metadata = {
  title: "Play & Enrichment",
  description:
    "Toys and enrichment products that keep dogs mentally engaged and physically active.",
  alternates: { canonical: "/play-enrichment" }
};

const items = [
  {
    title: "Durable Chew Toy",
    text: "Built for heavy chewers, with a shape designed for dental benefit.",
    tag: "Chewing"
  },
  {
    title: "Puzzle Feeder",
    text: "Turns mealtime into light mental enrichment for active minds.",
    tag: "Enrichment"
  },
  {
    title: "Snuffle Mat",
    text: "Hides kibble or treats in fabric folds to encourage natural foraging.",
    tag: "Enrichment"
  },
  {
    title: "Interactive Treat Ball",
    text: "Dispenses treats as it rolls, rewarding movement and problem-solving.",
    tag: "Play"
  },
  {
    title: "Tug Rope Toy",
    text: "A sturdy option for interactive play and light tug-of-war.",
    tag: "Play"
  },
  {
    title: "Flirt Pole",
    text: "Channels chase instincts into a structured, high-energy game.",
    tag: "Exercise"
  }
];

export default function PlayEnrichmentPage() {
  return (
    <CategoryPage
      eyebrow="Play & Enrichment"
      title="Play & Enrichment"
      intro="Toys and activities that keep a dog's mind and body engaged between walks."
      items={items}
    />
  );
}
