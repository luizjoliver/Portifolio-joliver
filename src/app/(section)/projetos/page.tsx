import NavBar from '@/components/NavBar'
import { ProjectItemType } from '@/components/ProjectItem';
import { arrayProjetos } from '@/components/ProjectSection';
import StackItem from '@/components/StackItem';
import Link from 'next/link'
import React from 'react'

export default async function ProjectsPage() {

  async function fetchProjectData(url: string) {
    try {
      const token = process.env.GITHUB_TOKEN;
      const headers = {
        "Authorization": `Bearer ${token}`,

      };

      const response = await fetch(url, {
        headers,
        cache: 'force-cache'
      });
      if (!response.ok) {
        throw new Error(`Error fetching project data from ${url}`);
      }

      const data = await response.json();

      if (!data.content) {
        throw new Error(`No content found for project at ${url}`);
      }

      const decodedContent = Buffer.from(data.content, "base64").toString("utf-8");
      return JSON.parse(decodedContent);
    } catch (error) {
      console.error("Error fetching project data:", error);
      return null;
    }
  }

  const projetos: ProjectItemType[] = await Promise.all(arrayProjetos.map((projeto) => fetchProjectData(projeto.projetoUrl)));
  return (
    <main className='min-h-[100dvh] flex flex-col items-center gap-4'>
      <NavBar>
        <Link href={'/'} className="cursor-pointer font-semibold text-xs sm:text-base hover:bg-black/40 px-2 py-1 rounded-full duration-300" aria-label="button-navbar">Inicio</Link>
        <Link href={'/stack'} className="cursor-pointer font-semibold text-xs sm:text-base hover:bg-black/40 px-2 py-1 rounded-full duration-300" aria-label="button-navbar">Stack</Link>
        <Link href={'/projetos'} className="cursor-pointer font-semibold text-xs sm:text-base hover:bg-black/40 px-2 py-1 rounded-full duration-300" aria-label="button-navbar">Projetos</Link>
      </NavBar>

      
      <section className='flex-1 w-full max-w-7xl mt-24 p-4'>
        <div className="w-full flex flex-col items-center gap-4 mb-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-white text-center">Projetos</h3>
          <span className="text-lg sm:text-xl md:text-2xl italic text-white/40">Projects</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetos.map((projeto, index) => (
            <Link href={`/projetos/${index + 1}`}
              key={index}
              className="bg-white/5 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:border-emerald-400 border border-transparent cursor-pointer"
            >
              <img
                src={projeto?.imgs?.banner}
                alt={projeto.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-white">{projeto.title}</h3>
                  <span className={
                   "px-3 py-1 rounded-full text-sm bg-slate-50/20 text-emerald-400"
                  }>
                    {projeto.type}
                  </span>
                </div>

                <p className="text-gray-300 line-clamp-3">{projeto.description}</p>

                <div className="flex flex-wrap gap-2 mt-2 text-sm text-semibold indent-2 text-justify leading-relaxed overflow-y-auto h-32 overflow-x-hidden">
                  {projeto.techStack.map((tech) => (
                   
                      <StackItem key={tech} tech={tech}/>
                    
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
