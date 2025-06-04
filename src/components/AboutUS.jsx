import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import AboutHero from './AboutHero.jsx'; // Load first for LCP

const NewAbout = lazy(() => import('./NewAbout.jsx'));
const WhyChooseUs = lazy(() => import('./WhyChooseUs.jsx'));
const OurStory = lazy(() => import('./OurStory.jsx'));
const HowItWorks = lazy(() => import('./HowItWorks.jsx'));
const FinalCTA = lazy(() => import('./FinalCTA.jsx'));

const AboutUS = () => {
  return (
    <div>
      <Helmet>
        <title>About Us | Factory Licence – Expert Compliance Partner</title>
        <meta
          name="description"
          content="Learn about Factory Licence – your trusted compliance partner helping businesses with factory registration, documentation and regulatory processes."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://factorylicence.in/about" />

        {/* Open Graph */}
        <meta property="og:title" content="About Us | Factory Licence" />
        <meta
          property="og:description"
          content="We support Indian entrepreneurs by making factory compliance and setup easy. Learn who we are and why we’re trusted across India."
        />
        <meta property="og:url" content="https://factorylicence.in/about" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://factorylicence.in/public/fav2.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Factory Licence" />
        <meta
          name="twitter:description"
          content="We support Indian entrepreneurs by making factory compliance and setup easy. Learn who we are and why we’re trusted across India."
        />
        <meta
          name="twitter:image"
          content="https://factorylicence.in/public/fav2.webp"
        />

        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Factory Licence",
            url: "https://factorylicence.in/",
            logo: "https://factorylicence.in/public/fav2.webp",
            description:
              "Factory Licence is a leading consultancy helping businesses across India with factory licence registration, compliance, and regulatory guidance.",
            sameAs: [
              "https://www.facebook.com/factorylicence",
              "https://www.instagram.com/factorylicence",
            ],
          })}
        </script>
      </Helmet>

      {/* Load critical content first */}
      <AboutHero />

      {/* Lazy load other sections */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
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
