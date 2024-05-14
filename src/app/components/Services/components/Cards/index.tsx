import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface cardProps {
  title: string
  description: string
  link: string,
  image: string
}
const Cards: React.FC<cardProps> = ({ title, description, link, image }) => {
  return (
    <div className="flex flex-col h-fit  gap-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Image src={image} width={500} height={500} alt="" className='w-full' />
      <div className="desc flex flex-col px-4 max-h-full gap-2">
        <h3 className="mb-2 text-2xl font-bold tracking-tight h-14 text-gray-900 dark:text-white">{title}</h3>
        <p className="mb-3 font-normal text-justify   line-clamp-3  text-gray-700 dark:text-gray-400">{description}</p>
      </div>
      <div className="button-animation px-4 mb-7">
        <Link href='/services' className="relative inline-flex items-center justify-center py-3 overflow-hidden font-medium w-fit px-4 text-blue-800 transition duration-300 ease-out border-2 border-blue-800 rounded-full shadow-md group">
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-800 group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-blue-800 transition-all duration-300 transform group-hover:translate-x-full ease">Service Details</span>
          <span className="relative invisible">Service Details</span>
        </Link>
      </div>
    </div >
  )
}

export default Cards