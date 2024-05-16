import Image from 'next/image';
import { CgDatabase } from "react-icons/cg";
import { FaRobot } from "react-icons/fa";
import { RiCharacterRecognitionLine } from "react-icons/ri";
import { TbMessageChatbot } from "react-icons/tb";
import Carousel2 from './components/Carousel-client';
import Marquee from "react-fast-marquee";

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
      <div className='flex flex-col gap-8 p-5 relative  md:gap-0 bg-slate-200 object-bottom md:px-20'>
        <div className="service flex flex-col gap-12 z-30 w-full text-center md:p-20 top-0  md:-translate-y-1/2 md:left-0  md:flex-row md:absolute ">
          {services.map((service, index) => (
            <Carousel2 key={index} {...service} />
          ))}
        </div>
        <div className="client-list gap-8 py-8 items-center flex-col flex z-30 overflow-x-hidden md:mt-40 md:flex-row">
          <h2 className='font-bold text-lg font-DM-Sans w-full text-left md:basis-1/4'>Join over +15.000 happy clients!</h2>
          <Marquee
            direction='right'
            speed={100}
            loop={0}
            className='flex gap-20 items-center'>
            <div className="flex gap-20 items-center">
              <Image src='/BNI.png' alt='' width={2560} height={742} className=' w-28' />
              <Image src='/kawanLama.png' alt='' width={1828} height={466} className=' w-36' />
              <Image src='/Google.png' alt='' width={2400} height={2456} className='w-16' />
              <Image src='/Mandiri.png' alt='' width={2560} height={745} className=' w-24' />
              <Image src='/Apple.png' alt='' width={500} height={500} className='w-24' />
              <Image src='/BNI.png' alt='' width={2560} height={742} className=' w-28' />
              <Image src='/kawanLama.png' alt='' width={1828} height={466} className=' w-36' />
              <Image src='/Google.png' alt='' width={2400} height={2456} className='w-16' />
              <Image src='/Mandiri.png' alt='' width={2560} height={745} className=' w-24' />
              <Image src='/Apple.png' alt='' width={500} height={500} className='w-24' />
            </div>
          </Marquee>
        </div >
      </div >
    </>
  )
}

export default Client