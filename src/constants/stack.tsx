import { JSX } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { BsStripe } from "react-icons/bs";
import { FaNodeJs, FaReact, FaGitAlt, FaDocker, FaAngular, FaAws } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiChakraui, SiMongodb, SiNestjs, SiPostgresql, SiPrisma, SiReacthookform, SiReactquery, SiShadcnui, SiSwagger, SiZod } from "react-icons/si";
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
    name: 'MongoDB',
    logo: <SiMongodb />
  }



]


export const techIconsMap = new Map([
  ['React', <FaReact className="size-7"/>],
  ['Next', <RiNextjsFill className="size-7"/>],
  ['TypeScript', <BiLogoTypescript className="size-7"/>],
  ['Node', <FaNodeJs className="size-7"/>],
  ['Chackra', <SiChakraui className="size-7"/>],
  ['Zod', <SiZod className="size-7"/>],
  ['ReactQuery', <SiReactquery className="size-7" />],
  ['Prisma', <SiPrisma className="size-7" />],
  ['PostgreSQL',<SiPostgresql className="size-7"/>],
  ['Stripe',<BsStripe className="size-7"/>],
  ['Shadcn/ui',<SiShadcnui className="size-7"/>],
  ['HookForm',<SiReacthookform className="size-7"/>],
  ['Tailwind',<RiTailwindCssFill className="size-7"/>],
  ['Nest',<SiNestjs className="size-7"/>],
  ['Swagger',<SiSwagger className="size-7"/>]
]);