import type { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosPromise } from 'axios';
import config from '@/../swoth.config';

let cache: [
    number,
    any
] | undefined;

export default async function Repos(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') return res.status(405).end();

    if (!cache || (Date.now() - cache[0]) >= 1000 * 60 * 5) {
        const rest = async (path: string) => await axios.get(`https://api.github.com${path}`, {
            headers: {
                'Authorization': `token ${config.github_token}`
            }
        }).catch((err): AxiosPromise => err?.response).then(res => res?.data);

        const [ swoth ] = await Promise.all([
            rest(`/users/Swothh/repos`)
        ]);

        const top = [ swoth ].flat()
            .sort((a, b) => b?.stargazers_count - a?.stargazers_count)
            .slice(0, 6);

        const map = await Promise.all(top.map(async repo => {
            const content = await rest(`/repos/${repo?.owner?.login}/${repo?.name}/contents`);

            return {
                name: repo?.name,
                description: repo?.description,
                url: repo?.html_url,
                language: repo?.language,
                stars: repo?.stargazers_count,
                forks: repo?.forks_count,
                owner: {
                    login: repo?.owner?.login,
                    avatar: repo?.owner?.avatar_url
                },
                content: (content ?? []).map((item: any) => ({
                    name: item?.name,
                    type: item?.type,
                    url: item?.html_url
                }))
            };
        }));

        cache = [ Date.now(), map ];
        res.json(map);
    } else {
        res.json(cache[1]);
    };
};