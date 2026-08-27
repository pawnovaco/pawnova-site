import Link from "next/link";
import CategoryCard from "../components/CategoryCard";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">SMARTER PET FINDS</span>
            <h1>Pet finds that make everyday life a little easier.</h1>
            <p className="hero-text">
              Useful picks for dogs, cats, grooming, cleanup, travel, and the
              small everyday things pet owners actually care about.
            </p>

            <div className="hero-actions">
              <Link href="/dog-finds" className="button">
                Shop Dog Finds
              </Link>
              <Link href="/cat-finds" className="button button-ghost">
                Shop Cat Finds
              </Link>
            </div>

            <p className="microcopy">
              Curated recommendations. Clear explanations. No endless scrolling.
            </p>
          </div>

          <div className="hero-card">
            <div className="hero-card-orbit orbit-one" />
            <div className="hero-card-orbit orbit-two" />
            <div className="hero-paw">🐾</div>
            <div className="hero-card-copy">
              <span>PAW NOVA PICKS</span>
              <strong>Useful stuff for pets who run the house.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">BROWSE BY CATEGORY</span>
              <h2>Start with what your pet needs.</h2>
            </div>
          </div>

          <div className="category-grid">
            <CategoryCard
              eyebrow="DOGS"
              title="Dog Finds"
              text="Everyday products, walk-time upgrades, cleanup helpers, toys, and comfort."
              href="/dog-finds"
            />
            <CategoryCard
              eyebrow="CATS"
              title="Cat Finds"
              text="Smart picks for feeding, play, litter, comfort, and keeping curious cats busy."
              href="/cat-finds"
            />
            <CategoryCard
              eyebrow="CARE"
              title="Grooming"
              text="Brushes, bathing tools, nail care, shedding helpers, and cleanup essentials."
              href="/grooming"
            />
            <CategoryCard
              eyebrow="EVERYDAY"
              title="Pet Essentials"
              text="Useful basics for home, travel, feeding, storage, and everyday pet life."
              href="/pet-essentials"
            />
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split">
          <div>
            <span className="eyebrow eyebrow-light">WHY PAW NOVA</span>
            <h2>Less hype. More useful finds.</h2>
          </div>
          <div className="feature-list">
            <div>
              <strong>Problem-first picks</strong>
              <p>We start with real pet-owner problems, then look for products that can help.</p>
            </div>
            <div>
              <strong>Easy to browse</strong>
              <p>Short explanations and straightforward categories so you can find what you need quickly.</p>
            </div>
            <div>
              <strong>Built for real life</strong>
              <p>Home, travel, grooming, cleanup, feeding, and all the little routines in between.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-panel">
          <div>
            <span className="eyebrow">NEW FINDS COMING SOON</span>
            <h2>Follow Paw Nova for fresh pet finds and quick tips.</h2>
          </div>
          <p>
            Add your Instagram, TikTok, Facebook, and Pinterest links here once
            you are ready to send traffic from the site back to your social pages.
          </p>
        </div>
      </section>
    </>
  );
}
