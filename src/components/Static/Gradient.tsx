import { useEffect, useState } from 'react';

export default function Gradient() {
    const [ active, setActive ] = useState<number>(0);
    
    useEffect(() => {
        const fn = () => {
            setActive(a => (a + 1) % 3);
        };

        const interval = setInterval(fn, 20000);
        const timeout = setTimeout(fn, 10000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <>
            {Array.from({ length: 3 }).map((_, i) => (
                <div 
                    key={i} 
                    style={{ '--gradient': `url(/img/gradients/${i + 1}.png)` } as any} 
                    className={(active === i ? 'opacity-100' : 'opacity-0') + " transition-opacity duration-[10s] absolute inset-0 mask-gradient"}
                />
            ))}
        </>
    );
};
