import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://swoth.dev');
  const sitemapUrl = new URL('sitemap-index.xml', origin);
  const content = ['User-agent: *', 'Allow: /', '', 'Sitemap: ' + sitemapUrl.href, ''].join('\n');

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
