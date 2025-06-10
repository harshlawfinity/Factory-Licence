import React, { Suspense, lazy, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet";

// Eager load HeroSection for fast LCP
import HeroSection from "./components/HeroSection";

// Lazy load remaining sections
const SerrvicesGrid = lazy(() => import("./components/SerrvicesGrid"));
const FactoryLicenseSection = lazy(() => import("./components/FactoryLicenseSection"));
const StatsCard = lazy(() => import("./components/StatsCard"));
const FeatureCard = lazy(() => import("./components/FeatureCard"));
const AssistanceSection = lazy(() => import("./components/AssistanceSection"));
const TestimonialCarousel = lazy(() => import("./components/TestimonialCarousel"));
const CallToActionSection = lazy(() => import("./components/CallToActionSection"));
const FaqSection = lazy(() => import("./components/FaqSection"));

const Home = () => {
  // Lazy-load refs with rootMargin for smoother UX
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, rootMargin: "100px" });
  const [factoryRef, factoryInView] = useInView({ triggerOnce: true, rootMargin: "100px" });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, rootMargin: "100px" });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, rootMargin: "100px" });
  const [assistRef, assistInView] = useInView({ triggerOnce: true, rootMargin: "100px" });
  const [testimonialRef, testimonialInView] = useInView({ triggerOnce: true, rootMargin: "100px" });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, rootMargin: "100px" });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, rootMargin: "100px" });

  // Optional: preload 1st chunk after Hero loads using idle time
  useEffect(() => {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => {
        import("./components/SerrvicesGrid");
      });
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>Factory Licence Services | Paperwork to Permit – Done Right</title>
        <meta name="title" content="Factory Licence Services | Paperwork to Permit – Done Right" />
        <meta name="description" content="We help you get your factory licence done right – from government permits to complete compliance. Free consultation available." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://factorylicence.in/" />
        <meta property="og:title" content="Factory Licence Services | Paperwork to Permit – Done Right" />
        <meta property="og:description" content="We help you get your factory licence done right – from government permits to complete compliance. Free consultation available." />
        <meta property="og:url" content="https://factorylicence.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://factorylicence.in/public/fav2.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Factory Licence Services | Paperwork to Permit – Done Right" />
        <meta name="twitter:description" content="We help you get your factory licence done right – from government permits to complete compliance. Free consultation available." />
        <meta name="twitter:image" content="https://factorylicence.in/public/fav2.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Factory Licence",
            image: "https://factorylicence.in/public/fav2.webp",
            url: "https://factorylicence.in/",
            telephone: "+91-9910774687",
            address: {
              "@type": "PostalAddress",
              streetAddress: "T-10, Plot No. -7, 3rd Floor, Pankaj Plaza, Pocket-7, Sector-12, Dwarka",
              addressLocality: "New Delhi",
              addressRegion: "DL",
              postalCode: "110078",
              addressCountry: "IN",
            },
            description: "We offer expert assistance in getting your factory licence from start to finish. Permits, documentation, and compliance handled smoothly.",
            openingHours: "Mo-Sa 10:00-19:00",
          })}
        </script>
      </Helmet>

      {/* Hero loads immediately */}
      <HeroSection />

      {/* Lazy load below the fold components */}
      <div ref={servicesRef}>
        {servicesInView && (
          <Suspense fallback={null}>
            <SerrvicesGrid />
          </Suspense>
        )}
      </div>

      <div ref={factoryRef}>
        {factoryInView && (
          <Suspense fallback={null}>
            <FactoryLicenseSection />
          </Suspense>
        )}
      </div>

      <div ref={statsRef}>
        {statsInView && (
          <Suspense fallback={null}>
            <StatsCard />
          </Suspense>
        )}
      </div>

      <div ref={featuresRef}>
        {featuresInView && (
          <Suspense fallback={null}>
            <FeatureCard />
          </Suspense>
        )}
      </div>

      <div ref={assistRef}>
        {assistInView && (
          <Suspense fallback={null}>
            <AssistanceSection />
          </Suspense>
        )}
      </div>

      <div ref={testimonialRef}>
        {testimonialInView && (
          <Suspense fallback={null}>
            <TestimonialCarousel />
          </Suspense>
        )}
      </div>

      <div ref={ctaRef}>
        {ctaInView && (
          <Suspense fallback={null}>
            <CallToActionSection />
          </Suspense>
        )}
      </div>

      <div ref={faqRef}>
        {faqInView && (
          <Suspense fallback={null}>
            <FaqSection />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Home;
