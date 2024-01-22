import React from 'react'
import { IoSearchOutline } from "react-icons/io5";


function Navbar() {
  return (
    
    <div className='bg-[rgba(0,0,0,0.92)] py-2.5 fixed w-full'>
        <div className='max-w-[980px] mx-auto'>
            <ul className='flex items-center justify-between  pl-[calc(max(22px, env(safe-area-inset-left)))] pr-[calc(max(22px, env(safe-area-inset-right)))]'>
                <li>
                    <a href="#"><img className='w-[115px]' src="https://developer.apple.com/assets/elements/icons/brandmark/apple-developer-brandmark-i.svg" alt="" /></a>
                </li>
                <li><a href="#" className='text-[#B1B1B1] hover:text-white duration-300'>News</a></li>
                <li><a href="#" className='text-[#B1B1B1] hover:text-white duration-300'>Discover</a></li>
                <li><a href="#" className='text-[#B1B1B1] hover:text-white duration-300'>Design</a></li>
                <li><a href="#" className='text-[#B1B1B1] hover:text-white duration-300'>Develop</a></li>
                <li><a href="#" className='text-[#B1B1B1] hover:text-white duration-300'>Distribute</a></li>
                <li><a href="#" className='text-[#B1B1B1] hover:text-white duration-300'>Support</a></li>
                <li><a href="#" className='text-[#B1B1B1] hover:text-white duration-300'>Account</a></li>
                <li><a href="#" className='text-[#B1B1B1] hover:text-white duration-300'><IoSearchOutline/></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar