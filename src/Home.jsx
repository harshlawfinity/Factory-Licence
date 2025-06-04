import React, { Suspense, lazy } from "react";

const HeroSection = lazy(() => import("./components/HeroSection"));
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

import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div className="">
      {/* 🔹 Helmet: SEO Meta Tags and Schema */}
      <Helmet>
        {/* Page Title */}
        <title>
          Factory Licence Services | Paperwork to Permit – Done Right
        </title>

        {/* Meta Tags */}
        <meta
          name="title"
          content="Factory Licence Services | Paperwork to Permit – Done Right"
        />
        <meta
          name="description"
          content="We help you get your factory licence done right – from government permits to complete compliance. Free consultation available."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://factorylicence.in/" />

        {/* Open Graph (for social sharing) */}
        <meta
          property="og:title"
          content="Factory Licence Services | Paperwork to Permit – Done Right"
        />
        <meta
          property="og:description"
          content="We help you get your factory licence done right – from government permits to complete compliance. Free consultation available."
        />
        <meta property="og:url" content="https://factorylicence.in/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://factorylicence.in/public/fav2.webp"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Factory Licence Services | Paperwork to Permit – Done Right"
        />
        <meta
          name="twitter:description"
          content="We help you get your factory licence done right – from government permits to complete compliance. Free consultation available."
        />
        <meta
          name="twitter:image"
          content="https://factorylicence.in/public/fav2.webp"
        />

        {/* Schema Markup (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Factory Licence  ",
            image: "https://factorylicence.in/public/fav2.webp",
            url: "https://factorylicence.in/",
            telephone: "+91-9910774687",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "T-10, Plot No. -7, 3rd Floor, Pankaj Plaza, Pocket-7, Sector-12, Dwarka",
              addressLocality: "New Delhi",
              addressRegion: "DL",
              postalCode: "110078",
              addressCountry: "IN",
            },
            description:
              "We offer expert assistance in getting your factory licence from start to finish. Permits, documentation, and compliance handled smoothly.",
            openingHours: "Mo-Sa 10:00-19:00",
          })}
        </script>
      </Helmet>
      <Suspense fallback={<div className="text-center py-10 h-[100vh] ">Loading...</div>}>
        <HeroSection />
        <SerrvicesGrid />
        <FactoryLicenseSection />
        <StatsCard />
        <FeatureCard />
        <AssistanceSection />
        <TestimonialCarousel />
        <CallToActionSection />
        <FaqSection />
      </Suspense>
    </div>
  );
};

export default App;
