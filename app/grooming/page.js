import CategoryPage from "../../components/CategoryPage";

const items = [
  {
    "title": "Shedding tools",
    "text": "Brushes and cleanup helpers for homes that seem to collect pet hair everywhere.",
    "tag": "Shedding"
  },
  {
    "title": "Bath-time picks",
    "text": "Useful bathing accessories for easier washes and less mess.",
    "tag": "Bath"
  },
  {
    "title": "Nail & paw care",
    "text": "Simple tools for routine nail and paw maintenance.",
    "tag": "Paw Care"
  }
];

export const metadata = {
  title: "Grooming without the drama."
};

export default function Page() {
  return (
    <CategoryPage
      eyebrow="PET CARE"
      title="Grooming without the drama."
      intro="Brushes, bathing tools, nail care, shedding solutions, and everyday grooming helpers."
      items={items}
    />
  );
}
