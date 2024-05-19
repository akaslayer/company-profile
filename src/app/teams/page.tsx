import React from 'react'
import TeamsJumbotron from './components/TeamsJumbotron'
import TeamMember from './components/TeamMember'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Teams",
}
const teams = () => {
  return (
    <div className='mt-[76px]'>
      <TeamsJumbotron />
      <TeamMember />
    </div>
  )
}

export default teams