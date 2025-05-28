import { FiFileText, FiShield, FiCheckCircle, FiSettings, FiUsers, FiClock } from "react-icons/fi";

const FactoryLicenseGrid = () => {
  const services = [
    {
      title: "Factory Setup Consultation",
      desc: "Expert guidance on layout planning, zoning, and documentation for setting up a compliant factory.",
      icon: <FiSettings className="text-purple-600 text-2xl" />,
    },
    {
      title: "Factory License Application",
      desc: "End-to-end support for obtaining your factory license under the Factories Act.",
      icon: <FiFileText className="text-purple-600 text-2xl" />,
    },
    {
      title: "Labour Law Compliance",
      desc: "Ensure your coworking or industrial space adheres to labour regulations and safety mandates.",
      icon: <FiShield className="text-purple-600 text-2xl" />,
    },
    {
      title: "Fire & Safety Approvals",
      desc: "We help secure fire and safety NOCs needed for license issuance and renewals.",
      icon: <FiCheckCircle className="text-purple-600 text-2xl" />,
    },
    {
      title: "Liaison with Government",
      desc: "Our team coordinates with local departments to speed up inspection and approvals.",
      icon: <FiUsers className="text-purple-600 text-2xl" />,
    },
    {
      title: "Renewals & Audit Support",
      desc: "Stay worry-free with timely renewals and documentation audits for ongoing compliance.",
      icon: <FiClock className="text-purple-600 text-2xl" />,
    },
  ];

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="md:text-4xl text-3xl font-semibold text-gray-900 mb-10">
          Factory License & Compliance Services
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-left"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FactoryLicenseGrid;
