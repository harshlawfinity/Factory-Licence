import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import SerrvicesGrid from "./components/SerrvicesGrid"
import FactoryLicenseSection from "./components/FactoryLicenseSection"

const App = () => {
  return (
    <div className='text-amber-300'>
      <Navbar />
      <HeroSection />
      <SerrvicesGrid />
      <FactoryLicenseSection />
      
      
    </div>
  )
}

export default App
