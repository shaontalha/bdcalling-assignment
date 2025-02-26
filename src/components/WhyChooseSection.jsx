import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";

const WhyChooseSection = () => {
  return (
    <section className="py-16 px-6 md:px-20 relative">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Why Choose Our Nasal Clip?
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Our nasal clip provides a simple, effective solution for snoring,
          congestion, and improved airflow during activities, offering comfort
          and relief.
        </p>
      </div>

      {/* Image Slider */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          navigation={{
            nextEl: ".next-slide",
            prevEl: ".prev-slide",
          }}
          className="w-full"
        >
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-full md:w-1/2">
                <img
                  src="src/assets/images/whychoose/womansleeping.png"
                  alt="Sleeping Woman"
                  className="rounded-lg shadow-lg w-full"
                />
                
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold">Reduces Snoring</h3>
                <p className="text-gray-500 mt-2">
                  Our nasal clip is scientifically designed to fit seamlessly
                  into your daily routine.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-full md:w-1/2">
              <img
                  src="src/assets/images/whychoose/mansleepping.png"
                  alt="Man Breathing"
                  className="rounded-lg shadow-lg absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 md:w-3/5"
                />
                
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold">Scientifically Proven</h3>
                <p className="text-gray-500 mt-2">
                  Trusted by professionals to improve airflow and reduce
                  congestion.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Navigation Buttons for Image Slider */}
        <button className="prev-slide absolute left-0 md:-left-12 top-1/2 transform -translate-y-1/2 bg-white border p-3 rounded-full shadow-md">
          <FiArrowLeft className="text-gray-600 text-xl" />
        </button>
        <button className="next-slide absolute right-0 md:-right-12 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-3 rounded-full shadow-md">
          <FiArrowRight className="text-xl" />
        </button>
      </div>

      {/* Testimonial Slider */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold">Loved by Thousands</h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            navigation={{
              nextEl: ".next-testimonial",
              prevEl: ".prev-testimonial",
            }}
            className="w-full"
          >
            <SwiperSlide>
              <div className="bg-white shadow-lg rounded-xl p-6 max-w-lg mx-auto">
                <p className="text-gray-600">
                  Finally, a product that actually helps with my snoring! My
                  partner sleeps better, and so do I.
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src="src/assets/images/whychoose/alex.png"
                    alt="Alex R"
                    className="w-10 h-10 rounded-full border border-gray-300"
                  />
                  <div className="ml-3">
                    <p className="font-bold">Alex R</p>
                  </div>
                  <div className="flex items-center ml-auto text-orange-400">
                    <span className="text-lg font-semibold">4.9</span>
                    <FaStar className="ml-1 text-lg" />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white shadow-lg rounded-xl p-6 max-w-lg mx-auto">
                <p className="text-gray-600">
                  This nasal clip is a game changer! No more snoring, and I wake
                  up feeling refreshed.
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src="src/assets/images/whychoose/alex.png"
                    alt="Sarah M"
                    className="w-10 h-10 rounded-full border border-gray-300"
                  />
                  <div className="ml-3">
                    <p className="font-bold">Sarah M</p>
                  </div>
                  <div className="flex items-center ml-auto text-orange-400">
                    <span className="text-lg font-semibold">5.0</span>
                    <FaStar className="ml-1 text-lg" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Navigation Buttons for Testimonials */}
          <button className="prev-testimonial absolute left-4 top-1/2 transform -translate-y-1/2 bg-white border p-2 rounded-full shadow-md">
            <FiArrowLeft className="text-gray-600 text-lg" />
          </button>
          <button className="next-testimonial absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full shadow-md">
            <FiArrowRight className="text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
