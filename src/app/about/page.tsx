import React from 'react'
import Teams from './components/Team'
import Milestone from './components/Milestone'
import Overview from './components/Overview'

const about = () => {
  return (
    <>
      <Overview />
      <Teams />
      <Milestone />
    </>
  )
}

export default about