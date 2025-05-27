import { FiCheckCircle } from "react-icons/fi";
import f4 from '../assets/f4.webp';

const FactoryLicenseSection = () => {
  const items = [
    {
      title: "License Consultation",
      desc: "We help identify whether your space qualifies under the Factories Act and guide the licensing route.",
    },
    {
      title: "Site & Layout Approvals",
      desc: "Support in preparing factory layout plans and compliance documentation for local authority approvals.",
    },
    {
      title: "Fire & Safety Clearances",
      desc: "We coordinate for fire NOCs, safety inspections, and ensure you meet health & welfare provisions.",
    },
    {
      title: "End-to-End Filing & Follow-up",
      desc: "We handle application submission, department liaison, and renewal tracking so you stay compliant.",
    },
  ];

  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={f4}
            alt="Compliance Visual"
            className="rounded-xl w-full h-auto max-h-[320px] sm:max-h-[400px] lg:max-h-[480px] object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            Expert Help for Your Factory License Setup
          </h2>
          

          <ul className="space-y-4 mb-6">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <FiCheckCircle className="text-purple-600 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-base">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition text-center">
            Get a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default FactoryLicenseSection;
