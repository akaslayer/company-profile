import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const ServiceList = () => {
  return (
    <div className='py-20 font-DM-Sans'>
      <h2 className='text-6xl font-bold text-center'>Our <span className='text-blue-700'>Services</span></h2>
      <div className="p-10 gap-20 flex flex-col  md:px-40 md:py-20">

        <div className="flex gap-12 flex-col lg:flex-row">
          <div className="leftContent gap-4 flex flex-col basis-0 lg:basis-1/2">
            <h1 className='font-bold text-4xl'>Chatbot</h1>
            <p className='text-justify text-md lg:text-lg'>Chatbots are like digital assistants you can chat with. They understand your messages and help you with tasks like answering questions, getting information, or even booking appointments. They use artificial intelligence to understand what you're asking and respond in a way that makes sense. Chatbots save time and make tasks easier by providing instant assistance. They're available 24/7 and can handle multiple conversations simultaneously, ensuring quick responses to user inquiries. By automating routine tasks, chatbots free up human resources to focus on more complex or strategic activities. Additionally, they improve customer satisfaction by offering personalized interactions and resolving issues efficiently.</p>
            <button className="flex items-center text-blue-700 font-bold bg-white border-2 border-black w-fit p-2 rounded-lg gap-2 shadow-lg  hover:bg-blue-700 hover:text-white ">
              <h5 className=' '>Check for details</h5>
              <FaArrowRight />
            </button>
          </div>
          <div className="m-auto order-first lg:order-last">
            <Image src='/Chatbot-pic.jpg' width={500} height={500} alt='' className='W-full h-full' />
          </div>
        </div>

        <div className="flex gap-12 flex-col lg:flex-row">
          <div className="leftContent gap-4 flex flex-col basis-0 lg:basis-1/2">
            <h1 className='font-bold text-4xl'>Robotic Process Automation (RPA)</h1>
            <p className='text-justify text-md lg:text-lg'>RPA stands for Robotic Process Automation. It's like having a digital assistant that can do repetitive tasks for you, but instead of a person, it's a software robot. These "robots" are programmed to mimic human actions, like clicking buttons, filling out forms, or copying data from one place to another. They work with your existing software systems, making them more efficient. RPA saves time and reduces errors by handling repetitive tasks that would normally require human effort. This frees up your team to focus on more important work, while also cutting down on costs.</p>
            <button className="flex items-center text-blue-700 font-bold bg-white border-2 border-black w-fit p-2 rounded-lg gap-2 shadow-lg  hover:bg-blue-700 hover:text-white ">
              <h5 className=' '>Check for details</h5>
              <FaArrowRight />
            </button>
          </div>
          <div className="m-auto order-first">
            <Image src='/RPA-pic.jpg' width={500} height={500} alt='' className='W-full h-full' />
          </div>
        </div>



        <div className="flex gap-12 flex-col lg:flex-row">
          <div className="leftContent gap-4 flex flex-col basis-0 lg:basis-1/2">
            <h1 className='font-bold text-4xl'>Optical Character Recognition (OCR)</h1>
            <p className='text-justify text-md lg:text-lg'>COCR technology converts images containing text into machine-readable text data. It essentially acts as a digital translator for text within images or scanned documents, making it searchable, editable, and analyzable by computers. This technology streamlines various processes by automating tasks such as data entry, document digitization, and content extraction. Additionally, OCR enhances accessibility by providing tools for visually impaired individuals and improving information retrieval efficiency. Overall, OCR simplifies document management, boosts productivity, and facilitates seamless integration of printed and digital content in various industries and applications.</p>
            <button className="flex items-center text-blue-700 font-bold bg-white border-2 border-black w-fit p-2 rounded-lg gap-2 shadow-lg  hover:bg-blue-700 hover:text-white ">
              <h5 className=' '>Check for details</h5>
              <FaArrowRight />
            </button>
          </div>
          <div className="m-auto order-first lg:order-last">
            <Image src='/OCR-pic.jpg' width={500} height={500} alt='' className='W-full h-full' />
          </div>
        </div>

        <div className="flex gap-12 flex-col lg:flex-row">
          <div className="leftContent gap-4 flex flex-col basis-0 lg:basis-1/2">
            <h1 className='font-bold text-4xl'>Data Management</h1>
            <p className='text-justify text-md lg:text-lg'>Data management involves the organization, storage, retrieval, and manipulation of data throughout its lifecycle. It encompasses various processes, including data collection, cleansing, integration, storage, analysis, and security. Effective data management ensures that data is accurate, accessible, and actionable for decision-making purposes. It involves implementing strategies, policies, and technologies to optimize data quality, reliability, and usability. By centralizing and standardizing data management practices, organizations can enhance efficiency, reduce errors, and derive valuable insights from their data assets. Overall, robust data management practices are essential for maximizing the value of data and driving informed decision-making in modern businesses and organizations.</p>
            <button className="flex items-center text-blue-700 font-bold bg-white border-2 border-black w-fit p-2 rounded-lg gap-2 shadow-lg  hover:bg-blue-700 hover:text-white ">
              <h5 className=' '>Check for details</h5>
              <FaArrowRight />
            </button>
          </div>
          <div className="m-auto order-first">
            <Image src='/DataManagement-pic.jpg' width={500} height={500} alt='' className='W-full h-full' />
          </div>
        </div>


      </div>
    </div>
  )
}

export default ServiceList