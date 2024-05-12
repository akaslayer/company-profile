import Jumbotron from '@/components/Jumbotron'
import Image from 'next/image'
import React from 'react'
import ServiceJumbotron from './components/ServiceJumbotron'
import ServiceList from './components/ServiceList'

const service = () => {

  return (
    <>
      <ServiceJumbotron />
      <ServiceList />
    </>
  )
}

export default service