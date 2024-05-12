import Image from 'next/image'
import React from 'react'

interface milestoneProps {
  picture: string,
  year: string,
  event: string,
  description: string
}

const MilestoneData: React.FC<milestoneProps> = ({ picture, year, event, description }) => {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className='shapeMilestone rounded-full'>
        <Image src={`${picture}`} width={500} height={500} alt='' className='object-cover rounded-full h-40 w-40' />
      </div>
      <div className="pointer-shape text-center flex justify-center items-center font-bold text-white">
        <h2 className=''>{year}</h2>
      </div>
      <h1 className='font-bold text-xl'>{event}</h1>
      <p className='text-sm w-4/5'>{description}</p>
    </div>
  )
}

export default MilestoneData