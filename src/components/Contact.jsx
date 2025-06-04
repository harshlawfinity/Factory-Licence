import React, { lazy, Suspense } from 'react';
import ContactHero from '../components/ContactHero.jsx'; // load early for SEO/LCP

// Lazy load non-critical section
const LocationSection = lazy(() => import('../components/LocationSection.jsx'));

const Contact = () => {
  return (
    <div>
      <ContactHero />

      <Suspense fallback={<div className="text-center py-10">Loading location...</div>}>
        <LocationSection />
      </Suspense>
    </div>
  );
};

export default Contact;
