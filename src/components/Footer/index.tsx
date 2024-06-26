import Image from 'next/image'
import Link from 'next/link'
import { BiPaperPlane } from 'react-icons/bi'
import { FaFacebookF, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

const Footer = () => {
  return (
    <div className=' py-10 font-DM-Sans bg-slate-100'>
      <div className="grid items-center gap-8 md:grid-cols-3 px-2  md:px-20">
        <div className="item flex flex-col gap-4 p-4">
          <Image alt="" src='/logo2.png' width={100} height={100} />
          <p className='text-lg font-semibold'>An integrated information & technology system provider, dedicated to delivering highly effective solutions in the field of Information Systems.</p>
          <Link href="/about" className="relative rounded-full py-2 px-2 overflow-hidden group bg-gradient-to-r from-cyan-500 to-blue-500 w-fit hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 text-white transition-all ease-out duration-300 md:px-10">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white rounded-full opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative rounded-full text-md font-semibold md:text-lg">About Us</span>
          </Link>
        </div>
        <div className="item flex flex-col gap-4 p-4 ">
          <div className="relative">
            <h2 className='text-2xl font-bold'>Newsletter</h2>
            <span className="absolute left-0 right-0 bottom-0 h-1 w-1/6 bg-blue-500"></span>
          </div>
          <p className='text-lg font-semibold'>Subscribe our newsletter to get our latest update & news.</p>
          <div className="newsletterInput flex text-md">
            <input id="email" autoComplete="false" type="text" className='border-2 border-black py-2 pl-4' placeholder='Your email address' />
            <button aria-label="newsLetter" className='bg-gradient-to-r from-cyan-500 to-blue-500 px-7 border-y-2 border-r-2 border-black py-2'><BiPaperPlane className='
            text-white' /></button>
          </div>
          <div className="icon flex gap-2">
            <FaTwitter className='hover:text-blue-500' />
            <FaLinkedin className='hover:text-blue-500' />
            <FaFacebookF className='hover:text-blue-500' />
          </div>
        </div>
        <div className="item flex flex-col gap-4 p-4 ">
          <div className="relative">
            <h2 className='text-2xl font-bold'>Official info</h2>
            <span className="absolute left-0 right-0 bottom-0 h-1 w-1/6 bg-blue-500"></span>
          </div>
          <div className="contact flex flex-col gap-3">
            <div className="contact-item flex gap-4 items-center">
              <MdLocationOn />
              <h1>Alamat Khayalan, Indonesia</h1>
            </div>
            <div className="contact-item flex gap-4 items-center">
              <FaPhoneAlt />
              <h1>008-8800-005</h1>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className="font-bold text-lg flex flex-col gap-0">Open Hours :</h2>
            <h3>Mon – Sat: 8 am – 5 pm</h3>
            <h3> Sunday: CLOSED</h3>
          </div>

        </div>
      </div >
      <h2 className='text-center font-bold py-4 text-blue-900 bg-slate-50'>Copyright © 2024 By Hendry</h2>
    </div >
  )
}

export default Footer