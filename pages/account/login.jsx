import Hero from '../../components/Login/Hero.jsx';
import Main from '../../components/Login/Main.jsx';
import Head from 'next/head';

export default function Login() {
    return (
        <>
            <Head>
                <title>Login | Swôth</title>
            </Head>
            <div className="w-full my-5">
                <Hero />
                <Main />
            </div>
        </>
    );
};