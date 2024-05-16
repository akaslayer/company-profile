import slide1 from '../../../../public/slide1.jpg'
import slide3 from '../../../../public/slide3.jpg'
import Carousel from './components/Caorusel'



const slides = [
  "https://res.cloudinary.com/dv9bbdl6i/image/upload/v1715860687/krakenimages-376KN_ISplE-unsplash_cqf1ig.jpg",
  "https://res.cloudinary.com/dv9bbdl6i/image/upload/v1715578141/slide1_gv2sue.jpg"
]

const Hero = () => {
  return (
    <div className='overflow-hidden'>
      <Carousel image={slides} />
    </div>
  )
}

export default Hero