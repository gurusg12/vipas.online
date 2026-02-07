import {gsap} from "gsap"
import {useGSAP} from "@gsap/react"
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const Hero1 = () => {
    const guru = useRef(null)

    const [things, setthings] = useState(true)

    useGSAP(()=>{
        
        gsap.from(guru.current,{
        y: 50,
        opacity: 0,
        from:50,
        duration: 5,
        ease: "power3.out",

        })
    })

    
    

    const click = () => {
        setthings(it => !it)
    }

    useEffect(() => {
     const intervel = setInterval(() => {
        setthings(it => !it)
        
     }, 5000);
      return ()=> clearInterval(intervel)
    }, [])
    
    return (

        <div>
            {things ? (

                <div ref={guru} className=' flex gap-15 justify-center  items-center relative z-20 w-screen h-screen '>
                    <div className='inset-0 h-screen w-screen bg-slate-900/40  absolute top-0'></div>
                    <img
                        src="https://vipas.online/vipas/img/carousel-1.jpg"
                        alt="bg"
                        className="absolute  inset-0 h-full  -z-20 w-full object-cover"
                    />
                    <div className='text-white text-5xl z-30' onClick={click}>
                        <FaChevronLeft />

                    </div>
                    <div className='flex flex-col justify-center items-center gap-12 z-30'>
                        <h1 className='text-7xl text-center leading-20 font-bold text-white'>Creative & Innovative <br /> Digital Solution</h1>

                        <Link className='border border-white text-white w-fit  text-xl py-3 px-5' to='/about'>
                            About Us
                        </Link>
                    </div>
                    <div className='text-white text-5xl z-30 ' onClick={click}>
                        <FaChevronRight />

                    </div>
                </div>) : (
                <div className='flex gap-15 justify-center  items-center relative z-20 w-screen h-screen'>
                    <div className='inset-0 h-screen w-screen bg-slate-900/40 absolute top-0'></div>
                    <img
                        src="https://vipas.online/vipas/img/carousel-2.jpg"
                        alt="bg"
                        className="absolute  inset-0 h-full  -z-20 w-full object-cover"
                    />
                    <div className='text-white text-5xl z-30' onClick={click}>
                        <FaChevronLeft />

                    </div>
                    <div className='flex flex-col justify-center items-center gap-12 z-30'>
                        <h1 className='text-7xl text-center leading-20 font-bold text-white'>Creative & Innovative <br /> Digital Solution</h1>

                        <Link className='border border-white text-white w-fit  text-xl py-3 px-5' to='/contact'>
                            Contact Us
                        </Link>
                    </div>
                    <div className='text-white text-5xl z-30 ' onClick={click}>
                        <FaChevronRight />

                    </div>
                </div>)

            }

        </div>



    )
}

export default Hero1