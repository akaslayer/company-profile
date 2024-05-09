import React from 'react'
import { TbMessageChatbot } from "react-icons/tb";
import { FaRobot } from "react-icons/fa";
import { RiCharacterRecognitionLine } from "react-icons/ri";
import { CgDatabase } from "react-icons/cg";
import Carousel2 from './components/Carousel-client';
import Image from 'next/image';
import pic1 from '../../../../public/next.svg'

const images = [
  { url: 'https://picsum.photos/seed/a/1600/900' },
  { url: 'https://picsum.photos/seed/b/1920/1080' },
  { url: 'https://picsum.photos/seed/c/1366/768' }
]

const Client = () => {
  return (
    <div className='flex flex-col bg-gray-400 gap-12  px-8 md:px-32'>
      <div className="service flex flex-col gap-12 z-0 w-full text-center pt-8  md:-translate-y-1/2 md:flex-row ">
        <div className="service-item flex flex-col items-center bg-white py-10 gap-4 w-full text-xl md:basis-1/4 ">
          <TbMessageChatbot className='size-28 text-blue-400' />
          <h2>Chatbot</h2>
        </div>
        <div className="service-item flex flex-col items-center bg-white py-10 gap-4  text-xl md:basis-1/4">
          <FaRobot className='size-28 text-blue-400' />
          <h2>Robotic Process Automation (RPA)</h2>
        </div>
        <div className="service-item flex flex-col items-center  bg-white  py-10 gap-4 text-xl md:basis-1/4">
          <RiCharacterRecognitionLine className='size-28 text-blue-400' />
          <h2>Optical Character Recognition (OCR)</h2>
        </div>
        <div className="service-item flex flex-col items-center bg-white w-full py-10 gap-4 text-xl md:basis-1/4">
          <CgDatabase className='size-28 text-blue-400' />
          <h2>Data Management</h2>
        </div>
      </div>
      <div className="client-list gap-8 pb-24 items-center flex-col flex md:flex-row">
        <h5 className='font-bold text-lg font-DM-Sans w-full text-left md:basis-1/4'>Join over +15.000 happy clients!</h5>
        <div className="company-logo flex gap-12 overflow-x-auto scroll-smooth md:basis-3/4 ">

          <Image src='/BNI.png' alt='' width={120} height={120} />
          <Image src='/Mandiri.png' alt='' width={150} height={150} />
          <Image src='/kawanLama.png' alt='' width={150} height={150} />
          <Image src='/Google.png' alt='' width={40} height={40} />
          <Image src='/Mandiri.png' alt='' width={150} height={150} />
          <Image src='/Apple.png' alt='' width={40} height={40} />
          <Image src='/kawanLama.png' alt='' width={150} height={150} />
          <Image src='/Google.png' alt='' width={40} height={40} />
          <Image src='/Mandiri.png' alt='' width={150} height={150} />
          <Image src='/Apple.png' alt='' width={40} height={40} />



        </div>

      </div >
    </div >
  )
}

export default Client