import ServiceJumbotron from './components/ServiceJumbotron'
import ServiceList from './components/ServiceList'
import Testimonial from '@/components/Testimonial'
import { Metadata } from 'next'
import Portofolio from './components/Portofolio'
import Pricing from './components/Pricing'

export const metadata: Metadata = {
  title: "Services",
}
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