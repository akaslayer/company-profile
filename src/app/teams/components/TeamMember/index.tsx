'use client'
import { useStateValue } from '@/context/StateContext'
import React, { useEffect, useRef, useState } from 'react'
import TeamMemberCard from './_components/TeamMemberCard'
import { BiX } from 'react-icons/bi'
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { easeIn, motion, useAnimation, useInView } from "framer-motion";


const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
      ease: easeIn
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

const TeamMember = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { teamData } = useStateValue()
  const [modalState, setModalState] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(0)
  const data = teamData[index]
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, teamData])


  const closeModal = () => {
    setModalState(prevState => !prevState)
  }
  useEffect(() => {
    setModalState(prevState => !prevState)
  }, [index])
  return (
    <div className='flex flex-col p-5 gap-10 md:p-20 font-DM-Sans' ref={ref}>
      <div className="flex flex-col gap-2">
        <h1 className='text-center text-5xl font-bold'><span className='text-blue-600'>Our</span> Leadership Team</h1>
        <p className='text-center font-semibold text-gray-500 text-xl'>With over 100 years of combined experience, we&apos;ve got a well seasoned team at the helm</p>
      </div>

      <motion.div
        className="grid grid-cols-2 gap-5 md:grid-cols-3"
        variants={container}
        animate={mainControls}
        initial="hidden"
        viewport={{ once: true, amount: 1 }}>

        {teamData.map((data, index) => (
          <div onClick={() => setIndex(index)} key={index} className='hover:scale-105' >
            <motion.div key={index} className="item w-full" variants={item}>
              <TeamMemberCard  {...data} />
            </motion.div>
          </div>
        ))}
      </motion.div>




      {modalState ? (
        <div className={`fixed bg-gray-800/50 z-30 inset-0 p-5  content-center md:p-64`}>
          <div className="relative bg-white content-center p-10 flex flex-col gap-4">
            <BiX className='absolute size-12 right-3 top-2' onClick={closeModal} />
            <div className="">
              <h1 className='text-3xl font-bold'>{data?.name.title + " " + data?.name.first + " " + data?.name.last}</h1>
              <h2 className='text-md text-gray-500 font-semibold'>{data?.job}</h2>
              <hr />
            </div>
            <p className=''>{data?.description}</p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 items-center">
                <FaPhone size={20} />
                <h3 className='font-semibold'>{data?.phone}</h3>
              </div>
              <div className="flex gap-4 items-center">
                <MdEmail size={20} />
                <h3 className='font-semibold'>{data?.email}</h3>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div >
  )
}

export default TeamMember