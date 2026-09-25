# Paw Nova 2026 Rebuild

Next.js 15 affiliate/content site prepared for a 120-item editorial catalog, scalable SEO, and a local-first content command center.

## Included
- 120 product-type editorial records across six categories
- Dynamic `/products/[slug]` pages
- 12 original guide foundations under `/guides/[slug]`
- Dynamic sitemap including products and guides
- Organization + Article structured data
- Canonicals, Open Graph, robots rules, dashboard noindex
- Amazon disclosure components and safe affiliate-link fields
- `/dashboard` local-first content workflow: Draft → Review → Approved → Scheduled → Published/Failed
- Platform variants for Instagram, Facebook, TikTok, Pinterest
- Security headers and preserved legacy redirects

## Important before adding Amazon links
`data/products.json` intentionally leaves `amazonUrl` blank. Add only reviewed Amazon Special Links from your own Associates account. Do not paste copied Amazon ratings, review counts, prices, or downloaded product images unless your use complies with the current Amazon Associates/Creators API rules.

## Dashboard
`/dashboard` is a functional local-first MVP using browser localStorage. It does **not** publish to social platforms yet. This is intentional: official Meta, TikTok, and Pinterest credentials/permissions must be configured server-side before distribution is enabled. Do not place API secrets in client-side code or GitHub.

Recommended production phase: Supabase Auth + database, encrypted server-side token storage, Vercel cron/queue, then official platform connectors.

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Supabase protected dashboard

The `/dashboard` route now requires Supabase email/password authentication. `/login` is the private Paw Nova workspace sign-in page. There is intentionally no public sign-up flow.

Expected Vercel environment variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (preferred) or `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Create the owner login in Supabase Dashboard > Authentication > Users. Do not commit secret/service-role keys or passwords to GitHub.
