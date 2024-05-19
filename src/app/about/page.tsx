import { Metadata } from 'next'
import AboutJumbotron from './components/AboutJumbotron'
import Culture from './components/Culture'
import Milestone from './components/Milestone'
import Overview from './components/Overview'
import Teams from '@/components/Team'



export const metadata: Metadata = {
  title: "About",
}
const about = () => {
  return (
    <div className="mt-[76px]">
      <AboutJumbotron />
      <Overview />
      <Culture />
      <Teams />
      <Milestone />

    </div>
  )
}

export default about