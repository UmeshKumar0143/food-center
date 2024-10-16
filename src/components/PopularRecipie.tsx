import { foods } from "./HotDeserts"
import { slideUp } from "./Hero"
import { motion } from "framer-motion"
const PopularRecipie = () => {
  return (
    <div className="container">
        <div>
            <motion.h1 variants={slideUp(0.5)} initial="initial" whileInView="animate" className="text-4xl text-center font-leagueGothic uppercase font-semibold">Our Popular Recipie</motion.h1>
        </div>
        <div className="flex justify-center items-center">
        <div className='flex justify-center  sm:flex-row flex-col mt-8 gap-5 sm:gap-32'>
                {foods.map((item,index)=><motion.div variants={slideUp(item.delay)} initial="initial" whileInView="animate" key={index} className='bg-white/50 group gap-4 h-[330px] w-[220px] flex-col   shadow-md hover:cursor-pointer justify-between rounded-xl p-5'>
                        <div className="flex justify-center">
                        <img   src={item.img} alt="" className='w-36 img-shadow 
                        group-hover:scale-125 group-hover:rotate-45 group-hover:translate-x-[100px] group-hover:-translate-y-[100px] transition-all duration-700 
                        '/>
                        </div>
                        <div className="">
                          <div className="flex justify-center ">
                          <button className={`btn-primary opacity-0 group-hover:opacity-100 ${index!=0 && "mt-5"} transition-all duration-200 mt-2`}>Buy Now</button>
                          </div>
                          <div className="">
                            <h1 className='text-2xl mt-2 text-center font-semibold'>{item.name}</h1>
                            <p  className='text-2xl text-center text-yellow-400 font-semibold'>{item.price}</p>
                            </div>
                        </div>
                </motion.div>)}
            </div>
        </div>
    </div>
  )
}

export default PopularRecipie