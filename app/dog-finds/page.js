import CategoryCard from "../../components/CategoryCard";
import Reveal from "../../components/Reveal";

export const metadata = {
  title: "Dog Finds",
  description:
    "Browse Paw Nova's dog product picks by category — grooming, play, walking and travel, beds and comfort, feeding, and everyday essentials.",
  alternates: { canonical: "/dog-finds" }
};

const categories = [
  {
    eyebrow: "Care",
    title: "Grooming",
    text: "Brushes, tools, and routines that keep coats, nails, and skin in good shape.",
    href: "/grooming"
  },
  {
    eyebrow: "Play",
    title: "Play & Enrichment",
    text: "Toys and activities that keep a dog's mind and body engaged.",
    href: "/play-enrichment"
  },
  {
    eyebrow: "Out & About",
    title: "Walking & Travel",
    text: "Harnesses, leashes, and travel gear for walks and trips.",
    href: "/walking-travel"
  },
  {
    eyebrow: "Rest",
    title: "Beds & Comfort",
    text: "Beds, mats, and comfort products for wherever a dog winds down.",
    href: "/beds-comfort"
  },
  {
    eyebrow: "Mealtime",
    title: "Feeding",
    text: "Bowls, feeders, and accessories that make mealtime easier.",
    href: "/feeding"
  },
  {
    eyebrow: "Everyday",
    title: "Everyday Essentials",
    text: "The unglamorous basics — cleanup, hygiene, and everyday gear.",
    href: "/everyday-essentials"
  }
];

export default function DogFindsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">Dog Finds</span>
          <h1>Find what your dog actually needs</h1>
          <p>
            Browse Paw Nova's picks by category — practical, well-considered
            products for grooming, play, travel, comfort, feeding, and
            everyday life with a dog.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="category-grid">
            {categories.map((c, i) => (
              <Reveal key={c.href} delay={i * 70}>
                <CategoryCard {...c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
