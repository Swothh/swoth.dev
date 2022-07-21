import Hero from '../components/Contact/Hero.jsx';
import Main from '../components/Contact/Main.jsx';
import Head from 'next/head';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact | Swôth</title>
            </Head>
            <div className="w-full my-5">
                <Hero />
                <Main />
            </div>
        </>
    );
};