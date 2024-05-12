import Jumbotron from '@/components/Jumbotron'
import Image from 'next/image'
import React from 'react'

const ServiceJumbotron = () => {
  const leftContent = (
    <div className="p-10 mt-20 md:p-40 bg-blue-700 relative" >
      <span className='shape3 p-20 bg-black absolute right-0 bottom-0  h-full rotate-180 opacity-35 z-0 '></span>
      <span className='shape3 p-20 bg-black absolute left-0 bottom-0 opacity-35 z-0 hidden md:block '></span>
      <div className="relative w-full h-full flex flex-col gap-5 text-white font-DM-Sans" >
        <h2 className='font-bold text-xl'>Services</h2>
        <p className='text-3xl font-semibold md:text-5xl'>Welcome! We provide the service.</p>
      </div>
    </div >
  )

  const rightContent = (
    <div className="w-full h-full">
      <Image src={'/jumbotron-about.webp'} width={500} height={500} alt='' className='object-cover object-top w-full h-full' />
    </div>
  )
  return (
    <Jumbotron leftContent={leftContent} rightContent={rightContent} />
  )
}

export default ServiceJumbotron