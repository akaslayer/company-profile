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
          <div className="logo relative bg-white flex  px-3 py-2 w-1/3 rounded-md md:w-1/5 md:bg-blue-400 md:justify-center">
            <Image src={logo} alt="" className='w-20' loading="eager" />
          </div>
          <ul className='gap-20 px-20 font-semibold text-md font-DM-Sans hidden md:flex-row md:flex'>
            <Link href='/'><li className='hover:text-blue-400'>Home</li></Link>
            <Link href='/about'><li className='hover:text-blue-400'>About</li></Link>
            <li className='hover:text-blue-400'>Products</li>
            <li className='hover:text-blue-400'>Teams</li>
          </ul>
          <div className='hamburger h-fit cursor-pointer px-[3px] py-2 rounded-md mr-5 z-40 hover:bg-white md:hidden' onClick={handleOpenSideBar}>
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