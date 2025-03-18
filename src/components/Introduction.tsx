import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';

export default function Introduction() {
  return (
    <section className="min-h-[calc(100dvh-7rem)] pt-24 flex items-center justify-center px-4 md:px-6 lg:px-8" id='inicio'>
      <article className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center justify-between gap-20 md:gap-32 lg:gap-40">
        
        {/* Imagem */}
        <figure className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[450px] flex items-center justify-center">
          <Image
            src={'/photo.jpg'}
            alt='Luiz Fellipe'
            width={450}
            height={450}
            className="rounded-3xl w-full h-auto"
          />
        </figure>

        {/* Texto */}
        <div className="w-full flex flex-col items-center lg:items-start justify-between h-full gap-6 sm:gap-12 text-center lg:text-left text-white">
          <div className='flex flex-col gap-2'>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
              Olá, Sou o Luiz Fellipe Joliver e esse é meu Portfólio.
            </h1>
            <span className="italic text-lg sm:text-xl md:text-2xl text-emerald-400">
              Desenvolvedor 
            </span>
          </div>

          <p className="max-w-[90%] sm:max-w-[600px] text-sm sm:text-base md:text-xl font-base">
            Desenvolvedor , com uma forte paixão por tecnologia e inovação.
            Ao longo da minha formação, adquiri sólidos conhecimentos tanto no front-end quanto no back-end.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a className='bg-slate-50/10 rounded-full p-3 cursor-pointer hover:scale-110 flex gap-2 items-center justify-center' href={'https://drive.google.com/uc?export=download&id=1YFVjP4TqhCsZ-HeYAPTStBbEtaHC_5io'} >
            <span>Currículo</span>
              <MdOutlineFileDownload className="size-7 sm:size-8.5"/>  
            </a>
            <Link className='bg-slate-50/10 rounded-full p-3 cursor-pointer hover:scale-110' href={'https://github.com/luizjoliver'} target='_blank'>
              <FaGithub className="size-7  sm:size-8.5"/>  
            </Link>
            <Link className='bg-slate-50/10 rounded-full p-3 cursor-pointer hover:scale-110' href={'https://www.linkedin.com/in/luiz-fellipe-joliver/'} target='_blank'>
              <FaLinkedin className="size-7  sm:size-8.5"/>  
            </Link>
          </div>
        </div>

      </article>
    </section>
  );
}