import {  FiShoppingCart } from 'react-icons/fi';
import Logo from '../assets/food/logo.png';
import { motion} from 'framer-motion'; 

export const navItems = [
    {
        title: "Home",
        path: '/',
        delay: 0.1, 
    },
    {
        title: "Menu",
        path: '/menu',
        delay: 0.2, 
    },
    {
        title: "About",
        path: "/about",
        delay: 0.3,
    },
    {
        title: "Delivery",
        path: "/delivery",
        delay: 0.4,
    },
    {
        title: "Contact Us",
        path: "/contact",
        delay: 0.5,
    },
]
const Navbar = () => {


const slideDown = (delay: number) =>{
    return {
        initial : {
            y : '-100%',
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

  return (
    <div className='container flex justify-between items-center font-leagueGothic '>
        <div>
            <motion.img initial={{opacity: 0 }} animate={{opacity: 1}} transition={{duration:0.8, delay: 0.5}} src={Logo} alt="" className='w-36' />
        </div>
        <div className=' gap-6 hidden md:flex'>
            {navItems.map((item,index)=><motion.a 
             variants={slideDown(item.delay)} 
             initial = "initial" 
             animate = "animate" 
             data-delay ={item.delay} 
             className='text-2xl inline-block px-2 py-2' key={index} href={item.path}>{item.title}</motion.a>)}
        </div>
        <motion.button variants={slideDown(1)} initial= "initial" animate = "animate" className='w-[40px] h-[40px] rounded-full bg-dark flex justify-center items-center'>
            <FiShoppingCart className='text-white text-sm font-bold'/>   
        </motion.button>
    </div>
  )
}

export default Navbar