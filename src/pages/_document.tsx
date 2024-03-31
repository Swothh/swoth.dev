import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/img/logo.png" type="image/x-icon" />
                <link href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" rel="stylesheet" />
            </Head>
            <body className="dark transition-colors duration-200">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};
