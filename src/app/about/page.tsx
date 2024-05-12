import React from 'react'
import Teams from './components/Team'
import Milestone from './components/Milestone'
import Overview from './components/Overview'
import Pricing from './components/Pricing'
import Culture from './components/Culture'
import Jumbotron from '@/components/Jumbotron'

const about = () => {
  return (
    <>
      <Jumbotron />
      <Overview />
      <Culture />
      <Teams />
      <Milestone />
      <Pricing />

    </>
  )
}

export default about