import React from 'react'
import logo from '../assets/logo-colored.svg'
import btn1 from '../assets/market-button.png'
import btn2 from '../assets/market-button2.png'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import NewsLetter from './NewsLetter'
import usa from '../assets/flags/usa.png'
import { FaAngleUp } from "react-icons/fa";




const Footer = () => {
  return (
    <>
    <NewsLetter/>
    <div className='w-[1440px] h-[324px]'>
        <div className='ml-[129px] mt-[40px] text-[16px] flex mr-[187px]'>
            <div className='w-[276px] h-[157px]'>
                <img className='' src={logo} alt="" />
                <p className='mt-[15px] text-[#505050]'>Best information about the company gies here but now lorem ipsum is</p>
                <div className='flex space-x-2 mt-[16px] text-gray-400'>
                    <FaFacebook className='w-7 h-7'/>
                    <AiFillTwitterCircle className='w-7 h-7'/>
                    <TbBrandLinkedinFilled className='w-7 h-7'/>
                    <FaInstagram className='w-7 h-7'/>
                    <FaYoutube className='w-7 h-7'/>
                </div>
                </div>
                <ul className='ml-[85px]' >
                    <li className='mb-[12px] font-semibold'>About</li>
                    <div className='flex flex-col space-y-1 text-[#8B96A5]'>   
                    <li>About us</li>
                    <li>Find store</li>
                    <li>Categories</li>
                    <li>Blogs</li>
                </div>
            </ul>
            <ul className='ml-[85px]' >
                <li className='mb-[12px] font-semibold'>Partnership</li>
                <div className='flex flex-col space-y-1 text-[#8B96A5]'>   
                <li>Our suppliers</li>
                <li>Join us</li>
                <li>Terms of use</li>
                <li>Privacy policy</li>
                </div>
            </ul>
            <ul className='ml-[85px]' >
                <li className='mb-[12px] font-semibold'>Information</li>
                <div className='flex flex-col space-y-1 text-[#8B96A5]'>   
                <li>Help Center</li>
                <li>Money Refund</li>
                <li>Shipping</li>
                <li>Contact us</li>
                </div>
            </ul>
            <ul className='ml-[85px]' >
                <li className='mb-[12px] font-semibold'>For users</li>
                <div className='flex flex-col space-y-1 text-[#8B96A5]'>   
                <li>Login</li>
                <li>Register</li>
                <li>Settings</li>
                <li>My Orders</li>
                </div>
            </ul>
            <ul className='ml-[85px]' >
                <li className='mb-[12px] font-semibold'>Get app</li>
                <div className='flex flex-col space-y-1 text-[#8B96A5] cursor-pointer'>   
                <li><img src={btn1} alt="" /></li>
                <li><img src={btn2} alt="" /></li>
                </div>
            </ul>
        </div>

        <div className='bg-[#EFF2F4] h-[68px] flex items-center justify-between pl-[129px] mt-[59px]'>
             © 2025 Ecommerce.
             <div className='mr-[136px] flex'>
                <img className='w-[29px] h-[25px]' src={usa} alt="" />English<FaAngleUp className='mt-1 ml-1'/> 
             </div>
        </div>
    </div>
    </>
  )
}

export default Footer