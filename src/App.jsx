import './App.css'
import Navbar from './Component/Navbar/Navbar'
import HeroSection from './Component/HeroSection/HeroSection'
import Service from './Component/Services/Service'
import About from './Component/About/About'
import Stats from './Component/Stats/Stats'
import Products from './Component/Products/Products'

function App() {
  return (
  <>
  <Navbar />
  <HeroSection />
  <div className='border-b-2 border-green-700  mt-12 mx-12'></div>
  <Service />
  <About />
  <Stats />
  <div className='border-b-2 border-green-700  my-12 mx-12'></div>
  <Products />
  </>
  )
}

export default App
