"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Shield, Heart } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Wanjiku",
      role: "Online Seller",
      location: "Nairobi",
      rating: 5,
      text: "PayNasi changed my business. No more risky cash deliveries. I know the money is there before I ship.",
      avatar: "bg-[#17b5a7]",
      initial: "S"
    },
    {
      id: 2,
      name: "James Kiprotich",
      role: "Freelancer",
      location: "Eldoret",
      rating: 5,
      text: "Clients trust me more now. PayNasi gives them confidence to pay upfront for my services.",
      avatar: "bg-[#e01c4e]",
      initial: "J"
    },
    {
      id: 3,
      name: "Grace Mutua",
      role: "Online Shopper",
      location: "Mombasa",
      rating: 5,
      text: "Finally bought a phone online safely. Inspected it first, then released payment. Perfect!",
      avatar: "bg-[#15479e]",
      initial: "G"
    },
    {
      id: 4,
      name: "David Ochieng",
      role: "Electronics Dealer",
      location: "Kisumu",
      rating: 5,
      text: "My customers feel secure buying expensive items. PayNasi builds trust instantly.",
      avatar: "bg-[#17b5a7]",
      initial: "D"
    },
    {
      id: 5,
      name: "Mary Njoroge",
      role: "Fashion Buyer",
      location: "Nakuru",
      rating: 5,
      text: "Love the peace of mind. I inspect clothes before payment. No more disappointments!",
      avatar: "bg-[#e01c4e]",
      initial: "M"
    },
    {
      id: 6,
      name: "Peter Mwangi",
      role: "Service Provider",
      location: "Thika",
      rating: 5,
      text: "Escrow protects both sides. Clients pay confidently, I deliver without worry.",
      avatar: "bg-[#15479e]",
      initial: "P"
    }
  ];

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const getVisibleTestimonials = () => {
    const visible = [];
    const itemsToShow = isMobile ? 1 : 3;
    
    for (let i = 0; i < itemsToShow; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 2xl:py-24 bg-white">
      <div className="max-w-[90rem] 2xl:max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 2xl:mb-20">
          <div className="inline-flex items-center bg-[#e01c4e]/10 text-[#e01c4e] px-3 sm:px-4 py-2 2xl:py-2.5 rounded-full text-xs sm:text-sm 2xl:text-base font-semibold mb-4 sm:mb-6 2xl:mb-8">
            <Heart className="h-3 w-3 sm:h-4 sm:w-4 2xl:h-5 2xl:w-5 mr-2" />
            What Our Users Say
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 2xl:mb-6 leading-tight">
            Trusted by
            <span className="text-[#17b5a7]"> Thousands</span>
          </h2>
          <p className="text-lg sm:text-xl 2xl:text-2xl text-gray-600">
            Real stories from real users
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 2xl:w-14 2xl:h-14 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-colors duration-200 hidden md:flex"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 2xl:h-7 2xl:w-7 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 2xl:w-14 2xl:h-14 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-colors duration-200 hidden md:flex"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 2xl:h-7 2xl:w-7 text-gray-600" />
          </button>

          {/* Mobile Navigation Buttons */}
          <div className="flex justify-between mb-4 2xl:mb-6 md:hidden">
            <button
              onClick={prevSlide}
              className="w-10 h-10 2xl:w-12 2xl:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronLeft className="h-5 w-5 2xl:h-6 2xl:w-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextSlide}
              className="w-10 h-10 2xl:w-12 2xl:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronRight className="h-5 w-5 2xl:h-6 2xl:w-6 text-gray-600" />
            </button>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 2xl:gap-10">
            {getVisibleTestimonials().map((testimonial) => (
              <div
                key={testimonial.id}
                className="group bg-gray-50 rounded-2xl p-4 sm:p-6 2xl:p-8 relative transition-all duration-500 hover:shadow-lg hover:bg-white"
              >
                {/* Quote Icon */}
                <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 2xl:-top-4 2xl:-left-4 w-6 h-6 sm:w-8 sm:h-8 2xl:w-10 2xl:h-10 bg-[#15479e] rounded-full flex items-center justify-center">
                  <Quote className="h-3 w-3 sm:h-4 sm:w-4 2xl:h-5 2xl:w-5 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3 sm:mb-4 2xl:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 2xl:h-5 2xl:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-4 sm:mb-6 2xl:mb-8 leading-relaxed text-sm sm:text-base 2xl:text-lg">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* User Info */}
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 2xl:w-14 2xl:h-14 ${testimonial.avatar} rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base 2xl:text-lg`}>
                    {testimonial.initial}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base 2xl:text-lg">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm 2xl:text-base text-gray-500">{testimonial.role} &bull; {testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 sm:mt-8 2xl:mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 2xl:w-3 2xl:h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-[#15479e]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 2xl:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 2xl:gap-10 text-center">
          <div className="p-4">
            <div className="text-2xl sm:text-3xl 2xl:text-4xl font-bold text-[#15479e] mb-1 sm:mb-2">4.9</div>
            <div className="text-gray-600 text-xs sm:text-sm 2xl:text-base">App Rating</div>
          </div>
          <div className="p-4">
            <div className="text-2xl sm:text-3xl 2xl:text-4xl font-bold text-[#17b5a7] mb-1 sm:mb-2">1,000+</div>
            <div className="text-gray-600 text-xs sm:text-sm 2xl:text-base">Happy Users</div>
          </div>
          <div className="p-4">
            <div className="text-2xl sm:text-3xl 2xl:text-4xl font-bold text-[#e01c4e] mb-1 sm:mb-2">5,000+</div>
            <div className="text-gray-600 text-xs sm:text-sm 2xl:text-base">Safe Transactions</div>
          </div>
          <div className="p-4">
            <div className="text-2xl sm:text-3xl 2xl:text-4xl font-bold text-[#15479e] mb-1 sm:mb-2">99.9%</div>
            <div className="text-gray-600 text-xs sm:text-sm 2xl:text-base">Success Rate</div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 sm:mt-16 2xl:mt-20 bg-gradient-to-r from-[#15479e]/10 to-[#17b5a7]/10 rounded-2xl p-6 sm:p-8 2xl:p-10 text-center">
          <Shield className="h-10 w-10 sm:h-12 sm:w-12 2xl:h-14 2xl:w-14 text-[#15479e] mx-auto mb-3 sm:mb-4 2xl:mb-6" />
          <h3 className="text-xl sm:text-2xl 2xl:text-3xl font-bold text-gray-900 mb-2 2xl:mb-3">Join the Trust Revolution</h3>
          <p className="text-sm sm:text-base 2xl:text-lg text-gray-600 px-2">
            Be part of Kenya&apos;s most trusted transaction platform
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;