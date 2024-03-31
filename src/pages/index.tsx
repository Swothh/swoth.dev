import Packages from '@/components/Index/Packages';
import Repos from '@/components/Index/Repos';
import Techs from '@/components/Index/Techs';
import Hero from '@/components/Index/Hero';
import { NextSeo } from 'next-seo';

export default function Index() {
    return (
        <>
            <NextSeo title="Home" />
            <Hero />
            <Repos />
            <Packages />
            <Techs />
        </>
    );
};