import Hero from '../../components/Logout/Hero.jsx';
import Main from '../../components/Logout/Main.jsx';
import Head from 'next/head';

export default function Logout() {
    return (
        <>
            <Head>
                <title>Logout | Swôth</title>
            </Head>
            <div className="w-full my-5">
                <Hero />
                <Main />
            </div>
        </>
    );
};