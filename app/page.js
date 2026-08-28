import Link from "next/link";
import CategoryCard from "../components/CategoryCard";
import FindCard from "../components/FindCard";
import Reveal from "../components/Reveal";

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

const featuredFinds = [
  {
    title: "Durable Chew Toy",
    text: "Built for heavy chewers, with a shape designed for dental benefit.",
    tag: "Play & Enrichment"
  },
  {
    title: "No-Pull Harness",
    text: "Distributes pressure evenly for more comfortable, controlled walks.",
    tag: "Walking & Travel"
  },
  {
    title: "Orthopedic Dog Bed",
    text: "Supportive foam that helps cushion joints, especially for older dogs.",
    tag: "Beds & Comfort"
  },
  {
    title: "Slow-Feed Bowl",
    text: "Helps curb fast eating and reduce bloating risk for enthusiastic eaters.",
    tag: "Feeding"
  }
];

const guideTopics = [
  "5 Amazon Finds Every Dog Owner Should Know About",
  "Best Brushes for Dogs That Shed",
  "Products That Make Bath Time Easier",
  "Dog Travel Essentials",
  "New Puppy Essentials",
  "Things We Wish We Bought Earlier as Dog Owners"
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Paw Nova</span>
            <h1>Better Finds for Happier Dogs.</h1>
            <p className="hero-text">
              Discover useful dog products, practical picks, and everyday
              finds selected to make life with your dog a little better.
            </p>
            <div className="hero-actions">
              <Link href="/dog-finds" className="button">
                Explore Dog Finds
              </Link>
              <Link href="/about" className="button button-ghost">
                Our Mission
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
              <span>DOG-APPROVED PICKS</span>
              <strong>Useful dog products, actually worth buying.</strong>
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
                <h2>Find what your dog actually needs</h2>
              </div>
            </div>
          </Reveal>
          <div className="category-grid">
            {categories.map((c, i) => (
              <Reveal key={c.href} delay={i * 70}>
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
              <h2>Finding the good stuff for your best friend.</h2>
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
                <strong>Focused on everyday dog problems</strong>
                <p>
                  We research and curate useful dog products so owners can
                  spend less time searching and more time with their dog.
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
            <div className="section-heading">
              <div>
                <span className="eyebrow">Featured</span>
                <h2>A few current favorites</h2>
              </div>
            </div>
          </Reveal>
          <p className="muted section-disclosure">
            As an Amazon Associate I earn from qualifying purchases.
          </p>
          <div className="cards-grid">
            {featuredFinds.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <FindCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container narrow center-text">
          <Reveal>
            <span className="eyebrow">Our Mission</span>
            <h2>Good Finds Can Do a Little More.</h2>
            <p>
              When Paw Nova earns from qualifying purchases, we set aside a
              portion of our earnings to help provide food and supplies for
              dogs in need.
            </p>
            <Link href="/gives-back" className="button">
              Learn About Paw Nova Gives Back
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <div>
                <span className="eyebrow">Guides</span>
                <h2>Helpful reads for dog owners</h2>
              </div>
            </div>
          </Reveal>
          <div className="guide-grid">
            {guideTopics.map((topic, i) => (
              <Reveal key={topic} delay={(i % 3) * 80}>
                <div className="guide-card">
                  <span className="pill">Coming soon</span>
                  <p>{topic}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container narrow">
          <Reveal>
            <h2>How Paw Nova makes money</h2>
            <div className="info-box">
              <p>
                Some links on Paw Nova are Amazon affiliate links. If you buy
                something through one of them, Paw Nova may earn a small
                commission — at no additional cost to you. This never
                changes which products we choose to feature; usefulness
                comes first. Read the full{" "}
                <Link href="/affiliate-disclosure">
                  Affiliate Disclosure
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">Get started</span>
                <h2>Start with today's most useful dog finds</h2>
              </div>
              <p>
                Browse curated picks across grooming, play, travel, comfort,
                feeding, and everyday essentials.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
