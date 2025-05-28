import { useEffect, useState } from "react";
import f1 from "../assets/f1.webp";
import f2 from "../assets/f2.webp";
import f3 from "../assets/f3.webp";
import ContactForm from "./ContactForm";
import hero from '../assets/hero2.gif';

const bgImages = [f1, f2, f3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false); // 👈 controls popup for all devices

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#7A3EF2]">

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="lg:hidden block  ">
            <img src={hero} alt="Hero" className="rounded-full h-40 mt-20" />
          </div>
          {/* Left Text */}
          <div className="text-white w-full lg:max-w-3xl">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold capitalize leading-tight mb-4">
              From paperwork to permit <br />
              <span className="text-white">factory license <br /> done right</span>
            </h1>
            <p className="text-sm sm:text-base mb-6 sm:mb-8">
              Whether you're setting up a new manufacturing unit or updating an existing one, we ensure your operations are fully compliant with government regulations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowPopup(true)} // ✅ open popup
                className="bg-white text-[#7A3EF2] font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
              >
                Get a Free Quote
              </button>

              <button className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-[#7A3EF2] transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="hidden lg:block  ">
            <img src={hero} alt="Hero" className="rounded-full h-96" />
          </div>
        </div>
      </div>

      {/* 👇 Popup Form for all devices */}
      {showPopup && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
          <div className="bg-gray-50 p-6 rounded-lg max-w-md w-full relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-3 text-gray-500 text-4xl"
            >
              ×
            </button>
            <ContactForm  />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
