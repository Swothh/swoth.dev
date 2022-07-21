import swr from '../../lib/swr.jsx';
import Tippy from '@tippyjs/react';

export default function Activities() {
    const { data: _profile } = swr('/api/util/me');
    const profile = _profile || null;
    
    return (
        <div className="pt-5 pb-10 md:grid grid-cols-3 gap-x-6">
            <div className="flex items-center space-x-5 rounded-lg bg-[#080808] p-5">
                <div className="relative flex items-center w-[100px] h-[100px]">
                    {!profile ? (
                        <img className="animate-pulse rounded-full w-auto" src="https://i.ibb.co/68X2Xfq/pulse.png" />
                    ) : (
                        <img className="rounded-full w-auto" src={`https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}?size=4096`} />
                    )}
                    {profile && <Tippy interactive={true} content={profile.status.toUpperCase()}>
                        <div className="absolute bottom-1 bg-[#080808] rounded-full right-1 w-6 h-6 flex items-center justify-center">
                            <div className="w-full h-full relative flex items-center justify-center">
                                <div className={"animate-ping w-3 h-3 rounded-full " + `discord-${profile.status}`} />
                                <div className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full " + `discord-${profile.status}`} />
                            </div>
                        </div>
                    </Tippy>}
                </div>
                {!profile ? <div className="flex-1">
                    <div className="animate-pulse bg-white/10 w-16 h-6 rounded-lg" />
                    <div className="animate-pulse mt-2 bg-white/10 w-12 h-4 rounded-md" />
                </div> : <div className="flex-1">
                    <h1 className="text-center leading-none font-light text-3xl md:text-xl lg:text-3xl text-white">{profile.username}</h1>
                    <h1 className="text-center leading-none font-semibold text-xl md:text-lg lg:text-xl text-zinc-300">#{profile.discriminator}</h1>
                </div>}
            </div>
            <div className="mt-5 md:mt-0 rounded-lg overflow-hidden col-span-2 w-full h-[140px] sm:gap-x-6 py-5 relative">
                <div className="space-x-3 absolute inset-0 bg-[#080808] rounded-lg flex items-center justify-center">
                    <div className="animate-pulse h-6 w-6 rounded-lg bg-white/10" />
                    <div className="animate-pulse h-5 w-40 md:w-80 rounded-lg bg-white/10" />
                </div>
                {profile && <div className="z-1 absolute inset-0">
                    <iframe src="https://linkcord.js.org/api/v3/widget/451444721089380373?type=spotify_large&lang=en&theme=dark&align=left&background=080808" className="w-full" height="140" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />
                </div>}
            </div>
        </div>
    );
};
