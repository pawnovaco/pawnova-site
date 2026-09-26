import Link from "next/link";
import { notFound } from "next/navigation";
import AffiliateDisclosure from "../../../components/AffiliateDisclosure";
import ProductCard from "../../../components/ProductCard";
import { products, getProduct } from "../../../lib/catalog";

export function generateStaticParams(){ return products.map(p=>({slug:p.slug})); }
export async function generateMetadata({params}){
 const {slug}=await params; const p=getProduct(slug); if(!p)return {};
 return {title:`${p.title} | Paw Nova`,description:p.summary,alternates:{canonical:`/products/${p.slug}`},openGraph:{title:`${p.title} | Paw Nova`,description:p.summary,url:`https://pawnovaco.com/products/${p.slug}`,images:p.image?[p.image]:[]}};
}
export default async function ProductPage({params}){
 const {slug}=await params; const p=getProduct(slug); if(!p)notFound();
 const related=products.filter(x=>x.category===p.category&&x.slug!==p.slug).slice(0,3);
 const schema={"@context":"https://schema.org","@type":"Article",headline:`${p.title}: Paw Nova product notes`,description:p.summary,image:p.image||undefined,author:{"@type":"Organization",name:"Paw Nova"},publisher:{"@type":"Organization",name:"Paw Nova"},dateModified:p.updated,mainEntityOfPage:`https://pawnovaco.com/products/${p.slug}`};
 return <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  <section className="page-hero product-page-hero"><div className="container product-hero-grid">
   <div className="product-detail-image">{p.image?<img src={p.image} alt={p.title}/>:<div className="product-image-placeholder">Paw Nova</div>}</div>
   <div><span className="eyebrow">{p.categoryLabel}</span><h1>{p.title}</h1><p>{p.summary}</p><AffiliateDisclosure compact/>
   {p.amazonUrl?<a className="button" href={p.amazonUrl} target="_blank" rel="sponsored nofollow noopener">View on Amazon (paid link)</a>:<span className="listing-pending">Amazon link being verified</span>}
   </div>
  </div></section>
  <section className="section"><div className="container product-detail-grid">
   <article className="editorial-card">
    <h2>What this product is for</h2><p>Best suited for <strong>{p.bestFor}</strong>.</p>
    <h2>Product listing highlights</h2>
    <div className="listing-notes">{p.editorialNotes.split("\n").filter(Boolean).map((line,i)=><p key={i}>{line}</p>)}</div>
    {p.healthDisclaimer?<div className="health-disclaimer"><strong>Pet health & nutrition note</strong><p>Paw Nova provides general product information for educational purposes only. Food and supplement needs vary by pet. Product listing claims are not veterinary advice and are not independently verified by Paw Nova. Review ingredients, feeding or dosage directions, warnings, and consult a qualified veterinarian when appropriate.</p></div>:null}
    <h2>Before you buy</h2><p>{p.watchFor}</p>
    {p.amazonUrl?<a className="button" href={p.amazonUrl} target="_blank" rel="sponsored nofollow noopener">Check on Amazon (paid link)</a>:null}
   </article>
   <aside className="editorial-card"><h2>Paw Nova checklist</h2><ul className="check-list"><li>Confirm the exact size, count, flavor, or variant</li><li>Read the current seller listing and recent buyer feedback</li><li>Check materials, ingredients, cleaning, or feeding directions</li><li>Consider your pet's age, size, habits, and individual needs</li><li>For health, diet, or supplement questions, use qualified veterinary guidance</li></ul><Link href={`/products#${p.category}`} className="text-link">Browse {p.categoryLabel} →</Link></aside>
  </div></section>
  <section className="section section-soft"><div className="container"><div className="section-heading"><div><span className="eyebrow">Related</span><h2>More {p.categoryLabel.toLowerCase()} finds</h2></div></div><div className="cards-grid">{related.map(x=><ProductCard key={x.slug} product={x}/>)}</div></div></section>
 </>;
}