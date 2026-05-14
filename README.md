# Citadel DB — Rick & Morty character explorer

Portfolio demo: a **terminal / HUD**-styled catalog over the [Rick and Morty API](https://rickandmortyapi.com/). Built with **Next.js 16** (App Router), **TypeScript**, **TanStack Query**, **Redux Toolkit** (likes), and **Sass** modules.

## Features

- Search and status filters with URL-driven state (shareable links).
- Favorites persisted via server action + `localStorage`.
- **Light / dark** HUD themes with `localStorage` (`rm-hud-theme`).
- Accessible controls (`aria-label`, focus styles), skeleton loading states, and styled error boundary.
- Default **Open Graph** image via `src/app/opengraph-image.tsx`.

## Environment

For correct absolute URLs in metadata and OG tags when deployed, set:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

On Vercel, `VERCEL_URL` is used as a fallback when this is unset.

## Scripts

```bash
npm run dev      # development server
npm run build    # production build
npm run start    # run production build
npm run lint     # ESLint
npm run test:run # Vitest (CI)
```

## Stack

Next.js · React 19 · TypeScript · Sass · Tailwind (design tokens / utilities in `globals.css`) · TanStack Query · Redux Toolkit
