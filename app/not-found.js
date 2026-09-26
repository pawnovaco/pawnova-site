import Link from "next/link";
export const metadata={title:"Page Not Found",robots:{index:false,follow:true}};
export default function NotFound(){return <section className="page-hero"><div className="container narrow"><span className="eyebrow">404</span><h1>This page wandered off.</h1><p>The Paw Nova page you requested could not be found. Browse our current product finds or practical pet guides instead.</p><p><Link className="button" href="/products">Browse pet products</Link> <Link className="button button-secondary" href="/guides">Read pet guides</Link></p></div></section>}
