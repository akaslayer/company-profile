import slide1 from '../../../../public/slide1.jpg'
import slide3 from '../../../../public/slide3.jpg'
import Carousel from './components/Caorusel'



const slides = [
  slide3, slide1
]

const Hero = () => {
  return (
    <div className='pt-20'>
      <div className='overflow-hidden'>
        <Carousel image={slides} />
      </div>
    </div>


  )
}

export default Hero