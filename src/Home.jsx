import React, { Suspense, lazy, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet-async";

// Eager load HeroSection for fast LCP
import HeroSection from "./components/HeroSection";

// Lazy load remaining sections
const SerrvicesGrid = lazy(() => import("./components/SerrvicesGrid"));
const FactoryLicenseSection = lazy(() =>
  import("./components/FactoryLicenseSection")
);
const StatsCard = lazy(() => import("./components/StatsCard"));
const FeatureCard = lazy(() => import("./components/FeatureCard"));
const AssistanceSection = lazy(() => import("./components/AssistanceSection"));
const TestimonialCarousel = lazy(() =>
  import("./components/TestimonialCarousel")
);
const CallToActionSection = lazy(() =>
  import("./components/CallToActionSection")
);
const FaqSection = lazy(() => import("./components/FaqSection"));

const Home = () => {
  // Lazy-load refs with rootMargin for smoother UX
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });
  const [factoryRef, factoryInView] = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });
  const [assistRef, assistInView] = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });
  const [testimonialRef, testimonialInView] = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });
  const [faqRef, faqInView] = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });

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
        <title>
          Factory Licence Online in India – Fast Approval Guaranteed
        </title>
        <meta
          name="description"
          content="Get your online factory license quickly with expert help. Easy registration, renewal & compliance services across India. Trusted by 1000+ businesses!"
        />
        <meta name="keywords" content="factory licence, factory license" />
        <meta
          property="og:title"
          content="Factory Licence Online in India – Fast Approval Guaranteed"
        />
        <meta
          property="og:description"
          content="Get your online factory license quickly with expert help. Easy registration, renewal & compliance services across India. Trusted by 1000+ businesses!"
        />
        <meta property="og:url" content="https://factorylicence.in/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://factorylicence.in/assets/factory-og-image.jpg"
        />
        <meta property="og:site_name" content="FactoryLicence.in" />
        <link rel="canonical" href="https://factorylicence.in/" />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://factorylicence.in/#business",
            name: "FactoryLicence.in",
            url: "https://factorylicence.in/",
            logo: "https://factorylicence.in/wp-content/uploads/2023/12/Factory-Licence-Logo.webp",
            image:
              "https://factorylicence.in/wp-content/uploads/2023/12/Factory-Licence-Logo.webp",
            description:
              "FactoryLicence.in, operated by Lawfinity India Private Limited, provides expert services for online factory license registration, renewal, and compliance across India, including Delhi, Haryana, Uttar Pradesh, and Noida.",
            telephone: "+91 99107 74687",
            email: "info@factorylicence.in",
            foundingDate: "2018",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "T-10, Plot No. -7, 3rd Floor, Pankaj Plaza, Pocket-7, Sector-12, Dwarka, New Delhi - 110078",
              addressLocality: "Delhi",
              addressRegion: "New Delhi",
              postalCode: "110078",
              addressCountry: "IN",
            },
            openingHours: "Mo-Sa 10:00-19:00",
            areaServed: [
              { "@type": "Place", name: "Delhi" },
              { "@type": "Place", name: "Haryana" },
              { "@type": "Place", name: "Uttar Pradesh" },
              { "@type": "Place", name: "Noida" },
            ],
            sameAs: [
              "https://www.facebook.com/lawfinityindia",
              "https://www.linkedin.com/company/lawfinity-india-private-limited",
              "https://twitter.com/lawfinityindia",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Factory Licence Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Factory License Registration",
                    serviceType: "Legal Licensing Service",
                    provider: {
                      "@type": "Organization",
                      name: "Lawfinity India Private Limited",
                    },
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Factory License Renewal",
                    serviceType: "License Renewal Service",
                    provider: {
                      "@type": "Organization",
                      name: "Lawfinity India Private Limited",
                    },
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "MCD Factory Licence",
                    serviceType: "Municipal License",
                    provider: {
                      "@type": "Organization",
                      name: "Lawfinity India Private Limited",
                    },
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Approval & Registration of Factories",
                    serviceType: "Compliance Registration",
                    provider: {
                      "@type": "Organization",
                      name: "Lawfinity India Private Limited",
                    },
                  },
                },
              ],
            },
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
