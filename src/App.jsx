import { lazy, Suspense } from "react"

// Lazy load non-critical components
const Navbar = lazy(() => import("./components/Navbar"))
const Footer = lazy(() => import("./components/Footer"))
const ScrollTop = lazy(() => import("./components/ScrollTop"))
const Routing = lazy(() => import("./utils/Routing.jsx"))

const App = () => {
  return (
    <div className=''>
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <Navbar />
        <ScrollTop />
        <Routing />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
