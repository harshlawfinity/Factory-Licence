import React from "react";

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-semibold text-[#7A3EF2] mb-4">{title}</h2>
    <div className="text-gray-700 space-y-4">{children}</div>
  </section>
);

export default function FactoryLicensePage() {
  return (
    <div className=" ">
      <div className="bg-gradient-to-br from-[#7A3EF2] to-[#a674f7] text-white py-20 px-6">
        <div className="max-w-6xl py-20 mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            FACTORY LICENSE REGISTRATION IN <br />
            DELHI, HARYANA & UTTAR PRADESH
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Ensure compliance, protect your workforce, and legitimize your
            operations with expert-backed factory license support across NCR.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-white text-[#7A3EF2] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#7A3EF2] transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto   py-10 space-y-8">
        <Section title="Introduction">
        <p>
          A Factory License is a mandatory legal obligation under the Factories
          Act, 1948, required for those premises which carry out manufacturing
          processes employing 10 or more workers with the aid of power or
          employing 20 or more workers without power. This license ensures that
          the factory has complied with the required safety, health and welfare
          standards for the workers.
        </p>
      </Section>

      <Section title="Why is it needed?">
        <p>
          Operating a factory without one is a punishable offense under the
          Factories Act, 1948. Factories running without a valid license can
          face heavy fines or imprisonment. Beyond legality, it assures safety
          compliance, helps in securing other licenses, and builds trust with
          stakeholders.
        </p>
      </Section>

      <Section title="Benefits of Obtaining a Factory License">
        <ul className="list-disc list-inside space-y-1">
          <li>Legal Recognition</li>
          <li>Enhanced Credibility</li>
          <li>Access to Government Schemes</li>
          <li>Employee Welfare</li>
          <li>Avoidance of Penalties</li>
        </ul>
      </Section>

      <Section title="Eligibility Criteria">
        <p>
          <strong>Delhi:</strong> Units with 10+ workers (with power) or 20+
          (without) must register with the Labour Department & comply with Delhi
          Factories Rules, 1950.
        </p>
        <p>
          <strong>Haryana:</strong> Same threshold; register under Labour
          Department, Haryana, as per Haryana Factories Rules, 1950.
        </p>
        <p>
          <strong>Uttar Pradesh:</strong> Register via Nivesh Mitra portal with
          same employee threshold.
        </p>
      </Section>

      <Section title="Documents Required">
        <div>
          <strong>Delhi:</strong>
          <ul className="list-disc list-inside">
            <li>Building Plan & Layout Plan</li>
            <li>KYC, Business Registration</li>
            <li>Rent/Sale Agreement</li>
            <li>DPCC NOC, Fire NOC (250+ sq m)</li>
            <li>Electricity Bill, Property Tax Receipt</li>
          </ul>
        </div>
        <div>
          <strong>Haryana:</strong>
          <ul className="list-disc list-inside">
            <li>Same as Delhi except DPCC/Fire NOC not mandatory</li>
          </ul>
        </div>
        <div>
          <strong>Uttar Pradesh:</strong>
          <ul className="list-disc list-inside">
            <li>
              Includes Capital Investment CA Certificate & Process Flow Chart
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Steps for Obtaining the License">
        <div>
          <strong>Delhi:</strong>
          <ol className="list-decimal list-inside">
            <li>Prepare Documents</li>
            <li>Apply via MCD Portal</li>
            <li>Submit Form & Pay Fee</li>
            <li>Inspection → License Issuance</li>
          </ol>
        </div>
        <div>
          <strong>Haryana:</strong>
          <ol className="list-decimal list-inside">
            <li>Register at Labour Portal</li>
            <li>Submit Form & Upload Documents</li>
            <li>Pay Fee → Inspection → Approval</li>
          </ol>
        </div>
        <div>
          <strong>Uttar Pradesh:</strong>
          <ol className="list-decimal list-inside">
            <li>Register on Nivesh Mitra</li>
            <li>Submit Application & Documents</li>
            <li>Pay Fee → Inspection → License Issuance</li>
          </ol>
        </div>
      </Section>

      <Section title="Penalties">
        <div>
          <strong>Delhi:</strong> ₹1,00,000 or 2 yrs imprisonment. Late renewal
          = 25% extra fee.
        </div>
        <div>
          <strong>Haryana:</strong> Same as Delhi.
        </div>
        <div>
          <strong>Uttar Pradesh:</strong> Same as above. Portal auto-calculates
          late fees.
        </div>
      </Section>

      <Section title="Timelines">
        <p>
          Across Delhi, Haryana & UP, factory license processing takes
          approximately 15–18 working days depending on document readiness and
          inspections.
        </p>
      </Section>
      </div>
    </div>
  );
}
