import Link from "next/link";
import ProductCard from "../components/ProductCard";
import AffiliateDisclosure from "../components/AffiliateDisclosure";
import { products, guides, categoryMap } from "../lib/catalog";

const proofPoints = [
  ["120", "curated finds"],
  ["6", "practical categories"],
  ["0", "pay-to-rank placements"],
];

export default function Home() {
  const featured = [products[20], products[40], products[60], products[80], products[100], products[0]];
  const categoryEntries = Object.entries(categoryMap);

  return (
    <>
      <section className="hero hero-editorial hero-pet-visual">
        <video className="hero-pet-video" autoPlay muted loop playsInline preload="metadata" poster="/media/pawnova-dogs-fetch.png">
          <source src="/media/pawnova-dog-park-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-pet-overlay" />
        <div className="container hero-grid hero-pet-content">
          <div className="hero-copy">
            <span className="eyebrow">INDEPENDENT PET PRODUCT DISCOVERY</span>
            <h1>Better pet finds start with a better reason to recommend them.</h1>
            <p className="hero-text">
              Paw Nova organizes useful dog products around real needs, not endless storefront clutter. Explore practical shortlists, buying guides, and clear notes that help you narrow the search before you shop.
            </p>
            <div className="hero-actions">
              <Link href="/dog-finds" className="button">Explore Paw Nova Finds</Link>
              <Link href="/guides" className="button button-ghost">Read the Guides</Link>
            </div>
            <div className="trust-row">
              <span>Useful first</span><span>Clear affiliate disclosure</span><span>No fake ratings</span>
            </div>
            <AffiliateDisclosure compact />
          </div>

          <div className="discovery-panel">
            <div className="discovery-topline"><span>THE PAW NOVA STANDARD</span><span>01 / DISCOVER</span></div>
            <div className="discovery-main">
              <span className="discovery-kicker">Finds with context</span>
              <h2>Less scrolling.<br/>More useful choices.</h2>
              <p>We start with the problem, explain what matters, then point you toward products worth considering.</p>
            </div>
            <div className="discovery-steps">
              <div><b>01</b><span>Start with a real pet-owner need</span></div>
              <div><b>02</b><span>Understand what to look for</span></div>
              <div><b>03</b><span>Compare a focused shortlist</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip">
        <div className="container proof-grid">
          {proofPoints.map(([number,label]) => <div key={label}><strong>{number}</strong><span>{label}</span></div>)}
          <div className="proof-note">Built to help you research before you buy.</div>
        </div>
      </section>

      <section className="section browse-section">
        <div className="container">
          <div className="section-heading section-heading-wide">
            <div><span className="eyebrow">SHOP BY NEED</span><h2>Start with what you are trying to solve.</h2></div>
            <p>Good recommendations need context. Choose a category, understand the use case, then explore the products that fit it.</p>
          </div>
          <div className="category-grid category-grid-editorial">
            {categoryEntries.map(([slug,c], index) => <Link className="category-card category-card-editorial" href={`/${slug}`} key={slug}>
              <div className="category-number">0{index + 1}</div>
              <div><span className="eyebrow">20 CURATED FINDS</span><h3>{c.label}</h3><p>{c.description}.</p></div>
              <span className="round-arrow" aria-hidden="true">↗</span>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="pet-life-strip">
        <div className="pet-life-grid">
          <div className="pet-life-image pet-life-large" style={{backgroundImage: "url('/media/pawnova-dog-park-pack.png')"}}><span>Play</span></div>
          <div className="pet-life-image" style={{backgroundImage: "url('/media/pawnova-sleeping-pets.png')"}}><span>Rest</span></div>
          <div className="pet-life-image" style={{backgroundImage: "url('/media/pawnova-dog-cat-yard.png')"}}><span>Everyday life</span></div>
        </div>
      </section>

      <section className="section section-dark editorial-dark">
        <div className="container credibility-grid">
          <div className="credibility-lead"><span className="eyebrow eyebrow-light">WHY PAW NOVA</span><h2>A recommendation should earn its place.</h2><p>We are building Paw Nova around usefulness, transparency, and better product discovery. Affiliate links help support the site, but they do not decide what deserves attention.</p><Link href="/about" className="button button-light">Our mission and approach</Link></div>
          <div className="principles">
            <article><span>01</span><div><h3>Problem before product</h3><p>We organize finds around actual needs like grooming, travel, feeding, comfort, play, and everyday care.</p></div></article>
            <article><span>02</span><div><h3>Context before the click</h3><p>Our guides explain what matters so you can decide whether a product type even makes sense for your dog.</p></div></article>
            <article><span>03</span><div><h3>Transparent recommendations</h3><p>No invented ratings, stale prices, or paid placement pretending to be editorial judgment.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section finds-section">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">PAW NOVA FINDS</span><h2>Useful places to start.</h2></div><Link href="/dog-finds" className="text-link">Browse all 120 finds →</Link></div>
          <div className="cards-grid">{featured.map(p => <ProductCard key={p.slug} product={p}/>)}</div>
        </div>
      </section>

      <section className="section section-soft guides-home">
        <div className="container">
          <div className="section-heading section-heading-wide"><div><span className="eyebrow">BUYING GUIDES</span><h2>Know what matters before opening Amazon.</h2></div><p>Our guides are designed to make the shopping decision clearer, not to add another wall of products to scroll through.</p></div>
          <div className="guide-grid">{guides.slice(0,6).map((g,index)=><article className="guide-card guide-card-editorial" key={g.slug}><span className="guide-index">0{index+1}</span><span className="pill">{g.cluster}</span><h3>{g.title}</h3><p>{g.description}</p><Link href={`/guides/${g.slug}`} className="text-link">Read guide →</Link></article>)}</div>
        </div>
      </section>

      <section className="motion-story">
        <video className="motion-story-video" autoPlay muted loop playsInline preload="metadata" poster="/media/pawnova-dog-cat-home.png">
          <source src="/media/pawnova-playing-pets.mp4" type="video/mp4" />
        </video>
        <div className="motion-story-overlay" />
        <div className="container motion-story-copy">
          <span className="eyebrow eyebrow-light">LIFE WITH PETS</span>
          <h2>Life with pets is messy. Finding the right stuff should not be.</h2>
          <p>Paw Nova helps narrow the search with practical finds built around how pets actually live, play, travel, eat, and rest.</p>
          <Link href="/dog-finds" className="button button-light">Explore practical finds</Link>
        </div>
      </section>

      <section className="wide-pet-story" style={{backgroundImage: "url('/media/pawnova-dogs-park.png')"}}>
        <div className="wide-pet-story-overlay" />
        <div className="container wide-pet-story-copy">
          <span className="eyebrow eyebrow-light">REAL PET LIFE</span>
          <h2>Good finds should make more sense in the life you already share with them.</h2>
          <p>From playtime and walks to quiet afternoons at home, Paw Nova starts with the moment and the need, then helps narrow the products worth considering.</p>
        </div>
      </section>

      <section className="section mission-cta">
        <div className="container mission-panel">
          <div><span className="eyebrow">MORE THAN A PRODUCT LIST</span><h2>Better finds for your dog. A growing mission for dogs still waiting for a home.</h2></div>
          <div><p>As Paw Nova grows, part of what we earn is intended to help provide food and useful supplies to shelters and rescue organizations. We will share real contributions when they happen, without invented impact numbers.</p><Link href="/gives-back" className="button">See Paw Nova Gives Back</Link></div>
        </div>
      </section>
    </>
  );
}
