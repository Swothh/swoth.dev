import Hero from '@/components/Projects/Hero';
import Main from '@/components/Projects/Main';
import { NextSeo } from 'next-seo';

export default function Projects() {
    return (
        <>
            <NextSeo title="Projects" />
            <Hero />
            <Main />
        </>
    );
};