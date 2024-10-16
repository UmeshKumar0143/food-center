import React from 'react'
import Leaf from '../assets/food/leaf.png'
import { FiShoppingCart } from 'react-icons/fi'
type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='container min-h-[600px]'>
        {/* Text Div */}
        <div>
            <div className='sm:ml-10 sm:mt-[165px] mt-12 '>
                <h1 className='text-5xl sm:text-left sm:text-6xl lg:text-7xl xl:text-8xl relative uppercase text-center text-outline font-bold text-transparent'>Yummy
                <img src={Leaf} alt="" className='w-[50px] absolute sm:left-[420px] top-0 right-0' />
                </h1>
                <h2 className='text-5xl sm:text-left sm:text-6xl lg:text-7xl xl:text-8xl  uppercase font-bold text-center mt-3'>BreakFast</h2>
                <p className=' text-sm sm:text-left text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos temporibus perspiciatis soluta? </p>
                <div className='mt-9 flex justify-center sm:justify-start'>
                <button className='btn-primary flex items-center gap-2 justify-center '>
                    <FiShoppingCart/>
                    Order Now
                </button>
                </div>
            </div>
        </div>
        {/* Images div */}
        <div></div>
    </div>
  )
}

export default Hero             