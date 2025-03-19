import Link from "next/link";
import TechCarousel from "./TechCarousel";
import { MdOutlineArrowRightAlt } from "react-icons/md";


export default function TechnologySection() {
  return (
    <section className="w-full flex flex-col justify-between items-center mt-36 md:mt-28 lg:mt-4 h-[20vh]">
      <TechCarousel />
      <Link href={'/stack'} className="flex items-center text-black bg-white md:text-slate-50/30 md:bg-transparent hover:bg-slate-50/10 hover:text-white py-2 px-6 rounded-full group hover:scale-105 duration-200   gap-2"> 
      <span>Ver Stack</span> <MdOutlineArrowRightAlt className="hidden group-hover:block group-hover:animate-bounce group-hover:duration-700" />
      </Link>

    </section>
  )
}