import config from '@/../swoth.config';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="relative w-full footer-gradient">
            <div className="px-5 w-full h-full bg-gradient-to-b from-zinc-100 dark:from-slate-900 dark:to-slate-900/90 to-zinc-100/80">
                <div className="py-20 max-w-screen-lg w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10">
                    <div>
                        <div className="flex items-center space-x-3">
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
                            <div>
                                <h1 className="text-slate-900 dark:text-zinc-50 transition-colors duration-200 leading-none text-lg font-semibold">Swôth</h1>
                                <h3 className="text-slate-700 dark:text-zinc-400 transition-colors duration-200 leading-none text-sm">Full-Stack Developer</h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:justify-end">
                        <div>
                            <h1 className="font-semibold text-slate-900 dark:text-zinc-50 transition-colors duration-200 text-lg">Navigation</h1>
                            <ul>
                                {config.header_items.map((item, i) => (
                                    <li key={`footer-${i}`}>
                                        <Link href={item.href} className="text-slate-700 dark:text-zinc-300 dark:hover:text-zinc-200 hover:text-slate-800 relative after:absolute after:left-0 after:bottom-0 after:right-full transition-colors after:transition-all after:duration-200 after:rounded-full cursor-pointer duration-200 after:h-px after:bg-slate-800 dark:after:bg-zinc-200 hover:after:right-0">{item.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex md:justify-end">
                        <div>
                            <h1 className="font-semibold text-slate-900 dark:text-zinc-50 transition-colors duration-200 text-lg">Social</h1>
                            <ul>
                                <li>
                                    <a href="https://discord.com/users/451444721089380373" target="_blank" referrerPolicy="no-referrer" className="text-slate-700 dark:text-zinc-300 dark:hover:text-zinc-200 hover:text-slate-800 relative after:absolute after:left-0 after:bottom-0 after:right-full transition-colors after:transition-all after:duration-200 after:rounded-full cursor-pointer duration-200 after:h-px after:bg-slate-800 dark:after:bg-zinc-200 hover:after:right-0">Discord</a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/Swoth_" target="_blank" referrerPolicy="no-referrer" className="text-slate-700 dark:text-zinc-300 dark:hover:text-zinc-200 hover:text-slate-800 relative after:absolute after:left-0 after:bottom-0 after:right-full transition-colors after:transition-all after:duration-200 after:rounded-full cursor-pointer duration-200 after:h-px after:bg-slate-800 dark:after:bg-zinc-200 hover:after:right-0">Twitter</a>
                                </li>
                                <li>
                                    <a href="https://github.com/Swothh" target="_blank" referrerPolicy="no-referrer" className="text-slate-700 dark:text-zinc-300 dark:hover:text-zinc-200 hover:text-slate-800 relative after:absolute after:left-0 after:bottom-0 after:right-full transition-colors after:transition-all after:duration-200 after:rounded-full cursor-pointer duration-200 after:h-px after:bg-slate-800 dark:after:bg-zinc-200 hover:after:right-0">GitHub</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-lg w-full mx-auto py-10 border-t border-slate-700/10 dark:border-zinc-400/10 transition-colors duration-200 flex items-center justify-between">
                    <h1 className="text-slate-900 dark:text-zinc-50 transition-colors duration-200 text-xs sm:text-sm">
                        Copyright &copy; 2020-{new Date().getFullYear()}
                    </h1>
                    <h1 className="text-slate-900 dark:text-zinc-50 transition-colors duration-200 text-xs sm:text-sm">
                        Developed with <i className="fas fa-heart" /> by <a className="font-medium" target="_blank" href="https://github.com/Swothh" referrerPolicy="no-referrer">Swôth</a>.
                    </h1>
                </div>
            </div>
        </div>
    );
};