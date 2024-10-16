import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

type Props = {}

const App = (props: Props) => {
  return (
    <div className='bg-white2 overflow-x-hidden '>
      <div className='relative overflow-hidden'>
      <Navbar/>
      <Hero/>
      </div>
    </div>
  )
}

export default App