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
import SEOHome from "./SEOHome.jsx";


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
      <SEOHome />

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
