import Link from 'next/link'
import { BsWhatsapp } from 'react-icons/bs'
import ExperienceDropDown from './ExperienceDropDown'


export default function AboutSection() {
    return (
        <section className="min-h-[calc(100dvh-7rem)] pt-24 flex flex-col gap-14 items-center justify-center px-4 md:px-6 lg:px-8"  id='sobre'>
           
           <div className="w-full flex flex-col items-center gap-1 md:gap-2">
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-white text-center">Sobre mim</h3>
          <span className="text-lg sm:text-xl md:text-2xl italic text-white/40">About me</span>
        </div>
        
            <article className="w-full max-w-[1300px] flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ">

             
                
                <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start justify-between gap-6 sm:gap-12 text-center lg:text-left text-white">
                    <p className='font-semibold text-3xl sm:text-4xl px-4 lg:px-0'>
                        Eu sou o <span className='text-emerald-400'>Luiz Fellipe</span>, um desenvolvedor web
                    </p>

                    <div className='space-y-6'>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-[90%] sm:max-w-[600px]">
                            Já estou na área há 4 anos, mas comecei a "codar" desde os meus 16 anos de idade. Desenvolvi vários projetos para pequenas empresas, negócios de familiares que se expandiram para o mundo tech e etc.
                        </p>

                        <p className="text-lg sm:text-xl text-gray-300 max-w-[90%] sm:max-w-[600px]">
                            Hoje eu sou um desenvolvedor com conhecimentos full stack, apesar de ter maior experiência com o front-end
                        </p>
                    </div>
                </div>

                
                <div className='w-full lg:w-1/3 flex items-center justify-center lg:pl-8'>
                    <div className='w-full max-w-[400px] flex flex-col  rounded-xl pt-12 '>
                        <ul className='w-full space-y-4'>
                            
<li className='text-white pb-3 border-b border-gray-300'>
                                <span className='text-emerald-400 font-bold pr-3'>Nome:</span>
                                Luiz Fellipe Joliver
                            </li>
                            <li className='text-white pb-3 border-b border-gray-300'>
                                <span className='text-emerald-400 font-bold pr-3'>Email:</span>
                                luizfellipejoliver14@gmail.com
                            </li>
                            <li className='text-white pb-3 border-b border-gray-300'>
                                <span className='text-emerald-400 font-bold pr-3'>Idade:</span>
                                20 anos
                            </li>
                            <li className='text-white pb-3 border-b border-gray-300'>
                                <span className='text-emerald-400 font-bold pr-3'>CNPJ:</span>
                                59.723.997/0001-50
                            </li>
                            <li className='text-white pb-3'>
                                <span className='text-emerald-400 font-bold pr-3'>De:</span>
                                Águas Claras, Distrito federal
                            </li>
                        </ul>
                        <Link className='mt-6 bg-emerald-400 py-3 px-5 rounded-full w-full text-center flex items-center justify-center gap-2 text-black hover:scale-105 hover:opacity-70 transition-transform'
                            href={"https://api.whatsapp.com/send?phone=5561984694842&text=Ol%C3%A1%20%2C%20Luiz%20Fellipe%20Joliver!"}
                            target='_blank'>
                            Enviar WhatsApp <BsWhatsapp/>
                        </Link>
                    </div>
                </div>
            </article>

           
           <ExperienceDropDown/>
        </section>
    )
}

