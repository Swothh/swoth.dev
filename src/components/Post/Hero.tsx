import { Skeleton } from '@windui/react';

export default function Hero({ post }: any) {
    return (
        <div className="w-full px-5 pt-36 pb-16">
            <div className="max-w-screen-lg mx-auto w-full flex items-center justify-between">
                {(!post || !post?.title) && (
                    <>
                        <div className="block dark:hidden">
                            <Skeleton className="shadow-inner rounded-md w-96 h-10" />
                            <div className="flex items-center flex-wrap gap-3 mt-4">
                                <Skeleton className="shadow-inner rounded-md w-16 h-6" />
                                <Skeleton className="shadow-inner rounded-md w-16 h-6" />
                                <Skeleton className="shadow-inner rounded-md w-16 h-6" />
                            </div>
                            <div className="flex items-center flex-wrap gap-3 mt-4">
                                <Skeleton className="shadow-inner rounded-md w-6 h-6" />
                                <Skeleton className="shadow-inner rounded-md w-20 h-6" />
                            </div>
                        </div>
                        <div className="dark:block hidden">
                            <Skeleton bg="#0f172a" hl="#1e293b" className="rounded-md w-96 h-10" />
                            <div className="flex items-center flex-wrap gap-3 mt-4">
                                <Skeleton bg="#0f172a" hl="#1e293b" className="rounded-md w-16 h-6" />
                                <Skeleton bg="#0f172a" hl="#1e293b" className="rounded-md w-16 h-6" />
                                <Skeleton bg="#0f172a" hl="#1e293b" className="rounded-md w-16 h-6" />
                            </div>
                            <div className="flex items-center flex-wrap gap-3 mt-4">
                                <Skeleton bg="#0f172a" hl="#1e293b" className="rounded-md w-6 h-6" />
                                <Skeleton bg="#0f172a" hl="#1e293b" className="rounded-md w-20 h-6" />
                            </div>
                        </div>
                    </>
                )}
                {(post && post?.title) && <div>
                    <h1 className="mb-3 transition-all duration-200 text-5xl text-slate-900 dark:text-zinc-50 font-semibold max-w-2xl">{post?.title}</h1>
                    <div className="flex items-center flex-wrap gap-2">
                        {(post?.tags ?? []).map((tag: string, i: number) => (
                            <span key={i} className="py-1 px-2.5 rounded-md bg-blue-600/20 text-blue-600 dark:text-blue-400 transition-colors duration-200">
                                {`#${tag}`}
                            </span>
                        ))}
                    </div>
                    <h3 className="transition-all mt-3 duration-200 text-slate-700 dark:text-zinc-300 text-lg font-light max-w-sm"><i className="far fa-calendar mr-1" /> {post?.date && new Date(post?.date).toISOString().slice(0, 10).split('-').reverse().join('.')}</h3>
                </div>}
            </div>
        </div>
    );
};