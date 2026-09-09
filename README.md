# Sapio Homes

Official website for [Sapio Homes](https://sapiohome.com) — Nairobi-based real estate developer specializing in affordable luxury apartments across East Africa.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 with custom design tokens
- **3D:** Three.js via React Three Fiber (interactive building viewer)
- **Animation:** Framer Motion
- **Fonts:** Geist (Sans/Mono) + Cormorant Garamond (display)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components (hero, layout, properties, sections, ui)
├── context/          # React context providers (theme)
└── lib/              # Utilities, API helpers, project data
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | Production site URL | `https://sapiohome.com` |
| `NEXT_PUBLIC_COMPANY_NAME` | Company name | `Sapio Homes` |
| `NEXT_PUBLIC_COMPANY_EMAIL` | Contact email | `info@sapiohome.com` |
| `NEXT_PUBLIC_COMPANY_PHONE` | Contact phone | `+254 113 556 551` |
| `NEXT_PUBLIC_COMPANY_ADDRESS` | Office address | `HH Towers, Nairobi, Kenya` |

## License

Private — Sapio Homes. All rights reserved.
