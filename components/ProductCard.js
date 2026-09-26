import Link from "next/link";
import ProductImage from "./ProductImage";
export default function ProductCard({ product }) {
 return <article className="product-card product-card-real">
   <Link href={`/products/${product.slug}`} className="product-image-link" aria-label={`View ${product.title}`}>
     <div className="product-image-wrap">
       <ProductImage src={product.image} alt={product.title} />
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