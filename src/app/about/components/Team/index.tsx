'use client'
import TeamCard from '@/components/TeamCard'
import { teamData } from '@/utils/DummyData'
import { useEffect, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { FaWind } from 'react-icons/fa'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

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
      <div className="bg-slate-200 w-full py-10 px-20 flex flex-col gap-2 items-center font-DM-Sans md:py-20">
        <div className="title flex gap-4 items-center text-center justify-center text-2xl text-blue-800 font-bold">
          <FaWind className='rotate-180' />
          <h1>Team Members</h1>
          <FaWind />
        </div>
        <h2 className='text-center text-4xl font-bold mb-8 '>Passionate Personalities, <span className='text-blue-600'>Versatile</span> Brains</h2>
        <div className="grid items-center grid-cols-1 justify-center gap-8 md:grid-cols-4 w-full">
          {!showCarousel ? (
            <Carousel
              autoPlaySpeed={5000}
              autoPlay={true}
              shouldResetAutoplay={false}
              centerMode={false}
              dotListClass=""
              draggable
              infinite
              className='hidden'
              keyBoardControl
              minimumTouchDrag={80}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 4,
                  partialVisibilityGutter: 20
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0
                  },
                  items: 1,
                  partialVisibilityGutter: 30
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464
                  },
                  items: 1,
                  partialVisibilityGutter: 30
                }
              }}
              arrows
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {teamData.map((data, index) => (
                <TeamCard key={index} {...data} />
              ))}
            </Carousel>
          ) : (

            teamData.map((data, index) => (
              <TeamCard key={index} {...data} />
            ))

          )}

        </div>
      </div >
    </>
  )
}

export default Teams