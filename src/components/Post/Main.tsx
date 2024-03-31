import { Skeleton } from '@windui/react';
import { marked } from 'marked';

export default function Main({ post }: any) {
    return (
        <div className="w-full px-5 pt-20 pb-36">
            {(post && post?.content) ? (
                <div
                    className="prose prose-slate dark:prose-invert w-full mx-auto max-w-screen-lg" 
                    dangerouslySetInnerHTML={{ 
                        __html: marked.parse(post?.content ?? '') 
                    }}
                />
            ) : (
                <>
                    <div className="block dark:hidden">
                        <Skeleton className="max-w-screen-lg w-full mx-auto rounded-lg h-96" />
                    </div>
                    <div className="hidden dark:block">
                        <Skeleton bg="#172133" hl="#1e293b" className="max-w-screen-lg w-full mx-auto rounded-lg h-96" />
                    </div>
                </>
            )}
        </div>
    );
};