# Mintbloom Estates — Luxury real-estate agency landing

**Industry:** Premium real estate — a small European brokerage with a considered portfolio.


A dark, cinematic real-estate landing in the register of old-money print advertising.
Warm near-black canvas, ivory type, single antique-gold accent. Cormorant Garamond
italics against Inter body. Every animation moves slowly; nothing bounces.

## Quick start

```bash
npm install
npm run dev   # http://localhost:5176
```

## Stack

- Vite 6 + React 19 + TypeScript (strict)
- Tailwind CSS v4 with hex + rgb tokens (kept out of OKLCH so the gold is exactly the specified hex)
- **Framer Motion** for parallax, image reveals, testimonial swaps
- **Lenis** smooth scroll (slower `duration: 1.3` for the editorial pace)
- Cormorant Garamond (serif, italic headings) + Inter (body)

## Design language

- **Canvas** — deep warm near-black `#0b0a08` (never true black — reads as printed ink)
- **Ivory** — `#f2ece1` body ink and three transparency stops for hierarchy
- **Gold** — `#c9a961` sole accent; used sparingly for eyebrows, links, one CTA
- **Hairline dividers** at 10% ivory — the whole grid is held together by these

The system is in [`src/index.css`](./src/index.css) as `@theme` tokens.

## Page structure

1. **Nav** — transparent, condenses on scroll (12px), animated hamburger + full-screen mobile menu
2. **Hero** — full-viewport parallax photo, italic serif headline "Where *chapters* become homes." with scroll indicator
3. **FeaturedListings** — 4 property cards in an alternating column offset, image reveal on scroll, hover zoom + gradient overlay
4. **Signature** — silent marquee of six portrait-oriented property images between sections
5. **Story** — 2-column: portrait image reveal + prose + 3 stats (38 years, 412 homes, 3 offices)
6. **Team** — 4 partners with photos, roles, languages, direct phone
7. **Journal** — 3-card editorial teaser with cover, category tag, reading time
8. **Testimonials** — quote carousel with dot indicators, arrow controls
9. **ScheduleForm** — 2-column contact: office details + form with success state
10. **Footer** — 3 offices, portfolio + house nav columns, membership badge

## Notable details

- **Hero parallax**: `useScroll` + `useTransform` translates the image `y: 0% → 20%` and scales `1 → 1.1`, plus a `fade` value on the whole overlay so text disappears as the section leaves the viewport
- **Property cards**: alternating `md:mt-16` on odd cards for a magazine layout offset, not a rigid grid
- **Marquee**: pure CSS `@keyframes` on a duplicated flex row, masked at the edges — no JS scroll listener
- **Testimonial swap**: `AnimatePresence mode="wait"` on both the blockquote and the meta so they land staggered
- **Form success**: `AnimatePresence` swap between the form and the confirmation card, personalised with the buyer's first name
- **Gold underline hover**: `::after` scaleX(1) → scaleX(0) with `transform-origin` swap from left to right — one of the small links that feels editorial

## Deploy

```bash
npm run build
npm run preview
```

Vercel-ready. No API keys required (no Mapbox, no Embla — kept the dep list tight so the portfolio piece opens instantly for anyone reviewing it).

## What this project demonstrates

- **Editorial design register**: this is not a "modern" landing. It's meant to feel like a private magazine. Different register from Wattly (B2B) and Bistro (restaurant) — proves range.
- **Restrained motion**: no snappy animations, no bounce. Everything eases in slowly (0.8–1.4s) because that's what luxury pacing feels like.
- **Real content writing**: agents have realistic bios, testimonials use specific project names, journal excerpts read like real editorial voice.
- **No API dependencies**: reviewer can `npm install && npm run dev` and see the whole thing — no Mapbox token, no image licensing gotchas.

## Inspiration

- [sothebysrealty.com](https://www.sothebysrealty.com) — editorial cadence, restrained hover states
- [onefinestay.com](https://www.onefinestay.com) — offset property grid, whitespace discipline
- [aman.com](https://www.aman.com) — dark warm palette, single gold accent, cinematic parallax
