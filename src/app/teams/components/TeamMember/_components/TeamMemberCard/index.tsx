import { NewTeamList, TeamList } from '@/context/StateContext'
import { count } from 'console'
import Image from 'next/image'
import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { FaLetterboxd, FaLocationDot, FaLocationPin, FaLocationPinLock } from 'react-icons/fa6'

const TeamMemberCard: React.FC<NewTeamList> = ({ gender, name, city, state, country, postcode, email, phone, picture, dob, description, job }) => {
  return (
    // <div className="group w-full  justify-center relative overflow-y-hidden">
    //   <Image src={picture.large} width={500} height={500} alt='' className='object-cover w-full h-96 ' />
    //   <span className='shape-team absolute  bg-black bottom-0 z-20 w-full py-44 opacity-80 group-hover:bg-white'></span>
    //   <span className="absolute w-full h-full z-10 ease-in duration-200 opacity-60 bg-blue-600 group-hover:-translate-y-full p-4 text-center text-white font-bold"></span>
    //   <div className="desc absolute bottom-0 text-center w-full z-30 p-7 flex flex-col gap-0">
    //     <h3 className='font-bold text-xl text-white group-hover:text-black'>{name.first}</h3>
    //     <h4 className='font-bold text-lg text-blue-400 group-hover:text-blue-800'>{job}</h4>
    //   </div>
    //   <div className="absolute w-full h-full py-14 px-8 text-white z-30 ease-in duration-200 group-hover:-translate-y-full  text-center flex flex-col gap-5  items-center">
    //     <p className='font-bold'>{description}</p>
    //     <div className="relative rounded-full py-2 px-2 overflow-hidden  bg-gradient-to-r from-cyan-500 to-blue-500 w-fit hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 text-white transition-all ease-out duration-300 md:px-10">
    //       <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white rounded-full opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
    //       <span className="relative text-sm font-semibold">Read more</span>
    //     </div>
    //   </div>
    // </div>
    <div className='w-full'>
      <div className="card flex flex-col gap-8 bg-white border-2 border-slate-300 rounded-md md:flex-row">
        <div className="h-full w-full basis-1/4">
          <Image src={picture.large} width={200} height={400} alt='' className='w-full h-full object-cover' />
        </div>
        <div className="flex flex-col gap-3 p-5 basis-3/4 md:p-10">
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
        </div>
      </div>
    </div>
  )
}

export default TeamMemberCard