import Link from "next/link";
export default function ProductCard({ product }) {
 return <article className="product-card">
   <div className="product-art" aria-hidden="true"><span>{product.categoryLabel}</span><strong>{product.title.split(" ").slice(0,2).join(" ")}</strong></div>
   <div className="product-card-body"><span className="pill">{product.categoryLabel}</span><h3><Link href={`/products/${product.slug}`}>{product.title}</Link></h3><p>{product.summary}</p><Link className="text-link" href={`/products/${product.slug}`}>See our notes →</Link></div>
 </article>;
}
