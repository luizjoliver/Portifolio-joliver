import { FaRegFileCode } from "react-icons/fa";
import { GoQuestion } from "react-icons/go";
import { CarouselItem } from "./ui/carousel";
import { Layers, Package, ExternalLink } from 'lucide-react';
import StackItem from "./StackItem";
import Image from "next/image";
import Link from "next/link";
export type ProjectItemType = {
  title: string;
  description: string;
  about: string;
  techStack: string[]
  services: string;
  type: string
  imgs: {
    banner: string,
    desktopVersion?: string[];
    mobileVersion?: string[];
    projectImgs?:string[];
    projectDoc?:string[]
  }
}


type ProjectItemPropsType = {
  ProjectItem: ProjectItemType
}

export default function ProjectItem({ ProjectItem }: ProjectItemPropsType) {
  return (
    <CarouselItem className="w-full h-full basis-full">
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-5 md:grid-rows-2 gap-4 w-full h-[600px] p-2">
       
        <div className="bg-slate-50/10 hidden md:flex md:col-span-1 row-span-2 md:row-span-1 rounded-lg flex-col p-6 gap-4 h-full ">
          <div className="flex items-center gap-3 mb-2">
            <FaRegFileCode className="size-6 text-emerald-400" />
            <h4 className="font-bold text-xl text-white">{ProjectItem.title}</h4>
          </div>
          <span className="text-sm font-medium text-emerald-400/80 uppercase">
            {ProjectItem.type}
          </span>
          <p className="text-gray-300 text-base leading-relaxed line-clamp-4 md:line-clamp-5">
            {ProjectItem.description}
          </p>
        </div>

        
        <div className="bg-slate-50/10 hidden md:flex md:col-span-1 row-span-2 md:row-span-1 rounded-lg flex-col p-6 gap-4 h-full">
          <div className="flex flex-col items-start justify-start gap-1 mb-4 ">
            <Layers className="size-6 text-emerald-400" />
            <h4 className="font-bold text-xl text-white">Stack</h4>
            <p className="text-xs text-gray-300 ">Tecnologias usadas no desenvolvimento do projeto. </p>
          </div>
          <div className=" text-sm text-semibold indent-2 text-justify leading-relaxed overflow-y-auto h-32 overflow-x-hidden ">
            <ul className="w-full grid sm:grid-cols-4 grid-cols-3  gap-y-2 ">
              {ProjectItem.techStack.map((tech) => (
                <StackItem key={tech} tech={tech} />
              ))}
            </ul>
          </div>
        </div>

        
        <div className="bg-slate-50/10 md:col-span-1 row-span-4 md:row-span-3 rounded-lg flex flex-col gap-4 h-full overflow-hidden">
          <div className="p-6 space-y-4">
            <div className="flex items-center  justify-between gap-3 ">
              <div className="flex items-center gap-1">
                <Package className="size-6 text-emerald-400" />
                <h4 className="font-bold text-xl text-white">Serviços</h4>
              </div>
              <Link className="flex items-center  text-wrap justify-center gap-2  md:hidden bg-white text-black rounded-full hover:bg-white/60 transition-colors py-0.5 px-2" href={"/project"}>
                <span className="text-xs">Ver</span>
                <ExternalLink className="size-4" />
              </Link>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
              {ProjectItem.services}
            </p>
          </div>
          <div className="relative h-full w-full">
            <Image
              src={ProjectItem.imgs!.banner}
              alt="project banner"
              fill
              className="object-cover object-top rounded-tl-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

       
        <div className="bg-slate-50/10 hidden md:flex md:col-span-2 row-span-3 md:row-span-2 rounded-lg flex-col p-6 gap-4">
          <div className="flex items-center gap-3 mb-2">
            <GoQuestion className="size-6 text-emerald-400" />
            <h4 className="font-bold text-xl text-white">Sobre o Projeto</h4>
          </div>
          <div className="text-gray-300 text-base leading-relaxed  pr-4">
            <p className="indent-4 line-clamp-5">{ProjectItem.about}</p>
          </div>
          <div className="mt-auto flex justify-end "  >
            <Link className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-white/60 transition-colors" href={"/projetos"}>
              Projeto
              <ExternalLink className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
}


