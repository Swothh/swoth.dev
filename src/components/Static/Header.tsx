import { useWindowScroll } from 'react-use';
import { useRouter } from 'next/router';
import config from '@/../swoth.config';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [ indicator, setIndicator ] = useState<string>('0:0');
    const [ hovering, setHovering ] = useState<boolean>(false);
    const { y } = useWindowScroll();
    const router = useRouter();

    const calcIndicator = (hover: string) => {
        if (typeof document === 'undefined') return;
        const elements = document.querySelectorAll('a.header-item');
        let x = 0, size = 0;
        setHovering(true);

        for(let i = 0; i < elements.length; i++) {
            if (elements[i].id === hover) {
                size = elements[i].clientWidth;
                break;
            };

            x += elements[i].clientWidth;
        };

        setIndicator(`${x}:${size}`);
    };

    const toggleDarkMode = () => {
        if (typeof document === 'undefined' || typeof localStorage === 'undefined') return;
        document.body.classList.toggle('dark');
        document.body.classList.add('transition-colors', 'duration-200');
        localStorage.setItem('$theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    };

    return (
        <div style={{ '--tw-bg-opacity': 0.8 * Math.min(y, 50) / 50 } as any} className={`z-[99] w-full sticky transition-all px-5 py-4 duration-200 top-0 bg-zinc-100 dark:bg-slate-900${y >= 50 ? ' backdrop-blur' : ''}`}>
            <div className="max-w-screen-lg mx-auto w-full flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <Link href="/" className="outline-none">
                        <svg className="w-10 h-10 transition-all duration-200 fill-slate-950 dark:fill-white" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160.000000 160.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,160.000000) scale(0.100000,-0.100000)" stroke="none">
                                <path d="M0 800 l0 -800 800 0 800 0 0 800 0 800 -800 0 -800 0 0 -800z m892
                                439 c137 -29 228 -117 245 -234 l6 -45 -120 0 -119 0 -15 33 c-38 85 -217 61
                                -195 -27 7 -29 37 -42 174 -77 169 -42 245 -96 272 -195 44 -156 -50 -300
                                -219 -335 -78 -16 -263 -7 -326 17 -102 39 -185 153 -185 256 l0 38 120 0
                                c118 0 120 0 120 -23 0 -54 60 -97 135 -97 81 0 130 44 104 92 -14 26 -57 43
                                -169 67 -209 46 -290 121 -290 267 0 57 25 116 69 166 75 85 247 128 393 97z"/>
                            </g>
                        </svg>
                    </Link>
                    <div className="flex items-center relative">
                        {config.header_items.map((item, i) => (
                            <Link href={item.href} onMouseEnter={() => calcIndicator(item.id)} onMouseLeave={() => setHovering(false)} id={item.id} key={`header-item-${item.id + i}`} className={"header-item px-2 cursor-pointer hover:text-slate-900 dark:hover:text-zinc-50 transition-all duration-200 " + (router.pathname === item.href ? 'font-medium text-slate-900 dark:text-zinc-50' : 'text-slate-800 dark:text-zinc-300')}>
                                {item.label}
                            </Link>
                        ))}
                        <div 
                            style={{ left: indicator.split(':')[0] + 'px', width: indicator.split(':')[1] + 'px' }} 
                            className={`!m-0 transition-all duration-200 rounded absolute -top-1 -bottom-1 bg-slate-700/10 dark:bg-zinc-500/20 -z-[1] ${hovering ? 'opacity-100' : 'opacity-0'}`} 
                        />
                    </div>
                </div>
                <div className="hidden sm:block">
                    <div onClick={toggleDarkMode} className="transition-all duration-200 cursor-pointer overflow-hidden bg-slate-900/10 dark:bg-zinc-50/20 shadow-inner shadow-slate-700/40 dark:shadow-zinc-400/40 backdrop-blur w-10 h-10 rounded-full">
                        <div className="transition-all duration-200 absolute left-0 right-0 h-10 bottom-full dark:bottom-0 flex items-center justify-center">
                            <i className="far fa-sun-bright text-zinc-300" />
                        </div>
                        <div className="transition-all duration-200 absolute left-0 right-0 h-10 top-0 dark:top-full flex items-center justify-center">
                            <i className="far fa-moon text-slate-700" />
                        </div>
                    </div>
                </div>
                <div className="fixed bottom-3 right-3 sm:hidden">
                    <div onClick={toggleDarkMode} className="transition-all duration-200 cursor-pointer overflow-hidden bg-slate-900/10 dark:bg-zinc-50/20 shadow-inner shadow-slate-700/40 dark:shadow-zinc-400/40 backdrop-blur w-10 h-10 rounded-full">
                        <div className="transition-all duration-200 absolute left-0 right-0 h-10 bottom-full dark:bottom-0 flex items-center justify-center">
                            <i className="far fa-sun-bright text-zinc-300" />
                        </div>
                        <div className="transition-all duration-200 absolute left-0 right-0 h-10 top-0 dark:top-full flex items-center justify-center">
                            <i className="far fa-moon text-slate-700" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};