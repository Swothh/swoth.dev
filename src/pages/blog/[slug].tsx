import Main from '@/components/Post/Main';
import Hero from '@/components/Post/Hero';
import { useRouter } from 'next/router';
import swr from '@/lib/swr';
import { NextSeo } from 'next-seo';

export default function Post() {
    const router = useRouter();
    const { data } = swr(`/api/v5/blog/${router.query?.slug}`);

    return (
        <>
            <NextSeo title={data?.title ?? 'Post'} />
            <Hero post={data} />
            <Main post={data} />
        </>
    );
};