import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// Ultra-light STATIC build for Hostinger (shared hosting).
// Output goes to dist/ — upload its contents to public_html/ (or a subfolder).
// IMPORTANT for subfolder hosting: set `base` to the subfolder path.
export default defineConfig({
  site: 'https://www.bonuskebab.lu', // ← domaine final (SEO/sitemap/canonical) — à ajuster
  // base: '/bonus',                 // décommenter si servi depuis un sous-dossier
  output: 'static',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
  integrations: [react()],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'de', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
