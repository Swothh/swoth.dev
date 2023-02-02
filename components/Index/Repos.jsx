import swr from '../../lib/swr.jsx';
import Link from 'next/link';

export default function Repos() {
    const { data: fetchedRepos } = swr('/api/util/repos', 600000);
    const repos = fetchedRepos ? Array.isArray(fetchedRepos) ? fetchedRepos.slice(0, 6) : [] : [];

    if (fetchedRepos && repos.length < 6) {
        for(let i = 0; i < (6 - repos.length); i++) {
            repos.push(null);
        };
    };
    
    return (
        <div className="w-full pb-16 pt-10 block px-5">
            <div className="max-w-screen-lg mx-auto w-full">
                <div className="flex items-center space-x-3">
                    <div className="select-none w-10 h-10 flex items-center justify-center">
                        <i className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-700 fab fa-github text-4xl" />
                    </div>
                    <h1 className="text-2xl text-white font-bold">GitHub Repositories</h1>
                </div>
                {fetchedRepos ? <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {repos.map((__, index) => (
                        <a href={__.html_url} target="_blank" key={index} className="bg-[#090909] hover:bg-[#101010] relative transition-all duration-200 flex flex-col rounded-lg py-4 px-5">
                            <i className="fal fa-arrow-up-right-from-square absolute top-4 right-5" />
                            <h1 className="leading-none font-bold text-lg">{__.name}</h1>
                            <div className="flex items-center space-x-2 mt-1">
                                <h1 className="text-zinc-400">by</h1>
                                <div className="flex items-center space-x-1.5">
                                    <img className="rounded-full w-6 h-6" src={__.owner?.avatar_url ?? 'https://avatars.githubusercontent.com/u/56405862?v=4'} />
                                    <h1>{__.owner?.login ?? 'Swôth'}</h1>
                                </div>
                            </div>
                            <ul className="mt-3">
                                <li className="text-sm">
                                    <i className="far fa-code text-center w-4 mr-1.5" /> {__.language ?? 'TypeScript'}
                                </li>
                                <li className="text-sm">
                                    <i className="far fa-star text-center w-4 mr-1.5" /> {__.stargazers_count ?? 0} star{(__.stargazers_count ?? 0) > 1 && 's'}
                                </li>
                                <li className="text-sm">
                                    <i className="far fa-code-branch text-center w-4 mr-1.5" /> {__.forks_count ?? 0} fork{(__.forks_count ?? 0) > 1 && 's'}
                                </li>
                            </ul>
                        </a>
                    ))}
                </div>
                : <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="bg-[#090909] relative rounded-lg p-5">
                            <div className="animate-pulse rounded-lg w-28 h-4 bg-white/10" />
                            <div className="flex items-center space-x-2">
                                <div className="animate-pulse rounded-lg w-6 h-4 mt-2 mb-1 bg-white/10" />
                                <div className="animate-pulse rounded-lg w-4 h-4 mt-2 mb-1 bg-white/10" />
                                <div className="animate-pulse rounded-lg w-8 h-4 mt-2 mb-1 bg-white/10" />
                            </div>
                            <div className="mt-2 flex items-center space-x-2">
                                <div className="animate-pulse rounded-lg w-3 h-3 mt-2 mb-1 bg-white/10" />
                                <div className="animate-pulse rounded-lg w-12 h-3 mt-2 mb-1 bg-white/10" />
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="animate-pulse rounded-lg w-3 h-3 mt-2 mb-1 bg-white/10" />
                                <div className="animate-pulse rounded-lg w-12 h-3 mt-2 mb-1 bg-white/10" />
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="animate-pulse rounded-lg w-3 h-3 mt-2 mb-1 bg-white/10" />
                                <div className="animate-pulse rounded-lg w-12 h-3 mt-2 mb-1 bg-white/10" />
                            </div>
                            <div className="absolute top-4 right-5 w-5 h-5 rounded bg-white/10 animate-pulse" />
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    );
};