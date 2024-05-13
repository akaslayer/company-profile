import slide1 from '../../../../public/slide1.jpg'
import slide3 from '../../../../public/slide3.jpg'
import Carousel from './components/Caorusel'



const slides = [
  "https://res.cloudinary.com/dv9bbdl6i/image/upload/v1715571573/slide3_jdcsie.jpg",
  "https://res.cloudinary.com/dv9bbdl6i/image/upload/v1715578141/slide1_gv2sue.jpg"
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