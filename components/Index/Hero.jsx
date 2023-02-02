import { useEffect, useState } from 'react';
import Header from '../Static/Header';
import swr from '../../lib/swr.jsx';

export default function Hero() {
    const { data: profile } = swr('/api/util/me');
    const [ ws, setWs ] = useState(false);
    const [ spotify, setSpotify ] = useState(false);

    useEffect(() => {
        if (typeof WebSocket === 'undefined' || (ws && ws instanceof WebSocket)) return;
        const socket = new WebSocket('wss://linkcord.js.org/api/wss?u=451444721089380373');
        socket.onopen = () => setWs(socket);

        socket.onmessage = event => {
            try {
                const payload = JSON.parse(event.data);
                if (![ 0, 1 ].includes(payload.op)) return;
                if (![ 'FETCH_USER', 'UPDATE_USER' ].includes(payload.t)) return;
                setSpotify(payload?.d?.activities?.find(a => a.name === 'Spotify' && a.type === 'LISTENING'))
            } catch {};
        };
    }, [ ws ]);

    return (
        <div className="w-full h-96 bg-cover overflow-hidden p-5">
            <div className="max-w-screen-lg mx-auto w-full h-full relative">
                <svg className="hidden sm:block pointer-events-none -z-[1] select-none absolute rotate-[200deg] -right-[700px] -top-80 w-[1497px] h-[700px]" xmlns="http://www.w3.org/2000/svg" width="1442" height="1076" viewBox="0 0 1442 1076">
                    <defs>
                        <linearGradient id="isozjzxnaa" x1="50%" x2="50%" y1="0%" y2="100%">
                            <stop offset="0%" stopColor="#fff"/>
                            <stop offset="100%" stopColor="#fff" stopOpacity="0"/>
                        </linearGradient>
                        <linearGradient id="eejprs9y1b" x1="50%" x2="50%" y1="0%" y2="100%">
                            <stop offset="0%" stopColor="#fff"/>
                            <stop offset="100%" stopColor="#fff" stopOpacity="0"/>
                        </linearGradient>
                        <linearGradient id="tk4hi08wpc" x1="50%" x2="50%" y1="0%" y2="100%">
                            <stop offset="0%" stopColor="#fff"/>
                            <stop offset="100%" stopColor="#fff" stopOpacity="0"/>
                        </linearGradient>
                        <linearGradient id="amwmaywlxd" x1="50%" x2="50%" y1="0%" y2="100%">
                            <stop offset="0%" stopColor="#fff"/>
                            <stop offset="100%" stopColor="#fff" stopOpacity="0"/>
                        </linearGradient>
                        <linearGradient id="w9ki7335le" x1="50%" x2="50%" y1="0%" y2="100%">
                            <stop offset="0%" stopColor="#fff"/>
                            <stop offset="100%" stopColor="#fff" stopOpacity="0"/>
                        </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd" opacity=".5">
                        <g>
                            <g>
                                <path stroke="url(#isozjzxnaa)" d="M1403.424 555.388c69.447 99.519 19.145 168.305 16.54 250.902-2.769 87.879 52.985 207.004-32.243 247.216-86.871 41.002-250.632 17.108-403.121-41.753-139.196-53.706-225.485-178.663-359.588-252.586C462.25 669.444 260.28 657.263 132.709 542.17 4.613 426.61-22.789 293.243 16.699 210.396c37.423-78.507 213.4-51.313 315.161-86.024C434.85 89.25 458.542-28.179 615.223 6.25 771.67 40.626 911.094 182.99 1055.061 283.291c126.668 88.248 277.803 170.964 348.363 272.097z" transform="translate(1.000000, -202.000000) translate(720.000000, 740.000000) scale(-1, 1) translate(-720.000000, -740.000000) translate(0.000000, 203.000000)"/>
                                <path stroke="url(#eejprs9y1b)" d="M1330.37 553.132c61.632 88.35 16.979 149.422 14.668 222.751-2.461 78.023 47.049 183.775-28.623 219.488-77.119 36.39-222.513 15.175-357.899-37.072-123.572-47.692-200.18-158.623-319.237-224.245-144.498-79.665-323.808-90.481-437.066-192.652C88.49 438.81 64.162 320.409 99.221 246.853c33.222-69.698 189.455-45.556 279.799-76.371C470.456 139.294 491.49 35.04 630.592 65.606c138.891 30.519 262.672 156.909 390.492 245.958 112.45 78.346 246.633 151.783 309.286 241.568z" transform="translate(1.000000, -202.000000) translate(720.000000, 740.000000) scale(-1, 1) translate(-720.000000, -740.000000) translate(0.000000, 203.000000)"/>
                                <path stroke="url(#tk4hi08wpc)" d="M1254.861 550.8c53.588 76.811 14.767 129.902 12.758 193.653-2.147 67.833 40.896 159.78-24.893 190.825-67.038 31.645-193.45 13.197-311.151-32.233-107.43-41.463-174.037-137.902-277.544-194.95-125.626-69.254-281.518-78.666-379.981-167.493-98.872-89.193-120.023-192.135-89.542-256.079 28.886-60.596 164.712-39.605 243.256-66.397 79.494-27.114 97.78-117.752 218.715-91.178 120.753 26.533 228.367 136.415 339.482 213.834 97.776 68.114 214.43 131.96 268.9 210.019z" transform="translate(1.000000, -202.000000) translate(720.000000, 740.000000) scale(-1, 1) translate(-720.000000, -740.000000) translate(0.000000, 203.000000)"/>
                                <path stroke="url(#amwmaywlxd)" d="M1184.858 548.639c46.126 66.114 12.711 111.815 10.983 166.683-1.84 58.394 35.208 137.53-21.417 164.253-57.717 27.235-166.522 11.353-267.833-27.74-92.468-35.69-149.793-118.703-238.89-167.817-108.126-59.601-242.31-67.701-327.064-144.156-85.103-76.767-103.307-165.378-77.075-220.417 24.863-52.157 141.775-34.091 209.38-57.15 68.424-23.34 84.164-101.354 188.253-78.482 103.942 22.839 196.567 117.418 292.216 184.056 84.154 58.627 184.568 113.582 231.447 180.77z" transform="translate(1.000000, -202.000000) translate(720.000000, 740.000000) scale(-1, 1) translate(-720.000000, -740.000000) translate(0.000000, 203.000000)"/>
                                <path stroke="url(#w9ki7335le)" d="M1111.968 546.388c38.35 54.975 10.57 92.977 9.13 138.603-1.531 48.558 29.272 114.35-17.816 136.575-47.978 22.643-138.45 9.439-222.696-23.065-76.89-29.68-124.56-98.701-198.641-139.538-89.916-49.565-201.487-56.299-271.963-119.874-70.765-63.838-85.904-137.515-64.09-183.281 20.673-43.37 117.889-28.347 174.104-47.525 56.895-19.407 69.983-84.277 156.535-65.257 86.427 18.99 163.453 97.634 242.98 153.044 69.985 48.755 153.478 94.45 192.457 150.318z" transform="translate(1.000000, -202.000000) translate(720.000000, 740.000000) scale(-1, 1) translate(-720.000000, -740.000000) translate(0.000000, 203.000000)"/>
                            </g>
                        </g>
                    </g>
                </svg>
                <Header />
                <div className="w-full h-full flex items-center">
                    <div>
                        <h1 className="text-4xl text-white font-bold">Hi, I'm <span className="text-transparent font-bold bg-clip-text bg-gradient-to-br from-blue-500 to-blue-700">Swôth</span>.</h1>
                        <h3 className="text-zinc-400 mt-1 max-w-md">Full-Stack Developer. I live in Turkey. I'm high school student and self-improvement person.</h3>
                        <div className="flex items-center mt-4 space-x-7">
                            {!profile ? <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 relative">
                                    <div className="w-8 h-8 rounded-full bg-white/10 animate-pulse" />
                                    <div className="w-3 h-3 rounded-full bg-black border-2 border-black absolute bottom-0 right-0" />
                                </div>
                                <div>
                                    <div className="w-12 h-3 rounded bg-white/10 animate-pulse" />
                                    <div className="w-8 h-2.5 mt-0.5 rounded bg-white/10 animate-pulse" />
                                </div>
                            </div> : <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 relative">
                                    <img className="w-8 h-8 rounded-full bg-white/10" src={`https://cdn.discordapp.com/avatars/${profile?.id}/${profile?.avatar}`} />
                                    <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-black">
                                        <div className="w-full h-full relative">
                                            <div className={"absolute top-0.5 left-0.5 animate-ping w-2 h-2 rounded-full discord-" + profile?.status} />
                                            <div className={"absolute top-0.5 left-0.5 w-2 h-2 rounded-full discord-" + profile?.status} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-zinc-300 text-sm leading-none">{profile?.username}</h1>
                                    <h1 className="text-zinc-400 text-xs leading-none">#{profile?.discriminator}</h1>
                                </div>
                            </div>}
                            {spotify && <div className="flex items-center">
                                <h1 className="text-zinc-400">
                                    <i className="fab text-green-500 fa-spotify mr-1" /> Listening to <span className="text-white">{spotify?.details}</span> by <span className="text-white">{spotify?.state}</span>.
                                </h1>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};