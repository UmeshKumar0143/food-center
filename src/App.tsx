import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HotDeserts from './components/HotDeserts'
import Banner from './components/Banner'
import PopularRecipie from './components/PopularRecipie'


const App = () => {
  return (
    <div className='bg-white2 overflow-hidden'>
      <div className='relative overflow-hidden'>
      <Navbar/>
      <Hero/>
      </div>
      <HotDeserts/>
      <Banner/>
      <PopularRecipie/>
    </div>
  )
}

export default App