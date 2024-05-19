'use client'
import { useEffect, useState } from 'react'
import { FaWind } from 'react-icons/fa'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay'
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TeamMemberData } from '@/utils/TeamMemberData';
import TeamCard from './_components/TeamCard';

const Teams = () => {
  const [showCarousel, setShowCarousel] = useState<boolean>(true);
  useEffect(() => {
    const handleResize = () => {
      setShowCarousel(window.innerWidth >= 768)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => removeEventListener("resize", handleResize)
  }, [showCarousel])
  return (
    <>
      <div className="bg-slate-200 w-full py-10 px-10 flex flex-col gap-2 items-center font-DM-Sans md:py-20">
        <div className="title flex gap-4 items-center text-center justify-center text-2xl text-blue-800 font-bold">
          <FaWind className='rotate-180' />
          <h1>Team Members</h1>
          <FaWind />
        </div>
        <h2 className='text-center text-4xl font-bold mb-8 '>Passionate Personalities, <span className='text-blue-600'>Versatile</span> Brains</h2>
        <div className="grid items-center grid-cols-1 justify-center gap-8 md:grid-cols-4 w-full">
          {!showCarousel ? (
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
              modules={[Autoplay, EffectCoverflow]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="swiper_container w-full"
            >
              {TeamMemberData.map((data, index) => (
                <SwiperSlide key={index}>
                  <TeamCard  {...data} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            TeamMemberData.map((data, index) => (
              <TeamCard key={index} {...data} />
            ))
          )}

        </div>
      </div >
    </>
  )
}

export default Teams