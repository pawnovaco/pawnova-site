import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "Paw Nova helps dog owners discover useful products, and sets aside part of what it earns to help dogs in need.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <section className="page-hero">
      <div className="container narrow legal">
        <span className="eyebrow">ABOUT</span>
        <h1>About Paw Nova</h1>
        <p>
          Paw Nova started with a simple idea: finding the right products
          for your dog shouldn't require scrolling through hundreds of
          random listings.
        </p>
        <p>
          We created Paw Nova to help dog owners discover useful products,
          practical finds, and everyday essentials that can make life with a
          dog a little easier — grooming tools, walking gear, comfortable
          beds, feeding accessories, and the everyday basics in between.
        </p>
        <h2>What we do</h2>
        <p>
          We look across dog gear and everyday essentials, and highlight the
          ones that seem genuinely useful based on real reviews and real use
          cases. Product usefulness is always the first reason something
          earns a spot on Paw Nova — nothing is featured just to fill space.
        </p>
        <h2>Something beyond product recommendations</h2>
        <p>
          We also wanted Paw Nova to mean something beyond product
          recommendations. As Paw Nova grows, part of what we earn will be
          set aside to purchase food and useful supplies for shelters and
          rescue organizations. Better finds for our dogs, and a little help
          for dogs still waiting for their homes. Read more on our{" "}
          <Link href="/gives-back">Paw Nova Gives Back</Link> page.
        </p>
        <h2>How the site makes money</h2>
        <p>
          Paw Nova participates in the Amazon Associates program. Some links
          on this site are affiliate links, which means we may earn a small
          commission on qualifying purchases at no extra cost to you. See our{" "}
          <Link href="/affiliate-disclosure">Affiliate Disclosure</Link> for
          details.
        </p>
        <div className="info-box">
          <p>
            Have a product suggestion or a correction? Reach out on the{" "}
            <Link href="/contact">Contact</Link> page.
          </p>
        </div>
      </div>
    </section>
  );
}
