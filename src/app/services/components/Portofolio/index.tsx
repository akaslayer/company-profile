'use client'
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';




const Portofolio = () => {


  return (
    <div className="py-20 px-10 w-full justify-center flex flex-col gap-2 bg-slate-300">
      <h1 className='text-center text-6xl font-bold text-slate-600'>Our <span className='text-blue-600'>Works</span></h1>
      <h2 className='text-slate-600 text-3xl font-semibold text-center'>See our awesome works</h2>
      <div className="justify-center p-5  items-center md:p-10">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          initialSlide={2}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={50}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="swiper_container"
        >
          <SwiperSlide >
            <div className="w-full h-full relative group">
              <Image src={'/work1.jpg'} width={500} height={500} alt="slide_image" />
              <div className='absolute text-center h-full w-full bottom-0 items-center justify-center flex flex-col p-3 z-20'>
                <h2 className='text-white font-bold hidden group-hover:block'>One Touch</h2>
                <p className='text-white font-semibo hidden group-hover:block'>AI to take charge of your home equipment with ease</p>
              </div>
              <span className='absolute bottom-0 w-full h-full opacity-60 z-10 group-hover:bg-black'></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full relative group">
              <Image src={'/work2.png'} width={500} height={500} alt="slide_image" />
              <div className='absolute text-center h-full w-full bottom-0 items-center justify-center flex flex-col p-3 z-20'>
                <h2 className='text-white font-bold hidden group-hover:block'>One Touch</h2>
                <p className='text-white font-semibo hidden group-hover:block'>AI to take charge of your home equipment with ease</p>
              </div>
              <span className='absolute bottom-0 w-full h-full opacity-60 z-10 group-hover:bg-black'></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full relative group">
              <Image src={'/work3.png'} width={500} height={500} alt="slide_image" />
              <div className='absolute text-center h-full w-full bottom-0 items-center justify-center flex flex-col p-3 z-20'>
                <h2 className='text-white font-bold hidden group-hover:block'>One Touch</h2>
                <p className='text-white font-semibo hidden group-hover:block'>AI to take charge of your home equipment with ease</p>
              </div>
              <span className='absolute bottom-0 w-full h-full opacity-60 z-10 group-hover:bg-black'></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full relative group">
              <Image src={'/work4.jpg'} width={500} height={500} alt="slide_image" />
              <div className='absolute text-center h-full w-full bottom-0 items-center justify-center flex flex-col p-3 z-20'>
                <h2 className='text-white font-bold hidden group-hover:block'>One Touch</h2>
                <p className='text-white font-semibo hidden group-hover:block'>AI to take charge of your home equipment with ease</p>
              </div>
              <span className='absolute bottom-0 w-full h-full opacity-60 z-10 group-hover:bg-black'></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full relative group">
              <Image src={'/work5.jpg'} width={500} height={500} alt="slide_image" />
              <div className='absolute text-center h-full w-full bottom-0 items-center justify-center flex flex-col p-3 z-20'>
                <h2 className='text-white font-bold hidden group-hover:block'>One Touch</h2>
                <p className='text-white font-semibo hidden group-hover:block'>AI to take charge of your home equipment with ease</p>
              </div>
              <span className='absolute bottom-0 w-full h-full opacity-60 z-10 group-hover:bg-black'></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full relative group">
              <Image src={'/chatGPT.jpg'} width={500} height={500} alt="slide_image" />
              <div className='absolute text-center h-full w-full bottom-0 items-center justify-center flex flex-col p-3 z-20'>
                <h2 className='text-white font-bold hidden group-hover:block'>One Touch</h2>
                <p className='text-white font-semibo hidden group-hover:block'>AI to take charge of your home equipment with ease</p>
              </div>
              <span className='absolute bottom-0 w-full h-full opacity-60 z-10 group-hover:bg-black'></span>
            </div>
          </SwiperSlide>
          <div className="slider-controler">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default Portofolio