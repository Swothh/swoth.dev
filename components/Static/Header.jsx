import { UilCircle, UilDesktop, UilUserCircle, UilAngleDown, UilEstate, UilUser, UilEnvelope, UilBox, UilSignInAlt, UilBars, UilTimes, UilSpinnerAlt, UilSignout, UilArrowCircleUp } from '@iconscout/react-unicons';
import { Menu, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import Tippy from '@tippyjs/react';

export default function Header() {
    const router = useRouter();
    const [ isClicked, setIsClicked ] = useState(false);
    const baseURL = 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/';
    
    const emojis = {
        wink: "1f609.png",
        sunglasses: "1f60e.png",
        ghost: "1f47b.png",
        ok: "1f44c.png",
        agent: "1f575.png",
        dove: "1f54a.png",
        bird: "1f426.png",
        wine: "1f37e.png",
        infinity: "267e.png"
    };
    
    return (
        <>
            <div className={"pb-10 w-full flex items-center justify-between"}>
                <div className="flex items-center space-x-2">
                    <Link href="/">
                        <a className="pr-1 text-white font-bold text-4xl">Swôth</a>
                    </Link>
                    <a target="_blank" href="https://serity.me/discord" className="flex items-center justify-center cursor-pointer social w-10 h-10 rounded-lg">
                        <i className="fab fa-discord" />
                    </a>
                    <a target="_blank" href="https://twitter.com/swoth_" className="flex items-center justify-center cursor-pointer social w-10 h-10 rounded-lg">
                        <i className="fab fa-twitter" />
                    </a>
                    <a target="_blank" href="https://github.com/swothh" className="flex items-center justify-center cursor-pointer social w-10 h-10 rounded-lg">
                        <i className="fab fa-github" />
                    </a>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="block lg:hidden relative">
                        <Menu>
                            <Menu.Button className="focus:outline-none">
                                <a className="flex items-center cursor-pointer">
                                    <UilBars /> <h6 className="ml-1">Menu</h6>
                                </a>
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="z-50 absolute right-0 bg-opacity-100 bg-[#101010] py-2 px-3 rounded gap-y-2 flex flex-col">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link href="/">
                                                <a className={`flex items-center justify-between ${router.route == '/' ? 'text-gray-100 font-semibold' : ''}`}>
                                                    <UilEstate /> <h6 className="ml-2">Home</h6>
                                                </a>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link href="/about">
                                                <a className={`flex items-center justify-between ${router.route == '/about' ? 'text-gray-100 font-semibold' : ''}`}>
                                                    <UilUser /> <h6 className="ml-2">About</h6>
                                                </a>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link href="/projects">
                                                <a className={`flex items-center justify-between ${router.route == '/projects' ? 'text-gray-100 font-semibold' : ''}`}>
                                                    <UilBox /> <h6 className="ml-2">Projects</h6>
                                                </a>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link href="/contact">
                                                <a className={`flex items-center justify-between ${router.route == '/contact' ? 'text-gray-100 font-semibold' : ''}`}>
                                                    <UilEnvelope /> <h6 className="ml-2">Contact</h6>
                                                </a>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                    <ul className="lg:space-x-6 hidden lg:flex lg:items-center">
                        <li>
                            <Link href="/">
                                <a className={`flex items-center ${router.route == '/' ? 'text-gray-100 font-semibold' : 'hover:text-white transition-all'}`}>
                                    <UilEstate /> <h6 className="ml-1">Home</h6>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a className={`flex items-center ${router.route == '/about' ? 'text-gray-100 font-semibold' : 'hover:text-white transition-all'}`}>
                                    <UilUser /> <h6 className="ml-1">About</h6>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects">
                                <a className={`flex items-center ${router.route == '/projects' ? 'text-gray-100 font-semibold' : 'hover:text-white transition-all'}`}>
                                    <UilBox /> <h6 className="ml-1">Projects</h6>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a className={`flex items-center ${router.route == '/contact' ? 'text-gray-100 font-semibold' : 'hover:text-white transition-all'}`}>
                                    <UilEnvelope /> <h6 className="ml-1">Contact</h6>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="fixed bottom-10 left-10">
                <Transition
                    as={Fragment}
                    show={isClicked}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-0 -translate-x-40"
                    enterTo="transform opacity-100 scale-100 -translate-x-3"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 -translate-x-40 scale-0"
                >
                    <img className="w-6 h-6 translate-y-3 -translate-x-2 -rotate-12" src={baseURL + emojis[Object.keys(emojis)[Math.floor(Math.random() * Object.keys(emojis).length)]]} />
                </Transition>
                <Tippy interactive={true} content="Koralle">
                    <button onClick={() => {
                        if (isClicked) return;
                        setIsClicked(true);
                        setTimeout(() => setIsClicked(false), 1000);
                    }} className="focus:outline-none cursor-pointer hidden lg:block version text-sm py-1.5 px-3 rounded-md">
                        v<span className="font-bold">3.0.0</span>
                    </button>
                </Tippy>
            </div>
            <div id="toUp" className="z-50 hidden bg-[#101010] rounded-full fixed lg:bottom-10 lg:right-10 bottom-5 right-5">
                <a href="#">
                    <UilArrowCircleUp className="p-2 w-12 h-12" />
                </a>
            </div>
        </>
    );
};