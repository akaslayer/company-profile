import Jumbotron from '@/components/Jumbotron'
import Image from 'next/image'
import React from 'react'

const ServiceJumbotron = () => {
  const leftContent = (
    <div className="flex h-full px-5 py-20 mt-20 bg-blue-700 relative items-center justify-end align-bottom md:py-0 md:mt-0 md:px-20 ">
      <span className='shape3 p-20 bg-black absolute right-0 bottom-0  h-full rotate-180 opacity-35 z-0 '></span>
      <span className='shape3 p-20 bg-black absolute left-0 bottom-0 opacity-35 z-0 hidden md:block '></span>
      <div className="relative justify-center w-full h-full flex flex-col gap-5 text-white font-DM-Sans" >
        <h2 className='font-bold text-xl'>Services</h2>
        <p className='text-3xl font-semibold md:text-5xl'>Welcome! We provide the service.</p>
      </div>
    </div >
  )

  const rightContent = (
    <div className="w-full h-full">
      <Image
        width={200}
        height={200}
        src={'https://res.cloudinary.com/dv9bbdl6i/image/upload/v1715610694/bg-jumbotron_jimatg.jpg'}
        layout="responsive"
        alt='serviceJumbotron'
        className="w-full h-full object-cover"
        loading="eager"
      />
    </div>

  )
  return (
    <Jumbotron leftContent={leftContent} rightContent={rightContent} />
  )
}

export default ServiceJumbotron