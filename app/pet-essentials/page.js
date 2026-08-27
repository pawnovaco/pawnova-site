import CategoryPage from "../../components/CategoryPage";

const items = [
  {
    "title": "Travel essentials",
    "text": "Portable bowls, carriers, car accessories, and road-trip helpers.",
    "tag": "Travel"
  },
  {
    "title": "Home organization",
    "text": "Storage and organization ideas for food, toys, leashes, and supplies.",
    "tag": "Home"
  },
  {
    "title": "Feeding essentials",
    "text": "Practical products for cleaner, easier daily feeding routines.",
    "tag": "Feeding"
  }
];

export const metadata = {
  title: "Pet essentials for real life."
};

export default function Page() {
  return (
    <CategoryPage
      eyebrow="EVERYDAY PICKS"
      title="Pet essentials for real life."
      intro="Everyday products for home, travel, feeding, organization, and making pet routines easier."
      items={items}
    />
  );
}
