'use client'
import { useStateValue } from "@/context/StateContext";
import Image from "next/image";
import { useEffect } from "react";
import logo from '../../../public/logo2.png';
import x from '../../../public/x-solid.svg';
import Link from "next/link";
import { usePathname } from "next/navigation";


const SideBar = () => {
  const { openSideBar, setStateSideBar } = useStateValue()
  function handleOpenSideBar() {
    setStateSideBar(prevState => !prevState)
  }
  const pathname = usePathname()
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && openSideBar) {
        setStateSideBar(false);
      }
    };

    let timeoutId: NodeJS.Timeout;

    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    handleResize();
    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [openSideBar, setStateSideBar]);

  const buttonDesign = ' w-full h-full flex items-center justify-center rounded-lg border-2 border-blue-200 hover:bg-blue-400 hover:text-white transition-colors duration-300';
  return (
    <div className={`h-full w-full bg-white flex flex-col fixed  z-50  border-blue-300 border-t-2 transition-all  ease in duration-300 ${openSideBar ? 'top-0 ' : 'top-[-100%]'}`} >
      <Image src={x} alt="tanda x" className='w-5 absolute top-8 right-8' onClick={handleOpenSideBar} />
      <nav className="flex flex-col gap-12  ">
        <div className=" flex justify-center align-center items-center p-3 shadow-blue-300  shadow-lg  rounded-b-[60px] pb-9 border-solid border-blue-200   ">
          <div className="flex justify-center shadow-lg px-6 py-9  shadow-blue-200 self-center  items-center rounded-full border-2 border-solid border-blue-200 bg-blue-300 ">
            <Image src={logo} alt="logo" className="w-28 " />
          </div>
        </div>
        <ul className='flex flex-col font-DM-Sans text-xl  text-center font-semibold justify-center items-center gap-10' >
          <li className="w-full max-w-60 h-16"><Link href={'/'} onClick={handleOpenSideBar} className={`${buttonDesign} link ${pathname === '/' ? 'bg-blue-500 text-white' : ''}`}>Home</Link></li>
          <li className="w-full max-w-60 h-16"><Link href={'/about'} onClick={handleOpenSideBar} className={`${buttonDesign} link ${pathname === '/about' ? 'bg-blue-500 text-white' : ''}`}>About</Link></li>
          <li className="w-full max-w-60 h-16"><Link href={'/services'} onClick={handleOpenSideBar} className={`${buttonDesign} link ${pathname === '/services' ? 'bg-blue-500 text-white' : ''}`}>Services</Link></li>
          <li className="w-full max-w-60 h-16"><Link href={'/teams'} onClick={handleOpenSideBar} className={`${buttonDesign} link ${pathname === '/teams' ? 'bg-blue-500 text-white' : ''}`}>Teams</Link></li>
        </ul>
      </nav>

    </div>

  )
}

export default SideBar