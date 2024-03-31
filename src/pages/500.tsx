import { NextSeo } from 'next-seo';

export default function ServerError() {
    return (
        <>
            <NextSeo title="500" />
            <div className="w-full h-[calc(100vh-4.5rem)] flex items-center p-5">
                <div className="max-w-screen-lg mx-auto w-full flex flex-col items-center">
                    <h1 className="mb-3 transition-all duration-200 text-5xl text-slate-900 dark:text-zinc-50 font-semibold max-w-lg">500</h1>
                    <h3 className="transition-all duration-200 text-center text-slate-700 dark:text-zinc-300 text-lg max-w-sm">There was a problem with the website, we are dealing with the problem.</h3>
                </div>
            </div>
        </>
    );
};