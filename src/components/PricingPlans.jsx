import React from "react";

const plans = [
  {
    title: "1-month supply",
    subtitle: "30 Sticky Tabs",
    price: "$29.99",
    discount: "5% discount",
  },
  {
    title: "3-month supply",
    subtitle: "90 Sticky Tabs",
    price: "$79.99",
    discount: "10% discount",
  },
  {
    title: "6-month supply",
    subtitle: "180 Sticky Tabs",
    price: "$149.99",
    discount: "20% discount",
  },
  {
    title: "1-Year supply",
    subtitle: "365 Sticky Tabs",
    price: "$240.99",
    discount: "30% discount",
  },
];

const PricingPlans = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-8">
        Choose the Best Plan for You
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative bg-white border border-gray-300 rounded-lg shadow-md p-6 text-center transition-all duration-300 cursor-pointer hover:bg-white hover:scale-105"
          >
           
            <div className="py-3 rounded-t-lg bg-[#FFF0E6]">
              <h3 className="text-xl font-semibold text-black">{plan.title}</h3>
              <p className="text-[#475467]">{plan.subtitle}</p>
            </div>

            {/* Price */}
            <p className="text-2xl font-bold mt-4">{plan.price}</p>
            <div className="w-16 h-1 bg-gray-300 mx-auto my-2"></div> 
            <p className="text-orange-600 font-semibold">{plan.discount}</p>

            {/* Buy Now Button */}
            <button className="mt-4 bg-white border border-orange-500 text-orange-500 font-semibold py-2 px-6 rounded-md transition-all duration-300 hover:bg-orange-500 hover:text-white">
              Buy Now
            </button>

            {/* Features */}
            <div className="mt-4 text-left text-sm text-[#475467]">
              <p>✅ 60 days Money back guarantee</p>
              <p>✅ Whole Starter kit</p>
              <p>✅ Free Returns</p>
              <p>✅ Free shipping with every bundle after 3 month supply</p>
            </div>

            {/* Reviews with Stars */}
            <p className="mt-4 text-yellow-500 flex justify-center items-center space-x-1">
              {"⭐".repeat(5)}
              <span className="text-black text-sm ml-2">(500+ Reviews)</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
