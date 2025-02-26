import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Why It Works", id: "why-it-works" },
    { name: "Features", id: "features" },
    { name: "How It Works", id: "how-it-works" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Before and After", id: "before-and-after" },
    { name: "Science", id: "science" },
    { name: "FAQ", id: "faq" },
  ];

  return (
    <nav className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-8 w-auto"
              src="src/assets/images/navbar/logo.png"
              alt="Logo"
            />
          </div>

          {/* Hamburger Menu for Tablet and Mobile */}
          <div className="flex xl:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>

          {/* Navigation Links and Contact Button */}
          <div className="hidden xl:flex xl:items-center xl:space-x-8">
            <ul className="flex space-x-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.id}`}
                    className="text-gray-700 hover:text-orange-600 font-medium whitespace-nowrap"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Us Button */}
            <button
              className="bg-[#FF6600] text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition-colors whitespace-nowrap"
              style={{ width: "165px", height: "54px", borderRadius: "100px" }}
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Mobile and Tablet Menu */}
        {isOpen && (
          <div className="xl:hidden">
            <ul className="pt-4 pb-2 space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.id}`}
                    className="block text-gray-700 hover:text-orange-600 font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Us Button for Mobile and Tablet */}
            <button
              className="bg-[#FF6600] text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition-colors w-full mt-4"
              style={{ height: "54px", borderRadius: "100px" }}
            >
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
