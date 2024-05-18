import React from 'react'
import Cards from './components/Cards'
import { DummyServiceCardData } from '@/utils/ServicesData'



const Services = () => {
  return (
    <div id='services'>
      <div className='p-10 flex flex-col justify-center  gap-2 md:p-20 '>
        <div className="title bg-blue-700 text-center m-auto px-6 py-2 rounded-full font-bold text-white">
          <h1 className=''>~ Our Services ~</h1>
        </div>
        <div className="description text-center m-auto text-2xl font-DM-Sans font-semibold py-4   md:text-5xl md:w-1/2">
          <h2>We Are <span className='text-blue-700'>Dedicated </span>To Serve You All Time.</h2>
        </div>
        <div className="cards grid grid-cols-1 gap-8 md:grid-cols-4 ">
          {DummyServiceCardData.map((data, index) => (
            <Cards key={index} {...data} />
          ))}

        </div>
      </div>
    </div>
  )
}

export default Services