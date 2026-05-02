# khizology

> A monster-powered creative knowledge universe. Art meets Code.

Built with **Astro**, **TypeScript**, **Tailwind CSS**, and **React**.

## What Is This?

**khizology** is the personal creative brand site of **khizooo** — a universe of:

- 🎨 **artooo** → Artworks (168+ original pieces)
- 📊 **infooo** → Infographics (8 knowledge categories)
- 🔧 **toolooo** → Toolbox (calculators & tools)
- 🎁 **freeooo** → Freebies (curated design resources)
- 🔮 **5 future monsters** → Coming soon

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:4321`

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

### Option A — User/Org site (`username.github.io`)

In `astro.config.mjs`:
```js
const SITE = 'https://khizarooo.github.io';
const BASE = '/';  // empty base for user site
```

In `GitHub → Settings → Pages`:
- Source: **GitHub Actions**

### Option B — Project site (`username.github.io/repo-name`)

In `astro.config.mjs`:
```js
const SITE = 'https://khizarooo.github.io';
const BASE = '/khizology';  // your repo name
```

Push to `main` → GitHub Actions builds → auto-deploys.

## Project Structure

```
src/
├── components/
│   ├── layout/     BaseLayout, Navbar, Footer, SEO
│   └── ui/         MonsterCard, SkeletonCard, ComingSoonCard, Breadcrumb, ScrollTop
├── data/           monsters.ts, artworks.ts, infographics.ts, toolbox.ts, site.ts
├── pages/          All routes
└── styles/         global.css (design tokens, monster colors, dark mode)
public/
├── images/
│   ├── Monsters/   Monster PNGs
│   ├── artworks/   168+ artwork JPGs
│   └── site/       Profile and brand images
```

## Layer Status

| Layer | Status |
|---|---|
| Layer 1 — Foundation + Brand Pages | ✅ Complete |
| Layer 2 — Monster Hubs (Artworks, Infographics, Toolbox, Freebies) | 🔜 Next |
| Layer 3 — Category Listings | 🔜 Planned |
| Layer 4 — Detail Pages + MVP Calculators | 🔜 Planned |

## Tech Stack

- [Astro](https://astro.build) — Static site framework
- [TypeScript](https://typescriptlang.org) — Type safety
- [Tailwind CSS](https://tailwindcss.com) — Utility-first styling
- [React](https://react.dev) — Interactive calculator islands
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — Auto sitemap

---

*By luck, a programmer. By nature, an artist. — khizooo*

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
