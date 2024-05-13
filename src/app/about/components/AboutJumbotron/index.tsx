import Jumbotron from '@/components/Jumbotron'
import Image from 'next/image'
import React from 'react'

const AboutJumbotron = () => {
  const leftContent = (
    <div className="flex h-full p-12  bg-blue-700 relative lg:p-40" >
      <span className='shape3 p-20 bg-black absolute right-0 bottom-0  h-full rotate-180 opacity-35 z-0 '></span>
      <span className='shape3 p-20 bg-black absolute left-0 bottom-0 opacity-35 z-0 hidden md:block '></span>
      <div className="relative justify-center w-full h-full flex flex-col gap-5 text-white font-DM-Sans" >
        <h2 className='font-bold text-xl'>About us</h2>
        <p className='text-3xl font-semibold md:text-5xl'>We will always welcome to serve you</p>
      </div>
    </div >
  )

  const rightContent = (
    <div className="w-full h-full">
      <Image src={'/bg-jumbotron.jpg'} width={500} height={500} alt='' className=' h-full w-full' />
    </div>
  )
  return (
    <Jumbotron leftContent={leftContent} rightContent={rightContent} />
  )
}

export default AboutJumbotron