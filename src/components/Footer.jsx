import React from "react";
import { FaDiscord, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#6B2E0E] text-white py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold">Get in Touch</h2>

        {/* Description */}
        <p className="text-sm md:text-base text-white mt-2">
          Our mission is to drive progress and enhance the lives of our customers by 
          delivering superior products and services that exceed expectations.
        </p>

        {/* Order Now Button */}
        <button className="mt-5 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full flex items-center mx-auto transition-all duration-300">
          Order Now →
        </button>

        {/* Copyright */}
        <p className="text-xs text-white mt-5">
          ©Copyright Nasalclip.com. All rights reserved. 2024
        </p>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white mt-6"></div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm mt-4">
          <a href="#" className="hover:underline">Privacy & Policy</a>
          <a href="#" className="hover:underline">Terms & Condition</a>
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Resources</a>
          <a href="#" className="hover:underline">FAQ</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-6">
          <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300">
            <FaDiscord className="text-white text-lg" />
          </a>
          <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300">
            <FaYoutube className="text-white text-lg" />
          </a>
          <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300">
            <FaInstagram className="text-white text-lg" />
          </a>
          <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300">
            <FaLinkedin className="text-white text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
