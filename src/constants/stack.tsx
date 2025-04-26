import { JSX } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { BsStripe } from "react-icons/bs";
import { FaNodeJs, FaReact, FaGitAlt, FaDocker, FaAngular, FaAws, FaSass } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiChakraui, SiDotnet, SiFoodpanda, SiMongodb, SiNestjs, SiPostgresql, SiPrisma, SiPusher, SiReacthookform, SiReactquery, SiShadcnui, SiStyledcomponents, SiSwagger, SiZod } from "react-icons/si";
import { TbBrandCSharp, TbBrandVite } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { DiDotnet } from "react-icons/di";
import { SiBlazor } from "react-icons/si";
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
  ['Swagger',<SiSwagger className="size-7"/>],
  ['Zustand',<SiFoodpanda className="size-7"/>],
  ['Pusher',<SiPusher className="size-7"/>],
  ['Angular',<FaAngular className="size-7"/>],
  ['Typescript',<BiLogoTypescript  className="size-7"/>],
  ['Docker',<FaDocker className="size-7"/>],
  ['Git',<FaGitAlt  className="size-7"/>],
  ['DotNet',<SiDotnet className="size-7" />],
  ['Csharp', <TbBrandCSharp className="size-7"/>],
  ['MySQL',<GrMysql className="size-7"/>],
  ['Sass',<FaSass className="size-7"/>],
  ['Entity',<DiDotnet className="size-7"/>],
  ['AWS',<FaAws className="size-7" />],
  ['Blazor',<SiBlazor className="size-7"/>],
  ['MongoDB',<SiMongodb className="size-7"/>],
  ['Vite',<TbBrandVite className="size-7"/>],
  ['Styled-Components',<SiStyledcomponents className="size-14"/>]
]);



export const firstStack = [
  {
    title: 'React',
    description: 'Biblioteca JavaScript para construção de interfaces de usuário reativas e componíveis.',
    type:'front end'
  },
  {
    title: 'Next',
    description: 'Framework React que oferece renderização híbrida e geração de páginas estáticas e dinâmicas.',
    type:'full stack'
  },
  {
    title: "TypeScript",
    description: "Superset do JavaScript que adiciona recursos adicionais para o desenvolvimento",
    type: "linguagem"
  },
  {
    title: 'Node',
    description: 'Ambiente de execução JavaScript no lado do servidor, baseado no motor V8 do Chrome.',
    type:'back end'
  },
  {
    title: 'Nest',
    description: 'Framework Node.js progressivo para construção de aplicações escaláveis e bem estruturadas.',
    type:'back end'
  },
  {
    title: 'PostgreSQL',
    description: 'Banco de dados relacional de código aberto, poderoso e com suporte a SQL avançado.'
    ,
    type:'sgbd'
  },
  {
    title: 'Prisma',
    description: 'ORM para Node.js que facilita a interação com bancos de dados relacionais.',
  
    type:'orm'
  },
  {
    title: 'Tailwind',
    description: 'Framework CSS utilitário para construção rápida de interfaces responsivas e estilizadas.',
    type:'front end'
  },
 
];

export const secondStack = [
  {
    title: 'Angular',
    description: 'Framework TypeScript para construção de aplicações web dinâmicas e escaláveis.',
    type:'front end'
  },
  {
    title: 'Blazor',
    description: 'Framework da Microsoft para construção de SPAs utilizando C# e .NET no frontend.',
    type:'front end'
  },
  {
    title: 'Csharp',
    description: 'Linguagem de programação moderna e orientada a objetos, desenvolvida pela Microsoft.',
    type:'linguagem'
  },
  {
    title: 'DotNet',
    description: 'Plataforma de desenvolvimento da Microsoft para aplicações web, desktop e mobile.',
    type:'full stack'
  },
  {
    title: 'MySQL',
    description: 'Banco de dados relacional open-source, popular por sua confiabilidade e desempenho.',
    type:'sgbd'
  },
  {
    title: 'Entity',
    description: 'ORM para .NET que simplifica a interação com bancos de dados relacionais.',
    
    type:'orm'
  },
  {
    title: 'Sass',
    description: 'Pré-processador CSS que adiciona funcionalidades como variáveis e mixins.',
    type:'front end'
  },
  {
    title: 'Docker',
    description: 'Plataforma para criação, envio e execução de aplicações em containers.',
    type:'infraestrutura'
  },
];

export const toolStack = [
  {
    title: 'Git',
    description: 'Sistema de controle de versão distribuído, essencial para colaboração e rastreamento de código.',
    type:'infraestrutura'
  },
  {
    title: 'Docker',
    description: 'Plataforma para empacotamento, distribuição e execução de aplicações em containers.',
    type:'infraestrutura'
  },
  {
    title: 'AWS',
    description: 'Plataforma de computação em nuvem da Amazon, oferecendo serviços escaláveis e seguros.',
    type:'nuvem'
  },
  {
    title:"MongoDB",
    description:'O MongoDB é um Banco de dados do tipo NoSQL (Não relacional) ',
    type:'sgbd'
  }
];

export const arrayProjetos = [
  {
    id: 1,
    githubUrl: 'https://api.github.com/repos/luizjoliver/Joao-e-Maria-Store/contents/project-info.json',
    projetoUrl:'https://joao-e-maria-store.vercel.app/'
  },
  {
    id: 2,
    githubUrl: 'https://api.github.com/repos/luizjoliverceub/Petzone/contents/project-info.json?ref=alter-pid-4',
    projetoUrl:'https://github.com/luizjoliverceub/Petzone'
  },
  {
    id: 3,
    githubUrl: 'https://api.github.com/repos/luizjoliver/my-podcast-api/contents/project-info.json',
    projetoUrl:'https://github.com/luizjoliver/my-podcast-api'
  }
];

export const allProjects = [
  {
    id: 1,
    githubUrl: 'https://api.github.com/repos/luizjoliver/Joao-e-Maria-Store/contents/project-info.json',
    projetoUrl:'https://joao-e-maria-store.vercel.app/'
  },
  {
    id: 2,
    githubUrl: 'https://api.github.com/repos/luizjoliverceub/Petzone/contents/project-info.json?ref=alter-pid-4',
    projetoUrl:'https://github.com/luizjoliverceub/Petzone'
  },
  {
    id: 3,
    githubUrl: 'https://api.github.com/repos/luizjoliver/my-podcast-api/contents/project-info.json',
    projetoUrl:'https://github.com/luizjoliver/my-podcast-api'
  },
  {
    id: 4,
    githubUrl: 'https://api.github.com/repos/luizjoliver/Carlos-Tenis/contents/project-info.json',
    projetoUrl:'https://carlos-tenis.vercel.app/'
  },
  {
    id: 5,
    githubUrl: 'https://api.github.com/repos/luizjoliver/Angular-login-app/contents/project-info.json',
    projetoUrl:'https://carlos-tenis.vercel.app/'
  }
];