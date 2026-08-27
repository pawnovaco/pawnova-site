import Image from "next/image";
import Link from "next/link";

const links = [
  ["Dog Finds", "/dog-finds"],
  ["Cat Finds", "/cat-finds"],
  ["Grooming", "/grooming"],
  ["Pet Essentials", "/pet-essentials"],
  ["About", "/about"]
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Paw Nova home">
          <Image
            src="/pawnova-logo.png"
            alt="Paw Nova Co."
            width={150}
            height={105}
            priority
            className="brand-logo"
          />
        </Link>

        <nav className="nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>

        <Link href="/dog-finds" className="button button-small">
          Explore Finds
        </Link>
      </div>
    </header>
  );
}
