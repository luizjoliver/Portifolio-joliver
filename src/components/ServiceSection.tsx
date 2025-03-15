import React from 'react'

export default function ServiceSection() {
    return (
        <section className="min-h-[calc(100dvh-7rem)] pt-24 flex flex-col gap-14 items-center justify-center ">
            <div className="w-full flex flex-col items-center gap-1 md:gap-2">
                <h3 className="text-2xl sm:text-3xl md:text-4xl text-white text-center">Serviços</h3>
                <span className="text-lg sm:text-xl md:text-2xl italic text-white/40">Services</span>
            </div>

            <article className="w-full max-w-[1300px] h-full flex flex-col lg:flex-row items-center gap-8 lg:gap-0 bg-white">

                <div className='bg-green-300 size-[80%]'>

                </div>

            </article>
        </section>
    )
}
