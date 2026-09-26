import Link from "next/link";
export default function ProductCard({ product }) {
 return <article className="product-card product-card-real">
   <Link href={`/products/${product.slug}`} className="product-image-link" aria-label={`View ${product.title}`}>
     <div className="product-image-wrap">
       {product.image ? <img src={product.image} alt={product.title} loading="lazy" /> : <div className="product-image-placeholder">Paw Nova</div>}
     </div>
   </Link>
   <div className="product-card-body">
     <span className="pill">{product.categoryLabel}</span>
     <h3><Link href={`/products/${product.slug}`}>{product.title}</Link></h3>
     <p>{product.summary}</p>
     <Link className="text-link" href={`/products/${product.slug}`}>See product notes →</Link>
   </div>
 </article>;
}