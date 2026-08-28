import CategoryPage from "../../components/CategoryPage";

export const metadata = { title: "Pet Essentials" };

const items = [
  {
    title: "Non-Slip Feeding Mat",
    text: "Catches spills and keeps bowls from sliding around the kitchen floor.",
    tag: "Feeding"
  },
  {
    title: "Collapsible Travel Bowl",
    text: "Packs flat for walks, hikes, and car trips.",
    tag: "Travel"
  },
  {
    title: "Airline-Approved Carrier",
    text: "A sturdy, well-ventilated carrier for trips and vet visits.",
    tag: "Travel"
  },
  {
    title: "Pet Hair Roller",
    text: "A reusable roller that actually holds up to daily use.",
    tag: "Home Care"
  },
  {
    title: "Storage Bin with Scoop Lid",
    text: "Keeps food fresh and makes portioning meals simple.",
    tag: "Storage"
  },
  {
    title: "Seatbelt Safety Clip",
    text: "A simple way to keep pets secure during car rides.",
    tag: "Travel"
  }
];

export default function PetEssentialsPage() {
  return (
    <CategoryPage
      eyebrow="Everyday"
      title="Pet Essentials"
      intro="The unglamorous basics — bowls, mats, storage, and travel gear — done right."
      items={items}
    />
  );
}
