import React from 'react'
import {HiMenuAlt4} from "react-icons/hi"

const Navbar = () => {
  return (
    <div>
        <nav className='bg-[#C6BEB5] w-full h-full flex items-center justify-between py-6 px-8 border-b border-gray-700'>
            <h1 className='text-sm font-NewLight'>Amsterdam, NL</h1>
            <img src='https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/5f7f87c8b81a6e7a214312f0_header.svg' alt='logo' className='h-[20px]'/>
            <HiMenuAlt4 className='text-2xl'/>
        </nav>
    </div>
  )
}

export default Navbar