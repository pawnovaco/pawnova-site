import CategoryPage from "../../components/CategoryPage";

const items = [
  {
    "title": "Walk-time upgrades",
    "text": "Useful accessories that can make daily walks smoother and easier.",
    "tag": "Walks"
  },
  {
    "title": "Cleanup helpers",
    "text": "Simple products for hair, muddy paws, messes, and everyday cleanup.",
    "tag": "Cleanup"
  },
  {
    "title": "Comfort picks",
    "text": "Beds, blankets, calming accessories, and cozy everyday essentials.",
    "tag": "Comfort"
  }
];

export const metadata = {
  title: "Dog finds worth knowing about."
};

export default function Page() {
  return (
    <CategoryPage
      eyebrow="DOG PICKS"
      title="Dog finds worth knowing about."
      intro="Practical products for walks, feeding, cleanup, travel, comfort, and everyday dog life."
      items={items}
    />
  );
}
