import React from "react";

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="bg-[#622E0E] text-white p-6 md:p-12 flex flex-col md:flex-row gap-8 items-center justify-center">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p>
          Using our nasal clip is effortless and effective. Follow these steps to enjoy better airflow and relief from snoring or congestion.
        </p>
        <img
          src="src/assets/images/howitworks/howitworks1.png"
          alt="Person"
          className="rounded-lg w-3/4 mx-auto"
        />

        <h3 className="text-2xl font-bold mt-6">What's in the Kit</h3>

        {/* Kit Contents */}
        <div className="space-y-3">
          <div className="bg-[#84421E] p-4 rounded-lg">
            <h4 className="font-bold">4 Bands</h4>
            <p>You can easily choose which works best for you.</p>
          </div>
          <div className="bg-[#84421E] p-4 rounded-lg">
            <h4 className="font-bold">15 or 30 Tabs</h4>
            <p>Tabs are made with 3M tape, they're safe for sensitive skin.</p>
          </div>
          <div className="bg-[#84421E] p-4 rounded-lg">
            <h4 className="font-bold">Applicator</h4>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 space-y-6">
        <div className="bg-[#A04C1E] p-4 rounded-lg relative hover:bg-orange-500">
          <span className="absolute top-2 right-2 bg-[#D45C00] text-white text-xs px-2 py-1 rounded-md">Step 1</span>
          <h3 className="font-bold">Clean</h3>
          <p>
            Clean your nose thoroughly to remove dirt or oil. Let your nose dry before applying the tabs.
            <span className="font-bold"> Pro-Tip:</span> Clean with soap and water or use an alcohol prep pad for best results.
          </p>
        </div>

        <div className="bg-[#A04C1E] p-4 rounded-lg relative hover:bg-orange-500">
          <span className="absolute top-2 right-2 bg-[#D45C00] text-white text-xs px-2 py-1 rounded-md">Step 2</span>
          <h3 className="font-bold">Apply</h3>
          <p>Using the applicator, apply one adhesive tab to each side of your nose just above the nostrils.</p>
        </div>

        <div className="bg-[#A04C1E] p-4 rounded-lg relative hover:bg-orange-500">
          <span className="absolute top-2 right-2 bg-[#D45C00] text-white text-xs px-2 py-1 rounded-md">Step 3</span>
          <h3 className="font-bold">Tab Placement</h3>
          <p>Place the tab correctly to ensure a firm grip. 100% contact with the skin is necessary for best results.</p>
        </div>

        <div className="bg-[#A04C1E] p-4 rounded-lg relative hover:bg-orange-500">
          <span className="absolute top-2 right-2 bg-[#D45C00] text-white text-xs px-2 py-1 rounded-md">Step 4</span>
          <h3 className="font-bold">Attach</h3>
          <p>Place the U-Will band over your nose. The magnetic ends will snap onto the tabs for a secure fit.</p>
        </div>

        <img
          src="src/assets/images/howitworks/howitworks2.png"
          alt="Kit Contents"
          className="rounded-lg w-full"
        />
      </div>
    </div>
  );
};

export default HowItWorks;
