import '../public/css/global.css';
import '../public/css/tippy.css';
import 'tailwindcss/tailwind.css';
import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';

import Header from '../components/Static/Header.jsx';
import Footer from '../components/Static/Footer.jsx';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default function Swoth({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="icon" href="/img/favicon.png" type="image/x-icon" />
                <link href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="/css/nprogress.css" />
            </Head>
            <main className="overflow-y-hidden md:overflow-y-visible min-h-[calc(100vh-14px)] max-w-screen-lg p-5 w-full md:py-10 md:w-10/12 lg:py-20 lg:w-8/12 mx-auto transition-all duration-300">
                <Header />
                <Component {...pageProps} />
                <Footer />
            </main>
            <div>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
                <script src="/js/main.js" />
            </div>
        </>
    );
};
