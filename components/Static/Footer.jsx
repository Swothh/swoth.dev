import { useRouter } from "next/router";
import { useState } from "react";
import Tippy from "@tippyjs/react";

export default function Footer() {
    const router = useRouter();
    const [ index, setIndex ] = useState(0);
    
    const colors = [
        "#ef4444",
        "#0ea5e9",
        "#f59e0b",
        "#22c55e",
        "#8b5cf6",
        "#d946ef"
    ];
    
    const handleClick = () => {
        if ((index + 1) == colors.length) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        };
    };
    
    return (
        router.pathname == "/" ? <div className="pt-10 sm:flex items-center justify-between">
            <div className="relative w-full sm:w-1/2">
                <div className="ml-24 sm:ml-0 w-24 h-24 rounded-lg shadow-xl shadow-red-800/20 bg-gradient-to-bl from-rose-600 to-red-800" />
                <h1 className="select-none heading-text absolute bottom-5 left-28 sm:left-5 text-3xl text-white font-bold text-center">&copy; {new Date().getFullYear()}, Swôth</h1>
            </div>
            <h1 className="mt-2 sm:mt-0 select-none text-normal text-white font-light text-center">Developed with <Tippy content="Love"><i style={{ color: colors[index] }} onClick={handleClick} className="cursor-pointer fas fa-heart mx-0.5" /></Tippy> by Swôth</h1>
        </div> : <div className="pt-10 sm:flex items-center justify-between">
            <h1 className="mb-2 sm:mb-0 select-none text-normal text-white font-light text-center">Developed with <Tippy content="Love"><i style={{ color: colors[index] }} onClick={handleClick} className="cursor-pointer fas fa-heart mx-0.5" /></Tippy> by Swôth</h1>
            <div className="relative flex justify-end w-full sm:w-1/2">
                <div className="mr-24 sm:mr-0 w-24 h-24 rounded-lg shadow-xl shadow-red-800/20 bg-gradient-to-bl from-rose-600 to-red-800" />
                <h1 className="select-none heading-text absolute bottom-5 right-28 sm:right-5 text-3xl text-white font-bold text-center">&copy; {new Date().getFullYear()}, Swôth</h1>
            </div>
        </div>
    );
};