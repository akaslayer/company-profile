'use client'
import { useStateValue } from '@/context/StateContext'
import React, { useEffect } from 'react'
import TeamMemberCard from './_components/TeamMemberCard'

const TeamMember = () => {
  const { teamData } = useStateValue()
  console.log(teamData)
  return (
    <div className='flex flex-col p-5 gap-5 md:p-20'>
      <h1>Our leadership team</h1>
      <p>With over 100 years of combined experience, we&apos;ve got a well seasoned team at the helm</p>
      <div className="grid grid-cols-1 gap-8">
        {teamData.map((data, index) => (
          <TeamMemberCard key={index} {...data} />
        ))}
      </div>
    </div >
  )
}

export default TeamMember