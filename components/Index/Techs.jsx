import swr from '../../lib/swr.jsx';

export default function Techs() {
    const { data: fetchedTechs } = swr('/api/util/techs');
    const techs = fetchedTechs || null;
    
    return (
        <div className="w-full py-10">
            <div className="relative w-full">
                <div className="ml-auto w-24 h-24 rounded-lg shadow-xl shadow-green-800/20 bg-gradient-to-bl from-emerald-600 to-green-800" />
                <h1 className="heading-text absolute bottom-5 right-5 text-3xl text-white font-bold text-center">Technologies I use</h1>
            </div>
            <div className="gap-2 p-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {techs ? techs.map((tech, index) => (
                    <div key={index} className="bg-[#080808] hover:-translate-y-[3px] hover:bg-[#101010] transition-all duration-200 rounded-lg p-2 px-3 flex items-center justify-between">
                        <img src={"/img/techs/" + tech[1]} className="h-6 w-6" /> {tech[0]}
                    </div>
                )) : Array.from({ length: 12 }).map((_, index) => (
                    <div key={index} className="bg-[#080808] hover:-translate-y-[3px] hover:bg-[#101010] transition-all duration-200 rounded-lg p-2 px-3 flex items-center justify-between">
                        <div className="animate-pulse w-6 h-6 rounded-lg bg-white/10" />
                        <div style={{ width: `${[ 5, 6, 7 ][Math.floor(Math.random() * 3)]}rem` }} className={`animate-pulse h-6 rounded-lg bg-white/10`} />
                    </div>
                ))}
            </div>
        </div>
    );
};