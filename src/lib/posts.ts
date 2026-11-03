import type { MarkdownInstance } from 'astro';

export type BlogFrontmatter = {
  title: string;
  summary: string;
  publishedAt: string;
  readingTime: string;
  tags?: readonly string[];
  href?: string;
};

export type BlogEntry = {
  id: string;
  data: {
    title: string;
    summary: string;
    publishedAt: string;
    readingTime: string;
    tags: readonly string[];
    href?: string;
  };
  Content: MarkdownInstance<BlogFrontmatter>['Content'];
};

const markdownFiles = import.meta.glob<MarkdownInstance<BlogFrontmatter>>(
  '../content/blog/*.md',
  { eager: true },
);

export function getSortedPosts(): BlogEntry[] {
  return Object.entries(markdownFiles)
    .map(([filePath, mod]) => {
      const fileName = filePath.split('/').pop() ?? '';
      const id = fileName.replace(/\.md$/i, '');

      return {
        id,
        data: {
          title: mod.frontmatter.title,
          summary: mod.frontmatter.summary,
          publishedAt: mod.frontmatter.publishedAt,
          readingTime: mod.frontmatter.readingTime,
          tags: mod.frontmatter.tags ?? [],
          href: mod.frontmatter.href,
        },
        Content: mod.Content,
      };
    })
    .sort((a, b) => b.data.publishedAt.localeCompare(a.data.publishedAt));
}

export function getPostHref(post: BlogEntry): string {
  return post.data.href ?? `/blog/${post.id}`;
}

export function isExternalPost(post: BlogEntry): boolean {
  return Boolean(post.data.href && /^https?:\/\//i.test(post.data.href));
}

const shortDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

const fullDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
});

export function formatPostShortDate(isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00Z`);
  return Number.isNaN(date.getTime()) ? isoDate : shortDateFormatter.format(date);
}

export function formatPostFullDate(isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00Z`);
  return Number.isNaN(date.getTime()) ? isoDate : fullDateFormatter.format(date);
}
