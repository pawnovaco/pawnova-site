import CategoryPage from "../../components/CategoryPage";

export const metadata = {
  title: "Everyday Essentials",
  description:
    "The everyday basics that make life easier for dogs and the people who look after them.",
  alternates: { canonical: "/everyday-essentials" }
};

const items = [
  {
    title: "Pet Hair Roller",
    text: "A reusable roller that actually holds up to daily use.",
    tag: "Home Care"
  },
  {
    title: "Poop Bag Dispenser",
    text: "Clips to a leash and keeps bags within easy reach on walks.",
    tag: "Walks"
  },
  {
    title: "Multi-Purpose Dog Wipes",
    text: "Handy for quick paw and coat clean-ups after a muddy walk.",
    tag: "Hygiene"
  },
  {
    title: "Absorbent Dog Towel",
    text: "Dries a wet coat faster after baths, rain, or trips to the lake.",
    tag: "Home Care"
  },
  {
    title: "ID Tag",
    text: "A simple, low-cost way to help a dog find its way home if lost.",
    tag: "Safety"
  },
  {
    title: "Airline-Approved Carrier",
    text: "A sturdy, well-ventilated carrier for smaller dogs on trips or at the vet.",
    tag: "Travel Gear"
  }
];

export default function EverydayEssentialsPage() {
  return (
    <CategoryPage
      eyebrow="Everyday Essentials"
      title="Everyday Essentials"
      intro="The unglamorous basics — cleanup, hygiene, and everyday gear — done right."
      items={items}
    />
  );
}
