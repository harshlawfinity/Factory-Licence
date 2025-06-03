import { Helmet } from "react-helmet";
import { lazy, Suspense, memo } from "react";

// Lazy load icons
const FiFileText = lazy(() => import("react-icons/fi").then(m => ({ default: m.FiFileText })));
const FiShield = lazy(() => import("react-icons/fi").then(m => ({ default: m.FiShield })));
const FiUsers = lazy(() => import("react-icons/fi").then(m => ({ default: m.FiUsers })));
const FaFireExtinguisher = lazy(() => import("react-icons/fa").then(m => ({ default: m.FaFireExtinguisher })));
const TbBuildingFactory = lazy(() => import("react-icons/tb").then(m => ({ default: m.TbBuildingFactory })));
const MdAutorenew = lazy(() => import("react-icons/md").then(m => ({ default: m.MdAutorenew })));


const FactoryLicenseGrid = () => {
  const services = [
    {
      title: "Factory Licence Application",
      desc: "End-to-end support for obtaining your factory licence under the Factories Act.",
      icon: <FiFileText className="text-purple-600 text-2xl" />,
    },
    {
      title: "Labour Law Compliance",
      desc: "Ensure your   industrial space adheres to labour regulations and safety mandates.",
      icon: <FiShield className="text-purple-600 text-2xl" />,
    },
    {
      title: "Fire & Safety Approvals",
      desc: "We help secure fire and safety NOCs needed for licence issuance and renewals.",
      icon: <FaFireExtinguisher className="text-purple-600 text-2xl" />,
    },
    {
      title: "Pollution NOC",
      desc: "Obtain Trade, Pollution and Construction clearances for your factory setup.",
      icon: <TbBuildingFactory className="text-purple-600 text-2xl" />,
    },
    {
      title: "Liaison with Government",
      desc: "Our team coordinates with local departments to speed up inspection and approval process.",
      icon: <FiUsers className="text-purple-600 text-2xl" />,
    },
    {
      title: "Renewals & Audit Support",
      desc:  "Feel at ease regarding timely renewals and documentation audits for ongoing compliance.",
       icon: <MdAutorenew className="text-purple-600 text-2xl" />,
    },
  ];

  return (
    <div className="py-16 px-4 bg-white" aria-label="Factory Licence Services Grid Section">
      {/* 🔹 Helmet SEO + JSON-LD Schema */}
      <Helmet>
        <title>Factory Licence & Compliance Services | Expert Regulatory Help</title>
        <meta
          name="description"
          content="Get expert support for Factory Licence, Labour Law compliance, Fire & Safety, Pollution NOCs, and more. Full documentation & liaison services included."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/factory-licence-services" />

        {/* Open Graph */}
        <meta property="og:title" content="Factory Licence & Compliance Services | Expert Regulatory Help" />
        <meta
          property="og:description"
          content="Get expert support for Factory Licence, Labour Law compliance, Fire & Safety, Pollution NOCs, and more. Full documentation & liaison services included."
        />
        <meta property="og:url" content="https://yourdomain.com/factory-licence-services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourdomain.com/path-to-thumbnail.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Factory Licence & Compliance Services | Expert Regulatory Help" />
        <meta name="twitter:description" content="We handle Factory Licence, Labour Law, NOCs & renewals for your unit." />
        <meta name="twitter:image" content="https://yourdomain.com/path-to-thumbnail.jpg" />

        {/* Schema Markup (Service) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Factory Licence & Compliance Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Your Business Name",
              "url": "https://yourdomain.com",
              "telephone": "+91-9876543210",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Industrial Area",
                "addressLocality": "Mumbai",
                "addressRegion": "MH",
                "postalCode": "400001",
                "addressCountry": "IN"
              }
            },
            "serviceType": "Factory Licence Consulting & Documentation",
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "description": "We assist in obtaining factory licences, pollution and fire safety NOCs, compliance with labour laws, and ongoing renewals or audits.",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Factory Licence Services",
              "itemListElement": services.map((item) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": item.title,
                  "description": item.desc,
                },
              })),
            },
          })}
        </script>
      </Helmet>

      {/* Content */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="md:text-4xl text-3xl font-semibold text-gray-900 mb-10">
          Factory Licence & Compliance Services
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-left"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm text-justify">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(FactoryLicenseGrid);
