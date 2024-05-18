import { PricingData } from '@/utils/PricingData'
import { FaCheck } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const Pricing = () => {
  return (
    <div className='flex flex-col gap-5 py-20 px-5 bg-slate-200 font-DM-Sans md:p-20'>
      <div className="title shadow-md font-DM-Sans bg-white py-2 px-6 text-blue-600 text-center font-bold text-lg m-auto rounded-full ">
        <h2>~Pricing~</h2>
      </div>
      <h2 className='text-4xl font-bold text-center'>Our <span className='text-blue-600'>Awesome</span> Pricing</h2>
      <div className="flex flex-col justify-center gap-12 md:flex-row">
        {PricingData.map((data, index) => (
          <div key={index} className="flex flex-col basis-1/3  bg-white rounded-lg py-8">
            <h1 className='font-bold text-lg px-6'>{data.name}</h1>
            <p className='text-gray-500 px-6 pb-4'>{data.description}</p>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 text-6xl text-white font-bold text-center flex gap-2 items-center justify-center">
              <h2>${data.pricing}</h2>
              <h3 className='text-lg'> / monthly</h3>
            </div>
            <div className="benefit flex flex-col gap-4 px-8 py-4">
              {data.cover.map((detail, index) => (
                <div key={index} className="item flex gap-2 items-center">
                  {detail.isCover ? <FaCheck color="aqua" /> : <FaX color="aqua" />}

                  <p className='text-gray-500 font-medium'>{detail.name}</p>
                </div>
              ))}
            </div>
            <div className="px-8">
              <button className='relative rounded-full py-2 overflow-hidden group bg-gradient-to-r from-cyan-500 to-blue-500 w-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 text-white transition-all ease-out duration-300 md:px-10'>
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-0 bg-white rounded-full opacity-10 rotate-12 group-hover:-translate-x-[900px] ease"></span>
                <span className="relative rounded-full text-md font-semibold md:text-lg">Get a free trial</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}

export default Pricing