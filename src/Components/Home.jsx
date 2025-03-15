import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineInventory2 } from "react-icons/md";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { IoChevronDownSharp } from "react-icons/io5";
import watch from '../assets/8.jpg'
import mobile from '../assets/3.jpg'
import headphone from '../assets/5.jpg'
import camera from '../assets/6.jpg'
import laptop from '../assets/7.jpg'
import chair from '../assets/interior/1.jpg'
import sofa from '../assets/interior/6.jpg'
import mixer from '../assets/interior/9.jpg'
import blenders from '../assets/interior/8.jpg'
import washing from '../assets/interior/10.jpg'
import dishes from '../assets/interior/5.jpg'
import smart from '../assets/interior/11.jpg'
import home from '../assets/interior/7.jpg'
import plant from '../assets/interior/4.jpg'
import Tshirt from '../assets/cloth/1.jpg'
import shirt from '../assets/cloth/2.jpg'
import jacket from '../assets/cloth/3.jpg'
import jeans from '../assets/cloth/4.jpg'
import bag from '../assets/cloth/5.jpg'
import wallet from '../assets/cloth/6.jpg'
import coat from '../assets/cloth/7.jpg'
import img104 from '../assets/image104.png'
import img106 from '../assets/image106.png'
import img107 from '../assets/image107.png'
import img108 from '../assets/image108.png'
import dubai from '../assets/flags/dubai.png'
import itlay from '../assets/flags/itlay.png'
import usa from '../assets/flags/usa.png'
import russia from '../assets/flags/russia.png'
import germany from '../assets/flags/germany.png'
import scotland from '../assets/flags/scotland.png'
import france from '../assets/flags/france.png'
import england from '../assets/flags/england.png'
import china from '../assets/flags/china.png'
import australia from '../assets/flags/australia.png'



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
              <div className='bg-[#606060] text-[#FFFFFF] w-[45px] h-[50px] rounded text-center p-1 leading-5'><span className='font-bold'>13</span> Hour</div>
              <div className='bg-[#606060] text-[#FFFFFF] w-[45px] h-[50px] rounded text-center p-1 leading-5'><span className='font-bold'>34</span> Min</div>
              <div className='bg-[#606060] text-[#FFFFFF] w-[45px] h-[50px] rounded text-center p-1 leading-5'><span className='font-bold'>56</span> Sec</div>
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
          <div className='w-[280px] leading-5 bg-[url(./assets/image92.png)] bg-cover'>
              <p className='w-[130px] font-semibold text-[20px] mt-[20px] ml-[20px]'>Home and outdoor</p>
              <button className='bg-white font-semibold mt-[18px] ml-[18px] py-2 px-3 rounded-lg shadow'>Source now</button>
          </div>
          <div className='grid grid-cols-4'>
                <div className='w-[223px] h-[127px] border-r-2 border-[#E0E0E0] border-b-2'>     
                    <p className='leading-10  ml-[16px]'>Soft chairs</p>
                    <div className='flex'>
                      <p className='text-[#8B96A5] w-[98px] ml-[15px] text-[13px]'>From USD 19</p>
                      <img className='w-[82px] h-[82px] ml-[25px] ' src={chair} alt="" />
                    </div>
                </div>
                <div className='w-[223px] h-[127px] border-r-2 border-[#E0E0E0] border-b-2'>     
                    <p className='leading-10  ml-[16px]'>Lamps</p>
                    <div className='flex'>
                      <p className='text-[#8B96A5] w-[98px] ml-[15px] text-[13px]'>From USD 19</p>
                      <img className='w-[82px] h-[82px] ml-[25px] ' src={sofa} alt="" />
                    </div>
                </div>
                <div className='w-[223px] h-[127px] border-r-2 border-[#E0E0E0] border-b-2'>     
                    <p className='leading-10  ml-[16px]'>Kitchen & dishes</p>
                    <div className='flex'>
                      <p className='text-[#8B96A5] w-[98px] ml-[15px] text-[13px]'>From USD 19</p>
                      <img className='w-[82px] h-[82px] ml-[25px] ' src={dishes} alt="" />
                    </div>
                </div>
                <div className='w-[223px] h-[127px] border-[#E0E0E0] ml-[2px] border-b-2'>     
                    <p className='leading-10  ml-[16px]'>Smart watches</p>
                    <div className='flex'>
                      <p className='text-[#8B96A5] w-[98px] ml-[15px] text-[13px]'>From USD 19</p>
                      <img className='w-[82px] h-[82px] ml-[25px] ' src={smart} alt="" />
                    </div>
                </div>
                <div className='w-[223px] h-[127px] border-r-2 border-[#E0E0E0]'>     
                    <p className='leading-10  ml-[16px]'>Kitchen mixer</p>
                    <div className='flex'>
                      <p className='text-[#8B96A5] w-[98px] ml-[15px] text-[13px]'>From USD 19</p>
                      <img className='w-[82px] h-[82px] ml-[25px] ' src={mixer} alt="" />
                    </div>
                </div>
                <div className='w-[223px] h-[127px] border-r-2 border-[#E0E0E0]'>     
                    <p className='leading-10  ml-[16px]'>Blenders</p>
                    <div className='flex'>
                      <p className='text-[#8B96A5] w-[98px] ml-[15px] text-[13px]'>From USD 19</p>
                      <img className='w-[82px] h-[82px] ml-[25px] ' src={blenders} alt="" />
                    </div>
                </div>
                <div className='w-[223px] h-[127px] border-r-2 border-[#E0E0E0]'>     
                    <p className='leading-10  ml-[16px]'>Home Applience</p>
                    <div className='flex'>
                      <p className='text-[#8B96A5] w-[98px] ml-[15px] text-[13px]'>From USD 19</p>
                      <img className='w-[82px] h-[82px] ml-[25px] ' src={home} alt="" />
                    </div>
                </div>
                <div className='w-[223px] h-[127px]'>     
                    <p className='leading-10  ml-[16px]'>Plants</p>
                    <div className='flex'>
                      <p className='text-[#8B96A5] w-[98px] ml-[15px] text-[13px]'>From USD 19</p>
                      <img className='w-[82px] h-[82px] ml-[25px] ' src={plant} alt="" />
                    </div>
                </div>
    
          </div>
      </div>
                
                {/*ELECTRONICS AND GADGETS  */}
      <div className='w-[1180px] h-[257px] mx-[130px] my-[30px] border-2 border-[#E0E0E0] rounded-lg flex'>
          <div className='w-[280px] leading-6 bg-[url(./assets/image98.png)] bg-cover'>
              <p className='w-[130px] font-semibold text-[20px] mt-[20px] ml-[20px]'>Consumer electronics and gadgets</p>
              <button className='bg-white font-semibold mt-[18px] ml-[18px] py-2 px-3 rounded-lg shadow'>Source now</button>
          </div>
          <div className='grid grid-cols-4'>
                <div className='w-[223px] h-[127px] border-r-2 border-[#E0E0E0] border-b-2'>     
                    <p className='leading-10  ml-[16px]'>Smart watches</p>
                    <div className='flex'>
                      <p className='text-[#8B96A5] w-[98px] ml-[15px] text-[13px]'>From USD 19</p>
                      <img className='w-[82px] h-[82px] ml-[25px] ' src={watch} alt="" />
                    </div>
                </div>
                <div className='w-[223px] h-[127px] border-r-2 border-[#E0E0E0] border-b-2'>     
                    <p className='leading-10  ml-[16px]'>Cameras</p>
                    <div className='flex'>
                      <p className='text-[#8B96A5] w-[98px] ml-[15px] text-[13px]'>From USD 19</p>
                      <img className='w-[82px] h-[82px] ml-[25px] ' src={camera} alt="" />
                    </div>
                </div>
                <div className='w-[223px] h-[127px] border-r-2 border-[#E0E0E0] border-b-2'>     
                    <p className='leading-10  ml-[16px]'>Headphones</p>
                    <div className='flex'>
                      <p className='text-[#8B96A5] w-[98px] ml-[15px] text-[13px]'>From USD 19</p>
                      <img className='w-[82px] h-[82px] ml-[25px] ' src={headphone} alt="" />
                    </div>
                </div>
                <div className='w-[223px] h-[127px] border-[#E0E0E0] ml-[2px] border-b-2'>     
                    <p className='leading-10  ml-[16px]'>Washing Machines</p>
                    <div className='flex'>
                      <p className='text-[#8B96A5] w-[98px] ml-[15px] text-[13px]'>From USD 19</p>
                      <img className='w-[82px] h-[82px] ml-[25px] ' src={washing} alt="" />
                    </div>
                </div>
                <div className='w-[223px] h-[127px] border-r-2 border-[#E0E0E0]'>     
                    <p className='leading-10  ml-[16px]'>Kitchen mixer</p>
                    <div className='flex'>
                      <p className='text-[#8B96A5] w-[98px] ml-[15px] text-[13px]'>From USD 19</p>
                      <img className='w-[82px] h-[82px] ml-[25px] ' src={mixer} alt="" />
                    </div>
                </div>
                <div className='w-[223px] h-[127px] border-r-2 border-[#E0E0E0]'>     
                    <p className='leading-10  ml-[16px]'>Headphones</p>
                    <div className='flex'>
                      <p className='text-[#8B96A5] w-[98px] ml-[15px] text-[13px]'>From USD 19</p>
                      <img className='w-[82px] h-[82px] ml-[25px] ' src={headphone} alt="" />
                    </div>
                </div>
                <div className='w-[223px] h-[127px] border-r-2 border-[#E0E0E0]'>     
                    <p className='leading-10  ml-[16px]'>Laptops</p>
                    <div className='flex'>
                      <p className='text-[#8B96A5] w-[98px] ml-[15px] text-[13px]'>From USD 19</p>
                      <img className='w-[82px] h-[82px] ml-[25px] ' src={laptop} alt="" />
                    </div>
                </div>
                <div className='w-[223px] h-[127px]'>     
                    <p className='leading-10  ml-[16px]'>Mobiles</p>
                    <div className='flex'>
                      <p className='text-[#8B96A5] w-[98px] ml-[15px] text-[13px]'>From USD 19</p>
                      <img className='w-[82px] h-[82px] ml-[25px] ' src={mobile} alt="" />
                    </div>
                </div>
    
          </div>
      </div>

                {/*INQUIRY SECTION */}
      <div className='w-[1180px] h-[420px] mx-[130px] my-[30px] flex justify-between rounded-lg bg-linear-to-r from-blue-500 to-cyan-500 '>
        <div className='flex flex-col w-[440px] mt-[30px] ml-[40px]'>
          <p className='font-semibold text-[32px] text-white leading-9'>An easy way to send requests to all suppliers</p>
          <p className='text-white mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <div className='w-[491px] h-[346px] bg-white rounded flex flex-col gap-4 mt-[30px] mr-[30px] p-4'>
          <p className='text-[20px] font-semibold'>Send quote to suppliers</p>
          <p className='border-2 border-[#E0E0E0] rounded-lg p-2'>What item you need?</p>
          <p className='border-2 border-[#E0E0E0] rounded-lg text-[#8B96A5] h-[73px] p-2'>Type more details</p>
          <div className='flex gap-2'>
            <p className='border-2 border-[#E0E0E0] rounded-lg p-2 w-[206px]'>Quantity</p>
            <p className='border-2 border-[#E0E0E0] rounded-lg p-2 w-[111px] flex gap-12'>Pcs<IoChevronDownSharp className='w-5 h-5 mt-1 text-[#8B96A5]'/></p>
          </div>
          <button className='bg-[#127FFF] text-white py-2 px-3 rounded'>Send inquiry</button>
        </div>
      </div>

                {/* RECOMMENDED ITEMS */}
      <div className='w-[1180px] h-[696px] mx-[130px] my-[30px]'>
        <p className='font-semibold text-[24px]'>Recommended items</p>

        <div className='grid grid-cols-5 gap-4 mt-[24px]'>
          <div className='border-2 border-[#E0E0E0] rounded-lg w-[220px] h-[310px] flex flex-col items-center justify-center'>
            <img className='w-[200px] h-[200px]' src={Tshirt} alt="" />
            <div className='p-4'>
              <p className='font-medium'>$10.30</p>
              <p className='text-[#8B96A5] text-[16px] w-[186px] h-[53px]'>T-shirts with multiple colors, for men</p>          
            </div>
          </div>
          <div className='border-2 border-[#E0E0E0] rounded-lg w-[220px] h-[310px] flex flex-col items-center justify-center'>
            <img className='w-[200px] h-[200px]' src={jeans} alt="" />
            <div className='p-4'>
              <p className='font-medium'>$10.30</p>
              <p className='text-[#8B96A5] text-[16px] w-[186px] h-[53px]'>Jeans shorts for men blue color</p>          
            </div>
          </div>
          <div className='border-2 border-[#E0E0E0] rounded-lg w-[220px] h-[310px] flex flex-col items-center justify-center'>
            <img className='w-[200px] h-[200px]' src={jacket} alt="" />
            <div className='p-4'>
              <p className='font-medium'>$10.30</p>
              <p className='text-[#8B96A5] text-[16px] w-[186px] h-[53px]'>Brown winter coat medium size</p>          
            </div>
          </div>
          <div className='border-2 border-[#E0E0E0] rounded-lg w-[220px] h-[310px] flex flex-col items-center justify-center'>
            <img className='w-[200px] h-[200px]' src={bag} alt="" />
            <div className='p-4'>
              <p className='font-medium'>$10.30</p>
              <p className='text-[#8B96A5] text-[16px] w-[186px] h-[53px]'>Jeans bag for travel for men</p>          
            </div>
          </div>
          <div className='border-2 border-[#E0E0E0] rounded-lg w-[220px] h-[310px] flex flex-col items-center justify-center'>
            <img className='w-[200px] h-[200px]' src={wallet} alt="" />
            <div className='p-4'>
              <p className='font-medium'>$10.30</p>
              <p className='text-[#8B96A5] text-[16px] w-[186px] h-[53px]'>Blue wallet for men leather metarfial</p>          
            </div>
          </div>
          <div className='border-2 border-[#E0E0E0] rounded-lg w-[220px] h-[310px] flex flex-col items-center justify-center'>
            <img className='w-[200px] h-[200px]' src={camera} alt="" />
            <div className='p-4'>
              <p className='font-medium'>$10.30</p>
              <p className='text-[#8B96A5] text-[16px] w-[186px] h-[53px]'>Canon camera  black, 100x zoom</p>          
            </div>
          </div>
          <div className='border-2 border-[#E0E0E0] rounded-lg w-[220px] h-[310px] flex flex-col items-center justify-center'>
            <img className='w-[200px] h-[200px]' src={watch} alt="" />
            <div className='p-4'>
              <p className='font-medium'>$10.30</p>
              <p className='text-[#8B96A5] text-[16px] w-[186px] h-[53px]'>Smartwatch silver color modern</p>          
            </div>
          </div>
          <div className='border-2 border-[#E0E0E0] rounded-lg w-[220px] h-[310px] flex flex-col items-center justify-center'>
            <img className='w-[200px] h-[200px]' src={coat} alt="" />
            <div className='p-4'>
              <p className='font-medium'>$10.30</p>
              <p className='text-[#8B96A5] text-[16px] w-[186px] h-[53px]'>T-shirts with multiple colors, for men</p>          
            </div>
          </div>
          <div className='border-2 border-[#E0E0E0] rounded-lg w-[220px] h-[310px] flex flex-col items-center justify-center'>
            <img className='w-[200px] h-[200px]' src={headphone} alt="" />
            <div className='p-4'>
              <p className='font-medium'>$10.30</p>
              <p className='text-[#8B96A5] text-[16px] w-[186px] h-[53px]'>T-shirts with multiple colors, for men</p>          
            </div>
          </div>
          <div className='border-2 border-[#E0E0E0] rounded-lg w-[220px] h-[310px] flex flex-col items-center justify-center'>
            <img className='w-[200px] h-[200px]' src={Tshirt} alt="" />
            <div className='p-4'>
              <p className='font-medium'>$10.30</p>
              <p className='text-[#8B96A5] text-[16px] w-[186px] h-[53px]'>T-shirts with multiple colors, for men</p>          
            </div>
          </div>
        </div>
      </div>

                {/*OUR EXTRA SERVICES  */}
      <div className='w-[1180px] h-[256px] mx-[130px] my-[30px] '>
        <p className='font-semibold text-[24px]'>Our extra services</p>
        <div className='grid grid-cols-4 gap-4 mt-[20px]'>
            <div className='w-[280px] h-[200px] border-2 border-[#E0E0E0] rounded-lg'>
              <img className='h-[120px] ' src={img108} alt="" />
              <div className='backdrop-opacity-95 w-[55px] h-[55px] rounded-full bg-[#D1E7FF] border-2 border-white flex items-center justify-center ml-50 mt-[-30px] over'>
                <FaSearch className='w-[24px] h-[24px]'/>
              </div>
              <p className='font-medium mt-[-12px] ml-[20px] w-[150px] '>Source from Industry Hubs</p>
            </div>
            <div className='w-[280px] h-[200px] border-2 border-[#E0E0E0] rounded-lg'>
              <img className='h-[120px] ' src={img104} alt="" />
              <div className='backdrop-opacity-95 w-[55px] h-[55px] rounded-full bg-[#D1E7FF] border-2 border-white flex items-center justify-center ml-50 mt-[-30px] over'>
                <MdOutlineInventory2 className='w-[24px] h-[24px]'/>
              </div>
              <p className='font-medium mt-[-12px] ml-[20px] w-[150px] '>Source from Industry Hubs</p>
            </div>
            <div className='w-[280px] h-[200px] border-2 border-[#E0E0E0] rounded-lg'>
              <img className='h-[120px] ' src={img106} alt="" />
              <div className='backdrop-opacity-95 w-[55px] h-[55px] rounded-full bg-[#D1E7FF] border-2 border-white flex items-center justify-center ml-50 mt-[-30px] over'>
                <IoMdArrowRoundForward className='w-[24px] h-[24px]'/>
              </div>
              <p className='font-medium mt-[-12px] ml-[20px] w-[150px] '>Source from Industry Hubs</p>
            </div>
            <div className='w-[280px] h-[200px] border-2 border-[#E0E0E0] rounded-lg'>
              <img className='h-[120px] ' src={img107} alt="" />
              <div className='backdrop-opacity-95 w-[55px] h-[55px] rounded-full bg-[#D1E7FF] border-2 border-white flex items-center justify-center ml-50 mt-[-30px] over'>
                <MdOutlineSecurity className='w-[24px] h-[24px]'/>
              </div>
              <p className='font-medium mt-[-12px] ml-[20px] w-[150px] '>Source from Industry Hubs</p>
            </div>
        </div>
      </div>

                {/*SUPPLIERS BY REGION  */}
      <div className='w-[1177px] h-[138px] mx-[130px] mt-[30px] mb-[46px]'>
        <p className='font-semibold text-[24px]'>Suppliers by region</p>
        <div className='grid grid-cols-5 gap-4 mt-[24px]'>

           <div className='w-[221px] h-[36px]'>
              <div className='flex items-center justify-items-start gap-[11px]'>
                <img className='w-[40px] h-[35px]' src={dubai} alt="" />
                <div className='leading-5'>
                  <p className=''>Arabic Emirates</p>
                  <p className='text-[13px] text-[#8B96A5]'>shopname.ae</p>
                </div>
              </div>
           </div>
           <div className='w-[221px] h-[36px]'>
              <div className='flex items-center justify-items-start gap-[11px]'>
                <img className='w-[40px] h-[35px]' src={australia} alt="" />
                <div className='leading-5'>
                  <p className=''>Australia</p>
                  <p className='text-[13px] text-[#8B96A5]'>shopname.ae</p>
                </div>
              </div>
           </div>
           <div className='w-[221px] h-[36px]'>
              <div className='flex items-center justify-items-start gap-[11px]'>
                <img className='w-[40px] h-[35px]' src={usa} alt="" />
                <div className='leading-5'>
                  <p className=''>United States</p>
                  <p className='text-[13px] text-[#8B96A5]'>shopname.ae</p>
                </div>
              </div>
           </div>
           <div className='w-[221px] h-[36px]'>
              <div className='flex items-center justify-items-start gap-[11px]'>
                <img className='w-[40px] h-[35px]' src={russia} alt="" />
                <div className='leading-5'>
                  <p className=''>Russia</p>
                  <p className='text-[13px] text-[#8B96A5]'>shopname.ru</p>
                </div>
              </div>
           </div>
           <div className='w-[221px] h-[36px]'>
              <div className='flex items-center justify-items-start gap-[11px]'>
                <img className='w-[40px] h-[35px]' src={itlay} alt="" />
                <div className='leading-5'>
                  <p className=''>Italy</p>
                  <p className='text-[13px] text-[#8B96A5]'>shopname.it</p>
                </div>
              </div>
           </div>
           <div className='w-[221px] h-[36px]'>
              <div className='flex items-center justify-items-start gap-[11px]'>
                <img className='w-[40px] h-[35px]' src={france} alt="" />
                <div className='leading-5'>
                  <p className=''>France</p>
                  <p className='text-[13px] text-[#8B96A5]'>shopname.fr</p>
                </div>
              </div>
           </div>
           <div className='w-[221px] h-[36px]'>
              <div className='flex items-center justify-items-start gap-[11px]'>
                <img className='w-[40px] h-[35px]' src={scotland} alt="" />
                <div className='leading-5'>
                  <p className=''>Scotland</p>
                  <p className='text-[13px] text-[#8B96A5]'>shopname.ae</p>
                </div>
              </div>
           </div>
           <div className='w-[221px] h-[36px]'>
              <div className='flex items-center justify-items-start gap-[11px]'>
                <img className='w-[40px] h-[35px]' src={china} alt="" />
                <div className='leading-5'>
                  <p className=''>China</p>
                  <p className='text-[13px] text-[#8B96A5]'>shopname.ae</p>
                </div>
              </div>
           </div>
           <div className='w-[221px] h-[36px]'>
              <div className='flex items-center justify-items-start gap-[11px]'>
                <img className='w-[40px] h-[35px]' src={england} alt="" />
                <div className='leading-5'>
                  <p className=''>England</p>
                  <p className='text-[13px] text-[#8B96A5]'>shopname.uk</p>
                </div>
              </div>
           </div>
           <div className='w-[221px] h-[36px]'>
              <div className='flex items-center justify-items-start gap-[11px]'>
                <img className='w-[40px] h-[35px]' src={dubai} alt="" />
                <div className='leading-5'>
                  <p className=''>Arabic Emirates</p>
                  <p className='text-[13px] text-[#8B96A5]'>shopname.ae</p>
                </div>
              </div>
           </div>

        </div>
      </div>
      












    </div>  
  )
}

export default Home