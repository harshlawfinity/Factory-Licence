import Navbar from "./components/Navbar"
 
import Footer from "./components/Footer"
import ScrollTop from "./components/ScrollTop"
 
import Routing from "./utils/Routing.jsx"
import { useEffect, useState } from "react"



const App = () => {
    const [text, setText] = useState("");

 

  return (
    <div className='text-amber-300'>
      <Navbar />
      <ScrollTop />
      <Routing />
      <Footer />
      
      
    </div>
  )
}

export default App
