# Alex Wright — Portfolio

Personal portfolio for Alex Wright: program management, client relationships, and software development. Live at [alexwrightportfolio.com](https://www.alexwrightportfolio.com/).

[LinkedIn](https://www.linkedin.com/in/alexgwright2) | [GitHub](https://github.com/awright222)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, Tailwind CSS 3.4
- **Icons:** Lucide React
- **Fonts:** Newsreader and Geist (self-hosted via `next/font`)

## Structure

A single page, built mostly from server components. Only the mobile menu is client-side JavaScript.

- **Hero** — name, short introduction, portrait
- **Selected Work** — DealForge, OppMap, BuildGrade, YardCalc
- **Experience** — EXOS at Google, real estate, Meadowlark Labs
- **Capabilities** — six areas, each tied to where the experience came from
- **About** — introduction, education and training
- **Contact** — email, LinkedIn, GitHub, Meadowlark Labs

All copy and links live in [`app/data/site.js`](app/data/site.js). Components are in `app/components/`.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build & Deploy

```bash
npm run build
npm start
```

Deployed on [Vercel](https://vercel.com) from the `main` branch.
