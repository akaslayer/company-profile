import { url } from 'inspector'
import Image from 'next/image'
import React from 'react'

const Jumbotron = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
      <div className="p-10 mt-20 md:p-40" style={{ backgroundImage: 'url("/bg-jumbotron.jpg")' }}>
        <div className="relative w-full h-full flex flex-col gap-5 text-white font-DM-Sans" >
          <h2 className='font-bold text-xl'>About us</h2>
          <p className='text-5xl font-semibold'>We will always welcome to serve you</p>
        </div>
      </div>
      <div className="w-full h-full">
        <Image src={'/jumbotron-about.webp'} width={500} height={500} alt='' className='object-cover object-top w-full h-full' />
      </div>
    </div>
  )
}

export default Jumbotron