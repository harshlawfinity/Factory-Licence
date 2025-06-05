import { useState, useEffect, lazy } from "react";

const ContactForm = lazy(() => import("./ContactForm"));

const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoadVideo(true);
      setHydrated(true);
    } else {
      const handleLoad = () => {
        setLoadVideo(true);
        setHydrated(true);
      };
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <section className="relative w-full py-32 mt-20 overflow-hidden bg-[#7c4bdf]">
      <main className="w-full h-full flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Left Text Block */}
          <article className="text-white w-full lg:w-1/2">
            {/* Shimmer Placeholder */}
            {!hydrated ? (
              <div className="h-[140px] w-full rounded-md mb-6 shimmer" />
            ) : (
              <p className="md:text-5xl text-4xl capitalize font-semibold mb-6">
                From Paperwork To Permit
                 
                factory licence done right
              </p>
            )}

            <p className="text-sm sm:text-xl mb-6 sm:mb-8">
              Whether you're setting up a new manufacturing unit or updating an
              existing one, we ensure your operations are fully compliant with
              government regulations.
            </p>



            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowPopup(true)}
                className="bg-white text-[#7A3EF2] font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
              >
                Get Started
              </button>
            </div>

            <h1 className="hidden">Get Your Factory Licence – Fast, Simple & Compliant</h1>

          </article>

          {/* Right Video Section */}
          <figure className="w-full lg:w-1/2">
            {/* <div className="relative w-full pb-[56.25%] overflow-hidden rounded-lg bg-black">
              {!loadVideo ? (
                <>
                  <img
                    src="https://img.youtube.com/vi/uaSlyiFVhSw/hqdefault.jpg"
                    alt="Factory Licence Walkthrough Thumbnail"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    loading="lazy"
                    onClick={() => setLoadVideo(true)}
                    style={{ cursor: "pointer" }}
                  />
                  <button
                    onClick={() => setLoadVideo(true)}
                    className="absolute inset-0 flex items-center justify-center text-white text-xl bg-black/50 z-10"
                    aria-label="Play video"
                  >
                    ▶ Play Video
                  </button>
                </>
              ) : (
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/uaSlyiFVhSw?autoplay=1&mute=1&controls=1"
                  title="Factory Licence Walkthrough"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  frameBorder="0"
                />
              )}
            </div> */}
          </figure>
        </div>
      </main>

      {/* Contact Popup */}
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
