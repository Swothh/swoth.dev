import { Skeleton } from '@windui/react';
import { Fragment } from 'react';
import Link from 'next/link';
import swr from '@/lib/swr';

export default function Posts() {
    const { data } = swr('/api/v5/blog');

    return (
        <div className="w-full px-5 pt-20 pb-36">
            <div className="max-w-screen-lg w-full mx-auto">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {data && (data ?? []).map((post: any, i: number) => (
                        <Link href={`/blog/${post.slug}`} key={i} className="cursor-pointer bg-zinc-100 dark:shadow-slate-800/40 dark:bg-slate-900/50 dark:hover:bg-slate-900/75  hover:bg-zinc-200 transition-colors duration-200 shadow-inner p-5 rounded-lg">
                            <img
                                src={post.image}
                                alt="Banner"
                                className="w-full rounded-md"
                            />
                            <h1 className="text-slate-900 dark:text-zinc-50 transition-colors duration-200 mt-3 font-semibold text-xl line-clamp-1">{post.title}</h1>
                            <div className="flex items-center gap-1 mt-1">
                                {(post.tags ?? [ 'post' ]).map((tag: string, index: number) => (
                                    <span key={`tag-${index}`} className="text-xs py-0.5 px-1.5 bg-blue-600/20 text-blue-600 dark:text-blue-400 transition-colors duration-200 rounded">
                                        {`#${tag}`}
                                    </span>
                                ))}
                            </div>
                            <h3 className="mt-3 text-slate-700 dark:text-zinc-400 transition-colors duration-200"><i className="far fa-calendar mr-1 text-slate-900 dark:text-zinc-50 transition-colors duration-200" /> {new Date(post.date).toISOString().slice(0, 10).split('-').reverse().join('.')}</h3>
                        </Link>
                    ))}
                    {!data && Array.from({ length: 6 }).map((_, i) => (
                        <Fragment key={i}>
                            <div className="dark:hidden bg-zinc-100 shadow-inner p-5 rounded-lg">
                                <Skeleton className="rounded-lg w-full h-36" />
                                <Skeleton className="rounded-lg w-16 h-6 mt-3" />
                                <div className="flex items-center gap-1 mt-1">
                                    <Skeleton className="rounded w-12 h-4" />
                                    <Skeleton className="rounded w-12 h-4" />
                                </div>
                                <div className="mt-6 flex items-center space-x-2">
                                    <Skeleton className="rounded w-4 h-4" />
                                    <Skeleton className="rounded w-16 h-4" />
                                </div>
                            </div>
                            <div className="hidden dark:block bg-slate-800/50 shadow-slate-700/40 shadow-inner p-5 rounded-lg">
                                <Skeleton bg="#0f172a" hl="#1e293b" className="rounded-lg w-full h-36" />
                                <Skeleton bg="#0f172a" hl="#1e293b" className="rounded-lg w-16 h-6 mt-3" />
                                <div className="flex items-center gap-1 mt-1">
                                    <Skeleton bg="#0f172a" hl="#1e293b" className="rounded w-12 h-4" />
                                    <Skeleton bg="#0f172a" hl="#1e293b" className="rounded w-12 h-4" />
                                </div>
                                <div className="mt-6 flex items-center space-x-2">
                                    <Skeleton bg="#0f172a" hl="#1e293b" className="rounded w-4 h-4" />
                                    <Skeleton bg="#0f172a" hl="#1e293b" className="rounded w-16 h-4" />
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};