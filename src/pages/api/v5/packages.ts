import type { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosPromise } from 'axios';
import config from '@/../swoth.config';

let cache: [
    number,
    any
] | undefined;

export default async function Packages(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') return res.status(405).end();

    const format = ([ stats, obj ]: any) => ({
        name: obj?.name,
        description: obj?.description,
        version: obj?.['dist-tags']?.latest,
        url: `https://www.npmjs.com/package/${obj?.name}`,
        downloads: stats?.downloads,
        dependencies: Object.keys((Object.values(obj?.versions ?? {})[0] as any)?.dependencies ?? {})?.length ?? 0,
        license: obj?.license
    });

    if (!cache || (Date.now() - cache[0]) >= 1000 * 60 * 10) {
        const packages = await Promise.all(config.npm_packages.map(name => Promise.all([
            axios
                .get(`https://api.npmjs.org/downloads/point/2000-01-01:9999/${name}`)
                .catch((err): AxiosPromise => err?.response)
                .then(res => res?.data),
            axios
                .get(`https://registry.npmjs.org/${name}`)
                .catch((err): AxiosPromise => err?.response)
                .then(res => res?.data)
        ])));


        cache = [ Date.now(), packages ];
        res.json(packages.map(format));
    } else {
        res.json(cache[1].map(format));
    };
};