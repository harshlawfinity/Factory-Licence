import React from "react";
import { Helmet } from "react-helmet";

const Payments = () => {
  return (
    <div>
      <Helmet>
        <title>Payment Information | Factory Licence India</title>
        <meta
          name="title"
          content="Payment Information | Factory Licence India"
        />
        <meta
          name="description"
          content="Securely pay LAWFINITY INDIA PRIVATE LIMITED via bank transfer or UPI. View official account details for FactoryLicence.in services."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://factorylicence.in/payments" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Payment Information | Factory Licence India"
        />
        <meta
          property="og:description"
          content="Access official bank account and UPI details of LAWFINITY INDIA PRIVATE LIMITED to make secure payments for services."
        />
        <meta property="og:url" content="https://factorylicence.in/payments" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://factorylicence.in/public/fav2.webp"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Payment Information | Factory Licence India"
        />
        <meta
          name="twitter:description"
          content="Bank and UPI payment details for LAWFINITY INDIA PRIVATE LIMITED. Make trusted and transparent payments to FactoryLicence.in."
        />
        <meta
          name="twitter:image"
          content="https://factorylicence.in/public/fav2.webp"
        />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Payment Information | Factory Licence India",
            url: "https://factorylicence.in/payments",
            description:
              "Make payments to LAWFINITY INDIA PRIVATE LIMITED using verified bank and UPI details. Official payment instructions from FactoryLicence.in.",
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

      <section className="relative bg-[#f4f4fa] py-20 px-4 md:px-0">
        <div className="max-w-7xl mt-10 mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Bank Info */}
          <div className="space-y-8">
            <h2 className="text-4xl font-semibold text-[#1A1A1A] leading-tight tracking-tight">
              Payment Information
            </h2>
            <div className="bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-md border border-gray-200 space-y-4 text-gray-800">
              <div className="flex justify-between text-sm md:text-base">
                <span className="font-medium text-gray-500 ">Bank Name</span>
                <span className="font-semibold">ICICI Bank</span>
              </div>
              <div className="flex justify-between text-sm md:text-base">
                <span className="font-medium text-gray-500 ">
                  Account Holder
                </span>
                <span className="font-semibold">
                  LAWFINITY INDIA PRIVATE LIMITED
                </span>
              </div>
              <div className="flex justify-between text-sm md:text-base">
                <span className="font-medium text-gray-500 ">
                  Account Number
                </span>
                <span className="font-semibold">0332 0500 4966</span>
              </div>
              <div className="flex justify-between text-sm md:text-base">
                <span className="font-medium text-gray-500 ">IFSC Code</span>
                <span className="font-semibold">ICIC0000332</span>
              </div>
              <div className="flex justify-between text-sm md:text-base">
                <span className="font-medium text-gray-500 ">UPI ID</span>
                <span className="font-semibold">lawfi59928.ibz@icici</span>
              </div>
            </div>
          </div>

          {/* Right Column: QR Code */}
          {/* <div className="flex justify-center md:justify-end">
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 w-fit">
        <img
          src="https://play-lh.googleusercontent.com/lomBq_jOClZ5skh0ELcMx4HMHAMW802kp9Z02_A84JevajkqD87P48--is1rEVPfzGVf"
          alt="Scan QR"
          className="w-56 h-56 rounded-md object-contain hover:scale-105 transition-transform duration-300"
        />
        <p className="text-center text-sm text-gray-500 mt-4">Scan to pay via UPI</p>
      </div>
    </div> */}
        </div>
      </section>
    </div>
  );
};

export default Payments;
