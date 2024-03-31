import { ReactNode } from 'react';

export default function Underline({ children }: { children: ReactNode }) {
    return (
        <span className="relative after:absolute after:-left-1 after:-right-1 after:bottom-0 after:h-4 after:bg-gradient-to-l after:from-blue-400/50 dark:after:from-blue-600/50 after:rounded after:-z-[1]">
            {children}
        </span>
    );
};