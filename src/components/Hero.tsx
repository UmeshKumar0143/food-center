import Leaf from '../assets/food/leaf.png'
import Food from '../assets/food/food.png'
import Banana from '../assets/food/banana2.png'
import Spoon from '../assets/food/spoon.png'
import { FiShoppingCart } from 'react-icons/fi'
import { motion } from 'framer-motion'

export const  slideUp = (delay: number) =>{
    return {
        initial : {
            y : '100%',
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity : 1,
            transition : {
                duration : 0.8,
                delay: delay,
            },
        },
    };
}

const Hero = () => {
 return (
    <div className='container sm:flex sm:justify-around  overflow-hidden min-h-[600px]'>
        {/* Text Div */}
        <div>
            <div className='sm:ml-10 sm:mt-[165px] mt-12 '>
                <motion.h1 variants={slideUp(0.5)} initial="initial" whileInView="animate" className='text-5xl sm:text-left sm:text-6xl lg:text-7xl xl:text-8xl relative uppercase text-center text-outline font-bold text-transparent'>Yummy
                <img src={Leaf} alt="" className='w-[50px] absolute sm:left-[420px] top-0 right-0' />
                </motion.h1>
                <motion.h2 variants={slideUp(1)} initial = "initial" whileInView="animate" className='text-5xl sm:text-left sm:text-6xl lg:text-7xl xl:text-8xl  uppercase font-bold text-center mt-3'>BreakFast</motion.h2>
                <motion.p variants={slideUp(1.5)} initial = "initial" whileInView="animate"  className=' text-sm sm:text-left text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos temporibus perspiciatis soluta? </motion.p>
                <motion.div variants={slideUp(2)} initial = "initial" whileInView="animate" className='mt-9 flex justify-center sm:justify-start'>
                <button className='btn-primary flex items-center gap-2 justify-center '>
                    <FiShoppingCart/>
                    Order Now
                </button>
                </motion.div>
            </div>
        </div>
        {/* Images div */}
        <div className='relative mt-10 sm:mt-5 z-10 '>
            <motion.img initial = {{y:100, x: 200 , opacity: 0,rotate: 20 }} whileInView={{y:0, x:0 , rotate: 0, opacity: 1}} transition={{duration: 0.8}}  src={Food} alt="" className='w-[450px] img-shadow' />
            <motion.img initial = {{y:100, x: 200 , opacity: 0,rotate: 20 }} whileInView={{y:0, x:0 , rotate: 0, opacity: 1}} transition={{duration: 0.8,delay: 0.2}} src={Banana} alt="" className='w-[350px] absolute -top-[40px] -right-[130px] sm:top-0 sm:-right-[150px]  img-shadow' />
            <motion.img initial = {{y:100, x: 200 , opacity: 0,rotate: 120 }} whileInView={{y:0, x:0 , rotate: 76, opacity: 1}} transition={{duration: 0.8,delay: 0.3}} src={Spoon} alt="" className='w-[350px] sm:top-[300px] rotate-[75deg] absolute sm:left-0 -left-[60px] top-[180px] img-shadow' />
        </div>
        {/* Yellow Background  */}
        <div className='w-[2500px] h-[2500px] rounded-3xl rotate-45 bg-lightYellow absolute -top-[30%] z-0 left-[70%]'>

        </div>
    </div>
  )
}

export default Hero             