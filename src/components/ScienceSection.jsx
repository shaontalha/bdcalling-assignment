import React from "react";

const ScienceSection = () => {
  return (
    <div className="bg-[#5B2C06] text-white py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section (Text) */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Backed by Science</h2>
          <p className="text-lg mb-6">
            Our product is backed by clinical studies that show significant 
            improvement in airflow and reduction in snoring for consistent users.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="text-orange-400 text-xl mr-2">✔️</span>
              <span className="font-semibold">
                Clinical study shows 80% improvement in nasal airflow
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-orange-400 text-xl mr-2">✔️</span>
              <span className="font-semibold">
                70% of users report reduced snoring after 2 weeks
              </span>
            </li>
          </ul>
        </div>

        {/* Right Section (Image) */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img 
            src="src/assets/images/science/science.png" 
            alt="Scientific Research" 
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ScienceSection;
