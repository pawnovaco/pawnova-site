export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="page-hero">
      <div className="container narrow legal">
        <span className="eyebrow">ABOUT</span>
        <h1>About Paw Nova</h1>
        <p>
          Paw Nova is a small, independent site focused on surfacing
          practical pet products — the kind that solve a real everyday
          problem rather than just looking good in a photo.
        </p>
        <h2>What we do</h2>
        <p>
          We look across dog gear, cat gear, grooming tools, and everyday
          essentials, and highlight the ones that seem genuinely useful based
          on real reviews and real use cases.
        </p>
        <h2>How the site makes money</h2>
        <p>
          Paw Nova participates in the Amazon Associates program. Some links
          on this site are affiliate links, which means we may earn a small
          commission on qualifying purchases at no extra cost to you. See our{" "}
          <a href="/affiliate-disclosure">Affiliate Disclosure</a> for
          details.
        </p>
        <div className="info-box">
          <p>
            Have a product suggestion or a correction? Reach out on the{" "}
            <a href="/contact">Contact</a> page.
          </p>
        </div>
      </div>
    </section>
  );
}
