export default function Hero() {
    return (
        <>
            <div className="relative mb-5 w-full">
                <div className="w-24 h-24 rounded-lg shadow-xl shadow-violet-800/20 bg-gradient-to-bl from-indigo-600 to-violet-800" />
                <h1 className="heading-text absolute bottom-5 left-5 text-3xl text-white font-bold text-center">Projects</h1>
                <h1 className="heading-text-small absolute bottom-1 left-5 text-sm text-zinc-100 font-light text-center">You can see the projects I've worked on here.</h1>
            </div>
        </>
    );
};