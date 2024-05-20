'use client'
import { useStateValue } from '@/context/StateContext'
import React, { useEffect, useRef, useState } from 'react'
import TeamMemberCard from './_components/TeamMemberCard'
import { BiX } from 'react-icons/bi'
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'




const TeamMember = () => {
  const { teamData, loading } = useStateValue()
  const [modalState, setModalState] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(0)
  const data = teamData[index]



  const handleOpenModal = (id: number) => {
    setIndex(id)
    setModalState(prevState => !prevState)

  }

  const closeModal = () => {
    setModalState(prevState => !prevState)
  }

  return (
    <div className='flex flex-col p-5 gap-10 md:p-20 font-DM-Sans' >
      <div className="flex flex-col gap-2">
        <h1 className='text-center text-5xl font-bold'><span className='text-blue-600'>Our</span> Leadership Team</h1>
        <p className='text-center font-semibold text-gray-500 text-xl'>With over 100 years of combined experience, we&apos;ve got a well seasoned team at the helm</p>
      </div>

      <div
        className="grid grid-cols-2 gap-5 md:grid-cols-3"

      >
        {!loading ? (
          <>
            {teamData.map((data, index) => (
              <div onClick={() => handleOpenModal(index)} key={index} className='hover:scale-105' >

                <TeamMemberCard  {...data} />

              </div>
            ))}
          </>
        ) : (
          <>
            <div className='card flex flex-col gap-4 p-2 bg-white shadow-lg  rounded-md md:p-5 animate-pulse w-full'>
              <div className='bg-slate-white rounded-lg mix-blend-multiply bg-gray'>
                <div className=' w-full object-cover rounded-lg bg-slate-200 h-[200px] md:h-[400px]' />
              </div>
              <div className='flex flex-col text-center p-2 gap-2 '>
                <h1 className='text-base font-bold md:text-2xl w-full h-5 bg-slate-200'></h1>
                <h2 className=' text-base font-semibold h-5 md:text-xl md:h-auto bg-slate-200'></h2>
              </div>
            </div>
            <div className='card flex flex-col gap-4 p-2 bg-white shadow-lg  rounded-md md:p-5 animate-pulse w-full'>
              <div className='bg-slate-white rounded-lg mix-blend-multiply bg-gray'>
                <div className=' w-full object-cover rounded-lg bg-slate-200 h-[200px] md:h-[400px]' />
              </div>
              <div className='flex flex-col text-center p-2 gap-2 '>
                <h1 className='text-base font-bold md:text-2xl w-full h-5 bg-slate-200'></h1>
                <h2 className=' text-base font-semibold h-5 md:text-xl md:h-auto bg-slate-200'></h2>
              </div>
            </div>
            <div className='card flex flex-col gap-4 p-2 bg-white shadow-lg  rounded-md md:p-5 animate-pulse w-full'>
              <div className='bg-slate-white rounded-lg mix-blend-multiply bg-gray'>
                <div className=' w-full object-cover rounded-lg bg-slate-200 h-[200px] md:h-[400px]' />
              </div>
              <div className='flex flex-col text-center p-2 gap-2 '>
                <h1 className='text-base font-bold md:text-2xl w-full h-5 bg-slate-200'></h1>
                <h2 className=' text-base font-semibold h-5 md:text-xl md:h-auto bg-slate-200'></h2>
              </div>
            </div>
            <div className='card flex flex-col gap-4 p-2 bg-white shadow-lg  rounded-md md:p-5 animate-pulse w-full'>
              <div className='bg-slate-white rounded-lg mix-blend-multiply bg-gray'>
                <div className=' w-full object-cover rounded-lg bg-slate-200 h-[200px] md:h-[400px]' />
              </div>
              <div className='flex flex-col text-center p-2 gap-2 '>
                <h1 className='text-base font-bold md:text-2xl w-full h-5 bg-slate-200'></h1>
                <h2 className=' text-base font-semibold h-5 md:text-xl md:h-auto bg-slate-200'></h2>
              </div>
            </div>
            <div className='card flex flex-col gap-4 p-2 bg-white shadow-lg  rounded-md md:p-5 animate-pulse w-full'>
              <div className='bg-slate-white rounded-lg mix-blend-multiply bg-gray'>
                <div className=' w-full object-cover rounded-lg bg-slate-200 h-[200px] md:h-[400px]' />
              </div>
              <div className='flex flex-col text-center p-2 gap-2 '>
                <h1 className='text-base font-bold md:text-2xl w-full h-5 bg-slate-200'></h1>
                <h2 className=' text-base font-semibold h-5 md:text-xl md:h-auto bg-slate-200'></h2>
              </div>
            </div>
            <div className='card flex flex-col gap-4 p-2 bg-white shadow-lg  rounded-md md:p-5 animate-pulse w-full'>
              <div className='bg-slate-white rounded-lg mix-blend-multiply bg-gray'>
                <div className=' w-full object-cover rounded-lg bg-slate-200 h-[200px] md:h-[400px]' />
              </div>
              <div className='flex flex-col text-center p-2 gap-2 '>
                <h1 className='text-base font-bold md:text-2xl w-full h-5 bg-slate-200'></h1>
                <h2 className=' text-base font-semibold h-5 md:text-xl md:h-auto bg-slate-200'></h2>
              </div>
            </div>
          </>

        )}
      </div>
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