import { NewTeamList, TeamList } from '@/context/StateContext'
import { count } from 'console'
import Image from 'next/image'
import React, { useState } from 'react'
import { BiX } from 'react-icons/bi'
import { BsMailbox } from 'react-icons/bs'
import { FaMailchimp, FaPhone } from 'react-icons/fa'
import { FaLetterboxd, FaLocationDot, FaLocationPin, FaLocationPinLock } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const TeamMemberCard: React.FC<NewTeamList> = ({ gender, name, city, state, country, postcode, email, phone, picture, dob, description, job }) => {
  return (
    <div className='w-full font-DM-Sans'>
      <div className="card flex flex-col gap-4 p-2 bg-white border-2 border-gray-200 shadow-lg  rounded-md md:p-5 ">
        <div className="h-full w-full  bg-slate-white rounded-lg mix-blend-multiply bg-white">
          <Image src={picture.large} width={200} height={400} alt='' className='w-full h-full object-cover rounded-lg bg-white ' />
        </div>
        <div className="flex flex-col text-center p-2 ">
          <h1 className='text-base font-bold md:text-2xl'>{name.first + " " + name.last}</h1>
          <h2 className=' text-base font-semibold h-9 md:text-xl md:h-auto'>{job}</h2>
        </div>
      </div>
    </div >
  )
}

export default TeamMemberCard