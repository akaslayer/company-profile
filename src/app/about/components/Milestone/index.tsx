'use client'
import Image from 'next/image';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const CustomLeftArrow: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    className="absolute bottom-1/2 left-0 rounded-full translate-y-1/2 bg-transparent p-2 border-2 border-blue-700 cursor-pointer text-black hover:bg-blue-700 hover:text-white hover:border-blue-700"
    onClick={onClick}
  >
    <BsArrowLeft className='size-5' />
  </button>
);

const CustomRightArrow: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    className="absolute bottom-1/2 right-0 rounded-full translate-y-1/2 bg-transparent p-2 border-2 border-blue-700 cursor-pointer text-black hover:bg-blue-700 hover:text-white hover:border-blue-700"
    onClick={onClick}
  >
    <BsArrowRight className='size-5' />
  </button>
);



const Milestone = () => {
  return (
    <div className='flex flex-col relative px-5 py-20 gap-12 bg-slate-300 font-DM-Sans  lg:px-64 '>
      <h1 className='font-bold text-4xl text-center'><span className='text-blue-700'>Our </span>Milestone</h1>
      <Carousel
        autoPlaySpeed={5000}
        autoPlay={true}
        shouldResetAutoplay={true}
        draggable
        renderButtonGroupOutside
        rtl={false}
        customLeftArrow={
          <CustomLeftArrow onClick={() => { }} />

        }
        customRightArrow={
          <CustomRightArrow onClick={() => { }} />
        }

        keyBoardControl
        itemClass=''
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 4,
            partialVisibilityGutter: 0
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 0
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 70
          }
        }}

        slidesToSlide={1}
        swipeable
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <div className='shapeMilestone rounded-full'>
            <Image src={'/slide1.jpg'} width={500} height={500} alt='' className='object-cover rounded-full h-40 w-40' />
          </div>
          <div className="pointer-shape text-center flex justify-center items-center font-bold text-white">
            <h2 className=''>2022</h2>
          </div>
          <h1 className='font-bold text-xl'>Get Award</h1>
          <p className='text-sm w-4/5'>Our people are held to the highest accountability to ensure you are always satisfied with your results</p>
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <div className='shapeMilestone rounded-full'>
            <Image src={'/slide1.jpg'} width={500} height={500} alt='' className='object-cover rounded-full h-40 w-40' />
          </div>
          <div className="pointer-shape text-center flex justify-center items-center font-bold text-white">
            <h2 className=''>2022</h2>
          </div>
          <h1 className='font-bold text-xl'>Get Award</h1>
          <p className='text-sm w-4/5'>Our people are held to the highest accountability to ensure you are always satisfied with your results</p>
        </div>
        <div className="flex flex-col items-center gap-3 text-center">
          <div className='shapeMilestone rounded-full'>
            <Image src={'/slide1.jpg'} width={500} height={500} alt='' className='object-cover rounded-full h-40 w-40' />
          </div>
          <div className="pointer-shape text-center flex justify-center items-center font-bold text-white">
            <h2 className=''>2022</h2>
          </div>
          <h1 className='font-bold text-xl'>Get Award</h1>
          <p className='text-sm w-4/5'>Our people are held to the highest accountability to ensure you are always satisfied with your results</p>
        </div>
        <div className="flex flex-col items-center gap-3 text-center">
          <div className='shapeMilestone rounded-full'>
            <Image src={'/slide1.jpg'} width={500} height={500} alt='' className='object-cover rounded-full h-40 w-40' />
          </div>
          <div className="pointer-shape text-center flex justify-center items-center font-bold text-white">
            <h2 className=''>2022</h2>
          </div>
          <h1 className='font-bold text-xl'>Get Award</h1>
          <p className='text-sm w-4/5'>Our people are held to the highest accountability to ensure you are always satisfied with your results</p>
        </div>
        <div className="flex flex-col items-center gap-3 text-center">
          <div className='shapeMilestone rounded-full'>
            <Image src={'/slide1.jpg'} width={500} height={500} alt='' className='object-cover rounded-full h-40 w-40' />
          </div>
          <div className="pointer-shape text-center flex justify-center items-center font-bold text-white">
            <h2 className=''>2022</h2>
          </div>
          <h1 className='font-bold text-xl'>Get Award</h1>
          <p className='text-sm w-4/5'>Our people are held to the highest accountability to ensure you are always satisfied with your results</p>
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <div className='shapeMilestone rounded-full'>
            <Image src={'/slide1.jpg'} width={500} height={500} alt='' className='object-cover rounded-full h-40 w-40' />
          </div>
          <div className="pointer-shape text-center flex justify-center items-center font-bold text-white">
            <h2 className=''>2022</h2>
          </div>
          <h1 className='font-bold text-xl'>Get Award</h1>
          <p className='text-sm w-4/5'>Our people are held to the highest accountability to ensure you are always satisfied with your results</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Milestone