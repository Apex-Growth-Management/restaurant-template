# restaurant-template

## Project Info
- GitHub: https://github.com/Apex-Growth-Management/restaurant-template
- Hosting: Vercel (auto-deploys on push to main)
- Sanity Project ID: l9swud4m
- Sanity Dataset: production
- Sanity API Version: 2026-03-04

## Stack
- Next.js 16 (App Router, TypeScript, Tailwind CSS v4)
- Sanity v4 (CMS) — studio at /studio
- Node v24.14.0, npm 11.9.0

## Sanity Schemas
- siteSettings (restaurant name, tagline, hero, hours, phone, address)
- menuItem (name, description, price, tag, photo, category, order)
- review (name, text, stars, order)

## Template Info
- Default restaurant name: Ember & Oak Kitchen
- Style: Dark theme (stone-950 background), amber accents
- Pages: home, menu, about, contact

## Git Identity
- Name: Apex Growth Management
- Email: admin@apexgrowthmanagement.com

## Workflow
- Edit code locally -> git push -> Vercel auto-deploys
- .env.local is gitignored (never commit it)
- Env vars are set in Vercel dashboard
