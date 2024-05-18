'use client'
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { easeIn, motion, useAnimation, useInView } from "framer-motion";
import { useRef } from 'react';



const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};


const Data: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [startCount, setCount] = useState(false)
  const mainControls = useAnimation();
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
  }, [isInView]);


  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView])

  return (
    <div className='px-20 py-10 bg-slate-50' id='triggerElement' ref={ref}>
      <div className='grid grid-cols-1 items-center gap-12 py-8 relative rounded-md md:grid-cols-2'>
        <motion.div
          variants={{
            hidden: { opacity: 1, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
            }
          }}
          initial="hidden"
          animate={mainControls}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: easeIn }}

        >
          <h2 className='text-center text-4xl text-blue-600 font-DM-Sans font-semibold z-20'>We develops strategic software solutions for business</h2>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate={mainControls}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.5, delay: 0.25, ease: easeIn }}
          className='text-center grid grid-cols-1 justify-between  gap-2  w-full md:grid-cols-2'
        >
          <motion.div className="" variants={item}>
            <div className="item p-6 bg-blue-500 rounded-md">

              {startCount && (
                <CountUp end={2018} start={0} duration={5} className='text-white text-6xl font-bold' />
              )}
              <p className='text-white text-xl font-bold'>Year of Establishment</p>

            </div>
          </motion.div>
          <motion.div className="" variants={item}>
            <div className="item p-6 bg-blue-500 rounded-md">
              <div className="text-white text-6xl font-bold">

                {startCount && (
                  <CountUp end={4.5} separator=""
                    decimals={1}
                    decimal="," start={0} duration={5} />
                )}
                k+
              </div>
              <p className='text-white text-xl font-bold'>of customers worldwide</p>
            </div>
          </motion.div>
          <motion.div className="" variants={item}>
            <div className="item p-6 bg-blue-500 rounded-md">
              <div className="text-white text-6xl font-bold">

                {startCount && (
                  <CountUp end={14} separator=""
                    start={0} duration={5} />
                )}
                +
              </div>
              <p className='text-white text-xl font-bold'>Countries with active
                client base</p>
            </div>
          </motion.div>
          <motion.div className="" variants={item}>
            <div className="item p-6 bg-blue-500 rounded-md">
              <div className="text-white text-6xl font-bold">
                {startCount && (
                  <CountUp end={4.9} separator=""
                    decimals={1}
                    decimal="," start={0} duration={5} />)}
                /5
              </div>
              <p className='text-white text-xl font-bold'>Customer
                rating</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div >
  )
}

export default Data