import Link from "next/link";

export default function CategoryCard({ eyebrow, title, text, href }) {
  return (
    <Link href={href} className="category-card">
      <span className="eyebrow">{eyebrow}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="text-link">Explore →</span>
    </Link>
  );
}
