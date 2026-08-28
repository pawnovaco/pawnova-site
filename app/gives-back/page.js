import Link from "next/link";

export const metadata = {
  title: "Paw Nova Gives Back",
  description:
    "When Paw Nova earns from qualifying purchases, we set aside a portion of our earnings to help provide food and supplies for dogs in need.",
  alternates: { canonical: "/gives-back" }
};

export default function GivesBackPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">Our Mission</span>
          <h1>Paw Nova Gives Back</h1>
          <p>Useful finds. A little good passed forward.</p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow legal">
          <p>
            Paw Nova earns commissions from qualifying purchases made through
            our Amazon affiliate links. When Paw Nova earns, we set aside a
            portion of our earnings to help provide food and supplies for
            dogs in shelters and rescue organizations.
          </p>
          <p>
            This isn't a donation program for visitors — you're never asked
            to give anything beyond finding a product that's useful for your
            dog. Paw Nova Gives Back is simply what we plan to do with part
            of what the site earns on its own.
          </p>
          <div className="info-box">
            <p>
              Paw Nova is not a registered charity or nonprofit organization.
              Purchases made through our links are not donations, and are not
              tax-deductible. Read more in our{" "}
              <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container narrow">
          <h2>How it will work</h2>
          <div className="step-list">
            <div>
              <div className="step-body">
                <strong>You find a useful product</strong>
                <p>Browse Paw Nova's picks across our dog product categories.</p>
              </div>
            </div>
            <div>
              <div className="step-body">
                <strong>Paw Nova may earn a commission</strong>
                <p>
                  If you buy through one of our Amazon affiliate links, at no
                  extra cost to you.
                </p>
              </div>
            </div>
            <div>
              <div className="step-body">
                <strong>A portion is set aside</strong>
                <p>
                  Part of what Paw Nova earns is set aside for shelters and
                  rescue organizations.
                </p>
              </div>
            </div>
            <div>
              <div className="step-body">
                <strong>We put it toward food and supplies</strong>
                <p>
                  And share the details here — organization, what was
                  provided, and photos where we can.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2>Impact updates</h2>
          <div className="empty-state">
            <strong>We haven't logged our first give-back yet.</strong>
            <p>
              Paw Nova is still growing. Once we set aside our first
              contribution, we'll share it here — including the shelter or
              rescue organization, what was donated, and photos where we
              can. No invented numbers, no placeholder impact stats — just
              real updates as they happen.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container narrow center-text">
          <span className="eyebrow">In the meantime</span>
          <h2>The best way to support this is to shop useful finds</h2>
          <p>
            Every product we feature is chosen because it's genuinely useful
            for dogs and their owners — that comes first, always.
          </p>
          <Link href="/dog-finds" className="button">
            Explore Dog Finds
          </Link>
        </div>
      </section>
    </>
  );
}
