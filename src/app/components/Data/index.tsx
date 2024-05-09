import React from 'react'

const Data = () => {
  return (
    <div className='px-20 py-10 bg-slate-50'>
      <div className='flex flex-col gap-12 py-8 relative rounded-md' style={{ backgroundImage: "url('/slide4.jpg')" }}>
        <h2 className='text-center text-4xl text-white font-DM-Sans font-semibold z-20'>We develops strategic software solutions for business</h2>
        <div className="flex flex-col text-center gap-8 justify-between px-10 z-20 md:flex-row ">
          <div className="item">
            <h2 className='text-blue-300 text-6xl font-bold'>2003</h2>
            <p className='text-white'>Year of Establishment</p>
          </div>
          <div className="item">
            <h2 className='text-blue-300 text-6xl font-bold'>2,5k+</h2>
            <p className='text-white'>of customers worldwide</p>
          </div>
          <div className="item">
            <h2 className='text-blue-300 text-6xl font-bold'>14+</h2>
            <p className='text-white'>Countries with active
              client base</p>
          </div>
          <div className="item">
            <h2 className='text-blue-300 text-6xl font-bold'>4.9/5</h2>
            <p className='text-white'>Customer
              rating</p>
          </div>
        </div>

        <span className='absolute w-full h-full bg-gradient-to-r from-indigo-600 via-purple-500 to-blue-800 top-0 opacity-90 rounded-md'></span>

      </div>
    </div>
  )
}

export default Data