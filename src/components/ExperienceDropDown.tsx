"use client"

import ExperienceItem from './ExperienceItem'

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
                            <h5 className='text-white font-bold text-lg'>Freelancer Frontend</h5>
                            <span className='text-gray-300 font-bold'>JM Store</span>
                        </div>
                        <div className='w-full flex gap-2 items-center justify-start'>
                            <span className='text-white bg-black/50 font-semibold rounded-lg p-2'>dez/24</span>
                            <span className='text-white bg-black/50 font-semibold rounded-lg p-2'>jan/25</span>

                        </div>
                        <p className='text-gray-300 font-semibold text-base'>
                            Responsável pelo desenvolvimento do front-end para a loja de sapatos do
                            meu padrasto, a JM Store. Com o objetivo de
                            expandir para o mercado online, criei uma PWA
                            (Progressive Web App) para viabilizar a venda dos
                            produtos da loja de forma digital.
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
                        <p>Next Js</p> <span>OneBitCode</span>
                    </div>
                    <div className='flex-1 flex items-center justify-between text-gray-300 font-semibold sm:text-lg text-sm hover:text-white'>
                        <p>NLW Connect</p> <span>RocketSeat</span>
                    </div>
                    <div className='flex-1 flex items-center justify-between text-gray-300 font-semibold sm:text-lg text-sm hover:text-white'>
                        <p>NLW Journey</p> <span>RocketSeat</span>
                    </div>
                    <div className='flex-1 flex items-center justify-between text-gray-300 font-semibold sm:text-lg text-sm hover:text-white'>
                        <p>Modern React</p> <span>Udemy</span>
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
