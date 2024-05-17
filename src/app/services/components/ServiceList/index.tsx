'use client'
import { serviceData } from '@/utils/DummyData'
import Image from 'next/image'
import { useState } from 'react'
import { FaCrown, FaMedal } from 'react-icons/fa'
import { GoShieldSlash } from 'react-icons/go'
import { MdOutlineDiscount, MdOutlineWifiCalling } from 'react-icons/md'

const ServiceList = () => {

  const [serviceType, setServiceTabs] = useState<string>('Chatbot')
  const data = serviceData.find(service => service.title == serviceType)
  const handleServiceType = (data: string) => {
    setServiceTabs(data)
  }
  return (
    <div className="py-20 bg-slate-50 relative md:p-20 font-DM-Sans">
      <h1 className='text-center font-bold text-5xl pb-12'>Our <span className='text-blue-600'>Services</span></h1>
      <div className="grid grid-cols-1 p-5 gap-4  md:gap-5 md:p-0  md:grid-cols-3">
        <div className="left-0 top-28 flex flex-col justify-center order-last gap-5 h-fit md:sticky md:order-first">
          <div className="button flex flex-col font-bold text-xl gap-4">
            <button onClick={() => handleServiceType('Chatbot')} className={`p-3   hover:bg-blue-700 hover:text-white hover:border-cyan-400 relative group ${serviceType == 'Chatbot' ? 'bg-blue-700 text-white border-l-4 border-cyan-400' : 'bg-slate-300'}`}>Chatbot<span className='absolute left-0 top-0 transition duration-400 ease-in-out h-0  w-1 group-hover:bg-cyan-400 group-hover:h-full'></span></button>
            <button onClick={() => handleServiceType('Robotic Process Automation (RPA)')} className={`p-3   hover:bg-blue-700 hover:text-white hover:border-cyan-400 relative group ${serviceType == 'Robotic Process Automation (RPA)' ? 'bg-blue-700 text-white border-l-4 border-cyan-400' : 'bg-slate-300'}`}>Robotic Process Automation (RPA)<span className='absolute left-0 top-0 transition duration-400 ease-in-out h-0  w-1 group-hover:bg-cyan-400 group-hover:h-full'></span></button>
            <button onClick={() => handleServiceType('Optical Character Recognition (OCR)')} className={`p-3   hover:bg-blue-700 hover:text-white hover:border-cyan-400 relative group ${serviceType == 'Optical Character Recognition (OCR)' ? 'bg-blue-700 text-white border-l-4 border-cyan-400' : 'bg-slate-300'}`}>Optical Character Recognition (OCR)<span className='absolute left-0 top-0 transition duration-400 ease-in-out h-0  w-1 group-hover:bg-cyan-400 group-hover:h-full'></span></button>
            <button onClick={() => handleServiceType('Data Management')} className={`p-3   hover:bg-blue-700 hover:text-white hover:border-cyan-400 relative group ${serviceType == 'Data Management' ? 'bg-blue-700 text-white border-l-4 border-cyan-400' : 'bg-slate-300'}`}>Data Management<span className='absolute left-0 top-0 transition duration-400 ease-in-out h-0  w-1 group-hover:bg-cyan-400 group-hover:h-full'></span></button>
          </div>
          <div className="w-full h-full relative overflow-hidden">
            <Image src={'/slide1.jpg'} width={500} height={500} alt='contact' className='' />
            <span className='absolute bg-black top-0 w-full h-full opacity-70 '></span>
            <span className='absolute -bottom-20 p-20 rotate-45   -left-20  h-1/4 bg-cyan-400 opacity-20 '></span>
            <span className='absolute -top-20 p-20  rotate-45  -right-20  h-1/4 bg-cyan-400 opacity-20 '></span>
            <div className="absolute bottom-0 w-full h-full justify-center flex flex-col items-center">
              <h1 className='font-bold text-xl text-white'>Contact us now</h1>
              <h2 className='text-4xl text-white'>008-8800-005</h2>
            </div>
          </div>
        </div>

        <div className="col-span-2 gap-6 flex flex-col md:px-10">
          <div className="w-full">
            <Image src={data!.picture} width={500} height={500} alt='image' className='w-full object-cover' />
          </div>
          <div className="description flex flex-col gap-2">
            <h1 className='text-3xl font-bold'>{data!.title}</h1>
            <p>{data!.description}</p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="card gap-8 bg-black  flex items-center p-5">
              <FaMedal className='text-blue-600 size-16 ' />
              <div className="flex flex-col">
                <h2 className='text-white font-bold text-2xl'>Why <span className='text-blue-300'>it soft?</span></h2>
                <p className='text-gray-400 text-md'>We&apos;re making room for self care today with plan</p>
              </div>
            </div>

            <div className="card gap-8 bg-black p-5 flex items-center">
              <MdOutlineWifiCalling className='text-blue-600 size-16 ' />
              <div className="flex flex-col">
                <h2 className='text-white font-bold text-2xl'>Unlimited Support</h2>
                <p className='text-gray-400 text-md'>New range coming in on a weekly basis veg section.</p>
              </div>
            </div>
          </div>


          <div className="flex flex-col gap-8 md:flex-row">
            <div className="pic w-full h-full">
              <Image src={'/service-splash.jpg'} alt='' width={500} height={500} className='w-full h-full' />
            </div>
            <div className="flex flex-col gap-4 justify-center">
              <h2 className='text-2xl font-bold'>We serve the best work</h2>
              <p className='text-md text-gray-500'>By initiating your project with Fingent, you get a dedicated and skilled team backing you up round-the-clock. All our processes are the customer oriented, designed to reduce the cost of business operations.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-0 ">
            <div className="flex gap-3 items-center">
              <div className="bg-black p-3">
                <FaCrown className='size-6  text-blue-400' />
              </div>
              <h3 className='font-bold text-lg'>Best quality support</h3>
            </div>
            <div className="flex gap-3 items-center">
              <div className="bg-black p-3">
                <GoShieldSlash className='size-6  text-blue-400' />
              </div>
              <h3 className='font-bold text-lg'>Guaranteed cashback</h3>
            </div>
            <div className="flex gap-3 items-center">
              <div className="bg-black p-3">
                <MdOutlineDiscount className='size-6  text-blue-400' />
              </div>
              <h3 className='font-bold text-lg'>Cheap Price</h3>
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}

export default ServiceList