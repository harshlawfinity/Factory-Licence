import React, { useState, useEffect, useRef, Suspense, lazy } from "react";

const FiMenu = lazy(() =>
  import("react-icons/fi").then((mod) => ({ default: mod.FiMenu }))
);
const FiX = lazy(() =>
  import("react-icons/fi").then((mod) => ({ default: mod.FiX }))
);
const FiChevronDown = lazy(() =>
  import("react-icons/fi").then((mod) => ({ default: mod.FiChevronDown }))
);
import { Link } from "react-router-dom";
import FL from "./FL"; // Logo component

const PhoneCall = React.lazy(() =>
  import("lucide-react").then((m) => ({ default: m.PhoneCall }))
);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMenus, setExpandedMenus] = useState({});
  const timeoutRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubMenu = (i) => {
    setExpandedMenus((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Factory Licence",
      subNav: [
        { name: "Delhi", path: "/factory-licence-in-delhi" },
        { name: "Haryana", path: "/factory-licence-in-haryana" },
        { name: "Uttar Pradesh", path: "/factory-licence-in-uttar-pradesh" },
      ],
    },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Payments", path: "/payments" },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`px-4 md:px-0 w-full h-20 fixed top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white shadow-md"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto h-full">
        <Link
          to="/"
          className="text-2xl font-semibold text-[#642bd5]"
          aria-label="Factory Licence Home"
        >
          <FL />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-base font-medium">
          {navItems.map((item, i) => (
            <div
              key={i}
              className="relative group"
              onMouseEnter={() => {
                clearTimeout(timeoutRef.current);
                setActiveDropdown(i);
              }}
              onMouseLeave={() => {
                timeoutRef.current = setTimeout(() => {
                  setActiveDropdown(null);
                }, 250);
              }}
            >
              <Link
                to={item.path}
                className="transition flex items-center gap-1 text-black hover:text-[#7A3EF2]"
              >
                {item.name}
                {item.subNav && <FiChevronDown size={14} />}
              </Link>

              {item.subNav && activeDropdown === i && (
                <div className="absolute left-0 mt-2 z-50">
                  <div className="absolute top-0 left-4 w-3 h-3 rotate-45 shadow-md z-[-1] bg-gray-200"></div>
                  <div className="mt-1 shadow-lg text-black rounded-md bg-gray-200">
                    {item.subNav.map((subItem, j) => (
                      <Link
                        key={j}
                        to={subItem.path}
                        className="block border-b border-zinc-400 px-8 py-4 text-sm text-gray-800 hover:bg-gray-100 hover:text-[#7A3EF2] whitespace-nowrap"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            aria-label="Call us"
            className="border-2 px-5 py-2 flex items-center gap-2 rounded-full font-semibold text-black border-zinc-600 hover:bg-gray-100 transition"
          >
            <Suspense fallback={<span></span>}>
              <PhoneCall size={20} className="animate-pulse" />
            </Suspense>
            +91 99107 74687
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <FiX size={26} className="text-black" />
            ) : (
              <FiMenu size={26} className="text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white z-50 shadow-lg transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {" "}
          <div className="flex justify-between items-center p-5">
            <Link
              to="/"
              className="text-[#7A3EF2] font-semibold text-2xl"
              onClick={toggleMenu}
              aria-label="Factory Licence Home"
            >
              Factory Licence
            </Link>
            <button onClick={toggleMenu} aria-label="Close mobile menu">
              <FiX size={28} className="text-black" />
            </button>
          </div>
          <nav className="flex flex-col p-6 gap-6 text-gray-900 text-lg font-medium">
            {navItems.map((item, i) => (
              <div key={i} className="flex flex-col">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() =>
                    item.subNav ? toggleSubMenu(i) : toggleMenu()
                  }
                >
                  <Link
                    to={item.path}
                    className="hover:text-[#7A3EF2]"
                    onClick={item.subNav ? undefined : toggleMenu}
                  >
                    {item.name}
                  </Link>
                  {item.subNav && (
                    <FiChevronDown
                      className={`transition-transform ${
                        expandedMenus[i] ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {item.subNav && expandedMenus[i] && (
                  <div className="ml-4 mt-2 flex flex-col gap-2 text-base text-gray-700">
                    {item.subNav.map((subItem, j) => (
                      <Link
                        key={j}
                        to={subItem.path}
                        onClick={toggleMenu}
                        className="hover:text-[#7A3EF2]"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button
              className="mt-6 flex items-center gap-2 border border-black px-4 py-2 rounded-full text-black"
              aria-label="Call us"
            >
              <PhoneCall size={20} />
              +91 99107 74687
            </button>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Nav;
