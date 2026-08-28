import CategoryPage from "../../components/CategoryPage";

export const metadata = {
  title: "Feeding",
  description:
    "Bowls, feeders, and feeding accessories that make daily meals easier and safer.",
  alternates: { canonical: "/feeding" }
};

const items = [
  {
    title: "Slow-Feed Bowl",
    text: "Helps curb fast eating and reduce bloating risk for enthusiastic eaters.",
    tag: "Feeding"
  },
  {
    title: "Elevated Feeding Stand",
    text: "Raises bowls to a more comfortable height for larger dogs.",
    tag: "Feeding"
  },
  {
    title: "Lick Mat",
    text: "Spreads food thin to slow eating and give dogs something to focus on.",
    tag: "Feeding"
  },
  {
    title: "Non-Slip Feeding Mat",
    text: "Catches spills and keeps bowls from sliding around the kitchen floor.",
    tag: "Feeding"
  },
  {
    title: "Automatic Water Dispenser",
    text: "Keeps fresh water available throughout the day, especially useful for busy schedules.",
    tag: "Hydration"
  },
  {
    title: "Food Storage Bin",
    text: "Keeps kibble fresh and makes portioning meals simple.",
    tag: "Storage"
  }
];

export default function FeedingPage() {
  return (
    <CategoryPage
      eyebrow="Feeding"
      title="Feeding"
      intro="Practical picks for mealtime, hydration, and keeping food fresh."
      items={items}
    />
  );
}
