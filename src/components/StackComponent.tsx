"use client";

import { techIconsMap } from "@/constants/stack";
import React, { useState } from "react";

type StackComponentPropsType = {
    stackItens: {
        title: string;
        description: string;
    }[];
    title: string;
    initialDescription: string;
};

export default function StackComponent({ stackItens, title, initialDescription }: StackComponentPropsType) {

    const [techSelected, setTechSelected] = useState<string>();

    const currentDescription = techSelected
        ? stackItens.find((tech) => tech.title === techSelected)!.description
        : initialDescription;


    return (
        <div className="flex-1 bg-slate-50/10 flex rounded-lg">
            <div className="flex-1 flex flex-col">
                <div className="flex-1 flex items-center justify-center">
                    <p className="text-2xl text-white font-semibold">{title}</p>
                </div>
                <div className="flex-1/3">
                    <p className="text-gray-300">{currentDescription}</p>
                </div>
            </div>
            <ul className="flex-1/4 w-full grid sm:grid-cols-4 grid-cols-3 gap-4 p-2">
                {stackItens.map((tech) => {
                    const Icon = techIconsMap.get(tech.title);
                    return (
                        <li
                            className={`bg-slate-50/10 rounded-lg text-white flex flex-col items-center justify-center h-full w-full gap-1 transition-all duration-300 border ${tech.title === techSelected ? "border-emerald-400" : 'border-transparent' } hover:border-emerald-400 cursor-pointer`}
                            key={tech.title}
                            onClick={() => setTechSelected(tech.title)}
                        >
                            <div>{Icon}</div>
                            <span>{tech.title}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}