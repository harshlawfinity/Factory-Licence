import { useState, lazy } from "react";

const ContactForm = lazy(() => import("./ContactForm"));
import hero from "../assets/hero2.gif";

const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section
      className="relative w-full h-[90vh] md:mt-0 mt-20 overflow-hidden bg-[#7c4bdf]"
      aria-label="Factory Licence Hero Section"
    >
      {/* Main Content */}
      <main className="absolute inset-0  flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-7xl    mx-auto w-full flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Hero Image (Mobile) */}
          <figure className="lg:hidden block">
            <img
              src={hero}
              alt="Hero"
              width={384}
              height={384}
              loading="lazy"
              decoding="async"
              className="w-[284px] h-[284px] object-cover rounded-full"
            />
          </figure>

          {/* Text Block */}
          <article className="text-white w-full lg:max-w-3xl">
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold capitalize leading-tight mb-2 md:mb-4">
              From paperwork to permit
              <span className="text-white">
                factory licence <br /> done right
              </span>
            </p>
            <p className="text-sm sm:text-xl mb-6 sm:mb-8">
              Whether you're setting up a new manufacturing unit or updating an
              existing one, we ensure your operations are fully compliant with
              government regulations.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowPopup(true)}
                className="bg-white text-[#7A3EF2] font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
                aria-label="Get a free quote"
              >
                Get Started
              </button>
            </div>
          </article>

          {/* Hero Image (Desktop) */}
          <figure className="hidden lg:block">
            <img
              src={hero}
              alt="Hero"
              width={384}
              height={384}
              loading="lazy"
              decoding="async"
              className="w-[384px] h-[384px] object-cover rounded-full"
            />
          </figure>
        </div>
      </main>

      {/* Popup Contact Form */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-gray-50 p-6 rounded-lg max-w-md w-full relative shadow-lg">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-3 text-gray-500 text-4xl"
              aria-label="Close contact form"
            >
              ×
            </button>
            <ContactForm />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
