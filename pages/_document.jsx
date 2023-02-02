import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/img/logo.png" type="image/x-icon" />
                <link href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" rel="stylesheet" />
                <link rel="stylesheet" href="/css/nprogress.css" />
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
                <meta
	                name="description"
	                content="Full-Stack Developer. I live in Turkey. I'm high school student and self-improvement person."
                />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@Swoth_" />
                <meta name="twitter:creator" content="@Swoth_" />
                <meta name="twitter:image" content="/img/logo.png" />
                <meta property="og:url" content="https://swoth.me" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Swôth | Full-Stack Developer" />
                <meta
	                property="og:description"
	                content="Full-Stack Developer. I live in Turkey. I'm high school student and self-improvement person."
                />
                <meta property="og:image" content="/img/logo.png" />
                <meta property="og:image:alt" content="swoth.me" />
                <meta property="og:locale" content="en_GB" />
                <meta name="theme-color" content="#00afe8" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};