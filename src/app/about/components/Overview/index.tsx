'use client'
import Image from 'next/image';
import { BsEye } from 'react-icons/bs';
import { FaWind } from 'react-icons/fa';
import { FaRegCircle } from "react-icons/fa6";
import { GoGoal } from 'react-icons/go';
import { TbTrophy } from 'react-icons/tb';


const Overview = () => {
  return (
    <div className='grid grid-cols-1  gap-24  bg-slate-100 py-20 px-4 pb-8 items-center md:gap-0 md:px-40 md:grid-cols-2 '>
      <div className="flex flex-col gap-5 justify-center p-5 ">
        <div className="title flex gap-8 items-center font-bold text-3xl text-blue-600">
          <h3>About Us</h3>
          <FaWind></FaWind>
        </div>
        <h1 className='font-bold text-3xl'>Choose The Best IT Service Company</h1>
        <p className='text-justify'>An integrated information and technology system provider, dedicated to delivering highly effective solutions in the field of Information Systems. Our core business focuses on information technology services, digital transformation and IT infrastructure. Our company started with only 10 (ten) personnel, currently, after years of experience, we are supported by more than 1000 consultants and developers.`</p>
        <div className="flex  flex-col  font-DM-Sans">
          <div className=" gap-8 grid lg:grid-cols-2 ">
            <div className="cardAnimation relative flex flex-col gap-2 bg-white p-5 shadow-lg rounded-lg">
              <h1 className='font-bold text-3xl text-blue-700'>Vision</h1>
              <p className='text-justify text-md'>Reputable Nation-wide Integrated, Diversified IT and Digital Transformation Solution</p>
              <BsEye className='absolute top-4 right-3 size-6 text-blue-800' />
            </div>

            <div className="cardAnimation relative flex flex-col gap-2 bg-white p-5 shadow-lg rounded-lg">
              <h1 className='font-bold text-3xl text-blue-700'>Mission</h1>
              <p className='text-justify text-md'>We provide a cutting-edge IT and Digital Transformation solution for spesialized industries and consistently add values to retain loyalty to our stakeholders.</p>
              <GoGoal className='absolute  top-4 right-3 size-6 text-blue-800' />
            </div>
          </div>

        </div>
      </div>



      <div className="relative h-full w-full flex justify-center items-center lg:justify-end ">
        <FaRegCircle className='absolute size-full top-0 -translate-y-[20%] right-0 z-0 text-blue-400 md:translate-x-[13%] md:-translate-y-0' />
        <div className="z-20 relative h-fit">
          <Image src={'/sucess-bg.jpg'} width={500} height={500} alt='' className='object-contain' />
          <div className="absolute flex items-center bottom-0 w-full py-2 px-4  rounded-t-[30%]  gap-8  bg-white z-30 md:px-16 ">
            <TbTrophy className=' size-8 md:size-16' color='orange' />
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