import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useState } from 'react'
import Menu from './Menu'

const Nav = () => {
const [isOpen , setIsOpen] = useState(false)    

useGSAP(()=>{
    gsap.from(('.nav h2'),{
        opacity:0,
        duration:1,
    })
    gsap.from(('.nav button'),{
        opacity:0,
        duration:1,
    })
})

let menuOpen = () => {
    setIsOpen(true)
}

  return (
    <>
        <div style={{fontFamily:'Montserrat'}} className='nav flex px-3 z-60 justify-between items-center py-5 w-full'>
            <h2 className='uppercase font-bold text-2xl'><span className='text-[#EA9300]'>Bite</span> bliss</h2>
            
            <button
            onClick={menuOpen}
            className="group cursor-pointer relative px-10 py-5 rounded-lg bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 text-black font-bold tracking-wider uppercase text-sm hover:from-yellow-500 hover:via-amber-600 hover:to-yellow-700 transform hover:rotate-1 transition-all duration-300 ease-out shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.7)] active:scale-90 overflow-hidden before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-amber-400/50 before:transition-all before:duration-300 hover:before:border-amber-300 hover:before:scale-105"
            >
            <span className="flex items-center gap-2 relative z-10">
                <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
                ></path>
                </svg>
                MENU
                <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2"
                >
                <path
                    d="M5 12h14m-7-7l7 7-7 7"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                ></path>
                </svg>
            </span>
            <div
                className="absolute inset-0 rounded-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300 bg-gradient-to-tl from-amber-200/40 via-transparent to-transparent"
            ></div>
            <div
                className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[200%] transition-transform duration-700 ease-out"
            ></div>
            </button>
        </div>

        <Menu isOpen={isOpen} setIsOpen={setIsOpen}/>

    </>
  )
}

export default Nav
