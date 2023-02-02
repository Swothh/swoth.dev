import { useRouter } from 'next/router';
import Logo from '../Global/Logo';
import Link from 'next/link';

export default function Header() {
    const router = useRouter();
    
    return (
        <>
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center space-x-5 w-full">
                    <Link href="/">
                        <a>
                            <Logo />
                        </a>
                    </Link>
                    <ul className="space-x-4 flex-1 justify-end sm:justify-start flex items-center">
                        <li>
                            <Link href="/">
                                <a className={`flex items-center ${router.route == '/' ? 'text-gray-100 font-semibold' : 'hover:text-white transition-all'}`}>
                                    <h6>Home</h6>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects">
                                <a className={`flex items-center ${router.route == '/projects' ? 'text-gray-100 font-semibold' : 'hover:text-white transition-all'}`}>
                                    <h6>Projects</h6>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a className={`flex items-center ${router.route == '/contact' ? 'text-gray-100 font-semibold' : 'hover:text-white transition-all'}`}>
                                    <h6>Contact</h6>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden sm:flex items-center space-x-2">
                    <a target="_blank" href="https://serity.me/discord" className="text-white hover:bg-zinc-900/50 transition-all flex items-center justify-center cursor-pointer social w-10 h-10 rounded-lg">
                        <i className="fab fa-discord" />
                    </a>
                    <a target="_blank" href="https://twitter.com/swoth_" className="text-white hover:bg-zinc-900/50 transition-all flex items-center justify-center cursor-pointer social w-10 h-10 rounded-lg">
                        <i className="fab fa-twitter" />
                    </a>
                    <a target="_blank" href="https://github.com/swothh" className="text-white hover:bg-zinc-900/50 transition-all flex items-center justify-center cursor-pointer social w-10 h-10 rounded-lg">
                        <i className="fab fa-github" />
                    </a>
                </div>
            </div>
        </>
    );
};