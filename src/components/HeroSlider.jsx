import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Premium Chauffeur Services Across Rajasthan",
    subtitle: "Travel in comfort, safety, and style with experienced drivers.",
  },
  {
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    title: "Experience Rajasthan Like Never Before",
    subtitle:
      "Custom travel solutions for domestic and international tourists.",
  },
  {
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
    title: "Reliable Airport Transfers",
    subtitle: "24/7 pickup and drop services with professional chauffeurs.",
  },
];

export default function HeroSlider() {
  return (
    <section className="h-screen">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black/60" />

              <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
                <div className="max-w-4xl">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    {slide.title}
                  </h1>

                  <p className="text-lg md:text-xl mb-8">{slide.subtitle}</p>

                  <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <Link
                      to="/contact"
                      className="bg-[#D4A017] px-8 py-4 rounded-xl font-semibold"
                    >
                      Book Your Ride
                    </Link>

                    <Link
                      to="/fleet"
                      className="border border-white px-8 py-4 rounded-xl"
                    >
                      Explore Fleet
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
