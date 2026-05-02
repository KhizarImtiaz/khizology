# khizology

> **Art meets Code.** A monster-powered creative knowledge universe.

Live site: **https://khizarooo.github.io/khizology**

Built with **Astro 6**, **TypeScript**, **Tailwind CSS v4**, and **React**.

---

## What Is khizology?

**khizology** is the personal creative brand site of **khizooo** — a universe organized around five monsters:

| Monster | Module | Route |
|---------|--------|-------|
| 🎨 artooo | Artworks (168+ original pieces) | `/artworks` |
| 📊 infooo | Infographics (16 knowledge sections) | `/infographics` |
| 🔧 toolooo | Toolbox (calculators & tools) | `/toolbox` |
| 🎁 freeooo | Freebies (curated design resources) | `/freebies` |
| 🔮 5 future monsters | Coming soon | `/future-monsters` |

---

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server at http://localhost:4321
npm run dev
```

## All Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview the build locally |
| `npm run astro check` | TypeScript check |

---

## Project Structure

```
khizology/
├── public/
│   ├── images/
│   │   ├── Monsters/     Monster PNG assets
│   │   ├── artworks/     168+ original artwork JPGs
│   │   └── site/         Profile and brand images
│   ├── favicon.svg
│   ├── favicon_32x32.png
│   ├── favicon_16x16.png
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/       BaseLayout, Navbar, Footer, SEO
│   │   ├── ui/           MonsterCard, SkeletonCard, ComingSoonCard, Breadcrumb, ScrollTop
│   │   ├── tools/        InstagramBioScore.tsx (React island)
│   │   └── calculators/  ProfitMarginCalc, WebsiteCostCalc, PercentageCalc, AgeCalc (React islands)
│   ├── data/
│   │   ├── monsters.ts       9 monsters with metadata
│   │   ├── artworks.ts       168+ artwork entries
│   │   ├── infographicsData.ts  16 sections × 2 posts = 32 infographic posts
│   │   ├── toolbox.ts        Calculator categories + items, Tool categories + items
│   │   ├── freebies.ts       13 freebie category + resource data
│   │   └── site.ts           Global site config (URL, title, OG)
│   ├── pages/
│   │   ├── index.astro                        Homepage
│   │   ├── artworks/
│   │   │   ├── index.astro                    Artwork hub
│   │   │   └── [category]/[slug].astro        Artwork detail
│   │   ├── infographics/
│   │   │   ├── index.astro                    Infographics hub
│   │   │   └── [category]/[slug].astro        Infographic detail (32 pages)
│   │   ├── toolbox/
│   │   │   ├── index.astro                    Toolbox hub
│   │   │   ├── tools.astro                    Tools listing
│   │   │   ├── calculators.astro              Calculators listing
│   │   │   ├── tools/[slug].astro             Tool detail (22 pages)
│   │   │   └── calculators/[slug].astro       Calculator category + detail pages
│   │   ├── freebies/
│   │   │   ├── index.astro                    Freebies hub
│   │   │   └── [slug].astro                   Freebie category (13 pages)
│   │   ├── my-portfolio.astro
│   │   ├── behind-the-vibes.astro
│   │   ├── you-ask-i-answer.astro
│   │   ├── drop-a-vibe.astro
│   │   ├── frop-a-vibe.astro                  Redirect alias → /drop-a-vibe
│   │   ├── future-monsters.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css    Design tokens, monster palettes, dark mode, utilities
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## GitHub Pages Deployment

The site is deployed automatically on every push to `main` via GitHub Actions (`.github/workflows/deploy.yml`).

**Config in `astro.config.mjs`:**
```js
site: 'https://khizarooo.github.io',
base: '/khizology',
```

**In GitHub → Repo Settings → Pages:**
- Source: **GitHub Actions**

Push to `main` → CI builds → auto-deploys. Done.

---

## Theme System

Khizology uses CSS custom properties (`--k-*` global + `--m-*` per-monster overrides) for theming.

### Global tokens (defined in `global.css`)
| Token | Purpose |
|---|---|
| `--k-bg` | Page background |
| `--k-bg-card` | Card background |
| `--k-text` | Primary text |
| `--k-text-muted` | Secondary text |
| `--k-accent` | Global accent (khizooo red) |
| `--k-border` | Border color |

### Per-monster overrides (set via `BaseLayout accentColor` prop)
| Token | Purpose |
|---|---|
| `--m-accent` | Monster primary color |
| `--m-accent-light` | Monster light tint |

### Dark mode
Dark mode is toggled via the `html.dark` class, persisted to `localStorage('khizology-theme')`. The theme script in `<head>` runs before paint to prevent FOUC.

---

## How-To Guides

### Add a new Monster

1. Add entry to `src/data/monsters.ts`
2. Drop monster PNG in `public/images/Monsters/`
3. Create hub page at `src/pages/{monster-route}/index.astro`
4. Add route to Navbar links in `src/components/layout/Navbar.astro`

### Add an Artwork

1. Drop artwork JPG in `public/images/artworks/`
2. Add entry to `src/data/artworks.ts` with all metadata

### Add an Infographic Post

1. Open `src/data/infographicsData.ts`
2. Find the target section in `infographicSections`
3. Add a post object to `section.posts[]` with: `title`, `slug`, `summary`, `tags`, `keyPoints`
4. The dynamic route `infographics/[category]/[slug].astro` will auto-generate the page

### Add a Tool

1. Open `src/data/toolbox.ts`
2. Add item to the relevant `toolCategories` or `allTools` array
3. Create a React component in `src/components/tools/YourTool.tsx`
4. Add a case in `src/pages/toolbox/tools/[slug].astro` to render it

### Add a Calculator

1. Open `src/data/toolbox.ts`
2. Add item to the relevant `calculatorItemsMap[category]` array
3. Create a React component in `src/components/calculators/YourCalc.tsx`
4. Add slug to `MVP_CALC_SLUGS` and add a render case in `src/pages/toolbox/calculators/[slug].astro`

### Add a Freebie Category / Resource

1. Open `src/data/freebies.ts`
2. Add category to `freebiesCategories` array
3. Add resources to `freebiesResourceMap[slug]`
4. The dynamic route `freebies/[slug].astro` will auto-generate the page

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Astro](https://astro.build) | 6.x | Static site framework |
| [TypeScript](https://typescriptlang.org) | 5.x | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Utility-first styling via `@tailwindcss/vite` |
| [React](https://react.dev) | 19.x | Interactive component islands |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | latest | Auto sitemap generation |

---

*By luck, a programmer. By nature, an artist. — khizooo*
