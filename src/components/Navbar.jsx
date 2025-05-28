import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Factory Licence', path: '/factory-licence' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Payments', path: '/payments' },
  ];

  return (
    <nav
      className={`px-4 md:px-0 w-full h-20 fixed top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-gradient-to-b'
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto h-full">
        <Link to="/" className={`text-2xl font-semibold ${isScrolled ? 'text-[#7A3EF2]' : 'text-white'}`}>
          Factory Licence
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-base font-medium">
          {navItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className={`transition ${
                isScrolled ? 'text-black hover:text-[#7A3EF2]' : 'text-white hover:text-[#a889f5]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center gap-4">
          <button className={`border-2 px-5 py-2 rounded-full font-semibold transition ${
            isScrolled ? 'border-  text-black hover:bg-gray-100' : 'text-white border-white hover:bg-[#6b33db]'
          }`}>
            +91 99997 04687
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FiX size={26} className={`${isScrolled ? 'text-black' : 'text-white'}`} />
            ) : (
              <FiMenu size={26} className={`${isScrolled ? 'text-black' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" onClick={toggleMenu}></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-5">
          <Link to="/" className="text-[#7A3EF2] font-semibold text-2xl" onClick={toggleMenu}>
            Factory Licence
          </Link>
          <button onClick={toggleMenu}>
            <FiX size={28} className="text-black" />
          </button>
        </div>
        <nav className="flex flex-col p-6 gap-6 text-gray-800 text-lg font-medium">
          {navItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onClick={toggleMenu}
              className="hover:text-[#7A3EF2]"
            >
              {item.name}
            </Link>
          ))}
          <button className="mt-6 border border-black px-4 py-2 rounded-full">
            +91 99997 04687
          </button>
        </nav>
      </div>
    </nav>
  );
};

export default Nav;
