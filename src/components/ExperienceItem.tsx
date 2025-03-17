"use client"

import React, { useState } from 'react'
import { RiArrowDropRightFill } from 'react-icons/ri';

type ExperienceItemPropsType = {
    children: React.ReactNode;
    title: string;
    subTitle: string;
}

export default function ExperienceItem({ children, title, subTitle }: ExperienceItemPropsType) {
    const [openDropDown, setOpenDropDown] = useState(false)

    function handleClickDropDown() {
        setOpenDropDown((state) => !state)
    }

    return (
        <>
            <div className={`w-full flex gap-4 items-center ${openDropDown ? 'justify-between' : 'justify-start'} cursor-pointer`} onClick={handleClickDropDown}>
                <p className='font-semibold text-white text-xl'>{title}/ <span className='text-gray-300'>{subTitle}</span></p>
                <RiArrowDropRightFill className={`size-10 text-white transition-transform duration-300 ${openDropDown ? 'rotate-90' : ''}`} />
            </div>

            {openDropDown ? (
                <div className='w-full h-auto flex flex-wrap md:flex-nowrap  gap-6'>
                    {children}
                </div>
            ) : null}
        </>
    )
}