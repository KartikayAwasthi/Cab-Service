# Himgiri Taxi Rishikesh (Cab-Service)

A production-quality marketing & lead-generation website for a Rishikesh-based taxi service — airport transfers, railway station pickups, Char Dham Yatra taxis, outstation trips and local sightseeing across Uttarakhand. Built with Next.js (App Router), TypeScript and Tailwind CSS.

> The business details in `src/data/site.ts` (phone, WhatsApp, email, exact address, domain) are placeholders marked `TODO` — replace them with the real client's details before launch.

## Features

- Service pages for airport/railway transfers, outstation trips, corporate travel and local sightseeing
- Dedicated Char Dham Yatra section (`/char-dham`) with route and package info
- Vehicle fleet showcase (`/fleet`) — compact sedan, family MPV, premium Innova, tempo traveller
- Destination guides (`/destinations`) and a travel-guide content section
- Customer reviews section and FAQ accordion
- Booking flow and WhatsApp click-to-chat integration (`src/lib/whatsapp.ts`)
- Fare calculation helper (`src/lib/fare.ts`)
- SEO: generated `sitemap.ts`, `robots.ts`, and JSON-LD structured data (`src/lib/structuredData.ts`)
- Legal pages: privacy policy, terms & conditions, cancellation policy

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev) + TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide icons

## Project structure

```
src/
  app/
    about/, char-dham/, contact/, destinations/, fleet/, reviews/,
    routes/, services/, travel-guide/                        # route segments
    cancellation-policy/, privacy-policy/, terms-and-conditions/
    sitemap.ts, robots.ts
  components/
    booking/, buttons/, char-dham/, destination/, faq/, footer/,
    hero/, navbar/, reviews/, route/, sections/, service/,
    vehicle/, whatsapp/, ui/
  data/
    site.ts          Business identity & contact details (placeholders — see note above)
    charDham.ts, destinations.ts, faqs.ts, pricing.ts, routes.ts,
    services.ts, testimonials.ts, travelGuide.ts, vehicles.ts
  lib/
    fare.ts             Fare calculation
    whatsapp.ts           WhatsApp deep-link builder
    metadata.ts, structuredData.ts, seo helpers
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Before launch

Replace every `TODO` in `src/data/site.ts`: production domain, real phone/WhatsApp numbers, email, exact address, Google Maps pin, and social links.
