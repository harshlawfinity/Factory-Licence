import React, { lazy, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import uuu from "../assets/uuu.webp";

const FaIndustry = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaIndustry }))
);
const FaQuestionCircle = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaQuestionCircle }))
);
const FaCheckCircle = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaCheckCircle }))
);
const FaUserCheck = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaUserCheck }))
);
const FaFileAlt = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaFileAlt }))
);
const FaListOl = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaListOl }))
);
const FaClock = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaClock }))
);
const FaExclamationTriangle = lazy(() =>
  import("react-icons/fa").then((mod) => ({
    default: mod.FaExclamationTriangle,
  }))
);
import dmap from "../assets/upmap.webp";
import fl1 from "../assets/fl1.webp";
import ContactForm from "./ContactForm";
import { Link } from "react-scroll"; // use this for smooth scroll
import bg1 from "../assets/f1.webp";
import bg2 from "../assets/f2.webp";
import bg3 from "../assets/f3.webp";
import FaqSection from "./FaqSectionUP";

export default function FactoryLicenceUttarPradeshPage() {
  const [showPopup, setShowPopup] = useState(false);
  const heroBackgrounds = [bg1, bg2, bg3];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroBackgrounds.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Helmet>
        <title>
          Factory Licence Registration in Uttar Pradesh | Fast, Legal &
          Compliant
        </title>
        <meta
          name="description"
          content="Apply for your Factory Licence in Uttar Pradesh with expert support. Avoid penalties, comply with laws, and speed up your approval process. Get your licence hassle-free."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://factorylicence.in/factory-licence-in-uttar-pradesh"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Factory Licence Registration in Uttar Pradesh | Fast, Legal & Compliant"
        />
        <meta
          property="og:description"
          content="Apply for your Factory Licence in Uttar Pradesh with expert support. Avoid penalties, comply with laws, and speed up your approval process."
        />
        <meta
          property="og:url"
          content="https://factorylicence.in/factory-licence-in-uttar-pradesh"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://factorylicence.in/public/fav2.webp"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Factory Licence Registration in Uttar Pradesh | Fast, Legal & Compliant"
        />
        <meta
          name="twitter:description"
          content="Apply for your Factory Licence in Uttar Pradesh with expert support. Avoid penalties, comply with laws, and speed up your approval process."
        />
        <meta
          name="twitter:image"
          content="https://factorylicence.in/public/fav2.webp"
        />

        {/* Schema.org JSON-LD Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Factory Licence Uttar Pradesh",
            image: "https://factorylicence.in/public/fav2.webp",
            url: "https://factorylicence.in/factory-licence-in-uttar-pradesh",
            telephone: "+91-9910774687",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "T-10, Plot No. -7, 3rd Floor, Pankaj Plaza, Pocket-7, Sector-12, Dwarka",
              addressLocality: "New Uttar Pradesh",
              addressRegion: "DL",
              postalCode: "110078",
              addressCountry: "IN",
            },
            description:
              "We offer expert assistance in obtaining your factory licence in Uttar Pradesh. Fast approvals, end-to-end support, and full legal compliance.",
            openingHours: "Mo-Sa 10:00-19:00",
          })}
        </script>
      </Helmet>

      {/* Hero Section */}

      <section className="relative text-white py-20 md:px-0 px-4 mt-20 overflow-hidden">
        {/* Rotating background images */}
        <div className="absolute inset-0 z-0">
          {heroBackgrounds.map((img, index) => (
            <img
              loading="lazy"
              key={index}
              src={img}
              alt={`bg-${index}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                currentBg === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7A3EF2]/80 to-[#a674f7]/80 z-10" />
        </div>

        {/* Hero Content */}
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:px-0  md:py-12 relative z-20">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-semibold md:mb-6 mb-2">
              Factory Licence Registration in Uttar Pradesh
            </h1>
            <p className="text-lg md:mb-6 mb-4 text-justify text-gray-50">
              Ensure compliance and legal security for your manufacturing unit
              in Uttar Pradesh with our expert licensing assistance.
            </p>
            <button
              onClick={() => setShowPopup(true)}
              className="bg-white text-[#7A3EF2] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              Get Started
            </button>
          </div>

          {/* Right Video Section */}
          <div className="md:w-1/2 w-full">
            <div className="relative w-full md:h-[350px] overflow-hidden rounded-lg bg-black flex flex-col items-center justify-end bg-[#7A3EF2]  w-full  ">
              <iframe
                className="  w-full md:h-[350px] h-[200px]"
                src="https://www.youtube.com/embed/AZsh13Zb-PQ?si=DeKzL5AblQ_g0P85"
                title="Factory Licence Walkthrough"
                allow="autoplay; encrypted-media"
                allowFullScreen
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto py-16 md:px-0 px-4 grid md:grid-cols-4 gap-10 text-gray-800 relative">
        {/* Left Side Content */}
        <div className="md:col-span-3 space-y-14">
          <Section
            id="what-is"
            title={
              <>
                <FaIndustry className="inline mr-2" />
                What is a Factory Licence?
              </>
            }
          >
            <p className="text-justify">
              A Factory Licence is a mandatory legal obligation under the
              Factories Act, 1948, required for those premises which carry out
              manufacturing processes employing 10 or more workers with the aid
              of power or employing 20 or more workers without power. This
              licence ensures that the factory has complied with the required
              safety, health and welfare standards for the workers.{" "}
            </p>
          </Section>

          <Section
            id="why-required"
            title={
              <>
                <FaQuestionCircle className="inline mr-2" />
                Why is it needed?
              </>
            }
          >
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li className="text-justify ">
                As operating a factory without one is a punishable offense under
                the Factories Act, 1948, therefore, obtaining a Factory Licence
                is essential for fulfilling legal compliance. Those factories
                which are found running without a valid licence can face
                considerable penalties, imposing heavy fines and in some cases
                even imprisonment. This makes the licence a crucial requirement
                for anyone planning to set up or operate a manufacturing plant
                in India.
              </li>
              <li className="text-justify ">
                Beyond the legal requirements, a factory licence also ensures
                that the facility meets appropriate safety standards, which are
                very crucial for safeguarding the health and well-being of
                employees. It also validates the operational authenticity of the
                business, making easy to secure other necessary approvals,
                licences and participate in government tenders. To put it
                simply, the factory licence not only keeps the business on the
                right side of the law but also builds legitimacy and ensure the
                trust with stakeholders.
              </li>
            </ul>
          </Section>

          <Section
            id="benefits"
            title={
              <>
                <FaCheckCircle className="inline mr-2" />
                Benefits of Obtaining a Factory Licence
              </>
            }
          >
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li className="text-justify ">
                Legal Recognition: It provides a legal status to the
                manufacturing unit, ensuring smooth business operations.{" "}
              </li>
              <li className="text-justify ">
                Enhanced Credibility: It builds trust among clients, suppliers
                and stakeholders by demonstrating timely compliance with
                statutory requirements.
              </li>
              <li className="text-justify ">
                Access to Government Schemes: It provides the eligibility for
                various government incentives and schemes aimed at promoting
                industrial growth.
              </li>
              <li className="text-justify ">
                Employee Welfare: It ensures that implementation of health,
                safety and welfare measures for the employees, ultimately
                leading to increased efficiency and productivity.
              </li>
              <li className="text-justify ">
                Avoidance of Penalties: It safeguards from falling into any kind
                of legal actions, fines and potential shutdowns due to
                non-compliance.
              </li>
            </ul>
          </Section>

          <Section
            id="eligibility"
            title={
              <>
                <FaUserCheck className="inline mr-2" />
                Eligibility Criteria
              </>
            }
          >
            <p className="text-justify">
              In Uttar Pradesh, any manufacturing unit with 10 or more workers
              using power or 20 or more without power, must register under the
              Factories Act, 1948, via the Labour Department, Government of
              Uttar Pradesh. The application process is facilitated through the
              Nivesh Mitra portal.
            </p>
          </Section>

          <Section
            id="documents"
            title={
              <>
                <FaFileAlt className="inline mr-2" />
                Documents Required in Uttar Pradesh
              </>
            }
          >
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li className="text-justify ">Building Plan Approval</li>
              <li className="text-justify ">
                Layout Plan as per Factories Act
              </li>
              <li className="text-justify ">
                KYC Documents of Owners/Directors
              </li>
              <li className="text-justify ">
                Business Registration documents of firm/company
              </li>
              <li className="text-justify ">
                Structural Stability certificate from approved architect.
              </li>
              <li className="text-justify ">
                Sale Deed/ Rent Agreement of premises.
              </li>
              <li className="text-justify ">
                Manufacturing process flow chart
              </li>
              <li className="text-justify ">
                CA certificate showing Capital investment.
              </li>
            </ul>
          </Section>

          <Section
            id="steps"
            title={
              <>
                <FaListOl className="inline mr-2" />
                Steps to Get a Factory Licence
              </>
            }
          >
            <ol className="list-decimal pl-6 space-y-3 text-gray-800">
              <li className="text-justify ">
                Portal Access: Register on the Nivesh Mitra Portal
                (niveshmitra.up.nic.in).
              </li>
              <li className="text-justify ">
                Application Submission: Fill in the application form with
                factory details and upload necessary documents.
              </li>
              <li className="text-justify ">
                Form Submission: Fill out the application form and upload
                necessary documents.
              </li>
              <li className="text-justify ">
                Fee Payment: Pay the requisite fee online.
              </li>
              <li className="text-justify ">
                Inspection: The Labour Department will schedule an inspection of
                the factory premises.
              </li>
              <li className="text-justify ">
                Licence Issuance: After successful verification, the factory
                licence will be issued.
              </li>
            </ol>
          </Section>
          <img loading="lazy" src={uuu} alt="" />

          <Section
            id="timelines"
            title={
              <>
                <FaClock className="inline mr-2" />
                Timelines
              </>
            }
          >
            <p className="text-justify">
              The registration of a Factory Licence in the state of Uttar
              Pradesh typically takes 15 to 18 working days, depending on
              document verification and government approvals.{" "}
            </p>
          </Section>

          <Section
            id="penalties"
            title={
              <>
                <FaExclamationTriangle className="inline mr-2 text-red-500" />
                Penalties in Case of Non-Compliance
              </>
            }
          >
            <ul className="text-justify list-disc pl-6 space-y-2 text-gray-800 ">
              <li className="text-justify ">
                Running a factory without registration is a punishable offense
                and can lead to penalties up to ₹1,00,000 or imprisonment up to
                2 years or both. <br />
              </li>
              <li className="text-justify ">
                A penalty for delayed renewal of a factory licence is a late fee
                of 25% of the renewal fee for the calendar year. This penalty
                applies when the renewal application is submitted after the
                deadline, which is 30 days before the licence expiry date. The
                system automatically calculates the total fee, including the
                late fee, which needs to be paid online.
              </li>
            </ul>
          </Section>

          {/* <div className="pt-8">
            <img
              loading="lazy"

              src={fl1}
              alt="Factory Registration Process"
              className="rounded-lg shadow-md w-full"
            />
          </div> */}
        </div>

        {/* Right Side Navigation */}
        <aside className="hidden md:block">
          <div className="sticky top-24">
            <div className="bg-white rounded-xl shadow-md p-6 space-y-4 border border-violet-100">
              <h3 className="text-lg font-semibold text-[#7A3EF2] mb-2">
                Quick Links
              </h3>
              <nav className="space-y-3 text-sm text-gray-700">
                {[
                  {
                    label: "What is a Factory Licence?",
                    id: "what-is",
                    icon: <FaIndustry className="inline mr-2" />,
                  },
                  {
                    label: "Why is it needed?",
                    id: "why-required",
                    icon: <FaQuestionCircle className="inline mr-2" />,
                  },
                  {
                    label: "Benefits",
                    id: "benefits",
                    icon: <FaCheckCircle className="inline mr-2" />,
                  },
                  {
                    label: "Eligibility Criteria",
                    id: "eligibility",
                    icon: <FaUserCheck className="inline mr-2" />,
                  },
                  {
                    label: "Documents Required",
                    id: "documents",
                    icon: <FaFileAlt className="inline mr-2" />,
                  },
                  {
                    label: "Steps to Get Licence",
                    id: "steps",
                    icon: <FaListOl className="inline mr-2" />,
                  },
                  {
                    label: "Timelines",
                    id: "timelines",
                    icon: <FaClock className="inline mr-2" />,
                  },
                  {
                    label: "Penalties",
                    id: "penalties",
                    icon: (
                      <FaExclamationTriangle className="inline mr-2 text-red-500" />
                    ),
                  },
                ].map((item) => (
                  <Link
                    key={item.id}
                    to={item.id}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="cursor-pointer hover:text-[#7A3EF2] block"
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </aside>
      </section>

      {/* Contact Form Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-lg">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-3 text-gray-500 text-2xl"
              aria-label="Close contact form"
            >
              ×
            </button>
            <ContactForm />
          </div>
        </div>
      )}

      <FaqSection />
    </div>
  );
}
function Section({ id, title, children }) {
  return (
    <div id={id}>
      <h2 className="text-3xl font-semibold text-[#7A3EF2] mb-4">{title}</h2>
      {children}
    </div>
  );
}
