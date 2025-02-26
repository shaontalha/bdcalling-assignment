import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaPlay } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "src/assets/images/painandsolution/solution.png",
  "src/assets/images/painandsolution/solution.png",
  "src/assets/images/painandsolution/solution.png",
];

const VideoCarousel = () => {
  return (
    <div className="bg-[#6B2E0E] py-10">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={15}
        slidesPerView={1.5}
        
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        className="max-w-5xl mx-auto"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="relative group">
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-[400px] rounded-lg object-cover" />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 bg-white/60 rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300">
                <FaPlay className="text-gray-900 text-xl" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoCarousel;
