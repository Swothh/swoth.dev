import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { portfolio } from './src/data/portfolio';

export default defineConfig({
  site: portfolio.seo.siteUrl,
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/robots.txt') && !page.endsWith('/llms.txt'),
      namespaces: {
        news: false,
        xhtml: false,
        image: false,
        video: false,
      },
    }),
  ],
  vite: {
    // Astro and Tailwind currently expose separate bundled Vite types.
    // The plugin is runtime-compatible; this keeps Astro's strict check clean.
    plugins: [tailwindcss() as never],
  },
});
