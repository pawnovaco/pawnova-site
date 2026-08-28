import Link from "next/link";
import CategoryCard from "../components/CategoryCard";
import Reveal from "../components/Reveal";

const categories = [
  {
    eyebrow: "For Dogs",
    title: "Dog Finds",
    text: "Practical gear and everyday products that make life easier for dogs and their people.",
    href: "/dog-finds"
  },
  {
    eyebrow: "For Cats",
    title: "Cat Finds",
    text: "Smart, simple picks for feeding, play, and comfort — curated for cat households.",
    href: "/cat-finds"
  },
  {
    eyebrow: "Care",
    title: "Grooming",
    text: "Brushes, tools, and routines that keep coats, nails, and skin in good shape.",
    href: "/grooming"
  },
  {
    eyebrow: "Everyday",
    title: "Pet Essentials",
    text: "The unglamorous basics — bowls, mats, storage, travel gear — done right.",
    href: "/pet-essentials"
  }
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Paw Nova</span>
            <h1>Pet finds worth knowing about.</h1>
            <p className="hero-text">
              We dig through the noise to surface practical, well-reviewed
              products for dogs, cats, and the people who love them — no
              clutter, no filler.
            </p>
            <div className="hero-actions">
              <Link href="/dog-finds" className="button">
                Explore Finds
              </Link>
              <Link href="/about" className="button button-ghost">
                About Paw Nova
              </Link>
            </div>
            <p className="microcopy">
              As an Amazon Associate I earn from qualifying purchases.
            </p>
          </div>

          <div className="hero-card">
            <div className="hero-card-orbit orbit-one" />
            <div className="hero-card-orbit orbit-two" />
            <span className="hero-sparkle sparkle-1" aria-hidden="true">
              ✦
            </span>
            <span className="hero-sparkle sparkle-2" aria-hidden="true">
              ✦
            </span>
            <span className="hero-sparkle sparkle-3" aria-hidden="true">
              ✦
            </span>
            <span className="hero-paw" aria-hidden="true">
              🐾
            </span>
            <div className="hero-card-copy">
              <span>CURATED PICKS</span>
              <strong>Everyday products, actually worth buying.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <div>
                <span className="eyebrow">Browse</span>
                <h2>Shop by category</h2>
              </div>
            </div>
          </Reveal>
          <div className="category-grid">
            {categories.map((c, i) => (
              <Reveal key={c.href} delay={i * 80}>
                <CategoryCard {...c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split">
          <Reveal>
            <div>
              <span className="eyebrow eyebrow-light">Why Paw Nova</span>
              <h2>Finds that actually earn a spot in your home</h2>
            </div>
          </Reveal>
          <div className="feature-list">
            <Reveal delay={0}>
              <div>
                <strong>Hand-picked, not auto-generated</strong>
                <p>
                  Every product featured is chosen with a real use case in
                  mind — not pulled from a bestseller feed.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <strong>Focused on everyday problems</strong>
                <p>
                  We look for things that solve a real routine headache, not
                  just novelty items.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div>
                <strong>Simple, honest recommendations</strong>
                <p>
                  No inflated claims — just what a product is good at, and
                  who it's actually for.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">Get started</span>
                <h2>Start with today's most useful pet finds</h2>
              </div>
              <p>
                Browse curated picks across dogs, cats, grooming, and
                everyday essentials.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
