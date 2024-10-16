import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

type Props = {}

const App = (props: Props) => {
  return (
    <div className='bg-white2 overflow-x-hidden'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App