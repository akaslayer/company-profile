'use client'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'
import { Autoplay, EffectCoverflow, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MilestoneDummyData } from '@/utils/MilestoneData';
import MilestoneData from './components/MilestoneData';


const Milestone = () => {
  return (
    <div className='flex flex-col relative px-5 py-20 gap-12 bg-slate-300 font-DM-Sans  lg:px-64 '>
      <h1 className='font-bold text-4xl text-center'><span className='text-blue-700'>Our </span>Milestone</h1>
      <Swiper
        grabCursor={true}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        modules={[Autoplay, Navigation, EffectFade]}
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
        {MilestoneDummyData.map((data, index) => (
          <SwiperSlide key={index}>
            <MilestoneData {...data} />
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <button aria-label="rightButton" className="swiper-next z-20 absolute bottom-1/2 right-0 rounded-full translate-y-1/2 bg-transparent p-2 border-2 border-blue-700 cursor-pointer text-black hover:bg-blue-700 hover:text-white hover:border-blue-700">
            <BsArrowRight className='size-5' />
          </button>

          <button
            aria-label="leftButton"
            className="swiper-prev z-20 absolute bottom-1/2 left-0 rounded-full translate-y-1/2 bg-transparent p-2 border-2 border-blue-700 cursor-pointer text-black hover:bg-blue-700 hover:text-white hover:border-blue-700">
            <BsArrowLeft className='size-5' />
          </button>
        </div>
      </Swiper >

    </div >
  )
}

export default Milestone