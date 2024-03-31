import Underline from '../Global/Underline';
import { Skeleton } from '@windui/react';
import { Fragment } from 'react';
import Image from 'next/image';
import swr from '@/lib/swr';

export default function Techs() {
    const { data } = swr('/api/v5/techs');

    return (
        <div className="w-full px-5 pt-20 pb-36">
            <div className="max-w-screen-lg mx-auto w-full">
                <div className="pb-5 flex items-center space-x-3">
                    <i className="fas fa-circle-bookmark text-4xl text-slate-900 dark:text-zinc-50 transition-colors duration-200" />
                    <h1 className="text-slate-900 text-xl sm:text-3xl font-semibold dark:text-zinc-50 transition-colors duration-200">
                        <Underline>Technologies</Underline> I Use
                    </h1>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {data && (data ?? []).map((tech: [ string, string ], i: number) => (
                        <div key={`tech-${i}`} className="shadow-inner hover:bg-zinc-200 dark:bg-slate-900/50 dark:shadow-slate-800/40 dark:hover:bg-slate-900/75 transition-colors duration-200 bg-zinc-100 rounded-lg p-3 flex items-center space-x-3">
                            <div className="w-8 h-8 flex items-center justify-center">
                                <Image
                                    src={`/img/techs/${tech[1]}`}
                                    alt={tech[0]}
                                    className={"max-h-8 w-auto transition-all duration-200 rounded" + ([ 'Next.js', 'Express.js', 'GitHub', 'Framer Motion', 'Vercel' ].includes(tech[0]) ? ' invert dark:invert-0' : '')}
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <h1 className="text-slate-900 dark:text-zinc-50 transition-colors duration-200 font-medium">{tech[0]}</h1>
                        </div>
                    ))}
                    {!data && Array.from({ length: 12 }).map((_, i) => <Fragment key={i}>
                        <div className="shadow-inner bg-zinc-100 dark:bg-slate-800/50 dark:shadow-slate-700/40 rounded-lg p-3 dark:hidden flex items-center space-x-3">
                            <Skeleton className="w-8 h-8 rounded" />
                            <Skeleton key={`tech-skeleton-${i}`} className="w-16 h-5 rounded" />
                        </div>
                        <div className="shadow-inner bg-slate-800/50 shadow-slate-700/40 rounded-lg p-3 hidden dark:flex items-center space-x-3">
                            <Skeleton bg="#0f172a" hl="#1e293b" className="w-8 h-8 rounded" />
                            <Skeleton bg="#0f172a" hl="#1e293b" key={`tech-skeleton-${i}`} className="w-16 h-5 rounded" />
                        </div>
                    </Fragment>)}
                </div>
            </div>
        </div>
    );
};