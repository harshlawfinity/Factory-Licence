import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import SerrvicesGrid from "./components/SerrvicesGrid"
import FactoryLicenseSection from "./components/FactoryLicenseSection"
import StatsCard from "./components/StatsCard"
import FeatureCard from "./components/FeatureCard"
import AssistanceSection from "./components/AssistanceSection"
import WorkingProcess from "./components/WorkingProcess"
import TestimonialCarousel from "./components/TestimonialCarousel"
import CallToActionSection from "./components/CallToActionSection"
import Footer from "./components/Footer"
import FactoryLicensePage from "./components/FactoryLicensePage"
import FaqSection from "./components/FaqSection"
import Routing from "./utils/Routing.jsx"


const App = () => {
  return (
    <div className='text-amber-300'>
      <Navbar />
      <Routing />
      <Footer />
      
      
    </div>
  )
}

export default App
