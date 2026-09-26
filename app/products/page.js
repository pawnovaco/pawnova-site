import ProductCard from "../../components/ProductCard";
import AffiliateDisclosure from "../../components/AffiliateDisclosure";
import { products, categoryMap } from "../../lib/catalog";

export const metadata={
 title:"Pet Product Finds",
 description:"Explore Paw Nova pet product finds organized by real needs, including grooming, travel, food, treats, supplements, enrichment, comfort, cleanup, and everyday essentials.",
 alternates:{canonical:"/products"}
};

export default function Products(){
 const entries=Object.entries(categoryMap);
 return <>
  <section className="page-hero"><div className="container narrow">
   <span className="eyebrow">PAW NOVA PRODUCT DISCOVERY</span>
   <h1>Pet products organized around real needs.</h1>
   <p>Browse practical finds across everyday care, travel, food, treats, grooming, enrichment, comfort, and more. We add context so you can compare what fits your pet before you shop.</p>
   <AffiliateDisclosure compact/>
  </div></section>
  <section className="section"><div className="container">
   <nav className="product-category-nav" aria-label="Product categories">
    {entries.map(([slug,c])=><a key={slug} href={`#${slug}`}>{c.label}</a>)}
   </nav>
   <div className="catalog-disclaimer"><strong>Food & supplement note</strong><span>Pet nutrition and supplement needs vary. Paw Nova shares general product information, not veterinary advice. Review current ingredients, feeding or dosage directions, warnings, and consult a qualified veterinarian when appropriate.</span></div>
   {entries.map(([slug,c])=>{
    const list=products.filter(p=>p.category===slug);
    return <section className="catalog-section" id={slug} key={slug}>
      <div className="section-heading section-heading-wide">
       <div><span className="eyebrow">{list.length} FINDS</span><h2>{c.label}</h2></div>
       <p>{c.description}</p>
      </div>
      <div className="cards-grid">{list.map(p=><ProductCard key={p.slug} product={p}/>)}</div>
    </section>
   })}
  </div></section>
 </>;
}