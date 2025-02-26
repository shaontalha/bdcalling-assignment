import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import product1 from "../assets/images/productsection/product1.png";
import product2 from "../assets/images/productsection/product2.png";
import product3 from "../assets/images/productsection/product3.png";
import product4 from "../assets/images/productsection/product4.png";


const ProductSection = () => {
  const [selectedImage, setSelectedImage] = useState(product1);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
      {/* Left Side - Product Image */}
      <div className="flex flex-col items-center">
        <div className="border-2 border-blue-500 rounded-lg bg-orange-100 p-4">
          <img
            src={selectedImage}
            alt="Product"
            className="w-[300px] h-[500px] object-contain"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-4 mt-4">
          {[product1, product2, product3, product4].map((image, index) => (
            <button
              key={index}
              className={`border-2 p-1 rounded-md ${
                selectedImage === image ? "border-black" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image} alt={`Thumbnail ${index}`} className="w-16 h-16 object-contain" />
            </button>
          ))}
        </div>
      </div>

      {/* Right Side - Product Details */}
      <div>
        {/* Title & Rating */}
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400">
            {"★★★★★".split("").map((star, index) => (
              <span key={index}>{star}</span>
            ))}
          </div>
          <p className=" text-sm">(500+ Reviews)</p>
        </div>

        <h1 className="text-3xl font-bold mt-2">Noseclip</h1>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-2xl font-semibold text-[#6B2B00]">$12.00</span>
          <span className=" line-through">$20.00</span>
          <span className="bg-[#FF6600] text-white px-2 py-1 rounded-md text-sm">SAVE 10%</span>
        </div>

        {/* Description */}
        <p className="mt-4 ">
          A nasal clip is a small device typically used to pinch or secure the nostrils
          for various purposes, such as during sports, medical treatments, or personal
          health practices. It is usually made of flexible or padded materials to ensure
          comfort and a secure fit. Common uses include:
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <p className="flex items-center gap-2 ">
            <FaCheckCircle className="text-[#FF6600]" /> Boost performance
          </p>
          <p className="flex items-center gap-2 ">
            <FaCheckCircle className="text-[#FF6600]" /> Stop snoring
          </p>
          <p className="flex items-center gap-2 ">
            <FaCheckCircle className="text-[#FF6600]" /> Optimized Airflow
          </p>
          <p className="flex items-center gap-2 ">
            <FaCheckCircle className="text-[#FF6600]" /> 100% Drug Free
          </p>
        </div>

        {/* Add to Cart Button */}
        <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg flex justify-center items-center gap-2">
          Add to Cart →
        </button>

        {/* Payment Options */}
        <div className="flex gap-4 mt-6">
          <img src="src/assets/images/productsection/appplepay.png" alt="Apple Pay" className="h-10" />
          <img src="src/assets/images/productsection/googlepay.png" alt="Google Pay" className="h-10" />
          <img src="src/assets/images/productsection/mastercard.png" alt="MasterCard" className="h-10" />
          <img src="src/assets/images/productsection/shopify.png" alt="Shop" className="h-10" />
          <img src="src/assets/images/productsection/visa.png" alt="Visa" className="h-10" />
        </div>

        {/* Dropdown Sections */}
        <div className="mt-6 border-t">
          {[
            { title: "Sizing information", content: "Our nose clips are available in multiple sizes to ensure a comfortable fit." },
            { title: "Free resizing", content: "If your nose clip doesn’t fit perfectly, we offer free resizing for all customers." },
            { title: "Money-back guarantee & free returns", content: "If you’re not satisfied with your purchase, you can return it for a full refund." }
          ].map((item, index) => (
            <div key={index} className="border-b">
              <button
                className="w-full flex justify-between items-center py-3 text-lg font-medium"
                onClick={() => toggleDropdown(index)}
              >
                {item.title}
                {openDropdown === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {openDropdown === index && <p className="text-gray-600 pb-3">{item.content}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
