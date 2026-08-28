import CategoryPage from "../../components/CategoryPage";

export const metadata = { title: "Grooming" };

const items = [
  {
    title: "Deshedding Tool",
    text: "Reaches the undercoat to cut down on loose hair around the house.",
    tag: "Coat Care"
  },
  {
    title: "Slicker Brush",
    text: "Good for everyday detangling on medium and long coats.",
    tag: "Coat Care"
  },
  {
    title: "Nail Grinder",
    text: "A quieter, more controlled alternative to traditional clippers.",
    tag: "Nail Care"
  },
  {
    title: "Waterless Shampoo",
    text: "A quick option for freshening up between full baths.",
    tag: "Bathing"
  },
  {
    title: "Ear Cleaning Wipes",
    text: "Gentle, pre-moistened wipes for routine ear maintenance.",
    tag: "Hygiene"
  },
  {
    title: "Grooming Glove",
    text: "Combines petting and light deshedding in one easy motion.",
    tag: "Coat Care"
  }
];

export default function GroomingPage() {
  return (
    <CategoryPage
      eyebrow="Care"
      title="Grooming"
      intro="Tools and routines that help keep coats, nails, and skin in good shape between visits to the groomer."
      items={items}
    />
  );
}
