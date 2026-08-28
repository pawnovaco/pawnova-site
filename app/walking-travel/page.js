import CategoryPage from "../../components/CategoryPage";

export const metadata = {
  title: "Walking & Travel",
  description:
    "Harnesses, leashes, and travel gear that make walks and trips easier with a dog.",
  alternates: { canonical: "/walking-travel" }
};

const items = [
  {
    title: "No-Pull Harness",
    text: "Distributes pressure evenly for more comfortable, controlled walks.",
    tag: "Walking"
  },
  {
    title: "Reflective Leash",
    text: "Adds visibility for early morning or evening walks.",
    tag: "Walking"
  },
  {
    title: "Travel Water Bottle",
    text: "A leak-resistant bottle with an attached bowl for walks and trips.",
    tag: "Travel"
  },
  {
    title: "Collapsible Travel Bowl",
    text: "Packs flat for walks, hikes, and car trips.",
    tag: "Travel"
  },
  {
    title: "Seatbelt Safety Clip",
    text: "A simple way to help keep a dog secure during car rides.",
    tag: "Car Safety"
  },
  {
    title: "Car Seat Cover",
    text: "Protects upholstery from mud, hair, and scratches on the road.",
    tag: "Car Safety"
  }
];

export default function WalkingTravelPage() {
  return (
    <CategoryPage
      eyebrow="Walking & Travel"
      title="Walking & Travel"
      intro="Gear that makes daily walks and trips away from home a little smoother."
      items={items}
    />
  );
}
