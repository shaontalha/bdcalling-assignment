import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PainPointsAndSolution = () => {
  return (
    <section className="bg-[#693107] text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Image */}
        <div>
          <img
            src="src/assets/images/painandsolution/pain.png"
            alt="Man struggling with snoring"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Pain Points Content */}
        <div>
          <h2 className="text-3xl font-bold">Pain Points</h2>
          <p className="text-lg mt-2 font-semibold">
            Struggling with Snoring or Congestion?
          </p>
          <p className="mt-2 ">
            Whether it's snoring, allergies, or breathing difficulties during 
            exercise, our nasal clip is here to help. These issues can disrupt 
            your sleep, lower your energy, and impact your quality of life.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <span className="text-[#FF6600] text-lg mr-2">•</span> Persistent snoring
            </li>
            <li className="flex items-center">
              <span className="text-[#FF6600] text-lg mr-2">•</span> Nasal congestion
            </li>
            <li className="flex items-center">
              <span className="text-[#FF6600] text-lg mr-2">•</span> Allergies affecting breathing
            </li>
            <li className="flex items-center">
              <span className="text-[#FF6600] text-lg mr-2">•</span> Struggling to breathe during workouts
            </li>
          </ul>
        </div>

        {/* Solution Overview Content */}
        <div>
          <h2 className="text-3xl font-bold">Solution Overview</h2>
          <p className="text-lg mt-2 font-semibold">
            Struggling with Snoring or Congestion?
          </p>
          <p className="mt-2 ">
            Our nasal clip is scientifically designed to fit seamlessly into 
            your daily routine.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <FaCheckCircle className="text-[#FF6600]" /> &nbsp;Enhance airflow
            </li>
            <li className="flex items-center">
            <FaCheckCircle className="text-[#FF6600]" /> &nbsp;Reduce snoring
            </li>
            <li className="flex items-center">
            <FaCheckCircle className="text-[#FF6600]" /> &nbsp;Clear nasal passages
            </li>
            <li className="flex items-center">
            <FaCheckCircle className="text-[#FF6600]" /> &nbsp;Made from soft
            </li>
            <li className="flex items-center">
            <FaCheckCircle className="text-[#FF6600]" /> &nbsp;Comfortable Materials
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="src/assets/images/painandsolution/solution.png"
            alt="Nasal clip product"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        
      </div>
    </section>
  );
};

export default PainPointsAndSolution;
