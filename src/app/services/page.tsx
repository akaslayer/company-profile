import Jumbotron from '@/components/Jumbotron'
import Image from 'next/image'
import React from 'react'
import ServiceJumbotron from './components/ServiceJumbotron'
import ServiceList from './components/ServiceList'

import Portofolio from './components/Portofolio'
import Pricing from './components/Pricing'
import Testimonial from '../components/Testimonial'

const service = () => {

  return (
    <div className='mt-[76px]'>
      <ServiceJumbotron />
      <ServiceList />
      <Portofolio />
      <Pricing />
      <Testimonial />
    </div>
  )
}

export default service