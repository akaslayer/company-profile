import React from 'react'
import Teams from './components/Team'
import Milestone from './components/Milestone'
import Overview from './components/Overview'
import Pricing from './components/Pricing'
import Culture from './components/Culture'

const about = () => {
  return (
    <>
      <Overview />
      <Culture />
      <Teams />
      <Milestone />
      <Pricing />

    </>
  )
}

export default about