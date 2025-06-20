import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import Routing from './utils/Routing'

const App = () => {
  return (
    <HelmetProvider>
      <Navbar />
      <ScrollTop />
      <Routing />
      <Footer />
    </HelmetProvider>
  )
}
export default App