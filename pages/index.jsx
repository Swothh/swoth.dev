import Activities from '../components/Index/Activities.jsx';
import Hero from '../components/Index/Hero.jsx';
import Techs from '../components/Index/Techs.jsx';
import Repos from '../components/Index/Repos.jsx';
import Head from 'next/head';

export default function Index() {
    return (
        <>
            <Head>
                <title>Home | Swôth</title>
            </Head>
            <Hero />
            <Activities />
            <Repos />
            <Techs />
        </>
    );
};
