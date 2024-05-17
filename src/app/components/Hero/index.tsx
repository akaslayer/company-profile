import slide1 from '../../../../public/slide1.jpg'
import slide3 from '../../../../public/slide3.jpg'
import Carousel from './components/Caorusel'



const slides = [
  "https://res.cloudinary.com/dv9bbdl6i/image/upload/c_fill,w_1280,h_720/v1715928441/slide1_1_nc5g81.webp",
  "https://res.cloudinary.com/dv9bbdl6i/image/upload/c_fill,w_1280,h_720/v1715928441/krakenimages-376KN_ISplE-unsplash_sqdh6i.webp"
]

const Hero = () => {
  return (
    <div className='overflow-hidden'>
      <Carousel image={slides} />
    </div>
  )
}

export default Hero