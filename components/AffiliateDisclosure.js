export default function AffiliateDisclosure({ compact=false }) {
  return <p className={compact ? "affiliate-note compact" : "affiliate-note"}><strong>Affiliate disclosure:</strong> As an Amazon Associate I earn from qualifying purchases. Product availability and details can change, so verify current information on Amazon before buying.</p>;
}
