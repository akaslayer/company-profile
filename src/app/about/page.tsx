import React from 'react'
import Teams from './components/Team'
import Milestone from './components/Milestone'
import Overview from './components/Overview'
import Pricing from './components/Pricing'
import Culture from './components/Culture'
import Jumbotron from '@/components/Jumbotron'
import AboutJumbotron from './components/AboutJumbotron'

const about = () => {
  return (
    <div className="mt-[76px]">
      <AboutJumbotron />
      <Overview />
      <Culture />
      <Teams />
      <Milestone />
      <Pricing />
    </div>
  )
}

export default about