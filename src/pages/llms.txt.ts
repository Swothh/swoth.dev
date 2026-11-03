import type { APIRoute } from 'astro';
import { portfolio } from '../data/portfolio';
import { getProjectHref } from '../lib/projects';
import { getPostHref, getSortedPosts } from '../lib/posts';

export const prerender = true;

export const GET: APIRoute = () => {
  const projects = [portfolio.featuredProject, ...portfolio.projects]
    .map((project) => `- ${project.name}: ${project.description} (${project.stack.join(', ')}) — ${getProjectHref(project)}`)
    .join('\n');

  const sortedPosts = getSortedPosts();
  const posts = sortedPosts
    .map((post) => `- ${post.data.title} (${post.data.publishedAt}, ${post.data.readingTime}): ${post.data.summary} — ${new URL(getPostHref(post), portfolio.seo.siteUrl).toString()}`)
    .join('\n');

  const links = portfolio.links
    .map((link) => `- ${link.label}: ${link.href}`)
    .join('\n');

  const technologies = portfolio.technologies
    .map((group) => `- ${group.category}: ${group.items.join(', ')}`)
    .join('\n');

  const content = `# ${portfolio.profile.name}\n\n${portfolio.profile.descriptor}\n\n${portfolio.profile.bio}\n\n## Projects\n\n${projects}\n\n## Writing\n\n${posts}\n\n## Technologies\n\n${technologies}\n\n## Links and contact\n\n${links}\n- Email: mailto:${portfolio.profile.email}\n`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
