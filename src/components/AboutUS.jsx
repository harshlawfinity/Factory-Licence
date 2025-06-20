import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

const NewAbout = lazy(() => import('./NewAbout.jsx'));
const WhyChooseUs = lazy(() => import('./WhyChooseUs.jsx'));
const OurStory = lazy(() => import('./OurStory.jsx'));
const HowItWorks = lazy(() => import('./HowItWorks.jsx'));
const FinalCTA = lazy(() => import('./FinalCTA.jsx'));
import AboutHero from './AboutHero.jsx'; // Load first for LCP

const AboutUS = () => {
  return (
    <div>
         <Helmet>
       
<title>About Lawfinity India Private Limited</title>
<meta name="description" content="Learn about Lawfinity India Private Limited, the team behind FactoryLicence.in. Trusted experts in factory licensing, compliance, and legal consultancy in India." />
<meta property="og:title" content="About Lawfinity India Private Limited" />
<meta property="og:description" content="Learn about Lawfinity India Private Limited, the team behind FactoryLicence.in. Trusted experts in factory licensing, compliance, and legal consultancy in India." />
<meta property="og:url" content="https://factorylicence.in/about" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://factorylicence.in/assets/about-lawfinity-og.jpg" />
<meta property="og:site_name" content="FactoryLicence.in" />
<link rel="canonical" href="https://factorylicence.in/about" /></Helmet>

      {/* Load critical content first */}
      <AboutHero />

      {/* Lazy load other sections */}
      <Suspense fallback={<div className="text-center text-white text-white py-10">Loading...</div>}>
        <NewAbout />
        <WhyChooseUs />
        <OurStory />
        <HowItWorks />
        <FinalCTA />
      </Suspense>
    </div>
  );
};

export default AboutUS;
