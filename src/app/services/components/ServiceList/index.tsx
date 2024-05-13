'use client'
import { serviceData } from '@/utils/DummyData'
import Image from 'next/image'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const ServiceList = () => {
  return (
    <div className=' font-DM-Sans p-10'>
      <h2 className='text-6xl font-bold text-center'>Our <span className='text-blue-700'>Services</span></h2>
      <div className="flex lg:px-40">
        <Carousel
          additionalTransfrom={0}
          autoPlaySpeed={5000}
          autoPlay={true}
          shouldResetAutoplay={false}
          centerMode={false}
          draggable
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
          swipeable
          className='h-full w-full py-16 bg-blue'

        >
          {serviceData.map((data) => (
            <div className="flex gap-12 flex-col items-center lg:flex-row">
              <div className="leftContent gap-4 flex flex-col basis-0 lg:basis-1/2">
                <h1 className='font-bold text-4xl'>{data.title}</h1>
                <p className='text-justify text-md lg:text-lg'>{data.description}</p>
              </div>
              <div className="m-auto order-first lg:order-last">
                <Image src={data.picture} width={500} height={500} alt='' className='W-full h-full' />
              </div>
            </div>

          ))}
        </Carousel>
      </div>
    </div >
  )
}

export default ServiceList