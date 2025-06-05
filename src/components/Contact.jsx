import React, { lazy, Suspense } from 'react';
import ContactHero from '../components/ContactHero.jsx'; // load early for SEO/LCP
import { Helmet } from 'react-helmet';

// Lazy load non-critical section
const LocationSection = lazy(() => import('../components/LocationSection.jsx'));

const Contact = () => {
  return (
    <div>
      <Helmet>
  <title>Contact Us | Factory Licence India</title>
  <meta name="title" content="Contact Us | Factory Licence India" />
  <meta
    name="description"
    content="Get in touch with the FactoryLicence.in team. Reach us via phone, email, or visit our office for expert assistance in licensing and compliance."
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://factorylicence.in/contact" />

  {/* Open Graph */}
  <meta property="og:title" content="Contact Us | Factory Licence India" />
  <meta
    property="og:description"
    content="Reach LAWFINITY INDIA PRIVATE LIMITED for expert guidance on factory licensing and compliance. Visit or contact us directly."
  />
  <meta property="og:url" content="https://factorylicence.in/contact" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://factorylicence.in/public/fav2.webp"
  />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contact Us | Factory Licence India" />
  <meta
    name="twitter:description"
    content="Get help with factory licence services. Contact the LAWFINITY team via email, call, or office visit."
  />
  <meta
    name="twitter:image"
    content="https://factorylicence.in/public/fav2.webp"
  />

  {/* Schema Markup */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Us | Factory Licence India",
      url: "https://factorylicence.in/contact",
      description:
        "Contact page of FactoryLicence.in. Find ways to connect with LAWFINITY INDIA PRIVATE LIMITED for support and queries.",
      publisher: {
        "@type": "Organization",
        name: "LAWFINITY INDIA PRIVATE LIMITED",
        logo: {
          "@type": "ImageObject",
          url: "https://factorylicence.in/public/fav2.webp",
        },
      },
    })}
  </script>
</Helmet>

      <ContactHero />

      <Suspense fallback={<div className="text-center py-10">Loading location...</div>}>
        <LocationSection />
      </Suspense>
    </div>
  );
};

export default Contact;
