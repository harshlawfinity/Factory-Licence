export default function WorkingProcess() {
  const steps = [
    {
      number: "01",
      title: "Manage tasks",
      description: "Nam libero tempore, cum soluta nobis est eligendi optio.",
    },
    {
      number: "02",
      title: "Automate tasks",
      description: "Nam libero tempore, cum soluta nobis est eligendi optio.",
    },
    {
      number: "03",
      title: "Track results",
      description: "Nam libero tempore, cum soluta nobis est eligendi optio.",
    },
    {
      number: "04",
      title: "Get support",
      description: "Nam libero tempore, cum soluta nobis est eligendi optio.",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-center">
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-12">
        Software Working Process
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
        {steps.map((step, index) => (
          <div key={index} className="relative pl-8">
            <div className="flex items-center mb-3">
              <span className="text-purple-600 font-bold text-xl">{step.number}</span>
              <hr className="flex-grow border-gray-300 ml-4" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-sm text-gray-400">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
