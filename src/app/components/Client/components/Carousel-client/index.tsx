import React from 'react'

interface CarouselProps {
  icon: JSX.Element,
  name: string
}


const Carousel2: React.FC<CarouselProps> = ({ icon, name }) => {
  const iconDesign = "relative flex flex-col items-center bg-white py-10 gap-4 overflow-hidden border-2 border-blue-400 font-bold text-lg text-blue-400  transition-all p-6  md:basis-1/4 hover:text-white hover:bg-white group"
  return (
    <div className={iconDesign}>
      <span className='z-20'>{icon}</span>
      <h2 className='z-20'>{name}</h2>
      <span className="w-[100%] h-[100%] bottom-0 left-0  bg-blue-600 absolute  -translate-x-full ease-out duration-500 transition-all translate-y-full  ml-9 group-hover:ml-0   group-hover:translate-y-0 group-hover:translate-x-0"></span>
      <span className=" w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white"></span>
    </div >
  )
}

export default Carousel2