import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HotDeserts from './components/HotDeserts'

type Props = {}

const App = (props: Props) => {
  return (
    <div className='bg-white2 '>
      <div className='relative overflow-hidden'>
      <Navbar/>
      <Hero/>
      </div>
      <HotDeserts/>
    </div>
  )
}

export default App