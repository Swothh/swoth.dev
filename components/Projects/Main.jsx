import { UilTimes, UilSpinnerAlt } from '@iconscout/react-unicons';
import swr from '../../lib/swr.jsx';

export default function Main()  {
    const { data: _projects } = swr('https://swothh.github.io/projects/list.json', 600000);
    const projects = _projects ? _projects : null;

    return (
        !projects ? <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {Array.from({ length: 4 }).map((_, index) => (
                <a target="_blank" href={"#"} key={index} className="p-5 h-[245px] rounded-lg bg-[#080808]">
                    <div className="w-full relative rounded-lg overflow-hidden h-28">
                        <div className="animate-pulse w-full h-28 rounded-lg bg-white/10" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] rounded-lg" />
                    </div>
                    <div className="w-full px-3 flex space-x-3 -translate-y-8 items-center">
                        <div className="animate-pulse border-8 border-[#080808] w-20 h-20 rounded-full bg-white/10" />
                        <div className="animate-pulse w-32 h-6 rounded-lg bg-white/10" />
                    </div>
                    <div className="flex items-center space-y-2 -translate-y-8 justify-between flex-wrap">
                        <div className="animate-pulse w-20 h-4 rounded-lg bg-white/10" />
                        <div className="animate-pulse w-28 h-4 rounded-lg bg-white/10" />
                        <div className="animate-pulse w-16 h-4 rounded-lg bg-white/10" />
                        <div className="animate-pulse w-24 h-4 rounded-lg bg-white/10" />
                        <div className="animate-pulse w-12 h-4 rounded-lg bg-white/10" />
                        <div className="animate-pulse w-28 h-4 rounded-lg bg-white/10" />
                        <div className="animate-pulse w-24 h-4 rounded-lg bg-white/10" />
                        <div className="animate-pulse w-16 h-4 rounded-lg bg-white/10" />
                    </div>
                </a>
            ))}
        </div> : <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project, index) => (
                <a target="_blank" href={project.link} key={index} className="p-5 h-[245px] rounded-lg bg-[#080808]">
                    <div className="w-full relative rounded-lg overflow-hidden h-28">
                        <img src={project.image} className="absolute inset-0 rounded-lg" alt={`${project.title} - Banner`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] rounded-lg" />
                    </div>
                    <div className="w-full px-3 flex space-x-3 -translate-y-8 items-center">
                        <img src={project.logo} className="border-8 border-[#080808] w-20 h-20 rounded-full" alt={`${project.title} - Logo`} />
                        <h1 className="text-3xl font-bold text-white">{project.title}</h1>
                    </div>
                    <p className="text-white -translate-y-8 opacity-75">{project.text}</p>
                </a>
            ))}
        </div>
    );
};
