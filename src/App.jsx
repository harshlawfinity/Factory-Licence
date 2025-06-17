import { lazy, Suspense } from "react"
import CookieConsent from 'react-cookie-consent';

// Lazy load non-critical components
const Navbar = lazy(() => import("./components/Navbar"))
const Footer = lazy(() => import("./components/Footer"))
const ScrollTop = lazy(() => import("./components/ScrollTop"))
const Routing = lazy(() => import("./utils/Routing.jsx"))
import ReactPixel from 'react-facebook-pixel';

ReactPixel.init('1451817052652745');
ReactPixel.pageView();
ReactPixel.track('ViewContent');
ReactPixel.track('ContactButtonClick');



const App = () => {
  return (
    <div className=''>
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <Navbar />
        <ScrollTop />
        <Routing />
        <Footer />
      </Suspense>

     <div className="">
      <CookieConsent
  location="bottom"
  buttonText="Accept"
  declineButtonText="Decline"
  enableDeclineButton
  cookieName="siteCookieConsent"
  style={{ background: "#2B373B" }}
  buttonStyle={{
    backgroundColor: "#642bd5",
    color: "#fff",
    fontSize: "13px",
    borderRadius: "5px",
    padding: "8px 16px",
    border: "none",
    marginRight: "10px",
  }}
  declineButtonStyle={{
    backgroundColor: "#999",
    color: "#fff",
    fontSize: "13px",
    borderRadius: "5px",
    padding: "8px 16px",
    border: "none",
  }}
  onAccept={() => {
    ReactPixel.init('1451817052652745');
    ReactPixel.pageView();
    ReactPixel.track('ViewContent');
   }}
  onDecline={() => {
    console.log("User declined cookie tracking.");
  }}
  expires={150}
>
  We use cookies to enhance user experience. You can accept or decline.
</CookieConsent>

     </div>
    </div>
  )
}

export default App
