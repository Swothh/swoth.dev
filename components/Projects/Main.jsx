import { UilSpinnerAlt } from '@iconscout/react-unicons';
import swr from '../../lib/swr.jsx';

export default function Main()  {
    const { data: _projects } = swr('https://swothh.github.io/projects/list.json', 600000);
    const projects = _projects ? _projects : null;

    return (
        !projects ? <div className="flex items-center justify-center mt-3">
            <UilSpinnerAlt className="spin dropdown" />
        </div> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {projects.map((project, index) => (
                <div key={index} className="p-3 rounded-md project pb-4">
                    <img src={project.image} className="w-full rounded-md" alt={project.title} />
                    <h1 className="pt-3 text-xl font-bold text-white">{project.title}</h1>
                    <p className="text-white h-32 opacity-75">{project.text}</p>
                    <a target="_blank" href={project.link} className="border-white text-white w-full text-center flex items-center justify-center hover:bg-white hover:text-black py-1 px-2 rounded-md border-2 transition-all font-bold cursor-pointer">View</a>
                </div>
            ))}
        </div>
    );
};
