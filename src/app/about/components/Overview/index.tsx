'use client'
import { AboutTabsData } from '@/utils/AboutTabsData';
import Image from 'next/image';
import { useState } from 'react';
import { FaWind } from 'react-icons/fa';
import { FaRegCircle } from "react-icons/fa6";
import { TbTrophy } from 'react-icons/tb';


const Overview = () => {
  const [contentType, setContentType] = useState('Mission')
  const data = AboutTabsData.filter(data => data.title == contentType)
  const handleContentType = (data: string) => {
    setContentType(data)
  }
  return (
    <div className='grid grid-cols-1 gap-12  bg-slate-100 py-10 px-4 pb-8  md:gap-0  md:px-20 md:grid-cols-2 '>
      <div className=" flex flex-col gap-5 justify-center  p-5 md:px-20 md:py-20">
        <div className="title flex gap-8 items-center font-bold text-3xl text-blue-600">
          <h1>About Us</h1>
          <FaWind></FaWind>
        </div>
        <h1 className='font-bold text-3xl'>Choose The Best IT Service Company</h1>
        <p className='text-justify'>Founded by John Sanna in 2018, ITechno started with a dedicated team of 10. Today, we have grown to over 1000 consultants and developers, with more than 120 branches worldwide. Specializing in chatbot, RPA, OCR, and data management, we excel in providing highly effective IT solutions, digital transformation, and IT infrastructure services.</p>
        <div className="flex gap-8  relative  ">
          <div onClick={() => handleContentType('Mission')} className={`font-bold text-lg z-10 border-b-4  ${contentType == "Mission" ? 'border-blue-600' : "hover:border-blue-600"} `}>
            <h2>Our Mission</h2>
          </div>
          <div onClick={() => handleContentType('Vision')} className={`font-bold text-lg z-10 border-b-4  ${contentType == "Vision" ? 'border-blue-600' : "hover:border-blue-600"} `}>
            <h2>Our Vision</h2>
          </div>
          <span className='absolute bottom-0 bg-gray-200 h-1 w-3/4'></span>
        </div>
        <div className="h-[10vh]">
          <p>{data[0].content}</p>
        </div>
      </div>



      <div className="relative h-full w-full flex justify-center items-center lg:justify-center ">
        <FaRegCircle className='hidden move-vertical-animation absolute h-full w-full top-0  -translate-y-[20%] right-0 z-0 text-blue-600 md:-translate-y-0 md:block' />
        <div className="relative">
          <div className="relative w-full h-full">
            <Image src={'/sucess-bg.jpg'} width={500} height={500} alt='' className='object-cover' />
          </div>
          <div className="bg-blue-600 p-4 flex flex-col justify-center  absolute w-48 h-48 top-0 left-0 md:-translate-y-1/4 md:-translate-x-1/4">
            <h1 className='text-left font-bold text-white text-6xl'>7</h1>
            <h2 className='text-left text-white font-bold text-2xl'>Years of experience</h2>
            <span className='absolute right-0 top-0'>
              <Image src={'/dot-overview.png'} width={80} height={80} alt='' />
            </span>
          </div>
          <div className="absolute flex items-center bottom-0 w-full py-6 px-4  rounded-tr-xl rounded-tl-xl  gap-8  bg-white z-30 md:px-16 md:translate-x-8 md:translate-y-7 ">
            <TbTrophy className=' size-8 md:size-20' color='black' />
            <div className="flex flex-col font-DM-Sans">
              <h1 className='font-bold text-sm md:text-lg'>Best Awarded Company</h1>
              <p className='text-[12px] md:text-sm'>We adapt our delivery to the way your work, whether as an external provider.</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Overview