import '../public/css/global.css';
import '../public/css/tippy.css';
import 'tailwindcss/tailwind.css';
import NProgress from 'nprogress';
import Router, { useRouter } from 'next/router';
import Script from 'next/script';

import Header from '../components/Static/Header.jsx';
import Footer from '../components/Static/Footer.jsx';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default function Swoth({ Component, pageProps }) {
    const router = useRouter();

    return (
        <main className="w-full h-full transition-all duration-300">
            {router?.pathname !== '/' && <div className="p-5 w-full">
                <div className="max-w-screen-lg mx-auto w-full">
                    <Header />
                </div>
            </div>}
            <Component {...pageProps} />
            <Footer />
            <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
            <noscript>
                <img
                  src="https://queue.simpleanalyticscdn.com/noscript.gif"
                  alt=""
                  referrerPolicy="no-referrer-when-downgrade"
                />
            </noscript>
        </main>
    );
};
