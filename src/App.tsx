import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HotDeserts from './components/HotDeserts'
import Banner from './components/Banner'
import PopularRecipie from './components/PopularRecipie'
import Reviews from './components/Reviews'
import Footer from './components/Footer'


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
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default App