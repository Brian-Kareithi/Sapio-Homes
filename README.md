# Sapio Homes

**Affordable Luxury Living in Nairobi** — the official website of [Sapio Homes](https://sapiohome.com), a Nairobi-based real estate developer specialising in affordable luxury apartments, property management, and investment opportunities across East Africa.

---

## About

Sapio Homes curates, develops, and manages thoughtfully crafted residences in Nairobi&rsquo;s most sought-after neighbourhoods — built on quality, delivered with integrity. Since 2013 we have delivered **1,300+ units**, achieved a **98% client satisfaction** rate, and built a portfolio of **6+ active developments** across Nairobi.

### Portfolio highlights

| Project | Location | Type | Status |
|---------|----------|------|--------|
| Park Road Residency | Park Road, Ngara | 1 Bed · Furnished | Selling Now |
| Westway Apartments | Little Bombay, Nairobi West | Studio · 1BR · 2BR | Off-Plan |
| Hillside Gardens | Parklands | 3 & 4 Bedroom | Completed |
| Nyayo View Suites | Nairobi West | Studio · 1 Bedroom | Sold Out |
| Balozi Suites | South B | Studio · 1 Bedroom | Sold Out |
| The Reveal | Kilimani | Studio · 1 Bedroom | Sold Out |

---

## Features

- **Interactive property search** — filter by unit type, budget, and floor area.
- **3D building viewer** — a procedurally rendered, interactive 25-storey tower with rooftop pool, balconies, cars, and landscaping built with React Three Fiber.
- **Site-visit booking** — schedule a private showing with an interactive calendar.
- **Company profile** — mission, vision, values, and a decade of milestones.
- **Project detail pages** — pricing, floor plans, amenities, neighbourhood, and investment data for every development.
- **Property management** — end-to-end service pages for landlords and investors.
- **Full legal pages** — privacy policy and terms aligned with Kenya&rsquo;s Data Protection Act, 2019.
- **Dark / light themes** — refined warm-neutral palette with a custom gold accent, persisted via localStorage.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 with design-token-driven custom theme |
| 3D | Three.js via React Three Fiber + Drei |
| Animation | Framer Motion, React CountUp, Intersection Observer |
| Icons | Lucide React |
| Fonts | Geist (Sans/Mono) + Cormorant Garamond (display) |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
src/
├── app/                 # Next.js App Router pages & routes
│   ├── careers/         # Job openings
│   ├── company-profile/ # Corporate overview
│   ├── faq/             # Buying, ownership, and legal Q&A
│   ├── privacy/         # Privacy policy
│   ├── projects/        # Portfolio listing + project detail ([slug]/)
│   ├── property-management/ # Management services
│   ├── team/            # Leadership & departments
│   ├── terms/           # Terms of service
│   └── globals.css      # Design tokens, themes, and utilities
├── components/
│   ├── contact/         # Contact section + map
│   ├── hero/            # Landing hero + property search
│   ├── layout/          # Navbar, Footer, theme toggle
│   ├── properties/      # Project list, 3D viewer, floor plans
│   ├── sections/        # Services, features, video, problem
│   ├── site-visit/      # Booking calendar
│   └── ui/              # Section heading, legal layout, boundary
├── context/             # Theme provider
└── lib/                 # Project data, API helpers, utilities
```

---

## Theming

The site ships with two themes — a warm light theme and a deep charcoal dark theme — driven by CSS custom properties defined in `src/app/globals.css`. A custom gold accent (`--gold-*`) re-skins the default `amber-*` Tailwind palette, and the theme choice is stored in `localStorage`.

---

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | Production site URL | `https://sapiohome.com` |
| `NEXT_PUBLIC_COMPANY_NAME` | Company name | `Sapio Homes` |
| `NEXT_PUBLIC_COMPANY_EMAIL` | Contact email | `info@sapiohome.com` |
| `NEXT_PUBLIC_COMPANY_PHONE` | Contact phone | `+254 113 556 551` |
| `NEXT_PUBLIC_COMPANY_ADDRESS` | Office address | `HH Towers, Nairobi, Kenya` |
| `NEXT_PUBLIC_COMPANY_LAT` / `NEXT_PUBLIC_COMPANY_LNG` | Office coordinates | `-1.28339` / `36.82356` |

---

## 3D Model Note

The interactive 3D apartment tower is generated procedurally with Three.js primitives — no external model file is required. If you wish to use an externally authored model instead, export it as **`.glb`** (or `.gltf`) from 3ds Max or Blender and it can be loaded via the Drei `useGLTF` hook.

---

## License

Private — © Sapio Homes. All rights reserved.
