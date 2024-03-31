import Underline from '../Global/Underline';
import { Skeleton } from '@windui/react';
import swr from '@/lib/swr';

export default function Packages() {
    const { data } = swr('/api/v5/packages');

    return (
        <div className="w-full px-5 py-20">
            <div className="max-w-screen-lg mx-auto w-full">
                <div className="pb-5 flex items-center space-x-3">
                    <i className="far fa-cubes text-4xl text-slate-900 dark:text-zinc-50 transition-colors duration-200" />
                    <h1 className="text-slate-900 text-xl sm:text-3xl font-semibold dark:text-zinc-50 transition-colors duration-200">
                        NPM <Underline>Packages</Underline>
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {data && data.map((pkg: any) => (
                        <a target="_blank" referrerPolicy="no-referrer" href={pkg?.url} key={`pkg-${pkg?.name}`} className="cursor-pointer rounded-lg bg-zinc-100 dark:bg-slate-900/50 shadow-inner dark:shadow-slate-800/40 hover:bg-zinc-200 dark:hover:bg-slate-900/75 transition-colors duration-200 p-5">
                            <div className="flex items-center space-x-2">
                                <i className="transition-colors duration-200 fab fa-npm text-red-600 dark:text-red-500" />
                                <h1 className="transition-colors duration-200 text-slate-900 dark:text-zinc-50 font-medium line-clamp-1">{pkg?.name}</h1>
                                <span className="transition-colors duration-200 py-px font-medium px-1 text-xs rounded-full border text-slate-600 dark:text-zinc-300 border-slate-600 dark:border-zinc-300">{`v${pkg?.version}`}</span>
                            </div>
                            <h1 className="transition-colors duration-200 text-slate-700 dark:text-zinc-400 text-sm py-1 h-12 line-clamp-2">{pkg?.description}</h1>
                            <div className="pt-4 flex items-center space-x-5">
                                <span className="transition-colors duration-200 text-sm text-slate-700 dark:text-zinc-300">
                                    <i className={"fas fa-circle mr-1 " + (pkg?.license === 'MIT' ? 'text-blue-500' : 'text-green-500')} />
                                    {pkg?.license}
                                </span>
                                <span className="transition-colors duration-200 text-sm text-slate-700 dark:text-zinc-300">
                                    <i className="far fa-arrow-down-to-line mr-1" />
                                    {(pkg?.downloads ?? 0).toLocaleString()}
                                </span>
                                <span className="transition-colors duration-200 text-sm text-slate-700 dark:text-zinc-300">
                                    <i className="far fa-cubes mr-1" />
                                    {pkg?.dependencies}
                                </span>
                            </div>
                        </a>
                    ))}
                    {!data && Array.from({ length: 6 }).map((_, id) => (
                        <div key={`pkg-skeleton-${id}`} className="rounded-lg bg-zinc-100 dark:bg-slate-800/50 dark:shadow-slate-700/40 shadow-inner p-5">
                            <div className="dark:hidden flex items-center gap-x-2">
                                <Skeleton className="w-5 h-5 rounded dark:hidden" />
                                <Skeleton className="w-16 h-4 rounded dark:hidden" />
                                <Skeleton className="w-10 h-5 rounded-full dark:hidden" />
                            </div>
                            <div className="dark:flex hidden items-center gap-x-2">
                                <Skeleton bg="#0f172a" hl="#1e293b" className="w-5 h-5 rounded" />
                                <Skeleton bg="#0f172a" hl="#1e293b" className="w-16 h-4 rounded" />
                                <Skeleton bg="#0f172a" hl="#1e293b" className="w-10 h-5 rounded-full" />
                            </div>
                            <div className="dark:hidden flex items-end flex-wrap py-1 h-12">
                                {[ 'w-8', 'w-10', 'w-6', 'w-12', 'w-8', 'w-10', 'w-6', 'w-12', 'w-8', 'w-4' ].map((w, i) => (
                                    <Skeleton key={`skeleton-${i}`} className={w + " h-3 rounded mr-1 mb-1.5 mt-0.5"} />
                                ))}
                            </div>
                            <div className="hidden dark:flex items-end flex-wrap py-1 h-12">
                                {[ 'w-8', 'w-10', 'w-6', 'w-12', 'w-8', 'w-10', 'w-6', 'w-12', 'w-8', 'w-4' ].map((w, i) => (
                                    <Skeleton bg="#0f172a" hl="#1e293b" key={`skeleton-${i}`} className={w + " h-3 rounded mr-1 mb-1.5 mt-0.5"} />
                                ))}
                            </div>
                            <div className="pt-4 dark:hidden flex items-center space-x-5">
                                <span className="text-sm text-slate-700 flex items-center space-x-1.5">
                                    <Skeleton className="w-4 h-4 rounded" />
                                    <Skeleton className="w-12 h-3 rounded" />
                                </span>
                                <span className="text-sm text-slate-700 flex items-center space-x-1.5">
                                    <Skeleton className="w-4 h-4 rounded" />
                                    <Skeleton className="w-12 h-3 rounded" />
                                </span>
                                <span className="text-sm text-slate-700 flex items-center space-x-1.5">
                                    <Skeleton className="w-4 h-4 rounded" />
                                    <Skeleton className="w-12 h-3 rounded" />
                                </span>
                            </div>
                            <div className="pt-4 hidden dark:flex items-center space-x-5">
                                <span className="text-sm text-slate-700 flex items-center space-x-1.5">
                                    <Skeleton bg="#0f172a" hl="#1e293b" className="w-4 h-4 rounded" />
                                    <Skeleton bg="#0f172a" hl="#1e293b" className="w-12 h-3 rounded" />
                                </span>
                                <span className="text-sm text-slate-700 flex items-center space-x-1.5">
                                    <Skeleton bg="#0f172a" hl="#1e293b" className="w-4 h-4 rounded" />
                                    <Skeleton bg="#0f172a" hl="#1e293b" className="w-12 h-3 rounded" />
                                </span>
                                <span className="text-sm text-slate-700 flex items-center space-x-1.5">
                                    <Skeleton bg="#0f172a" hl="#1e293b" className="w-4 h-4 rounded" />
                                    <Skeleton bg="#0f172a" hl="#1e293b" className="w-12 h-3 rounded" />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};