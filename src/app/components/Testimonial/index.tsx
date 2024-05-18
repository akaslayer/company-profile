'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { IoIosStar } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TestimonialData } from '@/utils/TestimonialData';


interface Testimonial {
  id: number;
  rating: number;
  content: string;
  author: {
    name: string;
    role: string;
    imageUrl: string;
  };
}

const Testimonial: React.FC = () => {
  return (
    <div className='bg-grey p-10 grid  gap-10 justify-center md:grid-cols-2 bg-slate-200 items-center md:p-20'>
      <div className="grid-item flex flex-col gap-8 font-DM-Sans">
        <h2 className='bg-white w-fit text-md rounded-full shadow-md shadow-blue-200 py-2 px-4 font-bold text-blue-700  md:text-xl'>Testimonials</h2>
        <h3 className='text-6xl font-semibold'>Here&apos;s what our <span className='text-blue-800'>customers</span> have said.</h3>
        <p className='text-lg'>Simplified IT is designed to help make sure you and your data is protected and your computer runs it&apos;s best. The network Access provides is valuable.</p>
        <Link href="#_" className="relative rounded-full py-3 px-6 overflow-hidden group bg-gradient-to-r from-cyan-500 to-blue-500 w-fit hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 text-white transition-all ease-out duration-300 md:px-10">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white rounded-full opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative rounded-full text-lg font-semibold md:text-xl">Our Teams</span>
        </Link>
      </div>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        spaceBetween={50}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        modules={[Autoplay, EffectCoverflow, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }}
        className="swiper_container w-full"

      >
        {TestimonialData.map((testimonial: Testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="grid-item w-full flex flex-col relative gap-6 h-full bg-white p-10 rounded-md">
              <div className="star flex text-yellow-400">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <IoIosStar key={index} size={32} />
                ))}
              </div>
              <p className='text-xl text-justify font-normal w-full'>{testimonial.content}</p>
              <div className="from flex items-center gap-5">
                <div className="person-pic p-1 border-2 border-solid border-blue-500 rounded-full">
                  <Image src={testimonial.author.imageUrl} width={70} height={70} alt='contribute' />
                </div>
                <div className="person-desc">
                  <h1 className='font-bold text-2xl'>{testimonial.author.name}</h1>
                  <h2 className='text-md font-semibold text-blue-800'>{testimonial.author.role}</h2>
                </div>
              </div>
            </div>
            <div className="slider-controler">

              <button aria-label='buttonLeft' className="swiper-prev absolute bottom-2 right-28 rounded-full z-20  bg-white p-2 border-2 border-black   cursor-pointer text-primary-400 hover:bg-blue-500 hover:text-white hover:border-white">
                <BsArrowLeft className='size-6'
                /></button>


              <button aria-label='buttonRight' className="swiper-next absolute bottom-2 right-12 rounded-full z-20  bg-white p-2 border-2 border-black   cursor-pointer text-primary-400 hover:bg-blue-500 hover:text-white hover:border-white">
                <BsArrowRight className='size-6'
                /></button>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  )
}

export default Testimonial