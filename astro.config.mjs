// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// GitHub Pages deployment:
// Option A — user/org site (username.github.io):  set site only, leave base as '/'
// Option B — project site (username.github.io/repo): set both site AND base
//
// Current config: project site at khizarooo.github.io/khizology
// Change SITE and BASE below to match your actual repo.

const SITE = 'https://khizarooo.github.io';
const BASE = '/khizology';

export default defineConfig({
  site: SITE,
  base: BASE,
  integrations: [
    react(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
});
