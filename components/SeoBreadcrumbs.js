import Link from "next/link";

export default function SeoBreadcrumbs({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://pawnovaco.com${item.href}`,
    })),
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <nav className="seo-breadcrumbs" aria-label="Breadcrumb">
      {items.map((item,index)=><span key={item.href}>{index ? <span aria-hidden="true"> / </span> : null}{index===items.length-1 ? <span aria-current="page">{item.name}</span> : <Link href={item.href}>{item.name}</Link>}</span>)}
    </nav>
  </>;
}
