import Image from 'next/image'
import { FaThumbsUp } from 'react-icons/fa'
import { MdMiscellaneousServices } from 'react-icons/md'
import profile from '../../../../public/profile.jpg'
import dot from '../../../../public/dot-movement.png'
import Link from 'next/link'

const Overview = () => {
  return (
    <div className='py-28 bg-slate-100 px-5 md:px-60'>
      <div className="grid gap-20 items-center md:grid-cols-2">
        <div className="relative flex justify-end md:px-20">
          <div className="w-full relative z-20 ">
            <Image src={profile} alt='' className='rounded-lg h-full object-cover' width={400} height={600} />
          </div>
          <div className='absolute top-0 right-0 z-0 -translate-y-1/4 move-left-animation'>
            <Image src={dot} alt='' width={400} height={400} className='w-60  object-cover' />
          </div>
        </div>
        <div className="description flex flex-col gap-5">
          <button className='p-3 bg-white w-fit rounded-full font-bold text-blue-600'>About our company ~</button>
          <h2 className='font-bold text-5xl'>Choose <span className='text-blue-600'>The Best</span> IT Service Company</h2>
          <p className='p-4 border-blue-600 border-l-4'>An integrated information and technology system provider, dedicated to delivering highly effective solutions in the field of Information Systems. Our core business focuses on information technology services, digital transformation and IT infrastructure. Our company started with only 10 (ten) personnel, currently, after years of experience, we are supported by more than 1000 consultants and developers.</p>
          <hr />
          <div className="flex gap-8 items-center">
            <div className="icon flex gap-3 items-center">
              <FaThumbsUp className="text-blue-600" size={25} />
              <h3 className='text-xl'>Moneyback Guarantee</h3>
            </div>
            <div className="icon flex gap-3 items-center">
              <MdMiscellaneousServices className='text-blue-600' size={25} />
              <h3 className='text-xl'>Technical Support</h3>
            </div>
          </div>
          <hr />
          <Link href="/about" className="relative rounded-full py-2 px-2 overflow-hidden group bg-gradient-to-r from-cyan-500 to-blue-500 w-fit hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 text-white transition-all ease-out duration-300 md:px-10">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white rounded-full opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative rounded-full text-sm font-semibold md:text-lg">More about us</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Overview