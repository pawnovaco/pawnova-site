import CategoryPage from "../../components/CategoryPage";

const items = [
  {
    "title": "Feeding favorites",
    "text": "Bowls, mats, feeders, fountains, and practical mealtime helpers.",
    "tag": "Feeding"
  },
  {
    "title": "Play & enrichment",
    "text": "Toys and interactive products that help keep cats active and engaged.",
    "tag": "Play"
  },
  {
    "title": "Litter & cleanup",
    "text": "Products that can make litter areas cleaner and easier to manage.",
    "tag": "Cleanup"
  }
];

export const metadata = {
  title: "Smart finds for curious cats."
};

export default function Page() {
  return (
    <CategoryPage
      eyebrow="CAT PICKS"
      title="Smart finds for curious cats."
      intro="Useful products for feeding, litter, play, comfort, grooming, and keeping cats entertained."
      items={items}
    />
  );
}
