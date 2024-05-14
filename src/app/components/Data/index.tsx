'use client'
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const Data: React.FC = () => {
  const [startCount, setCount] = useState(false)

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCount(true);
        }
      });
    };
    const options = {
      threshold: 0
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    const target = document.getElementById('triggerElement');
    if (target) {
      observer.observe(target);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='px-20 py-10 bg-slate-50' id='triggerElement'>
      <div className='grid grid-cols-1 items-center gap-12 py-8 relative rounded-md md:grid-cols-2'>
        <h2 className='text-center text-4xl text-blue-600 font-DM-Sans font-semibold z-20'>We develops strategic software solutions for business</h2>
        <div className="text-center grid grid-cols-1 justify-between  gap-2  w-full md:grid-cols-2 ">
          <div className="item p-6 bg-blue-500 rounded-md">
            {startCount && (
              <CountUp end={2018} start={0} duration={5} className='text-white text-6xl font-bold' />
            )}
            <p className='text-white text-xl'>Year of Establishment</p>
          </div>
          <div className="item p-6 bg-blue-500 rounded-md">
            <div className="text-white text-6xl font-bold">
              {startCount && (
                <CountUp end={4.5} separator=""
                  decimals={1}
                  decimal="," start={0} duration={5} />
              )}
              k+
            </div>
            <p className='text-white text-xl'>of customers worldwide</p>
          </div>
          <div className="item p-6 bg-blue-500 rounded-md">
            <div className="text-white text-6xl font-bold">
              {startCount && (
                <CountUp end={14} separator=""
                  start={0} duration={5} />
              )}
              +
            </div>
            <p className='text-white text-xl'>Countries with active
              client base</p>
          </div>
          <div className="item p-6 bg-blue-500 rounded-md">
            <div className="text-white text-6xl font-bold">
              {startCount && (
                <CountUp end={4.9} separator=""
                  decimals={1}
                  decimal="," start={0} duration={5} />)}
              /5
            </div>

            <p className='text-white text-xl'>Customer
              rating</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Data