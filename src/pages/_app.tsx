import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import config from '@/../seo.config';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import '@/styles/global.css';

import Gradient from '@/components/Static/Gradient';
import Header from '@/components/Static/Header';
import Footer from '@/components/Static/Footer';

const font = Inter({
    subsets: [
        'latin'
    ]
});

Router.events.on('routeChangeStart', NProgress.start);
Router.events.on('routeChangeComplete', NProgress.done);
Router.events.on('routeChangeError', NProgress.done);

export default function Swoth({ Component, pageProps }: AppProps) {
    useEffect(() => {
        if (typeof document === 'undefined' || typeof localStorage === 'undefined') return;
        if (localStorage.getItem('$theme') === 'light') document.body.classList.remove('dark', 'transition-colors', 'duration-200');
    }, []);

    return (
        <main className={font.className}>
            <DefaultSeo {...config} />
            <Header />
            <Gradient />
            <Component {...pageProps} />
            <Footer />
        </main>
    );
};