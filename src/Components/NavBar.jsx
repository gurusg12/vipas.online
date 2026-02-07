import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center w-full h-35 text-white absolute z-30 top-0 left-0 bg-slate-900/40'>
            <div> 
                <img src="https://vipas.online/vipas/img/vipas.png" alt="Logo" className='h-30 w-fit' />
            </div>
            <div className='flex justify-around text-2xl font-mono items-center w-1/2   '>
                <NavLink className='h-10 hover:border-b-3 hover:text-sky-500 hover:border-b-sky-500 transition-all duration-500 ease-in-out' to="/home">Home</NavLink>
                <NavLink className='h-10 hover:border-b-3 transition-all duration-500 ease-in-out hover:text-sky-500 hover:border-b-sky-500' to="/about">About</NavLink>
                <NavLink className='h-10 hover:border-b-3 transition-all duration-500 ease-in-out hover:text-sky-500 hover:border-b-sky-500' to="/contact">Contact</NavLink>
                <NavLink className='h-10 hover:border-b-3 transition-all duration-500 ease-in-out hover:text-sky-500 hover:border-b-sky-500' to="/ourWebsite">Our_Website</NavLink>
                <NavLink className='h-10 hover:border-b-3 transition-all duration-500 ease-in-out hover:text-sky-500 hover:border-b-sky-500' to="/service">Services</NavLink>

            </div>
        </div>
    )
}

export default NavBar