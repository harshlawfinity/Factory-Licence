export default function AssistanceSection() {
  const features = [
    {
      title: "Sample Content",
      description: "Create pixel perfect master creatives using a range of premium design tools",
      image: "/sample-content.png", // Replace with your actual path
    },
    {
      title: "Creative strategy",
      description: "We develop or adapt a creative strategy for paid & owned media.",
      image: "/creative-strategy.png", // Replace with your actual path
    },
    {
      title: "Support 24/7",
      description: "We help diagnose processes in the company. We provide recommendations on process optimization.",
      image: "/support.png", // Replace with your actual path
    },
  ];

  return (
    <div className="bg-gray-100 py-14 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-12">
        We Provide Full Assistance In <br className="hidden sm:block" /> Your Business
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-3xl shadow-md text-center flex flex-col items-center"
          >
            <img src={feature.image} alt={feature.title} className="w-24 h-24 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}
