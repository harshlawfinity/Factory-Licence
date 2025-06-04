import React, { Suspense, lazy } from "react";
import { Link, Route, Routes } from "react-router-dom";

// Lazy-loaded components
const Home = lazy(() => import('../Home'));
const FactoryLicensePage = lazy(() => import('../components/FactoryLicensePage'));
const FactoryLicenseDelhi = lazy(() => import('../components/FactoryLicenseDelhi.jsx'));
const FactoryLicenseHaryana = lazy(() => import('../components/FactoryLicenseHaryana.jsx'));
const FactoryLicenseUP = lazy(() => import('../components/FactoryLicenseUP.jsx'));
const Contact = lazy(() => import('../components/Contact.jsx'));
const PrivacyPolicy = lazy(() => import('../components/PrivacyPolicy.jsx'));
const RefundCancellation = lazy(() => import('../components/RefundCancellation.jsx'));
const TermsConditions = lazy(() => import('../components/TermsConditions.jsx'));
const ThankYou = lazy(() => import('../components/ThankYou.jsx'));
const Payments = lazy(() => import('../components/Payments.jsx'));
const AboutUS = lazy(() => import('../components/AboutUS.jsx'));

const Routing = () => {
  return (
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/factory-licence" element={<FactoryLicensePage />} />
        <Route path="/factory-licence-in-delhi" element={<FactoryLicenseDelhi />} />
        <Route path="/factory-licence-in-haryana" element={<FactoryLicenseHaryana />} />
        <Route path="/factory-licence-in-uttar-pradesh" element={<FactoryLicenseUP />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-cancellation" element={<RefundCancellation />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/about" element={<AboutUS />} />

        <Route
          path="*"
          element={
            <div className="text-center mt-20">
              Page Not Found. <Link to="/" className="text-blue-500">Go Home</Link>
            </div>
          }
        />
      </Routes>
   );
};

export default Routing;
