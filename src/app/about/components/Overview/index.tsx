'use client'
import React from 'react'
import { FaCircle, FaWind } from 'react-icons/fa'
import { FaRegCircle } from "react-icons/fa6";
import { aboutTabsContent } from '@/utils/DummyData'
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Image from 'next/image';
import { TbTrophy } from 'react-icons/tb';


const Overview = () => {
  return (
    <div className='grid grid-cols-1  pt-20 pb-5 gap-8 bg-slate-100 px-20 items-center md:grid-cols-2 md:pt-64'>
      <div className="flex flex-col  gap-5 md:px-40">
        <div className="title flex gap-8 items-center font-bold text-3xl text-blue-600">
          <h3>About Us</h3>
          <FaWind></FaWind>
        </div>
        <h1 className='font-bold text-3xl'>Choose The Best IT Service Company</h1>
        <p>ITSoft has been optimized to give your visitors the best experience in terms of UX /UI, with a unique design.</p>
        <div className="flex w-full flex-col font-DM-Sans">
          <Tabs aria-label="Tabs Variants" variant='underlined' color='primary' size='lg' classNames={{
            tabList: "gap-8 rounded-none font-bold p-0 border-b border-divider border-gray-600",
            cursor: "w-full bg-blue-400",
            tab: " px-0 h-12",
            tabContent: "group-data-[selected=true]:text-blue-400"
          }}>
            {aboutTabsContent.map((value) => (
              <Tab key={value.id} title={value.title} >
                <Card className='shadow-none bg-transparent '>
                  <CardBody className=' text-justify text-gray-600 h-72 md:h-62'>
                    {value.content}
                  </CardBody>
                </Card>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>



      <div className="relative h-full w-full flex justify-center ">
        <FaRegCircle className='absolute size-full top-0 -translate-y-[20%] left-0 right-0 z-0 text-blue-400' />
        <div className="z-20 relative h-fit">
          <Image src={'/sucess-bg.jpg'} width={500} height={500} alt='' className='' />
          <div className="absolute flex items-center bottom-0 w-full py-2 px-4  rounded-t-[30%]  gap-8  bg-white z-30 md:px-16 ">
            <TbTrophy className='size-16' color='orange' />
            <div className="flex flex-col font-DM-Sans">
              <h1 className='font-bold md:text-lg'>Best Awarded Company</h1>
              <p className='text-sm'>We adapt our delivery to the way your work, whether as an external provider.</p>
            </div>
          </div>
        </div>
      </div>


    </div >
  )
}

export default Overview