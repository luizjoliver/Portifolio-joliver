"use client"

import { useState } from 'react'
import ExperienceItem from './ExperienceItem'
import { RiArrowDropRightFill } from 'react-icons/ri'

export default function ExperienceDropDown() {



    return (
        <article className=' w-full max-w-[1300px] flex flex-col items-start justify-center gap-8 lg:gap-4 '>



            <ExperienceItem title='Carreira' subTitle='Carer' >

                <div className='flex-1  rounded-lg  bg-slate-50/10 p-7'>
                    <div className='size-full flex flex-col gap-4 items-center justify-center'>
                        <div className='w-full flex flex-col '>
                            <h5 className='text-white font-bold text-lg'>Projeto Integrador</h5>
                            <span className='text-gray-300 font-bold'>CEUB</span>
                        </div>
                        <div className='w-full flex gap-2 items-center justify-start'>
                            <span className='text-white bg-black/50 font-semibold rounded-lg p-2'>Ago/22</span>
                            <span className='text-white bg-black/50 font-semibold rounded-lg p-2'>Dez/24</span>
                        </div>
                        <p className='text-gray-300 font-semibold text-base'>
                            Atuação como desenvolvedor full stack , Responsável pelo desenvolvimento e manutenção do Projeto integrador com HTML, CSS, TypeScript, React com Next js , além de desenvolver o back-end do projeto com Node e Typscript. O Deploy para a apresentação do projeto foi feito no ambiente AWS utilizando o Amplify.
                        </p>
                    </div>
                </div>

                <div className='flex-1 rounded-lg bg-slate-50/10 p-7'>
                    <div className='size-full flex flex-col gap-4 items-center justify-center'>
                        <div className='w-full flex flex-col '>
                            <h5 className='text-white font-bold text-lg'>Estagiário de TI</h5>
                            <span className='text-gray-300 font-bold'>ISCON</span>
                        </div>
                        <div className='w-full flex gap-2 items-center justify-start'>
                            <span className='text-white bg-black/50 font-semibold rounded-lg p-2'>Jan/22</span>
                            <span className='text-white bg-black/50 font-semibold rounded-lg p-2'>Fev/23</span>

                        </div>
                        <p className='text-gray-300 font-semibold text-base'>
                            Responsável pelo desenvolvimento e manutenção de páginas web com HTML, CSS, JavaScript e React, além de APIs com TypeScript e C#. Possui experiência com tecnologias Microsoft e plataforma Azure. Especializado em design de interfaces e UX/UI utilizando Figma, e em fornecer suporte eficiente para melhorar a experiência do usuário.
                        </p>
                    </div>
                </div>

            </ExperienceItem>

            <ExperienceItem title='Formações' subTitle='Qualifications' >
               
                    <div className='flex-1 rounded-lg bg-slate-50/10 p-7'>
                        <div className='size-full flex flex-col gap-4 items-center justify-between'>
                            <div className='w-full flex flex-col '>
                                <h5 className='text-white font-bold md:text-lg text-sm'>ADS <span className='text-xs text-gray-300'>(CEUB)</span></h5>
                                <span className='text-gray-300 font-bold text-xs md:text-base'>Ensino Superior</span>
                            </div>
                            <div className='w-full flex gap-2 items-center justify-start'>
                                <span className='text-white bg-black/50 font-semibold rounded-lg p-2 md:text-lg text-sm'>Fev/22</span>
                                <span className='text-white bg-black/50 font-semibold rounded-lg p-2 md:text-lg text-sm'>Ago/25</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 rounded-lg bg-slate-50/10 p-7'>
                        <div className='size-full flex flex-col gap-4 items-center justify-center'>
                            <div className='w-full flex flex-col '>
                                <h5 className='text-white font-bold md:text-lg text-sm'>Desenvolvedor FullStack JS <span className='text-xs text-gray-300'>(OneBitCode)</span></h5>
                                <span className='text-gray-300 font-bold text-xs md:text-base' >Curso profissionalizante</span>
                            </div>
                            <div className='w-full flex gap-2 items-center justify-start'>
                                <span className='text-white bg-black/50 font-semibold rounded-lg p-2 md:text-lg text-sm' >Dez/23</span>
                                <span className='text-white bg-black/50 font-semibold rounded-lg p-2 md:text-lg text-sm'>Fev/24</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 rounded-lg bg-slate-50/10 p-7'>
                        <div className='size-full flex flex-col gap-4 items-center justify-center'>
                            <div className='w-full flex flex-col '>
                                <h5 className='text-white font-bold md:text-lg text-sm'>AWS Academy Graduate<span className='text-xs text-gray-300'> (AWS)</span></h5>
                                <span className='text-gray-300 font-bold text-xs md:text-base'>AWS Academy Cloud Foundations</span>
                            </div>
                            <div className='w-full flex gap-2 items-center justify-start'>
                                <span className='text-white bg-black/50 font-semibold rounded-lg p-2 md:text-lg text-sm'>Ago/24</span>
                                <span className='text-white bg-black/50 font-semibold rounded-lg p-2 md:text-lg text-sm'>Dez/24</span>
                            </div>
                        </div>
                    </div>
             
            </ExperienceItem>

            <ExperienceItem title='Cursos' subTitle='Courses' >

                <div className='size-full  flex flex-col gap-4 '>
                    <div className='flex-1 flex items-center justify-between text-gray-300 font-semibold sm:text-lg text-sm hover:text-white'>
                        <p>Lógica de Algoritmos em C</p> <span>Ceub</span>
                    </div>
                    <div className='flex-1 flex items-center justify-between text-gray-300 font-semibold sm:text-lg text-sm hover:text-white'>
                        <p>JavaScript</p> <span>OneBitCode</span>
                    </div>
                    <div className='flex-1 flex items-center justify-between text-gray-300 font-semibold sm:text-lg text-sm hover:text-white'>
                        <p>TypeScript</p> <span>OneBitCode</span>
                    </div>
                    <div className='flex-1 flex items-center justify-between text-gray-300 font-semibold sm:text-lg text-sm hover:text-white'>
                        <p>Node</p> <span>OneBitCode</span>
                    </div>
                    <div className='flex-1 flex items-center justify-between text-gray-300 font-semibold sm:text-lg text-sm hover:text-white'>
                        <p>React</p> <span>OneBitCode</span>
                    </div>
                    <div className='flex-1 flex items-center justify-between text-gray-300 font-semibold sm:text-lg text-sm hover:text-white'>
                        <p>Modern React</p> <span>Udemy</span>
                    </div>
                    <div className='flex-1 flex items-center justify-between text-gray-300 font-semibold sm:text-lg text-sm hover:text-white'>
                        <p>Next Js</p> <span>OneBitCode</span>
                    </div>
                    <div className='flex-1 flex items-center justify-between text-gray-300 font-semibold sm:text-lg text-sm hover:text-white'>
                        <p>SQL e MySQL</p> <span>Udemy</span>
                    </div>
                    <div className='flex-1 flex items-center justify-between text-gray-300 font-semibold sm:text-lg text-sm hover:text-white'>
                        <p>Inglês Para Programadores</p> <span>Danki Code</span>
                    </div>
                    <div className='flex-1 flex items-center justify-between text-gray-300 font-semibold sm:text-lg text-sm hover:text-white'>
                        <p>AWS Academy</p> <span>AWS</span>
                    </div>
                </div>
            </ExperienceItem>
        </article>
    )
}
