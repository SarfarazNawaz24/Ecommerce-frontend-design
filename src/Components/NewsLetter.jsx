import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-[1440px] h-[190px] bg-[#EFF2F4] flex flex-col justify-evenly items-center'>
        <div className='flex flex-col items-center'>
            <p className='font-semibold text-[20px]'>Subscribe on our news letter</p>
            <p className=''>Get daily news on upcoming offers from many suppliers all over the world</p>
        </div>
        <div>
            <input type="text" placeholder='Email' className='w-[274px] h-[40px] focus:outline-none bg-white rounded-lg mr-2 p-2 border-1 border-[#DEE2E7]'/>
            <button className='w-[110px] h-[40px] bg-[#0067FF] text-white rounded-lg'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter