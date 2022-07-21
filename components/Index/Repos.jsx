import { UilSpinnerAlt, UilStar, UilCodeBranch } from '@iconscout/react-unicons';
import swr from '../../lib/swr.jsx';

export default function Repos() {
    const { data: fetchedRepos } = swr('/api/util/repos', 600000);
    const repos = fetchedRepos ? Array.isArray(fetchedRepos) ? fetchedRepos.slice(0, 6) : [] : [];

    if (fetchedRepos && repos.length < 6) {
        for(let i = 0; i < (6 - repos.length); i++) {
            repos.push(null);
        };
    };
    
    return (
        <div className="w-full py-10">
            <div className="relative w-full">
                <div className="w-24 h-24 rounded-lg shadow-xl shadow-blue-800/20 bg-gradient-to-bl from-sky-600 to-blue-800" />
                <h1 className="heading-text absolute bottom-5 left-5 text-3xl text-white font-bold text-center">GitHub Repositories</h1>
            </div>
            {fetchedRepos ? <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {repos.map((__, index) => (
                    __ ? <a href={__.html_url} target="_blank" key={index} className="bg-[#080808] hover:bg-[#101010] transition-all duration-200 flex flex-col rounded-lg py-4 px-5 h-28">
                        <h1 className="leading-none font-bold text-lg">{__.full_name}</h1>
                        <span className="bg-white/10 text-sm w-min py-0.5 px-1 mt-2 block rounded-lg">{__.language || "Collaborator"}</span>
                        <div className="w-full mt-auto flex-1 flex items-end justify-end space-x-3">
                            <h6 className="flex items-center gap-x-1"><UilStar /> {__.stargazers_count} <span className="text-xs opacity-50">stars</span></h6>
                            <h6 className="flex items-center gap-x-1"><UilCodeBranch /> {__.forks_count} <span className="text-xs opacity-50">forks</span></h6>
                        </div>
                    </a>
                    : <div key={index} className="bg-[#080808] rounded-lg p-5 h-28">
                        <div className="animate-pulse rounded-lg w-28 h-6 bg-white/10" />
                        <div className="animate-pulse rounded-lg w-16 h-5 mt-2 mb-1 bg-white/10" />
                        <div className="w-full mt-auto flex-1 flex items-end justify-end space-x-3">
                            <div className="animate-pulse rounded-lg w-16 h-5 bg-white/10" />
                            <div className="animate-pulse rounded-lg w-16 h-5 bg-white/10" />
                        </div>
                    </div>
                ))}
            </div>
            : <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="bg-[#080808] rounded-lg p-5 h-28">
                        <div className="animate-pulse rounded-lg w-28 h-6 bg-white/10" />
                        <div className="animate-pulse rounded-lg w-16 h-5 mt-2 mb-1 bg-white/10" />
                        <div className="w-full mt-auto flex-1 flex items-end justify-end space-x-3">
                            <div className="animate-pulse rounded-lg w-16 h-5 bg-white/10" />
                            <div className="animate-pulse rounded-lg w-16 h-5 bg-white/10" />
                        </div>
                    </div>
                ))}
            </div>}
        </div>
    );
};