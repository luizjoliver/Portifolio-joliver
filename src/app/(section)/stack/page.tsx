import NavBar from '@/components/NavBar';
import StackComponent from '@/components/StackComponent';
import { firstStack, secondStack, toolStack } from '@/constants/stack';
import Link from 'next/link';


export default function StackPage() {
  return (
    <main className='min-h-[100dvh]  flex flex-col items-center  gap-4'>
      <NavBar>
        <Link href={'/'} className="cursor-pointer font-semibold text-xs sm:text-base hover:bg-black/40 px-2 py-1 rounded-full duration-300" aria-label="button-navbar">Inicio</Link>
        <Link href={'/stack'} className="cursor-pointer font-semibold text-xs sm:text-base hover:bg-black/40 px-2 py-1 rounded-full duration-300" aria-label="button-navbar">Stack</Link>
        <Link href={'/projetos'} className="cursor-pointer font-semibold text-xs sm:text-base hover:bg-black/40 px-2 py-1 rounded-full duration-300" aria-label="button-navbar">Projetos</Link>
      </NavBar>
      <section className='flex-1 size-[100%] lg:size-[70%] mt-24  flex  flex-col gap-4  p-4  '>

        <StackComponent
          stackItens={firstStack}
          title='Minha Stack Primária'
          initialDescription='Minha stack principal, onde possuo domínio avançado e utilizo para a maioria dos meus projetos.'
        />

        <StackComponent
          stackItens={secondStack}
          title='Minha Stack Secundária'
          initialDescription='Minha stack secundária, na qual estou adquirindo mais experiência e aprimorando minhas habilidades.'
        />

        <StackComponent
          stackItens={toolStack}
          title='Ferramentas'
          initialDescription='Conjunto de ferramentas e tecnologias que utilizo para otimizar o desenvolvimento e fluxo de trabalho.'
        />

      </section>
    </main>
  )
}
