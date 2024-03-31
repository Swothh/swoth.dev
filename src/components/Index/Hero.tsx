import { useAutoAnimate } from '@formkit/auto-animate/react';
import useWebSocket from 'react-use-websocket';
import config from '@/../swoth.config';
import { useState } from 'react';
import Image from 'next/image';
import swr from '@/lib/swr';
import Link from 'next/link';

export default function Hero() {
    const [ spotify, setSpotify ] = useState<any>();
    const [ animate ] = useAutoAnimate();

    const { data } = swr('/api/v5/blog');
    const lastPost = (data ?? []).sort((a: any, b: any) => b.date - a.date)[0];

    useWebSocket('wss://linkcord.js.org/api/wss?u=' + config.discord_id, {
        onMessage: event => {
            try {
                const payload = JSON.parse(event.data);
                if (![ 0, 1 ].includes(payload.op)) return;
                if (![ 'FETCH_USER', 'UPDATE_USER' ].includes(payload.t)) return;
                setSpotify(payload?.d?.activities?.find((a: any) => a.name === 'Spotify' && a.type === 'LISTENING'))
            } catch {};
        }
    });

    return (
        <div className="w-full px-5 pb-24 sm:pb-32 pt-10 sm:pt-[4.5rem]">
            <div ref={animate} className="max-w-screen-lg mx-auto w-full flex flex-col items-center">
                {(data && lastPost && (Date.now() - lastPost.date) < 1000 * 60 * 60 * 24 * 30) && <div className="mb-6 py-2 transition-colors duration-200 px-4 max-w-xs w-full rounded-full dark:bg-slate-900/50 bg-white/50 backdrop-blur flex items-center divide-x divide-zinc-600/40 dark:divide-slate-400/40">
                    <div className="pr-4">
                        <h1 className="text-xs font-medium transition-colors duration-200 text-slate-900 dark:text-white">New Post <span className="opacity-70 px-1">•</span> <span className="opacity-70 font-light">{new Date(lastPost.date).toLocaleDateString('tr')}</span></h1>
                        <h3 className="line-clamp-1 text-sm font-light transition-colors duration-200 text-slate-900/80 dark:text-white/80 leading-none">{lastPost.title}</h3>
                    </div>
                    <Link href={`/blog/${lastPost.slug}`} className="ml-auto flex cursor-pointer pl-4 h-[1.4rem] text-slate-900/80 hover:text-slate-900 dark:text-white/80 dark:hover:text-white transition-colors duration-200 text-xs items-center space-x-1">
                        <span>Read</span>
                        <i className="far fa-chevron-right" />
                    </Link>
                </div>}
                <Image
                    src="/img/memoji.png"
                    alt="Swôth"
                    draggable={false}
                    width={128}
                    height={128}
                />
                <h3 className="transition-all duration-200 text-center text-slate-700 dark:text-zinc-300 sm:text-lg font-medium max-w-sm">Hi, I'm Swôth.</h3>
                <h1 className="mt-3 transition-all duration-200 text-3xl sm:text-5xl text-slate-900 dark:text-zinc-50 text-center font-semibold max-w-lg">Building websites, bots, npm packages and more.</h1>
                {spotify && (
                    <div className="mt-6 flex items-center space-x-2 w-full justify-center">
                        <i className="fab fa-spotify text-green-600 dark:text-green-500 transition-colors duration-200 text-lg" />
                        <h1 className="text-sm text-slate-700 dark:text-zinc-300 transition-colors duration-200">
                            Listening to <span className="text-slate-900 dark:text-zinc-50 transition-colors duration-200 font-medium">{spotify?.details}</span> by <span className="text-slate-900 dark:text-zinc-50 transition-colors duration-200 font-medium">{spotify?.state}</span>.
                        </h1>
                    </div>
                )}
            </div>
        </div>
    );
};