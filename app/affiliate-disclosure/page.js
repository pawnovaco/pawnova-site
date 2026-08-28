import Link from "next/link";

export const metadata = {
  title: "Affiliate Disclosure",
  description:
    "How Paw Nova earns from Amazon affiliate links, and how that's different from the Paw Nova Gives Back initiative.",
  alternates: { canonical: "/affiliate-disclosure" }
};

export default function AffiliateDisclosurePage() {
  return (
    <section className="page-hero">
      <div className="container narrow legal">
        <span className="eyebrow">LEGAL</span>
        <h1>Affiliate Disclosure</h1>
        <p>
          Paw Nova Co. is a participant in the Amazon Services LLC Associates
          Program, an affiliate advertising program designed to provide a
          means for sites to earn advertising fees by advertising and linking
          to Amazon.com.
        </p>
        <h2>What this means</h2>
        <p>
          Some links on this site are Amazon affiliate links. If you click
          one of these links and make a qualifying purchase, Paw Nova may
          earn a small commission — at no additional cost to you.
        </p>
        <h2>Our editorial approach</h2>
        <p>
          Affiliate relationships do not influence which products we choose
          to feature. We aim to only recommend products we believe are
          genuinely useful for dogs and their owners.
        </p>
        <h2>How this relates to Paw Nova Gives Back</h2>
        <p>
          Paw Nova sets aside a portion of the commissions it earns to help
          provide food and supplies for dogs in shelters and rescue
          organizations, through an initiative we call{" "}
          <Link href="/gives-back">Paw Nova Gives Back</Link>. This is
          separate from the affiliate commission itself: your purchase is
          not a donation, Paw Nova is not a charity or nonprofit
          organization, and nothing about the price you pay changes. Paw
          Nova Gives Back reflects what we choose to do with part of our own
          earnings, after the fact.
        </p>
      </div>
    </section>
  );
}
