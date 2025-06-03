import { useEffect, useState } from 'react';
import fa from '../assets/fa.gif';
import lg1 from '../assets/lg1.gif';
import lg2 from '../assets/lg2.gif';
import { Mail, PhoneCall, Facebook, Twitter, Instagram } from 'lucide-react';

const FL = () => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative  w-[215px] h-[60px] overflow-hidden flex items-center justify-start">
      {/* Sliding Factory Image */}
      <div
        className={`    flex justify-start items-center transition-all duration-1000 ease-in-out ${
          showImage ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}
      >
        <img src={lg2} alt="Factory GIF" className="w-80 " />
      </div>

      {/* Sliding Factory Text */}
      <div
        className={`absolute left-0 top-0 w-full h-full flex items-center text-2xl font-semibold text-[#ffffff] transition-all duration-1000 ease-in-out ${
          showImage ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0'
        }`}
      >
        Factory
      </div>

      {/* Always-visible Licence.com */}
      <div className="ml-auto text-2xl font-semibold text-[#ffffff]">
        Licence.In
      </div>
    </div>
  );
};

export default FL;
