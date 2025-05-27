import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-b from-white to-white/30 px-4  md:px-0 w-full h-18   fixed top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto h-full  ">
        <h1 className="text-[#7A3EF2] text-2xl  ">Factory Licence</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-gray-900 text-base font-medium">
          <a href="#" className="hover:text-[#7A3EF2] transition">Home</a>
          <a href="#" className="hover:text-[#7A3EF2] transition">Factory Licence</a>
          <a href="#" className="hover:text-[#7A3EF2] transition">About Us</a>
          <a href="#" className="hover:text-[#7A3EF2] transition">Contact Us</a>
          <a href="#" className="hover:text-[#7A3EF2] transition">Payments</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="bg-[#7A3EF2] text-white text-sm font-semibold px-5 py-2 rounded-full shadow hover:bg-[#6b33db] transition">
            +91 12345 67890
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center ">
          <button onClick={toggleMenu} className='text-black'>
            {isOpen ? <FiX size={26} className='text-black' /> : <FiMenu size={26} className='text-black' />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay Background */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" onClick={toggleMenu}></div>
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed  top-0 left-0 h-full w-4/5 max-w-xs bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center  p-5  ">
        <h1 className="text-[#7A3EF2] text-2xl  ">Factory Licence</h1>
          <button onClick={toggleMenu}>
            <FiX size={28} className='text-black' />
          </button>
        </div>

        <nav className="flex flex-col p-6 gap-6 text-gray-800 text-lg font-medium">
          <a href="#" onClick={toggleMenu} className="hover:text-[#7A3EF2]">Home</a>
          <a href="#" onClick={toggleMenu} className="hover:text-[#7A3EF2]">Factory Licence</a>
          <a href="#" onClick={toggleMenu} className="hover:text-[#7A3EF2]">About Us</a>
          <a href="#" onClick={toggleMenu} className="hover:text-[#7A3EF2]">Contact Us</a>
          <a href="#" onClick={toggleMenu} className="hover:text-[#7A3EF2]">Payments</a>
          <button className="mt-6 bg-[#7A3EF2] text-white text-sm font-bold px-5 py-2 rounded-full shadow hover:bg-[#6b33db] transition">
            +91 12345 67890
          </button>
        </nav>
      </div>
    </nav>
  );
};

export default Nav;
