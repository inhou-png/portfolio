import Image from 'next/image'
import Link from 'next/link'

//ICONS
import GitHub from '@/icons/dark/github-icon-dark-mode.svg'
import Linkedin from '@/icons/dark/linkedin-icon-dark-mode.svg'
import Codepen from '@/icons/dark/codepen-icon-dark-mode.svg'
import Email from '@/icons/dark/email.svg'
import Waving_Hand from '@/icons/waving-hand.png'

//TESTE
import IntroGif from '@/images/gigpcdia.gif'
import { useRef, useEffect } from 'react'

export default function Intro() {


    return (
        <div className='min-h-screen flex justify-center items-center overflow-hidden px-0 md:px-20'>
            <div className='text-gray-500 flex md:flex-nowrap flex-wrap md:justify-between justify-center md:w-auto w-[90%] '>
                <div className='order-2 md:order-1 md:text-left text-center mt-10 md:mt-0'>
                    <h1 className='font-extralight whitespace-nowrap text-[4dvw]'>
                        Olá, sou <strong className='text-gray-300 font-semibold'>Fabio Brasil
                            <Image alt='Waving Hand' src={Waving_Hand} className='inline w-[1.5ch] h-[1.5ch] ml-[0.5ch] align-center' />
                        </strong>
                    </h1>
                    <h3 className='text-base text-[1.3dvw] mb-5'>I'm a Full-Stack developer from São Paulo/Brazil.</h3>
                    <div className='flex md:justify-start justify-center'>
                        <Link href="https://github.com/inhou-png" target='_blank'>
                            <Image alt='GitHub' src={GitHub} className='md:w-9 xl:w-10 mr-6 w-8 hover:opacity-70 transition-all cursor-pointer' />
                        </Link>

                        <Link href="https://www.linkedin.com/in/fabio-brasil-540407176/" target='_blank'>
                            <Image alt='Linkedin' src={Linkedin} className='md:w-7 xl:w-8 mr-6 w-6 hover:opacity-70 transition-all cursor-pointer' />
                        </Link>

                        <Link href="mailto:fabiobrasilwork@outlook.com" target='_blank'>
                            <Image alt='Email' src={Email} className='md:w-9 xl:w-10 w-8 hover:opacity-70 transition-all cursor-pointer' />
                        </Link>
                    </div>
                </div>
                <div className='md:w-[35%] xl:w-[40%] w-[90%] order-1 md:order-2'>
                    <Image alt='teste' src={IntroGif} className='max-w-[100%] h-auto' />
                </div>
            </div>
        </div>
    )
}