import { TextLoop } from "react-text-loop-next";
import texts from "../../hello.languages";
import swr from '../../lib/swr.jsx';
import Tippy from '@tippyjs/react';
import { useEffect, useState } from 'react';

export default function Hero() {
    const { data: _projects } = swr('https://swothh.github.io/projects/list.json', 600000);
    let projects = _projects ? _projects : null;

    const [ isSelected, setIsSelected ] = useState(false);
    const [ randomOne, setRandomOne ] = useState(null);
    const [ randomTwo, setRandomTwo ] = useState(null);
    const [ randomThree, setRandomThree ] = useState(null);

    useEffect(() => {
        try {
            if (isSelected || !Array.isArray(projects)) return;
            setIsSelected(true);
            
            for(let i = 0; i < 3; i++) {
                const selected = projects[Math.floor(Math.random() * projects.length)];
                projects = projects.filter(project => project != selected);
    
                switch(i) {
                    case 0:
                        setRandomOne(selected);
                        break;
                    case 1:
                        setRandomTwo(selected);
                        break;
                    case 2:
                        setRandomThree(selected);
                        break;
                };
            };
        } catch {};
    }, [ projects ]);
    
    return (
        <div className="relative w-full sm:grid sm:grid-cols-2 sm:gap-x-12 pb-10 pt-5 sm:pt-0">
            <div className="absolute blur-3xl top-[0] left-[0] w-40 h-40 rounded-full bg-gradient-to-br from-sky-600/30" />
            <div className="absolute blur-3xl top-[40%] left-[40%] w-40 h-40 rounded-full bg-gradient-to-br from-emerald-600/30" />
            <div className="absolute blur-3xl top-[-20%] left-[90%] w-40 h-40 rounded-full bg-gradient-to-br from-red-600/30" />
            <div className="flex items-center">
                <div className="text-center sm:text-right w-full">
                    <div className="pb-1 flex items-center justify-center sm:justify-end">
                        <div className="mr-1.5">
                            <TextLoop>
                                {texts.map((text, index) => (
                                    <Tippy key={index} content={<img src={`https://flagcdn.com/20x15/${text.flag}.png`} />}>
                                        <div className="flex items-center space-x-1">
                                            <h1 style={{ color: text.color }} className="leading-none text-4xl font-bold">{text.text}</h1>
                                        </div>
                                    </Tippy>
                                ))}
                            </TextLoop>
                        </div>
                        <h1 className="leading-none text-white font-bold text-4xl">there,</h1>
                    </div>
                    <h1 className="leading-none text-white font-bold text-4xl">I'm Swôth.</h1>
                    <p className="pt-3 w-4/5 lg:w-8/12 mx-auto sm:mr-0 sm:ml-auto text-gray-400">Full-Stack Developer. I live in Turkey. I'm high school student and self-improvement person.</p>
                </div>
            </div>
            <div className="waving relative min-h-[230px] mt-10 md:mt-0">
                <div className={(!projects || !randomOne ? "animate-pulse" : "") + " w-32 h-16 absolute top-[10%] left-[20%] sm:left-[10%] project-box tone-1 p-3 rounded-lg perspective-left flex items-center space-x-2"}>
                    {randomOne ? <>
                        <img className="w-8 h-8 rounded-xl" src={randomOne.logo} />
                        <div className="space-y-1">
                            <h1 className="text-zinc-100 text-lg leading-none font-light">{randomOne.title}</h1>
                            <a href={randomOne.link} target="_blank" className="hover:underline font-light text-[0.75rem] text-zinc-200 leading-none"><i className="fal fa-arrow-up-right-from-square mr-1" /> Visit</a>
                        </div>
                    </> : <>
                        <div className="w-8 h-8 rounded-lg bg-white/10" />
                        <div className="space-y-1">
                            <div className="w-16 h-3 rounded-lg bg-white/10" />
                            <div className="w-12 h-2 rounded-lg bg-white/10" />
                        </div>
                    </>}
                </div>
                <div className={(!projects || !randomTwo ? "animate-pulse" : "") + " w-32 h-16 absolute top-[60%] left-[10%] sm:left-[0%] project-box tone-2 p-3 rounded-lg perspective-right flex items-center space-x-2"}>
                    {randomTwo ? <>
                        <img className="w-8 h-8 rounded-xl" src={randomTwo.logo} />
                        <div className="space-y-1">
                            <h1 className="text-zinc-100 text-lg leading-none font-light">{randomTwo.title}</h1>
                            <a href={randomTwo.link} target="_blank" className="hover:underline font-light text-[0.75rem] text-zinc-200 leading-none"><i className="fal fa-arrow-up-right-from-square mr-1" /> Visit</a>
                        </div>
                    </> : <>
                        <div className="w-8 h-8 rounded-lg bg-white/10" />
                        <div className="space-y-1">
                            <div className="w-16 h-3 rounded-lg bg-white/10" />
                            <div className="w-12 h-2 rounded-lg bg-white/10" />
                        </div>
                    </>}
                </div>
                <div className={(!projects || !randomThree ? "animate-pulse" : "") + " w-32 h-16 absolute top-[35%] left-[50%] sm:left-[40%] project-box tone-3 p-3 rounded-lg perspective-middle flex items-center space-x-2"}>
                    {randomThree ? <>
                        <img className="w-8 h-8 rounded-xl" src={randomThree.logo} />
                        <div className="space-y-1">
                            <h1 className="text-zinc-100 text-lg leading-none font-light">{randomThree.title}</h1>
                            <a href={randomThree.link} target="_blank" className="hover:underline font-light text-[0.75rem] text-zinc-200 leading-none"><i className="fal fa-arrow-up-right-from-square mr-1" /> Visit</a>
                        </div>
                    </> : <>
                        <div className="w-8 h-8 rounded-lg bg-white/10" />
                        <div className="space-y-1">
                            <div className="w-16 h-3 rounded-lg bg-white/10" />
                            <div className="w-12 h-2 rounded-lg bg-white/10" />
                        </div>
                    </>}
                </div>
            </div>
        </div>
    );
};