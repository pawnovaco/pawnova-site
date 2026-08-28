export const metadata = {
  title: "Contact",
  description: "Get in touch with Paw Nova with questions, product suggestions, or corrections.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <section className="page-hero">
      <div className="container narrow legal">
        <span className="eyebrow">CONTACT</span>
        <h1>Get in touch</h1>
        <p>
          Questions, product suggestions, or corrections — we'd like to hear
          about them.
        </p>
        <div className="info-box">
          <p>
            Email:{" "}
            <a href="mailto:hello@pawnovaco.com">hello@pawnovaco.com</a>
            <br />
            <em>Replace this with your real business contact email before
            launch.</em>
          </p>
        </div>
      </div>
    </section>
  );
}
