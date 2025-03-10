import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import watch from '../assets/8.jpg'
import mobile from '../assets/3.jpg'
import headphone from '../assets/5.jpg'
import camera from '../assets/6.jpg'
import laptop from '../assets/7.jpg'



const Home = () => {
  return (
    <div>

                {/* HERO SECTION */}
      <div className='w-[1180px] h-[400px] mx-[130px] border-2 border-[#E0E0E0] rounded-lg flex'>

          {/* menu */}
        <div className='w-[250px] h-[360px] my-[20px] '>
          <ul className='space-y-4 text-[#505050] ml-[14px]'>
            <li className='font-semibold bg-[#E5F1FF] rounded-lg py-1 px-2'>Automobiles</li>
            <li className='px-2'>Clothes and wear</li>
            <li className='px-2'>Home interiors</li>
            <li className='px-2'>Computer and tech</li>
            <li className='px-2'>Tools, equipments</li>
            <li className='px-2'>Sports and outdoor</li>
            <li className='px-2'>Animal and pets</li>
            <li className='px-2'>Machinery tools</li>
            <li className='px-2'>More category</li>
          </ul>
        </div>

        {/*banner image */}
        <div className='w-[665px] h-[360px] bg-[url(./assets/main11.png)] bg-cover mt-[17px] mb-[10px] ml-[13px]'>
          <div className='mt-[53px] ml-[45px] leading-9'>
            <p className='text-[28px] ml-[1px]'>Latest trending</p>
            <p className='font-bold text-[32px] '>Electronic items</p>
            <button className='bg-white text-black mt-[17px]  px-4 rounded-lg'>Learn more</button>
          </div>
        </div>

        {/* cards */}
        <div className='w-[200px] h-[150px] mx-[20px] my-[16px]'>
            <div className='bg-[#E3F0FF] rounded-lg flex flex-col h-[150px] py-3 px-2 gap-2'>
              <div className='flex'>
                <FaUserCircle className='text-[#C7E1FF] w-[44px] h-[44px] '/>
                <p className='ml-[9px] '>Hi, user  let’s get stated</p>
              </div>
              <button className='bg-[#0067FF] text-white rounded-lg p-1 cursor-pointer'>Join now</button>
              <button className='text-[#0067FF] bg-white rounded-lg border-1 border-[#E0E0E0] p-1 cursor-pointer'>Log in</button>
            </div>
            <div className='h-[95px] bg-[#F38332] rounded-lg text-white p-4 text-[16px] my-[10px]'>
                <p>Get US $10 off with a new supplier</p>
            </div>
            <div className='h-[95px] bg-[#55BDC3] rounded-lg text-white p-4 text-[16px]'>
                <p>Send quotes with supplier preferences</p>
            </div>
        </div>     
      </div>

                {/* DEALS AND OFFERS */}
      <div className='w-[1180px] h-[240px] mx-[130px] my-[30px] border-2 border-[#E0E0E0] rounded-lg flex'>
          <div className='mt-[25px] ml-[20px] leading-5 mr-[60px]'>
            <p className='font-semibold text-[20px]'>Deals and offers</p>
            <p className='text-[#8B96A5]'>Hygiene equipments</p>
            <div className='flex mt-[17px] gap-[6px]'>
              <div className='bg-[#606060] text-[#FFFFFF] w-[45px] h-[50px] rounded text-center p-1 leading-5'><span className='font-bold'>04</span> Days</div>
              <div className='bg-[#606060] text-[#FFFFFF] w-[45px] h-[50px] rounded text-center p-1 leading-5'><span className='font-bold'>04</span> Days</div>
              <div className='bg-[#606060] text-[#FFFFFF] w-[45px] h-[50px] rounded text-center p-1 leading-5'><span className='font-bold'>04</span> Days</div>
              <div className='bg-[#606060] text-[#FFFFFF] w-[45px] h-[50px] rounded text-center p-1 leading-5'><span className='font-bold'>04</span> Days</div>
            </div>
          </div>
          <div className='w-[179px] border-r-1 border-l-1 border-[#E0E0E0] flex flex-col items-center justify-center'>
            <img className='w-[140px] h-[140px]' src={watch} alt="" />
            <p>Smart watches</p>
            <p className='bg-red-200 text-red-500 rounded-2xl py-1 px-2 mt-[7px]'>-25%</p>
          </div>
          <div className='w-[179px] border-r-1 border-[#E0E0E0] flex flex-col items-center justify-center'>
            <img className='w-[140px] h-[140px]' src={laptop} alt="" />
            <p>Laptops</p>
            <p className='bg-red-200 text-red-500 rounded-2xl py-1 px-2 mt-[7px]'>-14%</p>
          </div>
          <div className='w-[179px] border-r-1 border-[#E0E0E0] flex flex-col items-center justify-center'>
            <img className='w-[140px] h-[140px]' src={camera} alt="" />
            <p>GoPro cameras</p>
            <p className='bg-red-200 text-red-500 rounded-2xl py-1 px-2 mt-[7px]'>-40%</p>
          </div>
          <div className='w-[179px] border-r-1 border-[#E0E0E0] flex flex-col items-center justify-center'>
            <img className='w-[140px] h-[140px]' src={headphone} alt="" />
            <p>Headphones</p>
            <p className='bg-red-200 text-red-500 rounded-2xl py-1 px-2 mt-[7px]'>-25%</p>
          </div>
          <div className='w-[179px] flex flex-col items-center justify-center'>
            <img className='w-[140px] h-[140px]' src={mobile} alt="" />
            <p>Mi Mobiles</p>
            <p className='bg-red-200 text-red-500 rounded-2xl py-1 px-2 mt-[7px]'>-25%</p>
          </div>
      </div>

                {/* HOME AND OUTDOORS */}
      <div className='w-[1180px] h-[257px] mx-[130px] my-[30px] border-2 border-[#E0E0E0] rounded-lg flex'>

      </div>












    </div>  
  )
}

export default Home