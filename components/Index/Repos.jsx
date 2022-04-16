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
        <div className="w-full pt-10 pb-5">
            <h1 className="text-2xl text-white font-bold text-center">Github Repositories</h1>
            {fetchedRepos ? <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {repos.map((__, index) => (
                    __ ? <div key={index} className="project rounded-md hover:shadow-md p-3">
                        <a className="rounded-md bg-gray-600 bg-opacity-10 border-2 border-gray-400 border-dashed p-5 w-full flex items-center justify-center">
                            <div className="w-full">
                                <h3 className="text-center font-bold text-sm">./{__.name}</h3>
                                <div className="flex items-center justify-between">
                                    <h6 className="flex items-center gap-x-1"><UilStar /> {__.stargazers_count} <span className="text-xs opacity-50">stars</span></h6>
                                    <h6 className="flex items-center gap-x-1"><UilCodeBranch /> {__.forks_count} <span className="text-xs opacity-50">forks</span></h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    : <div key={index} className="project rounded-md hover:shadow-md p-3">
                        <a className="rounded-md bg-gray-600 bg-opacity-10 border-2 border-gray-400 border-dashed p-5 w-full flex items-center justify-center">
                            <h3 className="font-bold">Blank</h3>
                        </a>
                    </div>
                ))}
            </div>
            : <UilSpinnerAlt className="w-12 h-12 mx-auto mt-5 spin" />}
        </div>
    );
};