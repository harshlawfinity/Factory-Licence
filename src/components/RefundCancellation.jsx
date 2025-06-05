import React from "react";
import { Helmet } from "react-helmet";

const RefundCancellation = () => {
  return (
    <div className="mt-20">
      <Helmet>
        <title>Refund & Cancellation Policy | Factory Licence India</title>
        <meta
          name="title"
          content="Refund & Cancellation Policy | Factory Licence India"
        />
        <meta
          name="description"
          content="Learn about FactoryLicence.in’s transparent refund and cancellation policy. Full or partial refunds based on time of request and service progress."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://factorylicence.in/refund-cancellation"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Refund & Cancellation Policy | Factory Licence India"
        />
        <meta
          property="og:description"
          content="Detailed refund and cancellation policy for services offered by FactoryLicence.in. Fair and transparent terms to protect clients."
        />
        <meta
          property="og:url"
          content="https://factorylicence.in/refund-cancellation"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://factorylicence.in/public/fav2.webp"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Refund & Cancellation Policy | Factory Licence India"
        />
        <meta
          name="twitter:description"
          content="Understand how refunds are handled at FactoryLicence.in. Our policy supports client flexibility and service integrity."
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
            name: "Refund & Cancellation Policy | Factory Licence India",
            url: "https://factorylicence.in/refund-cancellation",
            description:
              "FactoryLicence.in outlines a fair and transparent refund policy based on service progress and cancellation timing.",
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
      <div>
        <div className="bg-gradient-to-br from-[#7A3EF2] to-[#a674f7] text-white md:py-40 py-20 md:px-0 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Refunds & Cancellations Policy
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto  text-gray-800 py-8 md:px-0 px-4">
        <h2 className="text-2xl capitalize font-semibold text-[#7A3EF2]    border-[#7A3EF2]  ">
          Refund & Cancellation Policy

        </h2>
        <section className="space-y-6 text-base leading-relaxed mt-8">
          <p className="text-justify">
            <strong>LAWFINITY INDIA PRIVATE LIMITED</strong> is your trusted
            partner in achieving your goals and laying a significant foundation
            for your startup. We believe in long-term relationship building and
            maximizing value through mutual trust.
          </p>

          <p className="text-justify">
At FactoryLicence.in, we prioritize transparency, client satisfaction, and efficient service delivery. We understand that sometimes plans change, and clients may need to cancel their service requests. To ensure a fair and smooth process, we have outlined our cancellation and refund policy below. Please review it carefully before placing an order.
</p>

          <p className="text-justify">
If a cancellation request is made within <span className="font-semibold">24 hours</span> of successful payment, the client will be eligible for a <span className="font-semibold"> 100% refund  </span> of the total amount paid. This full refund will be issued without any deductions, provided that the request is communicated within the stipulated time frame. This policy is in place to accommodate any immediate changes in decision before our team initiates substantial work on the assignment.
          <br />
          <span className="text-sm italic">Please note that any Government fees paid on behalf of the client are non-refundable under any circumstances. However, the official fee receipt or acknowledgment issued by the relevant government department will be handed over to the client as proof of payment.</span>
          </p>

          <p className="text-justify">
           For cancellation requests received after <span className="font-semibold"> 24 hours but within 7 calendar days </span> from the date of payment, a <span className="font-semibold"> deduction of 20% </span>  will be applied to the total amount paid. This deduction covers the administrative charges, documentation processing, and initial operational efforts carried out by our team during this period. The remaining 80% will be refunded to the client through the original payment method within a reasonable timeframe.

          </p>

          <p className="text-justify">
If a client wishes to cancel the service after 7 days from the date of payment, the refund amount will be determined on a pro-rata basis, depending on the stage and percentage of work completed by our team. By this time, a significant portion of the service is usually underway or near completion. Therefore, the refundable amount, if any, will reflect the actual work progress, resources utilized, and time invested by our experts. The final decision regarding the refund in such cases will be made by our internal operations team after a thorough review.

          </p>

          <p className="text-justify">
For all refund-related queries, concerns, or cancellation requests, clients are required to send an email to refunds@factorylicence.in. The timestamp of the email received at this address will be considered the official time of refund intimation. This helps us maintain an accurate and transparent record of all refund communications. We advise clients to include their order number, registered email address, payment details, and a brief reason for cancellation to ensure faster processing.

          </p>

          {/* <h2 className="text-2xl font-semibold mt-10 text-[#7A3EF2]">Cancellation Policy</h2>
          <p>
            Cancellation of an order is not permitted once the payment has been
            made. No refunds will be issued except in the case of:
          </p>
          <ul className="list-disc ml-6">
            <li>Service cancellation by LAWFINITY</li>
            <li>Non-performance of the promised service</li>
          </ul>

          <p className="mt-4">
            All transactions are transparent and milestone-based, ensuring your
            payments are secure and processed with fairness.
          </p> */}
        </section>
      </div>
    </div>
  );
};

export default RefundCancellation;
