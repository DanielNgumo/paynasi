"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Shield, Heart } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#e01c4e]/10 text-[#e01c4e] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Heart className="h-4 w-4 mr-2" />
            What Our Users Say
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by
            <span className="text-[#17b5a7]"> Thousands</span>
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from real users
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-2xl p-6 relative transition-all duration-500 hover:shadow-lg hover:bg-white"
              >
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#15479e] rounded-full flex items-center justify-center">
                  <Quote className="h-4 w-4 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* User Info */}
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 ${testimonial.avatar} rounded-full flex items-center justify-center text-white font-semibold`}>
                    {testimonial.initial}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role} &bull; {testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-[#15479e]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[#15479e] mb-2">4.9</div>
            <div className="text-gray-600 text-sm">App Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#17b5a7] mb-2">1,000+</div>
            <div className="text-gray-600 text-sm">Happy Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#e01c4e] mb-2">5,000+</div>
            <div className="text-gray-600 text-sm">Safe Transactions</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#15479e] mb-2">99.9%</div>
            <div className="text-gray-600 text-sm">Success Rate</div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-16 bg-gradient-to-r from-[#15479e]/10 to-[#17b5a7]/10 rounded-2xl p-8 text-center">
          <Shield className="h-12 w-12 text-[#15479e] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Join the Trust Revolution</h3>
          <p className="text-gray-600">
            Be part of Kenya&apos;s most trusted transaction platform
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;