import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">Paw Nova</div>
          <p className="muted">
            Pet finds worth knowing about — without the clutter.
          </p>
        </div>

        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          As an Amazon Associate I earn from qualifying purchases.
        </p>
        <p>© {new Date().getFullYear()} Paw Nova Co.</p>
      </div>
    </footer>
  );
}
