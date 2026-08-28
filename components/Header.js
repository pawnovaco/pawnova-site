"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const links = [
  ["Dog Finds", "/dog-finds"],
  ["Grooming", "/grooming"],
  ["Gives Back", "/gives-back"],
  ["About", "/about"]
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`site-header${scrolled ? " site-header-scrolled" : ""}`}>
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
          Explore Dog Finds
        </Link>

        <button
          type="button"
          className={`menu-toggle${menuOpen ? " open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`mobile-nav${menuOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="container">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
          <Link href="/dog-finds" className="button">
            Explore Dog Finds
          </Link>
        </div>
      </nav>
    </header>
  );
}
