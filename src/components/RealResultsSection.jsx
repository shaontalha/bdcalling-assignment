import React from "react";

const RealResultsSection = () => {
  return (
    <section id="before-and-after" className="py-16 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Real Results You Can Feel</h2>
        <p className=" mt-2 max-w-2xl mx-auto">
          See the difference our nasal clip can make for snoring and airflow.
        </p>
      </div>

      {/* Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
        {/* Before Image */}
        <div className="relative mx-auto w-4/5 md:w-5/5">
          <span className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-sm rounded">
            Before
          </span>
          <img
            src="src/assets/images/realresult/before.png"
            alt="Before"
            className="rounded-lg border-4 border-gray-300 shadow-lg w-full"
          />
        </div>

        {/* After Image */}
        <div className="relative mx-auto w-4/5 md:w-5/5">
          <span className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-sm rounded">
            After
          </span>
          <img
            src="src/assets/images/realresult/after.png"
            alt="After"
            className="rounded-lg border-4 border-gray-300 shadow-lg w-full"
          />
        </div>
      </div>

      {/* Pros & Cons Section */}
      <div className="grid md:grid-cols-2 gap-6 text-left mt-10">
        {/* Cons (Left Side) */}
        <div>
          <h3 className="text-xl font-bold mb-4">❌ Why Nasal Strips Fail</h3>
          <div className="space-y-4">
            {[
              ["Flimsy", "Nasal strips have very little structure. When you inhale, they can still collapse."],
              ["Unsupportive", "Nasal strips don't hold your nose open as wide as Intake."],
              ["Falls Off", "Don't wake up with your nasal strip stuck to your pillow again."],
              ["Hurts Your Skin", "Nasal strips use aggressive adhesive that can damage your skin."],
              ["Pulls Forward", "Nasal strips rely on the leverage of your nose bridge to widen the nose."]
            ].map(([title, desc], index) => (
              <div key={index} className="flex items-start gap-3">
                <span className=" text-lg font-bold">❌</span>
                <div>
                  <h4 className="font-bold">{title}</h4>
                  <p className=" text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pros (Right Side) */}
        <div>
          <h3 className="text-xl font-bold mb-4">✔ Why Our Nasal Clip Works</h3>
          <div className="space-y-4">
            {[
              ["Actually Opens Your Nose", "Intake doesn't flex, so your nose opens up to the size Band you wear."],
              ["Durable", "Intake is built strong and durable so your nose stays open all night."],
              ["Stays on All Day/Night", "Intake will be precisely where you left it when you awaken."],
              ["Skin Safe", "We use less adhesive, ensuring your skin stays safe and healthy."],
              ["Pulls Outward", "Intake pulls outward using suction cup-like tabs, maximizing airflow."]
            ].map(([title, desc], index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-orange-500 text-lg font-bold">✔</span>
                <div>
                  <h4 className="font-bold">{title}</h4>
                  <p className="text-gray-500 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealResultsSection;
