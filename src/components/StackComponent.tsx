"use client";

import { techIconsMap } from "@/constants/stack";
import React, { useState } from "react";

type StackComponentPropsType = {
    stackItens: {
        title: string;
        description: string;
        type: string;
    }[];
    title: string;
    initialDescription: string;
};

export default function StackComponent({ stackItens, title, initialDescription }: StackComponentPropsType) {
    const [techSelected, setTechSelected] = useState<string>();

    function handleClickTech(techTitle: string) {
        setTechSelected((prev) => (prev === techTitle ? undefined : techTitle));
    }

    const currentTech = stackItens.find((tech) => tech.title === techSelected);
    const currentDescription = currentTech?.description || initialDescription;
    const currentType = currentTech?.type || null
    const currentTitle = currentTech?.title || title

    return (
        <div className="flex-1 bg-slate-50/10 flex flex-col sm:flex-row rounded-lg min-h-[300px] md:min-h-[250px]">
            <div className="flex-1 flex flex-col p-6 space-y-4">
                <div className="flex flex-col items-center text-center space-y-2">
                    <h3 className="text-emerald-400 bg-clip-text text-xl md:text-2xl lg:text-3xl font-bold">
                        {currentTitle}
                    </h3>
                   
                    <div className="h-6 flex items-center justify-center">
                        {currentType && (
                            <span className="bg-slate-50/10 text-emerald-400 text-xs font-medium px-3 py-1 rounded-full uppercase">
                                {currentType}
                            </span>
                        )}
                    </div>
                </div>

                {/* Apenas alterações necessárias aqui */}
                <div className="flex-1 flex items-center justify-center transition-all duration-300">
                    <p className="text-gray-300 text-xs md:text-base lg:text-lg leading-relaxed text-center w-full animate-fade-in">
                        {currentDescription}
                    </p>
                </div>
            </div>

            <ul className="flex-1/4 w-full grid sm:grid-cols-4 grid-cols-3 gap-4 p-2">
                {stackItens.map((tech) => {
                    const Icon = techIconsMap.get(tech.title);
                    return (
                        <li
                            className={`bg-slate-50/10 rounded-lg text-white flex flex-col items-center justify-center h-full w-full gap-1 transition-all duration-300 border group 
                                ${tech.title === techSelected
                                    ? "border-emerald-400 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 shadow-lg shadow-emerald-400/50 scale-110"
                                    : "border-transparent hover:border-emerald-400"
                                } cursor-pointer`}
                            key={tech.title}
                            onClick={() => handleClickTech(tech.title)}
                        >
                            <div className={`${tech.title === techSelected ? 'text-emerald-400' : 'text-white'} group-hover:text-emerald-400 group-hover:scale-125 duration-300`}>
                                {Icon}
                            </div>
                            {/* Ajuste mínimo de tamanho de texto */}
                            <span className="text-[10px] xs:text-xs md:text-base">{tech.title}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}