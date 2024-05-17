import Jumbotron from '@/components/Jumbotron'
import Image from 'next/image'
import React from 'react'
import ServiceJumbotron from './components/ServiceJumbotron'
import ServiceList from './components/ServiceList'
import Pricing from '../about/components/Pricing'
import Portofolio from './components/Portofolio'

const service = () => {

  return (
    <div className='mt-[76px]'>
      <ServiceJumbotron />
      <ServiceList />
      <Portofolio />
      <Pricing />
    </div>
  )
}

export default service