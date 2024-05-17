import { NewTeamList, TeamList } from '@/context/StateContext'
import { count } from 'console'
import Image from 'next/image'
import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { FaLetterboxd, FaLocationDot, FaLocationPin, FaLocationPinLock } from 'react-icons/fa6'

const TeamMemberCard: React.FC<NewTeamList> = ({ gender, name, city, state, country, postcode, email, phone, picture, dob, description, job }) => {
  return (
    <div className='w-full'>
      <div className="card flex flex-col gap-4 p-2 bg-white border-2 border-gray-200 shadow-lg  rounded-md md:p-5 ">
        <div className="h-full w-full  bg-slate-white rounded-lg mix-blend-multiply bg-white">
          <Image src={picture.large} width={200} height={400} alt='' className='w-full h-full object-cover rounded-lg bg-white ' />
        </div>
        <div className="flex flex-col text-center p-2 border-gray-100 border-2 shadow-md">
          <h1 className='text-2xl font-bold'>{name.first + " " + name.last}</h1>
          <h2 className='text-xl font-semibold'>{job}</h2>
        </div>
        {/* <div className="flex flex-col gap-3 p-5 basis-3/4 md:p-10">
          <h1 className='font-bold text-3xl'>{name.title + " " + name.first + " " + name.last}</h1>
          <h2 className='text-xl font-semibold'>{job}</h2>
          <h3>{description}</h3>
          <div className="flex gap-5 items-center">
            <FaPhone size={24} />
            <h3 className='text-lg'>{phone}</h3>
          </div>
          <div className="flex gap-5 items-center">
            <FaLetterboxd size={24} />
            <h3 className='text-lg'>{email}</h3>
          </div>
          <div className="flex gap-5 items-center">
            <FaLocationDot size={24} />
            <h3 className='text-lg'>{city}</h3>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default TeamMemberCard