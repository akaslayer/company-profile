import React from 'react'

const Culture = () => {
  return (
    <div className='grid py-20 px-5 gap-8 bg-slate-300 md:grid-cols-2 md:px-40'>
      <div className="flex flex-col gap-8">
        <div className="relative">
          <span className="absolute left-0 right-0 top-0 h-1 w-1/4 md:w-1/6 bg-blue-500"></span>
          <h2 className='text-4xl font-bold pt-2'>ITechno - Where Innovation Meets Excellence</h2>
        </div>
        <p className='text-md font-medium text-left'>At ITechno, we&apos;re not just an IT consulting company; we&apos;re a community driven by passion, innovation, and collaboration. Our culture sets us apart, guiding every aspect of our work and interactions.</p>
      </div>
      <div className="flex flex-col gap-5 px-5 font-DM-Sans md:px-10">
        <h3 className='text-3xl font-bold pt-2'>What define us :</h3>
        <ol className="list-decimal font-medium">
          <li><strong>Innovation</strong>   : We love new ideas and finding smart solutions to challenges.</li>
          <li><strong>Teamwork</strong>     : We work together, support each other, and achieve great things as a team.</li>
          <li><strong>Excellence</strong>   : We're all about quality. We aim high and deliver our best every time.</li>
          <li><strong>Integrity</strong>    : We do things right, with honesty and fairness in everything we do.</li>
          <li><strong>Empowerment</strong>  : We believe in you. We&apos;ll help you grow and succeed in your career.</li>
        </ol>
      </div>
    </div>

  )
}

export default Culture