import Image from 'next/image'
import { FaBrain, FaTeamspeak } from 'react-icons/fa'
import { FiCloudLightning } from 'react-icons/fi'
import { GiFlagObjective } from 'react-icons/gi'
import { GrIntegration } from 'react-icons/gr'

const Culture = () => {
  return (
    <div className='grid py-20 px-5 gap-8 bg-slate-300 md:grid-cols-2 md:h-[90vh]'>
      <div className="flex flex-col gap-8 md:px-20">
        <div className="relative">
          <span className="absolute left-0 right-0 top-0 h-1 w-1/4 md:w-1/6 bg-blue-500"></span>
          <h2 className='text-4xl font-bold pt-2'>ITechno - Where Innovation Meets Excellence</h2>
        </div>
        <p className='text-md font-medium text-left'>At ITechno, we&apos;re not just an IT consulting company; we&apos;re a community driven by passion, innovation, and collaboration. Our culture sets us apart, guiding every aspect of our work and interactions.</p>
        <h3 className='text-3xl font-bold pt-2'>What <span className='text-blue-800'>Define</span> Us :</h3>
        <div className="flex flex-col gap-2">
          <div className="culture-item flex items-center gap-5">
            <FaBrain className='size-8 text-blue-700' />
            <div className="flex flex-col">
              <h4 className='font-bold text-xl'>Innovation</h4>
              <p className='font-normal text-md'>We love new ideas and finding smart solutions to challenges.</p>
            </div>
          </div>
          <div className="culture-item flex items-center gap-5">
            <FaTeamspeak className='size-8 text-blue-700' />
            <div className="flex flex-col">
              <h4 className='font-bold text-xl '>Teamwork</h4>
              <p className='font-normal text-md'>We work together, support each other, and achieve great things as a team.</p>
            </div>
          </div>
          <div className="culture-item flex items-center gap-5">
            <GiFlagObjective className='size-8 text-blue-700' />
            <div className="flex flex-col">
              <h4 className='font-bold text-xl'>Excellence</h4>
              <p className='font-normal text-md'>We&apos;re all about quality. We aim high and deliver our best every time.</p>
            </div>
          </div>
          <div className="culture-item flex items-center gap-5">
            <GrIntegration className='size-8 text-blue-700' />
            <div className="flex flex-col">
              <h4 className='font-bold text-xl '>Integrity</h4>
              <p className='font-normal text-md'>We do things right, with honesty and fairness in everything we do.</p>
            </div>
          </div>
          <div className="culture-item flex items-center gap-5">
            <FiCloudLightning className='size-8 text-blue-700' />
            <div className="flex flex-col">
              <h4 className='font-bold text-xl '>Empowerment</h4>
              <p className='font-normal text-md'>We believe in you. We&apos;ll help you grow and succeed in your career.</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" no-scrollbar grid grid-cols-2 grid-rows-2 rounded-lg gap-5 py-5 font-DM-Sans md:px-10  ">
        <Image src={'/RPA-pic.jpg'} width={500} height={500} className='h-full rounded-lg object-cover row-span-2' alt='' />
        <Image src={'/Chatbot-pic.jpg'} width={500} height={500} className='h-full rounded-lg object-cover object-left-top' alt='' />
        <Image src={'/OCR-pic.jpg'} width={500} height={500} className='h-full rounded-lg object-cover object-left-top' alt='' />
      </div>

    </div >

  )
}

export default Culture