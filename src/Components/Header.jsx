import React from 'react'
import logo from '../assets/logo-colored.svg'
import { IoChevronDownSharp } from "react-icons/io5";
import { BsPersonFill } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";



const Header = () => {
  return (
    <div className='w-[1440px] h-[86px] flex justify-between items-center '>
        {/* LOGO */}
            <img className='pl-[130px]' src={logo} alt="" />
        {/* SEARCG BAR */}
        <div className='border-[#0D6EFD] border-2 rounded-lg flex justify-between items-center'>
            <input className='w-[421px] h-[40px] p-2 focus:outline-none' type="text"  placeholder='Search'/>
            <a className='w-[145px] h-[40px] pt-[7px] pl-4 border-l-1 border-[#0067FF]' href="">All category </a>
            <IoChevronDownSharp className='text-gray-500'/>
            <button className='w-[100px] h-[40px] bg-[#0067FF] text-white rounded'>Search</button>
        </div>
        {/* HEADER */}
        <div className='flex space-x-8 pr-[50px] text-[#8B96A5] h-[41px] pr-[132px] text-sm'> 
           <div> 
                <BsPersonFill className='w-7 h-7 ml-2'/>
                <a href="">Profile</a>
           </div>
           <div>
               <MdMessage className='w-7 h-7 ml-3'/>
                <a href="">Message</a>
           </div>
           <div>
               <FaHeart className='w-7 h-7 ml-2'/>
                <a href="">Orders</a>
           </div>
           <div>
                <FaCartShopping className='w-7 h-7 ml-2'/>
                <a href="">My cart</a>
           </div>
        </div>
    </div>
  )
}

export default Header