import Hero from '@/components/Contact/Hero';
import Main from '@/components/Contact/Main';
import { NextSeo } from 'next-seo';

export default function Contact() {
    return (
        <>
            <NextSeo title="Contact" />
            <Hero />
            <Main />
        </>
    );
};