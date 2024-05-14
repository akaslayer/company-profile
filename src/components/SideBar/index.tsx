'use client'
import { useStateValue } from "@/context/StateContext";
import Image from "next/image";
import { useEffect } from "react";
import logo from '../../../public/logo2.png';
import x from '../../../public/x-solid.svg';


const SideBar = () => {
  const { openSideBar, setStateSideBar } = useStateValue()
  function handleOpenSideBar() {
    setStateSideBar(prevState => !prevState)
  }
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

  const buttonDesign = 'bg-transparant w-1/3 m-auto rounded-lg p-3 border-2 border-blue-200 hover:bg-blue-400 hover:text-white'
  return (
    <div className={`h-full w-full bg-white flex flex-col fixed  z-50  border-blue-300 border-t-2 transition-all  ease in duration-300 ${openSideBar ? 'top-0 ' : 'top-[-100%]'}`} >
      <Image src={x} alt="tanda x" className='w-5 absolute top-8 right-8' onClick={handleOpenSideBar} />

      <nav className="flex flex-col gap-12  ">
        <div className=" flex justify-center align-center items-center p-3 shadow-blue-300  shadow-lg  rounded-b-[60px] pb-9 border-solid border-blue-200   ">
          <div className="flex justify-center shadow-lg px-6 py-9  shadow-blue-200 self-center  items-center rounded-full border-2 border-solid border-blue-200 bg-blue-300 ">
            <Image src={logo} alt="logo" className="w-28 " />
          </div>
        </div>
        <ul className='flex flex-col font-DM-Sans text-xl gap-6 text-center font-semibold' >
          <li className={buttonDesign}>Home</li>
          <li className={buttonDesign}>About</li>
          <li className={buttonDesign}>Products</li>
          <li className={buttonDesign}>Teams</li>
        </ul>
      </nav>
      <div className="absolute bottom-8 right-1/2 translate-x-1/2 py-4 px-4  shadow-xl rounded-full bg-white font-medium text-md text-blue-400 hover:bg-blue-400 hover:text-white">
        <h2 >Made with love by Hendry</h2>
      </div>
    </div>

  )
}

export default SideBar