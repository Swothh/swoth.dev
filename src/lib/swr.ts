import axios, { AxiosPromise } from 'axios';
import useSWR from 'swr';

export default function useSwr(url: string) {
    return useSWR(url, href => (
        axios.get(href)
            .catch((err): AxiosPromise => err?.response)
            .then(res => res?.data)
    ));
};
