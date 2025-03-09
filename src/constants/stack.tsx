import { JSX } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { BsStripe } from "react-icons/bs";
import { FaNodeJs, FaReact, FaGitAlt, FaDocker, FaFigma, FaAngular, FaAws } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiNestjs, SiPostgresql, SiPrisma, SiPusher, SiReactquery, SiShadcnui, SiZod } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";


type CarouselStackType = {
  name: string;
  logo: JSX.Element;
}

export const carouselStack: CarouselStackType[] = [
  {
    name: 'React',
    logo: <FaReact />
  },
  {
    name: 'TypeScript',
    logo: <BiLogoTypescript />
  },
  {
    name: 'NextJs',
    logo: <RiNextjsFill />
  },
  {
    name: 'NodeJS',
    logo: <FaNodeJs />
  },
  {
    name: 'Nest Js',
    logo: <SiNestjs />
  },
  {
    name: 'Angular',
    logo: <FaAngular />
  },
  {
    name: 'C#',
    logo: <TbBrandCSharp />
  },
  {
    name: 'Prisma',
    logo: <SiPrisma />
  },
  {
    name: 'Docker',
    logo: <FaDocker />
  },
  {
    name: 'Git',
    logo: <FaGitAlt />
  },
  {
    name: 'AWS',
    logo: <FaAws />
  },
  {
    name: 'React Query',
    logo: <SiReactquery />
  },
  {
    name: 'TailwindCss',
    logo: <RiTailwindCssFill />
  },
  {
    name: 'Shadcn/ui',
    logo: <SiShadcnui />
  },
  {
    name: 'Zod',
    logo: <SiZod />
  },

  {
    name: 'PostgreSQL',
    logo: <SiPostgresql />
  },
  {
    name: 'PostgreSQL',
    logo: <SiMongodb />
  }



]


