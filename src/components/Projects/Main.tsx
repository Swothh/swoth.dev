import { Skeleton } from '@windui/react';
import swr from '@/lib/swr';

export default function Main() {
    const { data } = swr('https://swothh.github.io/projects/list.json');

    return (
        <div className="w-full px-5 pt-20 pb-36">
            <div className="max-w-screen-lg w-full mx-auto">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {data && (data ?? []).map((project: any, i: number) => (
                        <a key={i} target="_blank" referrerPolicy="no-referrer" href={project.link} className="rounded-lg bg-zinc-100 dark:shadow-slate-800/40 dark:bg-slate-900/50 transition-colors duration-200 shadow-inner space-y-2">
                            <div className="relative after:absolute after:inset-0 after:rounded-t-lg after:bg-gradient-to-t dark:after:from-[#090e21] transition-colors duration-200 after:from-zinc-100 dark:after:via-[#090e21CC] after:via-zinc-100/80 dark:after:to-[#17213333] after:to-zinc-100/20">
                                <img
                                    src={project.image}
                                    alt={project.title + ' Banner'}
                                    className="rounded-lg w-full"
                                />
                            </div>
                            <div className="w-full px-5 pb-5 space-y-2">
                                <div className="flex items-center space-x-3 pt-3">
                                    <img
                                        src={project.logo}
                                        alt={project.title + ' Logo'}
                                        className="rounded-lg w-8 h-8"
                                    />
                                    <h1 className="text-slate-900 dark:text-zinc-50 transition-colors duration-200 font-medium text-lg">{project.title}</h1>
                                </div>
                                <h3 className="text-slate-700 dark:text-zinc-400 transition-colors duration-200 h-[3.75rem] line-clamp-3 text-sm">{project.text}</h3>
                                <h3 className="font-medium text-slate-800 dark:text-zinc-300 transition-colors duration-200 text-sm pt-3"><i className="far fa-link mr-1" /> {project.link}</h3>
                            </div>
                        </a>
                    ))}
                    {!data && Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="rounded-lg bg-zinc-100 dark:shadow-slate-700/40 dark:bg-slate-800/50 transition-colors duration-200 shadow-inner gap-y-2">
                            <div className="relative dark:hidden after:absolute after:inset-0 after:bg-gradient-to-t dark:after:from-[#172133] after:rounded-t-lg transition-colors duration-200 after:from-zinc-100 dark:after:via-[#172133CC] after:via-zinc-100/80 dark:after:to-[#17213333] after:to-zinc-100/20">
                                <Skeleton className="rounded-lg w-full h-[10rem]" />
                            </div>
                            <div className="relative hidden dark:block after:absolute after:inset-0 after:bg-gradient-to-t dark:after:from-[#172133] transition-colors duration-200 after:from-zinc-100 dark:after:via-[#172133CC] after:via-zinc-100/80 dark:after:to-[#17213333] after:to-zinc-100/20">
                                <Skeleton bg="#0f172a" hl="#1e293b" className="rounded-lg w-full h-[10rem]" />
                            </div>
                            <div className="hidden dark:block w-full px-5 pb-5 space-y-2">
                                <div className="flex items-center space-x-3 pt-3">
                                    <Skeleton bg="#0f172a" hl="#1e293b" className="rounded-lg w-8 h-8" />
                                    <Skeleton bg="#0f172a" hl="#1e293b" className="rounded w-16 h-5" />
                                </div>
                                <Skeleton bg="#0f172a" hl="#1e293b" className="rounded w-full h-4" />
                                <Skeleton bg="#0f172a" hl="#1e293b" className="rounded w-1/2 h-4" />
                                <div className="pt-3 flex items-center space-x-2">
                                    <Skeleton bg="#0f172a" hl="#1e293b" className="rounded w-4 h-4" />
                                    <Skeleton bg="#0f172a" hl="#1e293b" className="rounded w-20 h-4" />
                                </div>
                            </div>
                            <div className="dark:hidden w-full px-5 pb-5 space-y-2">
                                <div className="flex items-center space-x-3 pt-3">
                                    <Skeleton className="rounded-lg w-8 h-8" />
                                    <Skeleton className="rounded w-16 h-5" />
                                </div>
                                <Skeleton className="rounded w-full h-4" />
                                <Skeleton className="rounded w-1/2 h-4" />
                                <div className="pt-3 flex items-center space-x-2">
                                    <Skeleton className="rounded w-4 h-4" />
                                    <Skeleton className="rounded w-20 h-4" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};