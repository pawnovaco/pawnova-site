import CategoryPage from "../../components/CategoryPage";

export const metadata = { title: "Dog Finds" };

const items = [
  {
    title: "Slow-Feed Bowl",
    text: "Helps curb fast eating and reduce bloating risk for enthusiastic eaters.",
    tag: "Feeding"
  },
  {
    title: "No-Pull Harness",
    text: "Distributes pressure evenly for more comfortable, controlled walks.",
    tag: "Walking"
  },
  {
    title: "Durable Chew Toy",
    text: "Built for heavy chewers, with a shape designed for dental benefit.",
    tag: "Play"
  },
  {
    title: "Cooling Mat",
    text: "A gel-based mat that helps dogs stay comfortable in warmer months.",
    tag: "Comfort"
  },
  {
    title: "Travel Water Bottle",
    text: "A leak-resistant bottle with an attached bowl for walks and trips.",
    tag: "Travel"
  },
  {
    title: "Puzzle Feeder",
    text: "Turns mealtime into light mental enrichment for active minds.",
    tag: "Enrichment"
  }
];

export default function DogFindsPage() {
  return (
    <CategoryPage
      eyebrow="For Dogs"
      title="Dog Finds"
      intro="Practical, well-reviewed products that make everyday life with a dog a little easier."
      items={items}
    />
  );
}
