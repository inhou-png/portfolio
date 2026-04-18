'use client'
import { useEffect, useRef, useState } from "react";

import Image from 'next/image'

//ICON
import Scroll_dark from '@/icons/dark/scroll-dark-mode.gif'
import Scroll_light from '@/icons/dark/scroll-light-mode.gif'

import Sun_icon from '@/icons/sol-Icon.png'
import Moon_icon from '@/icons/lua-Icon.png'

export default function Fixed({ offset }: any) {
    const scroll: any = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (!scroll.current) return;

            if (window.scrollY > 10) {
                scroll.current.style.display = "none";
            } else {
                scroll.current.style.display = "block";
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='fixed w-full flex justify-center bottom-[1.25rem] left-[1.25rem]'>
            {/* <button className="border-2 border-black/50 bg-white/40 rounded-[1rem] w-[3.8rem] h-[2rem] flex items-center absolute left-0 bottom-0" onClick={butn_mode} >
                <Image alt="Sun" src={Sun_icon} className={`w-[50%] opacity-${motion ? '0' : '1'} right-[${motion ? '0' : '50'}%] transition-all duration-[0.5s] absolute`} />
                <Image alt="Moon" src={Moon_icon} className={`w-[50%] opacity-${motion ? '1' : '0'} right-[${motion ? '0' : '50'}%] transition-all duration-[0.5s] absolute`} />
            </button> */}
            <Image src={Scroll_dark} alt='Scroll dark' ref={scroll} className='w-auto h-[3.5rem] transition-all duration-[0.5s] hidden md:block' />
        </div>
    )
}
