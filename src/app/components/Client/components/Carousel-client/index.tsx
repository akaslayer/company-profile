import React from 'react'

interface CarouselProps {
  icon: JSX.Element,
  name: string
}


const Carousel2: React.FC<CarouselProps> = ({ icon, name }) => {
  const iconDesign = "service-item flex flex-col items-center bg-white py-10 gap-4 px-4 border-2 border-blue-400 shadow-md shadow-blue-200  md:basis-1/4 font-bold text-lg text-blue-400 hover:bg-blue-400 hover:text-white"
  return (
    <div className={iconDesign}>
      <span>{icon}</span>
      <h2>{name}</h2>
    </div>
  )
}

export default Carousel2