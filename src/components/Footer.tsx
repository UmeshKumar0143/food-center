import { a } from 'framer-motion/client'
import Logo from '../assets/food/logo.png'
import { navItems } from './Navbar'

const Footer = () => {
  return (
    <div className='h-[250px] container flex justify-between gap-32 mt-24 py-16 rounded-t-3xl bg-lightYellow'>
        <div className='flex flex-col w-[30%] gap-2'>
            <img src={Logo} alt="" className='w-28 ' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nihil in eveniet explicabo</p>
            <span>Contact@food.com</span>
        </div>
        <div>
            <h1 className='text-3xl font-semibold'>Quick Links</h1>
            <div className='flex flex-col '>
                {navItems.map((item,index)=><a key={index} className='text-lg hover:text-darkGreen hover:underline' href={item.path}>{item.title}</a>)}
            </div>
        </div>
        <div>
            <h1 className='text-3xl font-semibold'>Quick Links</h1>
            <div className='flex flex-col '>
                {navItems.map((item,index)=><a className='text-lg' href={item.path}>{item.title}</a>)}
            </div>
        </div>
    </div>
  )
}

export default Footer