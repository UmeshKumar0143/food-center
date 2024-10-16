import food1 from '../assets/food/food.png'
import food2 from '../assets/food/food2-plate.png'
import food3 from '../assets/food/banner.png'
import { slideUp } from './Hero'
import { motion } from 'framer-motion'

const foods = [
    {
        name: "Hot Cake",
        img: food1,
        price: "$5.99",
        delay: 0.1,
    },
    {
        name: "Salad",
        img: food2,
        price: "$5.00",
        delay : 0.2,
    },
    {
        name: "Steak",
        img: food3,
        price: "$5.00",
        delay : 0.3,
    },
]

const HotDeserts = () => {
  return (
    <div className='container mt-3'>
            <h1 className='text-2xl text-green-500 font-semibold uppercase'>Hot Desserts</h1>
        <div>
            <div className='flex  sm:flex-row flex-col mt-8 gap-5 sm:gap-12'>
                {foods.map((item,index)=><motion.div variants={slideUp(item.delay)} initial="initial" whileInView="animate" key={index} className='bg-white/50 group gap-3 w-[400px] h-[100px] flex  shadow-md hover:cursor-pointer items-center rounded-xl p-3'>
                        <div>
                        <img src={item.img} alt="" className='w-24 img-shadow group-hover:scale-125 transition-all  duration-700 group-hover:rotate-[50deg]'/>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold'>{item.name}</h1>
                            <p  className='text-2xl text-yellow-400 font-semibold'>{item.price}</p>
                        </div>
                </motion.div>)}
            </div>
        </div>
    </div>
  )
}

export default HotDeserts