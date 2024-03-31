import type { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosPromise } from 'axios';
import config from '@/../swoth.config';
import matter from 'gray-matter';

export default async function Blog(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') return res.status(405).end();

    const rest = async (path: string) => await axios.get(`https://api.github.com${path}`, {
        headers: {
            'Authorization': `token ${config.github_blog_token}`
        }
    }).catch((err): AxiosPromise => err?.response).then(res => res?.data);

    const slug = req.query.slug;
    const post = await rest(`/repos/Swothh/blog/contents/${slug}.md`);
    const raw = Buffer.from(post.content, post.encoding).toString();
    const parsed = matter(raw);
    const content = parsed.content.slice(parsed.content.startsWith('\n') ? 1 : 0);

    res.json({
        slug,
        ...parsed.data,
        tags: parsed.data.tags.split(',').filter((tag: string) => !!tag).map((tag: string) => tag.trim()),
        date: new Date(parsed.data.date).getTime(),
        content
    });
};