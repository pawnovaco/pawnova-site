# Paw Nova

A Next.js dog-product discovery site for PawNovaCo.com, built on the
Amazon Associates affiliate model, with a "Paw Nova Gives Back" mission
layer.

## Structure

- `/` — homepage (hero, categories, why Paw Nova, featured finds, Gives
  Back teaser, guide teasers, trust section, closing CTA)
- `/dog-finds` — category hub linking to all 6 product categories
- `/grooming`, `/play-enrichment`, `/walking-travel`, `/beds-comfort`,
  `/feeding`, `/everyday-essentials` — product category pages
- `/gives-back` — Paw Nova Gives Back mission page (honest "no impact
  logged yet" state — update this once a real give-back happens)
- `/about`, `/contact`, `/affiliate-disclosure`, `/privacy` — standard
  pages
- `/sitemap.xml`, `/robots.txt` — generated from `app/sitemap.js` and
  `app/robots.js`

Old URLs `/cat-finds` and `/pet-essentials` 301-redirect (see
`next.config.mjs`) to `/` and `/everyday-essentials` respectively.

## Run locally

```bash
npm install
npm run dev
```

Then open:

http://localhost:3000

## Deploy to Vercel

1. Create a GitHub repository.
2. Upload all files from this project.
3. In Vercel, choose **Add New → Project**.
4. Import the GitHub repository.
5. Click **Deploy**.
6. After deployment, add `PawNovaCo.com` under **Project Settings → Domains**.

## Before launch

- Replace placeholder product cards with real product recommendations
  and live Amazon affiliate links (`components/FindCard.js` buttons are
  currently disabled placeholders).
- Add your real contact email (Contact page + Footer).
- Confirm the Instagram, Facebook, TikTok, and Pinterest links in the
  footer are correct.
- Review the Privacy Policy based on the actual tools you use.
- Keep the Amazon disclosure visible.
- When Paw Nova logs its first real give-back, replace the empty state
  on `/gives-back` with real details (organization, date, what was
  given, photos). Do not add placeholder impact numbers before that.

Amazon disclosure included:
"As an Amazon Associate I earn from qualifying purchases."

