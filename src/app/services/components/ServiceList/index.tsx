'use client'
import { serviceData } from '@/utils/DummyData'
import Image from 'next/image'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const ServiceList = () => {
  return (
    <div className=' font-DM-Sans p-5 bg-slate-100 md:p-10'>
      <h2 className='text-6xl font-bold text-center'>Our <span className='text-blue-700'>Services</span></h2>
      <div className="flex md:px-40">
        <Carousel
          autoPlaySpeed={5000}
          swipeable={true}
          autoPlay={true}
          shouldResetAutoplay={false}
          centerMode={false}
          draggable={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 1,
              partialVisibilityGutter: 20,

            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30,

            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 1,
              partialVisibilityGutter: 30,

            }
          }}
          arrows={false}
          sliderClass=""
          showDots={true}
          slidesToSlide={1}
          className='h-full w-full bg-blue py-8 '

        >
          {serviceData.map((data, index) => (
            <div key={index} className="flex flex-col bg-white  h-full shadow-md border-2 md:flex-row">
              <div className="leftContent gap-4 h-fit flex flex-col basis-3/5 p-5 md:p-10 ">
                <h1 className='font-bold text-4xl'>{data.title}</h1>
                <p className='text-justify italic text-md md:text-md'>{data.description}</p>
              </div>
              <div className="w-full h-full order-first basis-2/5 md:order-last ">
                <Image src={data.picture} width={500} height={500} alt='' className='object-cover w-full h-full' />
              </div>
            </div>

          ))}
        </Carousel>
      </div>
    </div >
  )
}

export default ServiceList