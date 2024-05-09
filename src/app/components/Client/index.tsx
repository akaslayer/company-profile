import Image from 'next/image';
import { CgDatabase } from "react-icons/cg";
import { FaRobot } from "react-icons/fa";
import { RiCharacterRecognitionLine } from "react-icons/ri";
import { TbMessageChatbot } from "react-icons/tb";
import Carousel2 from './components/Carousel-client';

const services = [
  {
    icon: <TbMessageChatbot className='size-28' />,
    name: "Chatbot"
  },
  {
    icon: <FaRobot className='size-28' />,
    name: "Robotic Process Automation (RPA)"
  },
  {
    icon: <RiCharacterRecognitionLine className='size-28' />,
    name: "Optical Character Recognition (OCR)"
  },
  {
    icon: <CgDatabase className='size-28' />,
    name: "Data Management"
  },
]

const Client = () => {
  return (
    <>
      <div className='flex flex-col gap-12 px-8 relative  md:gap-0 bg-slate-200 object-bottom md:px-20' style={{ backgroundImage: "url('/slide1.jpg')" }}>
        <div className="service flex flex-col gap-12 z-30 w-full text-center pt-8  md:-translate-y-1/2 md:flex-row ">
          {services.map((service, index) => (
            <Carousel2 key={index} {...service} />
          ))}
        </div>
        <div className="client-list gap-8 pb-24 items-center flex-col flex z-30 overflow-x-hidden md:flex-row">
          <h5 className='font-bold text-lg font-DM-Sans w-full text-left md:basis-1/4'>Join over +15.000 happy clients!</h5>
          <div className="no-scrollbar company-logo flex gap-12 overflow-x-scroll scroll-smooth md:basis-3/4">
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
        <span className='h-full w-full left-0 opacity-70 bg-gray-300 z-20 absolute'></span>
      </div >
    </>
  )
}

export default Client