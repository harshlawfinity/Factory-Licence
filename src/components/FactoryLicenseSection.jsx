import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import f4 from "../assets/f4.webp";

const steps = {
  Delhi: [
    "Document Preparation: Gather all the required documents.",
    "Online Application: Visit MCD Portal → Trade & Factory Licenses.",
    "Form Submission: Fill and upload required docs.",
    "Fee Payment: Pay the license fee online.",
    "Inspection: Department schedules inspection.",
    "License Issuance: Upon successful verification.",
  ],
  Haryana: [
    "Online Registration: Register on Haryana Labour Portal.",
    "Application Form: Fill with factory details.",
    "Document Upload: Upload all required docs.",
    "Fee Payment: Pay fee online.",
    "Inspection: Premises will be inspected.",
    "License Approval: If compliant, license is issued.",
  ],
  "Uttar Pradesh": [
    "Portal Access: Register on Nivesh Mitra Portal.",
    "Application Submission: Fill form with factory details.",
    "Fee Payment: Pay fee online.",
    "Inspection: Department inspects premises.",
    "License Issuance: If verified, license is issued.",
  ],
};

const FactoryLicenseSection = () => {
  const [activeState, setActiveState] = useState("Delhi");

  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl sm:text-4xl text-center font-semibold text-gray-900 leading-tight mb-10">
        Expert Help for <br />
        <span className="text-purple-600">Your Factory License Setup</span>
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={f4}
            alt="Compliance Visual"
            className="rounded-2xl w-full h-auto max-h-[480px] object-cover shadow-xl"
          />
        </div>

        {/* Right: Tabs and Steps */}
        <div className="w-full lg:w-1/2">
          <div className="flex gap-3 mb-6">
            {Object.keys(steps).map((city) => (
              <button
                key={city}
                onClick={() => setActiveState(city)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                  activeState === city
                    ? "bg-purple-600 text-white"
                    : "bg-white border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          <ul className="space-y-6 mt-6 mb-6">
            {steps[activeState].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <FiCheckCircle className="text-purple-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm">{step}</p>
              </li>
            ))}
          </ul>

          <button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300">
            Get a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default FactoryLicenseSection;
