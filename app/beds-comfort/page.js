import CategoryPage from "../../components/CategoryPage";

export const metadata = {
  title: "Beds & Comfort",
  description:
    "Beds, mats, and comfort products that help dogs rest well at home and on the road.",
  alternates: { canonical: "/beds-comfort" }
};

const items = [
  {
    title: "Cooling Mat",
    text: "A gel-based mat that helps dogs stay comfortable in warmer months.",
    tag: "Comfort"
  },
  {
    title: "Orthopedic Dog Bed",
    text: "Supportive foam that helps cushion joints, especially for older dogs.",
    tag: "Comfort"
  },
  {
    title: "Calming Donut Bed",
    text: "A raised-rim design some dogs find cozy and secure for settling in.",
    tag: "Comfort"
  },
  {
    title: "Elevated Cot Bed",
    text: "Keeps dogs off hot or cold floors with breathable, easy-clean fabric.",
    tag: "Comfort"
  },
  {
    title: "Crate Mat",
    text: "A cushioned liner that makes crate time more comfortable.",
    tag: "Comfort"
  },
  {
    title: "Dog Blanket",
    text: "A soft layer for the couch, car seat, or a chilly evening.",
    tag: "Comfort"
  }
];

export default function BedsComfortPage() {
  return (
    <CategoryPage
      eyebrow="Beds & Comfort"
      title="Beds & Comfort"
      intro="Rest and comfort products for wherever a dog spends downtime."
      items={items}
    />
  );
}
