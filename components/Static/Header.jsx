import { UilCircle, UilDesktop, UilUserCircle, UilAngleDown, UilEstate, UilUser, UilEnvelope, UilBox, UilSignInAlt, UilBars, UilTimes, UilSpinnerAlt, UilSignout, UilArrowCircleUp } from '@iconscout/react-unicons';
import { Menu, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import swr from '../../lib/swr.jsx';
import { Fragment } from 'react';
import Link from 'next/link';

export default function Header() {
    const router = useRouter();
    const { data: activity } = swr('/api/util/activity');
    const { data: identify } = swr('/api/auth/me');
    const user = identify ? identify.user : null;

    return (
        <>
            <div className="w-full pb-3 flex items-center justify-between">
                <div className="flex items-center">
                    <div>
                        <h1 className="text-white font-bold text-4xl">Swôth</h1>
                        <h5 className="uppercase text-gray-500 text-xs font-semibold">Personal Website</h5>
                    </div>
                    {!activity || !activity.data || !activity.data.user ? <div className="p-3 sm:p-5 flex items-center">
                        <UilSpinnerAlt className="spin" />
                    </div> : <div className="p-3 sm:p-5 flex items-center">
                        <UilCircle className={'discord-' + activity.data.user.status} />
                        <span className={'dctx-' + activity.data.user.status + ' hidden sm:block ml-2 discord-text opacity-80 uppercase'}>{activity.data.user.status} ON DISCORD</span>
                    </div>}
                </div>
                <div className="version text-sm py-1.5 px-3 rounded-md">
                    v<span className="font-bold">2.0.0</span>
                </div>
            </div>
            <div className="pb-3 mb-3 header flex items-center justify-between">
                <div className="block md:hidden relative">
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
                            <Menu.Items className="absolute left-0 header-dropdown backdrop-filter backdrop-blur py-2 px-3 rounded gap-y-2 flex flex-col">
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
                <ul className="md:space-x-6 hidden md:flex md:items-center">
                    <li>
                        <Link href="/">
                            <a className={`flex items-center ${router.route == '/' ? 'text-gray-100 font-semibold' : ''}`}>
                                <UilEstate /> <h6 className="ml-1">Home</h6>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a className={`flex items-center ${router.route == '/about' ? 'text-gray-100 font-semibold' : ''}`}>
                                <UilUser /> <h6 className="ml-1">About</h6>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            <a className={`flex items-center ${router.route == '/projects' ? 'text-gray-100 font-semibold' : ''}`}>
                                <UilBox /> <h6 className="ml-1">Projects</h6>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a className={`flex items-center ${router.route == '/contact' ? 'text-gray-100 font-semibold' : ''}`}>
                                <UilEnvelope /> <h6 className="ml-1">Contact</h6>
                            </a>
                        </Link>
                    </li>
                </ul>
                    {!identify ?
                        <UilSpinnerAlt className="spin" />
                    : (user ?
                        <div className="block relative">
                            <Menu>
                                <Menu.Button className="focus:outline-none">
                                    <a className="flex items-center">
                                        <h6 className="cursor-pointer mr-1.5">{user.username}</h6>
                                        <UilAngleDown />
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
                                    <Menu.Items className="absolute right-0 header-dropdown backdrop-filter backdrop-blur py-2 px-3 rounded gap-y-2 flex flex-col">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link href="/panel">
                                                    <a className={`flex items-center justify-between ${router.route == '/panel' ? 'text-gray-100 font-semibold' : ''}`}>
                                                        <UilDesktop /> <h6 className="ml-2">Panel</h6>
                                                    </a>
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link href="/account/profile">
                                                    <a className={`flex items-center justify-between ${router.route == '/account/profile' ? 'text-gray-100 font-semibold' : ''}`}>
                                                        <UilUserCircle /> <h6 className="ml-2">Profile</h6>
                                                    </a>
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link href="/account/logout">
                                                    <a className={`flex items-center text-red-600 justify-between ${router.route == '/account/logout' ? 'text-red-500 font-semibold' : ''}`}>
                                                        <UilSignout /> <h6 className="ml-2">Logout</h6>
                                                    </a>
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    :
                        <Link href="/account/login">
                            <a className="flex items-center">
                                <UilSignInAlt /> <h6 className="ml-1">Login</h6>
                            </a>
                        </Link>
                    )}
            </div>
            <div id="toUp" className="hidden to-up rounded-full fixed lg:bottom-10 lg:right-10 bottom-5 right-5">
                <a href="#">
                    <UilArrowCircleUp className="p-2 w-12 h-12" />
                </a>
            </div>
        </>
    );
};