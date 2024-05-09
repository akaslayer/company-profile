'use client'
import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa'

const Carousel: React.FC<{ image: StaticImageData[] }> = ({ image }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === image.length - 1 ? 0 : prevIndex + 1));
      setIsTransitioning(false);
    }, 500);
  };

  const goToPrevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? image.length - 1 : prevIndex - 1));
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 10000)
    return () => clearInterval(intervalId)
  }, [currentIndex])

  return (
    <div className='relative transition-opacity duration-500 ease-in-out ' style={{ opacity: isTransitioning ? 0 : 1 }}>
      <div className='flex' style={{ opacity: isTransitioning ? 0 : 1 }}>
        <Image loading="eager" src={image[currentIndex]} alt='' className='object-cover w-full h-[80vw] object-top md:h-[50vw]' />
      </div>
      <button onClick={goToPrevSlide} className='left-4 absolute bottom-1/2 translate-y-1/2 p-2  border-2 text-white border-white rounded-full md:p-4 hover:bg-white hover:text-black z-10 '>
        <FaChevronLeft className='flex w-full size-8  md:size-12' />
      </button>
      <button onClick={goToNextSlide} className='right-4 absolute bottom-1/2 translate-y-1/2 p-2 border-2 text-white  border-white rounded-full md:p-4 hover:bg-white hover:text-black z-10'>
        <FaChevronRight className='flex w-full size-8 md:size-12' />
      </button>
      <div className='shape3 absolute bottom-0 h-full bg-blue-400 opacity-20 left-0 p-16 hidden md:block md:p-40'></div>
      <div className='shape2 absolute bottom-0 h-full bg-blue-500 opacity-20 -left-8 p-32  md:left-[30%]'></div>
      <div className='shape2 absolute bottom-0 h-full bg-blue-200 opacity-20 left-0 p-32   md:left-1/4'></div>
      <div className="absolute flex flex-col top-1/2 -translate-y-1/2 left-20 gap-2  w-fit md:gap-8 md:left-36 md:top-[40%]">
        <h5 className='bg-white w-fit text-md rounded-full shadow-md shadow-blue-200 py-2 px-4 font-bold text-blue-700  md:text-2xl'>We are IT service agency ~</h5>
        <h1 className='text-white text-2xl w-[90%] font-bold   shadow-blue-200 md:text-5xl md:w-fit' style={{ textShadow: '1px 0px #90CAF9' }}>A LEADING PROFESSIONAL TECH COMPANY</h1>
        <h5 className='text-white w-3/4 font-semibold break-all md:text-2xl' style={{ textShadow: '1px 0px #90CAF9' }}>We Provide A Cutting Edge Solution For What You Need</h5>


        <a href="#_" className="relative rounded-full px-5 py-2 overflow-hidden group bg-blue-800 w-fit hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300 md:px-10">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white rounded-full opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative rounded-full text-lg font-semibold md:text-xl">Our Teams</span>
        </a>
      </div>
    </div >
  )
}

export default Carousel