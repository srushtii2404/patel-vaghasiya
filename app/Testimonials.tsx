"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Testimonial {
  _id: string;
  name: string;
  designation?: string;
  company?: string;
  image?: {
    asset?: {
      url?: string;
    };
  };
  rating?: number;
  testimonial: string;
}

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setTestimonials(data || []);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const renderStars = (rating: number = 5) => {
    return Array.from({ length: 5 }).map((_, index) => {
      const starIndex = index + 1;
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 >= 0.5 && starIndex === fullStars + 1;
      
      if (starIndex <= fullStars) {
        // Full star
        return (
          <FaStar
            key={index}
            className="text-sm text-yellow-400"
          />
        );
      } else if (hasHalfStar) {
        // Half star
        return (
          <FaStarHalfAlt
            key={index}
            className="text-sm text-yellow-400"
          />
        );
      } else {
        // Empty star
        return (
          <FaStar
            key={index}
            className="text-sm text-gray-300"
          />
        );
      }
    });
  };

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto bg-[#f5f9fc]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-main-dark mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Trusted by businesses across India for expert compliance and
          registration services
        </p>
      </motion.div>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Loading testimonials...</p>
        </div>
      ) : !testimonials || testimonials.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">
            No testimonials available yet. Check back soon!
          </p>
        </div>
      ) : (
        <div className="relative">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next-testimonial',
              prevEl: '.swiper-button-prev-testimonial',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial._id} className="h-auto">
                <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition h-full flex flex-col justify-between min-h-[280px]">
                  
                  {/* Rating Stars */}
                  {testimonial.rating && (
                    <div className="flex gap-1 mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                  )}

                  {/* Testimonial Text */}
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed flex-grow break-words line-clamp-4">
                    {testimonial.testimonial}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                    {testimonial.image?.asset?.url ? (
                      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.image.asset.url}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-main/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-main font-semibold text-base">
                          {testimonial.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm truncate">
                        {testimonial.name}
                      </h4>
                      {(testimonial.designation || testimonial.company) && (
                        <p className="text-xs text-gray-600 truncate mt-0.5">
                          {testimonial.designation}
                          {testimonial.designation && testimonial.company && ", "}
                          {testimonial.company}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button className="swiper-button-prev-testimonial absolute left-[-10px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-main hover:text-white transition-all duration-300">
            <FaChevronLeft className="text-sm" />
          </button>
          <button className="swiper-button-next-testimonial absolute right-[-10px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-main hover:text-white transition-all duration-300">
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Testimonials;

