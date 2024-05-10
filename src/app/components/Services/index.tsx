import React from 'react'
import Cards from './components/Cards'

const DUMMYCARD_DATA = [
  {
    title: "Chatbot",
    description: "A chatbot is a computer program designed to simulate conversation with human users, especially over the Internet. Chatbots are often used to automate customer service and support, but they can also be used for other purposes such as providing information, entertainment, or conducting transactions",
    link: "/services",
    image: "/slide1.jpg",
  },
  {
    title: "Robotic Process Automation (RPA)",
    description: "UiPath is a software company that provides a platform for automating business processes. It offers a range of tools and solutions for automating tasks, such as robotic process automation (RPA), data capture, and analytics.",
    link: "/services",
    image: "/slide2.jpg",
  },
  {
    title: "Optical Character Recognition (OCR)",
    description: "OCR (Optical Character Recognition) is a technology used to identify and convert text from different media, such as printed documents or digital images, into text that can be processed by a computer.",
    link: "/services",
    image: "/slide3.jpg",
  },
  {
    title: "Data Management",
    description: "Intelligent Data Management Cloud (IDMC) is an artificial intelligence technology for digital transformation solutions that enable business users to manage data all across the business platform and integrate top products and solutions with trusted and efficiently",
    link: "/services",
    image: "/slide1.jpg",
  },
]

const Services = () => {
  return (
    <div id='services'>
      <div className='p-10 flex flex-col justify-center  gap-2 md:p-20 '>
        <div className="title bg-blue-500 text-center m-auto px-6 py-2 rounded-full font-bold text-white">
          <h4 className=''>~ Our Services ~</h4>
        </div>
        <div className="description text-center m-auto text-2xl font-DM-Sans font-semibold py-4   md:text-5xl md:w-1/2">
          <h2>We Are <span className='text-blue-700'>Dedicated </span>To Serve You All Time.</h2>
        </div>

        <div className="cards grid grid-cols-1 gap-8 md:grid-cols-4 ">
          {DUMMYCARD_DATA.map((data, index) => (
            <Cards key={index} {...data} />
          ))}

        </div>
      </div>
    </div>
  )
}

export default Services