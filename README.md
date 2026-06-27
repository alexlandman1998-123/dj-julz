# DJ JULz

Mobile-first wireframe for the DJ Julz website, built with Next.js 15, React 19,
TypeScript, Tailwind CSS v4, shadcn/ui foundations, and a reusable component
structure for moving into high-fidelity UI design.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
npm run format
```

## Stack

- Next.js App Router with static-first pages and Metadata API
- Mobile-first section hierarchy for the complete homepage journey
- Tailwind CSS v4 with CSS variables and future dark-mode compatibility
- shadcn/ui foundations with Radix primitives and Lucide icons
- Placeholder planner flow for the signature booking feature
- Lazy Resend SDK helper for build-safe email integration
- Sitemap, robots, Open Graph, Twitter cards, canonical URL, and structured data

## Structure

```text
src/
  app/
  components/
    ui/
    navigation/
    hero/
    stats/
    about/
    packages/
    planner/
    gallery/
    reviews/
    availability/
    faq/
    footer/
  config/
  data/
  hooks/
  lib/
  styles/
  types/
  assets/
public/
  images/
  icons/
  videos/
```

Live project: https://dj-julz.vercel.app
