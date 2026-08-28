import Link from "next/link";

const socials = [
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/ajlsaliba/",
    path: "M12 2C6.48 2 2 6.48 2 12c0 4.24 2.63 7.86 6.35 9.32-.09-.79-.17-2.01.03-2.88.18-.78 1.17-4.97 1.17-4.97s-.3-.6-.3-1.48c0-1.39.8-2.42 1.8-2.42.85 0 1.26.64 1.26 1.4 0 .85-.55 2.13-.83 3.31-.24.99.5 1.8 1.47 1.8 1.77 0 3.13-1.86 3.13-4.55 0-2.38-1.71-4.04-4.15-4.04-2.83 0-4.49 2.12-4.49 4.31 0 .85.33 1.77.74 2.27.08.1.09.18.07.28-.08.32-.25 1.01-.29 1.15-.04.19-.15.23-.35.14-1.3-.61-2.11-2.51-2.11-4.04 0-3.29 2.39-6.31 6.89-6.31 3.62 0 6.43 2.58 6.43 6.02 0 3.59-2.26 6.48-5.4 6.48-1.05 0-2.04-.55-2.38-1.2l-.65 2.46c-.23.9-.87 2.02-1.29 2.71.97.3 2 .46 3.06.46 5.52 0 10-4.48 10-10S17.52 2 12 2z"
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@pawnovaco",
    path: "M16.6 5.82c-1.02-.9-1.6-2.2-1.6-3.62h-3.02v13.6c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 0 1 0-5.44c.28 0 .55.04.8.12V9.9a5.75 5.75 0 0 0-.8-.06 5.74 5.74 0 1 0 5.74 5.74V8.7a8.7 8.7 0 0 0 5.02 1.6V7.28c-1.24 0-2.4-.36-3.42-1.06z"
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/pawnovaco/",
    path: "M13.5 21v-7.75h2.6l.39-3.02h-3v-1.93c0-.87.24-1.47 1.5-1.47h1.6V4.14c-.28-.04-1.23-.12-2.34-.12-2.32 0-3.9 1.42-3.9 4.02v2.24H7.75v3.02h2.6V21h3.15z"
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/pawnovaco20/",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.81.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.81.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.81-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 6.87A5.13 5.13 0 1 0 12 17.13 5.13 5.13 0 0 0 12 6.87zm0 8.46A3.33 3.33 0 1 1 12 8.67a3.33 3.33 0 0 1 0 6.66zm6.53-8.66a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"
  }
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">Paw Nova</div>
          <p className="muted">
            Pet finds worth knowing about — without the clutter.
          </p>
          <div className="footer-social">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="footer-social-icon"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>As an Amazon Associate I earn from qualifying purchases.</p>
        <p>© {new Date().getFullYear()} Paw Nova Co.</p>
      </div>
    </footer>
  );
}
