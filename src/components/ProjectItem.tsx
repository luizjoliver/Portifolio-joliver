import { FaRegFileCode } from "react-icons/fa";
import { GoQuestion } from "react-icons/go";
import { CarouselItem } from "./ui/carousel";
import { Layers, Package } from 'lucide-react';
import StackItem from "./StackItem";
import Image from "next/image";
export type ProjectItemType = {
  title: string;
  description: string;
  about: string;
  techStack: string[]
  services: string;
  type?: string
  imgs?: {
    banner: string,
    desktopVersion: string[];
    mobileVersion: string[];
  }
}


type ProjectItemPropsType = {
  ProjectItem: ProjectItemType
}

export default function ProjectItem({ ProjectItem }: ProjectItemPropsType) {
  return (
    <CarouselItem className="w-full h-full basis-full">
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-5 md:grid-rows-2 gap-2 w-full h-[600px]">
        <div className="bg-slate-50/10 md:col-span-1 row-span-2 md:row-span-1 rounded-lg flex flex-col p-4 gap-4 h-full">
          <div className="w-full h-1/3 text-white flex flex-col items-start justify-center gap-2 ">
            <FaRegFileCode className="size-6" />
            <h4 className="font-semibold text-md lg:text-xl">{ProjectItem.title}</h4>
            <span className="text-sm font-normal font-sans italic text-black/80 ">({ProjectItem.type})</span>
          </div>
          <div className="text-white opacity-60 text-sm text-semibold indent-2 text-justify leading-relaxed overflow-hidden">
            <p className="line-clamp-2"> {/* Mostra no máximo 5 linhas */}
              {ProjectItem.description}
            </p>
          </div>
        </div>
        <div className="bg-slate-50/10 md:col-span-1 row-span-2 md:row-span-1 rounded-lg flex flex-col p-4 gap-4 h-full">
          <div className="w-full h-1/3 text-white flex flex-col items-start justify-center gap-2 ">
            <Layers className="size-6" />
            <h4 className="font-semibold text-xl">Stack</h4>
          </div>
          <div className=" text-sm text-semibold indent-2 text-justify leading-relaxed overflow-y-auto h-32 overflow-x-hidden ">
            <ul className="w-full grid grid-cols-4 gap-x-4 gap-y-2">
              {ProjectItem.techStack.map((tech) => (
                <StackItem key={tech} tech={tech} />
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-slate-50/10 md:col-span-1 row-span-3 md:row-span-3 rounded-lg flex flex-col p-4 gap-4 h-full">
          <div className="w-full h-1/4  flex flex-col gap-4">
            <div className="w-full h-1/2 text-white flex flex-col items-start justify-center gap-2 ">
              <Package className="size-6" />
              <h4 className="font-semibold text-xl">Serviços</h4>
            </div>
            <div className="w-full h-full md:h-1/2 text-white opacity-60 text-sm text-semibold indent-2 text-justify leading-relaxed pr-2 ">
              <p className="line-clamp-2">{ProjectItem.services}</p>
            </div>
          </div>
          <div className="w-full h-3/4 bg-yellow-950 relative rounded-lg hidden md:block">
            <Image src={ProjectItem.imgs?.banner} fill alt="project" className="rounded-l-lg rounded-br-lg" />
          </div>
        </div>
        <div className="bg-slate-50/10  md:col-span-2 row-span-3 md:row-span-2 rounded-lg md:block flex flex-col gap-4 p-4">
          <div className="w-full h-1/4  text-white flex flex-col items-start justify-center gap-2  ">
            <GoQuestion className="size-6" />
            <h4 className="font-semibold text-xl">Sobre o Projeto</h4>

          </div>
          <div className="w-full h-3/4 flex items-start justify-center pb-8 text-white opacity-60 text-sm text-semibold indent-2 text-justify leading-relaxed overflow-y-auto"> {/* Adicione overflow-y-auto */}
            <p className="line-clamp-3">{ProjectItem.about}</p>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
}