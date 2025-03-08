import React from 'react'
import flag from '../assets/icon.png'
import { IoChevronDownSharp } from "react-icons/io5";
import { HiMiniBars3 } from "react-icons/hi2";


const Navbar = () => {
  return (
    <>
    <hr className='text-[#8B96A5]'/>

      <div className='w-[1440px] h-[56px] flex justify-between items-center '>
        <ul className='flex w-[620px] h-[24px] ml-[130px] gap-x-4 '>
                <li className='flex gap-2 items-center'><HiMiniBars3 />All Category</li>
                <li>Hot offers</li>
                <li>Hot offers</li>
                <li>Gift boxes</li>
                <li>Project</li>
                <li>Menu item</li>
                <li className='flex gap-2'>Help <IoChevronDownSharp className='text-[#8B96A5] mt-1'/></li>
        </ul>
        <div className='flex space-x-9 ml-auto mr-[128px]'>
            English, USD <IoChevronDownSharp className='text-[#8B96A5] mt-1 ml-1'/>
            Ship to <img className='w-[22px] h-[16px] mt-1 mx-2' src={flag} alt="" /> <IoChevronDownSharp className='text-[#8B96A5] mt-1 '/>
        </div>
    </div>

    <hr className='text-[#8B96A5]'/>
    </>
  )
}

export default Navbar