import f1 from "../assets/f1.webp";
export default function FeatureCard() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        

        {/* Image Section */}
        <div className="md:w-1/2">
          <img 
            src={f1} // Replace with your image path
            alt="Modern design visual"
            className="rounded-3xl w-full h-auto object-cover"
          />
        </div>


        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Factory License <br /> What You Need to Know
          </h2>
          <p className="text-gray-500 mb-6">
           If you are planning to set up a manufacturing plant in India, then obtaining a Factory License is the first step that needs to be taken. As per the requirements of the Factories Act, 1948, this license is mandatory for any premises involved in the manufacturing activities, especially if you are using power and have employed 10 or more workers or in case you are operating without power but employing 20 or more people. The Factory License is issued by the Labour Department or the Chief Inspector of Factories of that particular state. It serves as the documented evidence that your premises meets all the criteria of health, safety, welfare and environmental standards mandated by the law.</p>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
