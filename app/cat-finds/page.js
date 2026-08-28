import CategoryPage from "../../components/CategoryPage";

export const metadata = { title: "Cat Finds" };

const items = [
  {
    title: "Covered Litter Box",
    text: "Helps contain litter tracking while giving shy cats more privacy.",
    tag: "Litter"
  },
  {
    title: "Wall-Mounted Perch",
    text: "Space-saving climbing spot that gives cats a good vantage point.",
    tag: "Enrichment"
  },
  {
    title: "Automatic Feeder",
    text: "Keeps mealtimes consistent, useful for multi-cat or busy households.",
    tag: "Feeding"
  },
  {
    title: "Interactive Wand Toy",
    text: "Encourages daily play and helps burn off pent-up energy.",
    tag: "Play"
  },
  {
    title: "Self-Grooming Brush",
    text: "A corner-mounted brush cats can use on their own terms.",
    tag: "Grooming"
  },
  {
    title: "Cat Water Fountain",
    text: "Flowing water can encourage cats to drink more throughout the day.",
    tag: "Hydration"
  }
];

export default function CatFindsPage() {
  return (
    <CategoryPage
      eyebrow="For Cats"
      title="Cat Finds"
      intro="Simple, well-considered picks for feeding, play, and comfort in cat households."
      items={items}
    />
  );
}
