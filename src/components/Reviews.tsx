import Anipic from '../assets/food/ani.jpeg'
import BannerImg from '../assets/food/banner.png'
import { motion } from 'framer-motion'
import { slideUp } from "./Hero"
const Reviews = () => {
  return (
    <div className="container mt-32">
        <div className='container flex flex-col sm:flex-row justify-between items-center'>
        <div className="sm:w-[30%]">
            <motion.p variants={slideUp(0.5)} initial="initial" whileInView="animate" className="text-xl tracking-tight font-semibold font-poppins">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti blanditiis ipsam, optio molestias sit itaque a. Sint,ptio molestias sit itaque a. Sint, vero obcaecati. Ipsam."</motion.p>
            <div className='flex gap-3 mt-4 '>
            <motion.img variants={slideUp(0.8)} initial="initial" whileInView="animate" src={Anipic} alt="" className='w-14 h-14 rounded-full' />
            <span>
            <motion.h1 variants={slideUp(1.1)} initial="initial" whileInView="animate" className='text-lg font-bold'>John Doe</motion.h1>
            <motion.p variants={slideUp(1.4)} initial="initial" whileInView="animate">Designation</motion.p>
            </span>
            </div>
        </div>
        <motion.div initial ={{opacity: 0, scale: 0}} whileInView={{opacity: 1,scale: 1}} transition={{duration:0.8,delay:0.5}} className="sm:w-[400px] sm:h-[400px] group rounded-full mt-8 bg-lightYellow">
            <motion.img initial={{opacity: 0, x:-100, y:100}} whileHover={{scale: 1.2,rotate:15,x:50,y:-50}} whileInView={{opacity:1,x:0,y:0}} transition={{duration:0.3,delay:0.4 ,scale:{duration:0.5}}}   src={BannerImg} alt="" className='img-shadow' />
        </motion.div>
        </div>
    </div>
  )
}

export default Reviews