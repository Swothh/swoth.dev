import Hero from '../components/About/Hero.jsx';
import Text from '../components/About/Text.jsx';
import Head from 'next/head';

export default function About() {
    return (
        <>
            <Head>
                <title>About | Swôth</title>
            </Head>
            <div className="w-full my-5">
                <Hero />
                <Text />
            </div>
        </>
    );
};