"use client"

import { useEffect, useState } from "react";

export default function NavBar({children} :{children:React.ReactNode}) {

    const [haveScrolled, setHaveScrolled] = useState<boolean>(false)

    useEffect(() => {
        function handleScrollBehavior() {

            if (window.scrollY > 0) {
                setHaveScrolled(true)
            } else {
                setHaveScrolled(false)
            }

        }

        window.addEventListener('scroll', handleScrollBehavior, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScrollBehavior, { passive: true } as EventListenerOptions)
        }

    }, [])


    return (
        <nav className='w-full h-28 fixed z-10'
        aria-label="Navegação principal">
            <div className={`flex  items-center w-full h-full justify-center  lg:justify-end p-2 font-thin text-white text-sm sm:text-base gap-4 sm:gap-10 lg:pr-36 `}>
                <ul className={`flex flex-wrap items-center w-auto h-12 justify-center sm:justify-around lg:justify-end p-2 font-thin text-white text-sm sm:text-base gap-4 sm:gap-10   rounded-full transition-all duration-200 ${haveScrolled ? 'bg-slate-50/20 backdrop-blur-lg' : 'bg-transparent'}`}>
                {children}
                </ul>
            </div>
        </nav>
    );
}