export default function Hero() {
    return (
        <>
            <div className="relative mb-5 w-full">
                <div className="w-24 h-24 rounded-lg shadow-xl shadow-amber-800/20 bg-gradient-to-bl from-yellow-600 to-amber-800" />
                <h1 className="heading-text absolute bottom-5 left-5 text-3xl text-white font-bold text-center">About</h1>
                <h1 className="heading-text-small absolute bottom-1 left-5 text-sm text-zinc-100 font-light text-center">I briefly talked about myself.</h1>
            </div>
        </>
    );
};