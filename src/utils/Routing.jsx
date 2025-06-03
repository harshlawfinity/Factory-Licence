import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from '../Home';
import FactoryLicensePage from '../components/FactoryLicensePage';
import FactoryLicenseDelhi from '../components/FactoryLicenseDelhi.jsx';
import FactoryLicenseHaryana from '../components/FactoryLicenseHaryana.jsx';
import FactoryLicenseUP from '../components/FactoryLicenseUP.jsx';
 import Contact from '../components/Contact.jsx';
import PrivacyPolicy from '../components/PrivacyPolicy.jsx';
import RefundCancellation from '../components/RefundCancellation.jsx';
import TermsConditions from '../components/TermsConditions.jsx';
import ThankYou from '../components/ThankYou.jsx';
import Payments from '../components/Payments.jsx';
import AboutUS from '../components/AboutUS.jsx';





const Routing = () => {
  return (
    <>
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


        
        <Route path="*" element={<div className="text-center mt-20">Page Not Found. <Link to="/" className="text-blue-500">Go Home</Link></div>} />

        
     
      </Routes>
    </>
  );
};

export default Routing;