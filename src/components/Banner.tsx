import BannerImg from '../assets/food/banner.png'
import { motion } from 'framer-motion'
import { slideUp } from './Hero'
const Banner = () => {
  return (
    <div className="container mt-20 py-12 flex justify-center items-center">
        <div className='flex-col flex sm:flex-row justify-between items-center'>
        {/* Image */}
        <motion.div initial ={{opacity: 0, scale: 0}} whileInView={{opacity: 1,scale: 1}} transition={{duration:0.5,delay:0.3}} className="sm:w-[400px] sm:h-[400px] group rounded-full bg-lightYellow">
            <motion.img initial={{opacity: 0, x:-100, y:100}} whileHover={{scale: 1.2,rotate:15,x:50,y:-50}} whileInView={{opacity:1,x:0,y:0}} transition={{duration:0.3,delay:0.4 ,scale:{duration:0.5}}}   src={BannerImg} alt="" className='img-shadow' />
        </motion.div>
        {/* Text */}
        <div className='sm:w-[40%] mt-12  '>
            <motion.h1 variants={slideUp(0.5)} initial="initial" whileInView="animate" className='text-6xl  tracking-wide  uppercase font-bold font-leagueGothic'>The Best Yummy food   in the town</motion.h1>
            <motion.p  variants={slideUp(1)} initial="initial" whileInView="animate" className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea enim porro!</motion.p>
            <motion.button variants={slideUp(1.5)} initial="initial" whileInView="animate" className='btn-primary mt-8'>Order Now</motion.button>
        </div>
        </div>
    </div>
  )
}

export default Banner