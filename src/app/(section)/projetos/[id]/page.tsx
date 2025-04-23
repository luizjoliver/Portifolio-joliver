import NavBar from '@/components/NavBar'
import { ProjectItemType } from '@/components/ProjectItem';
import StackItem from '@/components/StackItem';
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { arrayProjetos } from '@/constants/stack';

type Params = { id: string }

export function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

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

        if (!response.ok) throw new Error(`Error fetching project data from ${url}`);

        const data = await response.json();
        if (!data.content) throw new Error(`No content found for project at ${url}`);

        const decodedContent = Buffer.from(data.content, "base64").toString("utf-8");
        return JSON.parse(decodedContent);
    } catch (error) {
        console.error("Error fetching project data:", error);
        return null;
    }
}

export default async function ProjectDetails({
    params,
}: {
    params: Promise<Params>
}) {
    const Params = await params
    const projetoId = parseInt(Params.id)
    const projetoConfig = arrayProjetos.find(p => p.id === projetoId)

    if (!projetoConfig) notFound()

    const projeto: ProjectItemType = await fetchProjectData(projetoConfig.githubUrl)
    if (!projeto) notFound()

    return (
        <main className='min-h-[100dvh] flex flex-col items-center gap-4'>
            <NavBar>
                <Link href={'/'} className="cursor-pointer font-semibold text-xs sm:text-base hover:bg-black/40 px-2 py-1 rounded-full duration-300">
                    Inicio
                </Link>
                <Link href={'/stack'} className="cursor-pointer font-semibold text-xs sm:text-base hover:bg-black/40 px-2 py-1 rounded-full duration-300">
                    Stack
                </Link>
                <Link href={'/projetos'} className="cursor-pointer font-semibold text-xs sm:text-base hover:bg-black/40 px-2 py-1 rounded-full duration-300">
                    Projetos
                </Link>
            </NavBar>

            <section className='flex-1 w-full max-w-7xl mt-24 p-4 space-y-8'>
                <Link href="/projetos" className="text-emerald-400 hover:opacity-35 text-sm flex items-center justify-start">
                    <IoIosArrowRoundBack className='size-7' /> Voltar
                </Link>

                <div className="bg-white/5 rounded-xl  ">
                    <div className="p-6 space-y-8">

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold text-white">{projeto.title}</h1>
                                <span className="uppercase px-3 py-1 rounded-full md:text-sm text-xs bg-white/10 text-emerald-400 inline-block">
                                    {projeto.type}
                                </span>
                            </div>

                            <Link
                                href={projetoConfig.projetoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-emerald-400/20 px-4 py-2 rounded-full hover:bg-emerald-400/30 transition-colors text-emerald-400 items-center gap-1 w-fit
                                hidden sm:flex"
                            >
                                <span>Ver Projeto</span>
                                <IoIosArrowRoundForward className="size-5" />
                            </Link>
                        </div>


                        <div >
                            <h2 className="text-2xl font-semibold text-white mb-4">Sobre o Projeto</h2>
                            <p className="text-gray-300 leading-relaxed">{projeto.about}</p>
                        </div>


                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-4">Serviços</h2>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {projeto.services.split(' , ').map((service, i) => (
                                    <li key={i}>{service.trim()}</li>
                                ))}
                            </ul>
                        </div>


                        <div className='flex flex-col gap-4'>
                            <h2 className="text-2xl font-semibold text-white mb-4">Tecnologias</h2>
                            <div className="flex flex-wrap gap-2">
                                {projeto.techStack.map((tech, i) => (
                                    <StackItem key={i} tech={tech} />
                                ))}
                            </div>
                            <Link
                                    href={projetoConfig.projetoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-emerald-400/20 px-4 py-2 rounded-full hover:bg-emerald-400/30 transition-colors text-emerald-400 items-center gap-1 w-fit
                                flex sm:hidden"
                                >
                                    <span>Ver Projeto</span>
                                    <IoIosArrowRoundForward className="size-5" />
                                </Link>
                        </div>


                        {projeto.imgs.projectImgs && projeto.imgs.projectImgs.length > 0 && (
                            <div className="space-y-8">
                                <h2 className="text-2xl font-semibold text-white mb-4">Imagens do Projeto</h2>
                                <div className="grid grid-cols-1 gap-1 md:gap-4"> 
                                    {projeto.imgs.projectImgs.map((img, i) => (
                                        <div key={`project-img-${i}`} className="relative w-full h-[400px]">
                                            <Image
                                                src={img}
                                                alt={`Imagem do projeto ${i + 1}`}
                                                fill
                                                className="rounded-lg  object-contain"
                                                quality={100}
                                                sizes="(max-width: 768px) 100vw, 1200px"
                                                priority={i === 0}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}


                        {projeto.imgs.projectDoc && projeto.imgs.projectDoc.length > 0 && (
                            <div className="space-y-8">
                                <h2 className="text-2xl font-semibold text-white mb-4">Documentação</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {projeto.imgs.projectDoc.map((doc, i) => (
                                        <div key={`doc-${i}`} className="relative w-full h-[400px]">
                                            <Image
                                                src={doc}
                                                alt={`Documentação ${i + 1}`}
                                                fill
                                                className="rounded-lg object-contain"
                                                quality={100}
                                                sizes="(max-width: 768px) 100vw, 800px"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}


                        {(projeto.imgs.desktopVersion && projeto.imgs.desktopVersion.length > 0 ||  projeto.imgs.mobileVersion && projeto.imgs.mobileVersion.length > 0) && (
                            <div className="space-y-8">
                                {projeto.imgs.desktopVersion && projeto.imgs.desktopVersion.length > 0 && (
                                    <div>
                                        <h2 className="text-2xl font-semibold text-white mb-4">Versão Desktop</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4">
                                            {projeto.imgs.desktopVersion.map((img, i) => (
                                                <div key={`desktop-${i}`} className="relative w-full h-[337.5px]">
                                                    <Image
                                                        src={img}
                                                        alt={`Desktop ${i + 1}`}
                                                        fill
                                                        className="rounded-lg  object-contain"
                                                        quality={100}
                                                        sizes="(max-width: 768px) 100vw, 1280px"
                                                        priority={i === 0}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {projeto.imgs.mobileVersion?.length && projeto.imgs.mobileVersion?.length > 0 && (
                                    <div>
                                        <h2 className="text-2xl font-semibold text-white mb-4">Versão Mobile</h2>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            {projeto.imgs.mobileVersion && projeto.imgs.mobileVersion.map((img, i) => (
                                                <div key={`mobile-${i}`} className="relative w-full h-[600px]">
                                                    <Image
                                                        src={img}
                                                        alt={`Mobile ${i + 1}`}
                                                        fill
                                                        className="rounded-lg  object-contain"
                                                        quality={100}
                                                        sizes="(max-width: 768px) 50vw, 375px"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    )
}