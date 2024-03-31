import { motion, AnimatePresence } from 'framer-motion';
import Underline from '../Global/Underline';
import { Skeleton } from '@windui/react';
import { useState } from 'react';
import Image from 'next/image';
import swr from '@/lib/swr';

export default function Repos() {
    const [ selected, setSelected ] = useState<any>();
    const { data } = swr('/api/v5/repos');

    const getColor = (lang: string) => {
        switch(lang) {
            case 'JavaScript':
                return '#F0DB4F';
            case 'TypeScript':
                return '#007acc';
            case 'Svelte':
                return '#fe3f00';
            default:
                return '#7e22ce';
        }
    };

    const selectedContent = selected ? [
        (selected?.content ?? []).filter((i: any) => i.type === 'dir').sort((a: any, b: any) => a?.name?.localeCompare?.(b?.name)), 
        (selected?.content ?? []).filter((i: any) => i.type !== 'dir').sort((a: any, b: any) => a?.name?.localeCompare?.(b?.name)) 
    ].flat?.() : [];

    return (
        <div className="w-full px-5 py-20">
            <div className={`z-[100] fixed inset-0 bg-black/50 transition-all duration-500 ${selected ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />
            <div className="max-w-screen-lg mx-auto w-full">
                <div className="pb-5 flex items-center space-x-3">
                    <i className="fab fa-github text-4xl text-slate-900 dark:text-zinc-50 transition-colors duration-200" />
                    <h1 className="text-slate-900 text-xl sm:text-3xl font-semibold dark:text-zinc-50 transition-colors duration-200">
                        GitHub <Underline>Repositories</Underline>
                    </h1>
                </div>
                <AnimatePresence>
                    {selected && (
                        <motion.div className="fixed inset-0 p-5 z-[101] flex items-center justify-center">
                            <motion.span onClick={() => setSelected(undefined)} className="absolute w-full h-full -z-[1]" />
                            <motion.div layoutId={`repo-${selected?.name}`} className="p-5 max-w-screen-sm w-full bg-zinc-100 dark:bg-slate-900 dark:shadow-slate-800/40 shadow-zinc-200 shadow-inner rounded-lg">
                                <motion.div className="flex items-center gap-y-1 justify-between flex-wrap">
                                    <motion.a href={selected?.url} target="_blank" className="flex items-center space-x-2">
                                        <Image
                                            src={selected?.owner?.avatar}
                                            alt={selected?.owner?.login}
                                            className="bg-blue-600/20 rounded-full"
                                            width={24}
                                            height={24}
                                        />
                                        <motion.h1 className="text-slate-900 dark:text-zinc-50 font-medium line-clamp-1">{selected?.owner?.login}<motion.span className="font-semibold">{'/'}{selected?.name}</motion.span></motion.h1>
                                        <motion.span className="py-px font-medium px-1 text-xs rounded-full border text-blue-700 dark:text-blue-400 border-blue-700 dark:border-blue-400">Public</motion.span>
                                    </motion.a>
                                    <motion.div className="flex items-center space-x-5">
                                        <motion.span className="text-sm text-slate-700 dark:text-zinc-300">
                                            <motion.i style={{ color: getColor(selected?.language) }} className="fas fa-circle mr-1" />
                                            {selected?.language}
                                        </motion.span>
                                        <motion.span className="text-sm text-slate-700 dark:text-zinc-300">
                                            <motion.i className="far fa-star mr-1" />
                                            {selected?.stars}
                                        </motion.span>
                                        <motion.span className="text-sm text-slate-700 dark:text-zinc-300">
                                            <motion.i className="far fa-code-branch mr-1" />
                                            {selected?.forks}
                                        </motion.span>
                                    </motion.div>
                                </motion.div>
                                <motion.h1 className="text-slate-700 dark:text-zinc-400 text-sm py-1 line-clamp-1">{selected?.description}</motion.h1>
                                <motion.div className="mt-3 border border-zinc-200 dark:border-slate-800 rounded-lg overflow-hidden">
                                    {selectedContent.slice(0, 8).map((item: any, index: number) => (
                                        <motion.a key={`content-${index}`} target="_blank" href={item?.url} referrerPolicy="no-referrer" className={"bg-zinc-200/25 dark:bg-slate-500/5 dark:hover:bg-slate-300/10 hover:bg-zinc-200/50 py-1 px-2 flex items-center space-x-2" + (index > 0 ? ' border-t border-zinc-200 dark:border-slate-800' : '')}>
                                            <motion.i className={`far fa-${item?.type === 'dir' ? 'folder' : 'file px-0.5'} text-slate-700 dark:text-zinc-400`} />
                                            <motion.h1 className="text-slate-900 dark:text-zinc-50 text-sm">{item?.name}</motion.h1>
                                        </motion.a>
                                    ))}
                                    {selectedContent?.length > 8 && (
                                        <motion.div className="bg-zinc-200/25 dark:bg-slate-300/5 dark:border-slate-800 py-1 px-2 flex items-center justify-center border-t border-zinc-200">
                                            <motion.h1 className="text-slate-700 dark:text-zinc-300 text-sm">{selectedContent?.length - 8} more files...</motion.h1>
                                        </motion.div>
                                    )}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {data && data.map((repo: any) => (
                        <motion.div onClick={() => setSelected(repo)} layoutId={`repo-${repo?.name}`} key={`repo-${repo?.name}`} className="cursor-pointer rounded-lg bg-zinc-100 dark:bg-slate-900/50 shadow-inner dark:shadow-slate-800/40 hover:bg-zinc-200 dark:hover:bg-slate-900/75 transition-colors duration-200 p-5">
                            <motion.div className="flex items-center space-x-2">
                                <motion.i className="transition-colors duration-200 far fa-book-bookmark text-slate-600 dark:text-zinc-300" />
                                <motion.h1 className="transition-colors duration-200 text-slate-900 dark:text-zinc-50 font-medium line-clamp-1">{repo?.name}</motion.h1>
                                <motion.span className="transition-colors duration-200 py-px font-medium px-1 text-xs rounded-full border text-blue-700 dark:text-blue-400 border-blue-700 dark:border-blue-400">Public</motion.span>
                            </motion.div>
                            <motion.h1 className="transition-colors duration-200 text-slate-700 dark:text-zinc-400 text-sm py-1 h-12 line-clamp-2">{repo?.description}</motion.h1>
                            <motion.div className="pt-4 flex items-center space-x-5">
                                <motion.span className="transition-colors duration-200 text-sm text-slate-700 dark:text-zinc-300">
                                    <motion.i style={{ color: getColor(repo?.language) }} className="fas fa-circle mr-1" />
                                    {repo?.language}
                                </motion.span>
                                <motion.span className="transition-colors duration-200 text-sm text-slate-700 dark:text-zinc-300">
                                    <motion.i className="far fa-star mr-1" />
                                    {repo?.stars}
                                </motion.span>
                                <motion.span className="transition-colors duration-200 text-sm text-slate-700 dark:text-zinc-300">
                                    <motion.i className="far fa-code-branch mr-1" />
                                    {repo?.forks}
                                </motion.span>
                            </motion.div>
                        </motion.div>
                    ))}
                    {!data && Array.from({ length: 6 }).map((_, id) => (
                        <div key={`repo-skeleton-${id}`} className="rounded-lg bg-zinc-100 dark:bg-slate-800/50 dark:shadow-slate-700/40 shadow-inner p-5">
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