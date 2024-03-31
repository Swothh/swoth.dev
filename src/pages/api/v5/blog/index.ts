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

    const posts = await rest('/repos/Swothh/blog/contents');
    const contents = await Promise.all(posts.map((post: any) => rest(post?.url?.slice?.(22))));

    res.json(contents.map((item: any) => {
        const raw = Buffer.from(item.content, item.encoding).toString();
        const parsed = matter(raw);

        return {
            slug: item.name.slice(0, item.name.length - 3),
            ...parsed.data,
            tags: parsed.data.tags.split(',').filter((tag: string) => !!tag).map((tag: string) => tag.trim()),
            date: new Date(parsed.data.date).getTime(),
        };
    }));
};