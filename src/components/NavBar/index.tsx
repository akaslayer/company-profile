'use client'
import { useStateValue } from '@/context/StateContext'
import Image from 'next/image'
import logo from '../../../public/logo2.png'
import Link from 'next/link'




const NavBar = () => {
  const { setStateSideBar } = useStateValue()

  function handleOpenSideBar() {
    setStateSideBar(prevState => !prevState)
  }
  return (
    <>
      <div className="navBar shadow-md fixed w-full z-40 bg-white ">
        <nav className='flex items-center justify-between'>
          <div className="logo relative bg-white flex  px-3 py-2 w-1/3  md:w-1/5 md:bg-blue-400 md:justify-center">
            <Image src={logo} alt="" className='w-20' loading="eager" />
          </div>
          <ul className='gap-20 px-20 font-semibold text-md font-DM-Sans hidden md:flex-row md:flex'>
            <li className='hover:text-blue-400'><Link href='/'>Home</Link></li>
            <li className='hover:text-blue-400'><Link href='/about'>About</Link></li>
            <li className='hover:text-blue-400'><Link href='/services'>Services</Link></li>
            <li className='hover:text-blue-400'>Teams</li>
          </ul>
          <div className='hamburger h-fit cursor-pointer px-[3px] py-2  mr-5 z-40 hover:bg-white md:hidden' onClick={handleOpenSideBar}>
            <div className='w-[30px] h-[2px] my-[6px] bg-black'></div>
            <div className='w-[30px] h-[2px] my-[6px] bg-black'></div>
            <div className='w-[30px] h-[2px] my-[6px] bg-black'></div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavBar