import React from "react";
import heroBg from "../assets/images/herosection/herosection.jpg";
import Avatar1 from "../assets/images/herosection/Avatar1.png";
import Avatar2 from "../assets/images/herosection/Avatar2.png";
import Avatar3 from "../assets/images/herosection/Avatar3.png";

const HeroSection = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center px-6 text-center md:flex-row md:text-left"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Content */}
      <div className="relative z-10 text-white max-w-3xl mt-0 md:mt-20 ml-0 lg:-ml-60">
        {/* Happy Customer Section */}
        <div className="flex items-center space-x-2 mb-4">
          {/* Overlapping Avatar Images */}
          <div className="flex items-center">
            <img src={Avatar1} alt="Avatar1" className="w-12 h-12 rounded-full border-2 " />
            <img src={Avatar2} alt="Avatar2" className="w-12 h-12 rounded-full border-2  -ml-4" />
            <img src={Avatar3} alt="Avatar3" className="w-12 h-12 rounded-full border-2  -ml-4" />
          </div>

          {/* Happy Customers Text */}
          <div className="bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded-full -ml-4">
            26K Happy Customers
          </div>
        </div>

        {/* Hero Text */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight font-montserrat">
          Breathe better, <br className="hidden md:inline" />
          live better!
        </h1>
        <p className="mt-4 text-lg md:text-xl md:w-3/4">
          Discover how effortless breathing can enhance your life.
          <br className="hidden lg:inline" />
          Take the first step today!
        </p>

        {/* Call to Action Button */}
        <button className="mt-6 bg-[#FF6600] cursor-pointer hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">
          Shop Now 
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
