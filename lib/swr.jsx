import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';

export default function SWR(url, interval = 3000) {
    return useSWR(url, href => fetch(href).then(res => res.json()), { refreshInterval: interval });
};