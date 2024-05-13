import Jumbotron from '@/components/Jumbotron'
import Image from 'next/image'
import React from 'react'
import ServiceJumbotron from './components/ServiceJumbotron'
import ServiceList from './components/ServiceList'
import Pricing from '../about/components/Pricing'

const service = () => {

  return (
    <>
      <ServiceJumbotron />
      <ServiceList />
      <Pricing />
    </>
  )
}

export default service