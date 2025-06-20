import  { lazy, Suspense } from 'react';
import ContactHero from '../components/ContactHero.jsx'; // load early for SEO/LCP
import { Helmet } from 'react-helmet-async';

// Lazy load non-critical section
const LocationSection = lazy(() => import('../components/LocationSection.jsx'));

const Contact = () => {
  return (
    <div>
        <Helmet>
        <title>Contact Us | FactoryLicence.in – Expert Help with Factory Licensing & Compliance</title>
        <meta name="description" content="Get in touch with FactoryLicence.in for professional assistance in factory license registration, renewal, and compliance. Quick response, expert support, and hassle-free service." />
        <meta property="og:title" content="Contact Us | FactoryLicence.in – Expert Help with Factory Licensing & Compliance" />
        <meta property="og:description" content="Get in touch with FactoryLicence.in for professional assistance in factory license registration, renewal, and compliance. Quick response, expert support, and hassle-free service." />
        <meta property="og:url" content="https://factorylicence.in/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://factorylicence.in/assets/contact-factory-licence-og.jpg" />
        <meta property="og:site_name" content="FactoryLicence.in" />
        <link rel="canonical" href="https://factorylicence.in/contact" />
      </Helmet>

      <ContactHero />

      <Suspense fallback={<div className="text-center py-10">Loading location...</div>}>
        <LocationSection />
      </Suspense>
    </div>
  );
};

export default Contact;
