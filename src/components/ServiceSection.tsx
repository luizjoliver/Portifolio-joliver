import React from 'react'
import { FaLaptopCode, FaPalette, FaServer, FaTools } from 'react-icons/fa'
import StackItem from './StackItem'


const techStackFrontEnd = ['React', 'Next', 'Angular', 'Typescript']
const techStackBackEnd = ['Node', 'Prisma', 'PostgreSQL', 'Docker']
export default function ServiceSection() {
    return (
        <section className="min-h-[calc(100dvh-7rem)] mt-24 flex flex-col items-center justify-center pb-14 gap-14 px-4 sm:px-8">
            <div className="w-full flex flex-col items-center gap-1 md:gap-2">
                <h3 className="text-2xl sm:text-3xl md:text-4xl text-white text-center font-bold">Serviços</h3>
                <span className="text-lg sm:text-xl md:text-2xl italic text-white/40 ">What I Offer</span>
            </div>

            <article className='w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-2 gap-6'>
               
                <div className=' bg-slate-50/10 backdrop-blur-lg rounded-xl p-8 transition-all duration-300 border border-transparent hover:border-emerald-400 '>
                    <div className='flex items-center gap-4 mb-6'>
                        <div className='p-3 bg-emerald-400/10 rounded-lg'>
                            <FaLaptopCode className='text-3xl text-emerald-400' />
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold text-white'>Desenvolvimento <span className='text-xs text-gray-300'>(front-end)</span></h4>
                            <span className='text-xs text-emerald-400/80 uppercase'>Intefaces modernas</span>
                        </div>
                    </div>
                    <p className='text-gray-300 mb-4 leading-relaxed'>
                        Desenvolvimento de interfaces modernas e responsivas com foco em performance e experiência do usuário.
                        Criação de websites profissionais, landing pages, sistemas web e aplicações SaaS com as melhores práticas do mercado.
                    </p>
                    <div className='w-full grid sm:grid-cols-4 grid-cols-3   '>
                        {techStackFrontEnd.map((tech) => (
                            <StackItem tech={tech} key={tech} />
                        ))}
                    </div>
                </div>

                
                <div className=' bg-slate-50/10 backdrop-blur-lg rounded-xl p-8 transition-all duration-300 border border-transparent hover:border-emerald-400 '>
                    <div className='flex items-center gap-4 mb-6'>
                        <div className='p-3 bg-emerald-400/10 rounded-lg'>
                            <FaServer className='text-3xl text-emerald-400' />
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold text-white'>Desenvolvimento <span className='text-xs text-gray-300'>(back-end)</span></h4>
                            <span className='text-xs text-emerald-400/80 uppercase'>api / servidores</span>
                        </div>
                    </div>
                    <p className='text-gray-300 mb-4 leading-relaxed'>
                        Construção de APIs RESTful escaláveis e seguras com arquitetura limpa. Desenvolvimento de sistemas complexos,
                        integrações com bancos de dados e implementação de autenticação e autorização.
                    </p>
                    <div className='w-full grid sm:grid-cols-4 grid-cols-3   '>
                        {techStackBackEnd.map((tech) => (
                            <StackItem tech={tech} key={tech} />
                        ))}
                    </div>
                </div>

               
                <div className='bg-slate-50/10 backdrop-blur-lg rounded-xl p-8 transition-all duration-300 border border-transparent hover:border-emerald-400'>
                    <div className='flex items-center gap-4 mb-6'>
                        <div className='p-3 bg-emerald-400/10 rounded-lg'>
                            <FaTools className='text-3xl text-emerald-400' />
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold text-white'>Manutenção & Otimização</h4>
                            <span className='text-xs text-emerald-400/80 uppercase'>Manutenção</span>
                        </div>
                    </div>
                    <p className='text-gray-300 mb-4 leading-relaxed'>
                        Refatoração de código legado, otimização de performance e correção de bugs. Implementação de testes automatizados,
                        atualização de dependências e melhoria contínua de aplicações existentes.
                    </p>
                </div>

           
                <div className=' bg-slate-50/10 backdrop-blur-lg rounded-xl p-8 transition-all duration-300 border border-transparent hover:border-emerald-400 '>
                    <div className='flex items-center gap-4 mb-6'>
                        <div className='p-3 bg-emerald-400/10 rounded-lg'>
                            <FaPalette className='text-3xl text-emerald-400' />
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold text-white'>UI/UX Design</h4>
                            <span className='text-xs text-emerald-400/80 uppercase'>Experiência do usuário</span>
                        </div>
                    </div>
                    <p className='text-gray-300 mb-4 leading-relaxed'>
                        Design de interfaces intuitivas com foco na jornada do usuário. Prototipagem interativa,
                        design system e componentização. Criação de interfaces que combinam estética e funcionalidade.
                    </p>

                </div>
            </article>
        </section>
    )
}