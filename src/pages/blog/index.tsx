import Posts from '@/components/Blog/Posts';
import Hero from '@/components/Blog/Hero';
import { NextSeo } from 'next-seo';

export default function Blog() {
    return (
        <>
            <NextSeo title="Blog" />
            <Hero />
            <Posts />
        </>
    );
};