"use client";

import React from 'react';
import { Shield, CheckCircle, Download, Play, Star, Users, Lock } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#15479e] via-[#1e5bb8] to-[#17b5a7] overflow-hidden min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Elements - Hidden on mobile, visible on larger screens */}
      <div className="hidden md:block absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="hidden lg:block absolute top-40 right-20 w-24 h-24 bg-[#e01c4e]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="hidden md:block absolute bottom-20 left-1/4 w-20 h-20 bg-[#17b5a7]/20 rounded-full blur-xl animate-pulse delay-2000"></div>

      <div className="relative max-w-[90rem] 2xl:max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10 py-18 sm:py-16 lg:py-20 xl:py-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white space-y-6 md:space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm 2xl:text-base">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 2xl:h-5 2xl:w-5 mr-2 text-[#17b5a7]" />
              Secure Escrow Platform
            </div>

            {/* Main Heading */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight">
                Trust. Transact.{' '}
                <span className="text-[#17b5a7] block sm:inline">Track.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl text-blue-100 font-medium leading-relaxed">
                Your money moves safely, fairly, and only when it should.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg 2xl:text-xl text-blue-100 leading-relaxed max-w-3xl 2xl:max-w-4xl">
              PayNasi is a secure mobile escrow platform that protects both buyers and sellers during transactions. 
              Whether you&apos;re purchasing a product or hiring for a service, we ensure payment is only released when everything checks out.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 2xl:gap-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6 text-[#17b5a7] flex-shrink-0" />
                <span className="text-blue-100 text-sm sm:text-base 2xl:text-lg">No risk. No scams.</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6 text-[#17b5a7] flex-shrink-0" />
                <span className="text-blue-100 text-sm sm:text-base 2xl:text-lg">Inspect before you pay</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6 text-[#17b5a7] flex-shrink-0" />
                <span className="text-blue-100 text-sm sm:text-base 2xl:text-lg">Verify payment before you send goods.</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6 text-[#17b5a7] flex-shrink-0" />
                <span className="text-blue-100 text-sm sm:text-base 2xl:text-lg">Total transactions protection</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <button className="bg-[#e01c4e] hover:bg-[#c01640] text-white px-6 py-3 sm:px-8 sm:py-4 2xl:px-10 2xl:py-5 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm sm:text-base 2xl:text-lg">
                <Download className="h-4 w-4 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6" />
                <span>Download on Google Play</span>
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 sm:px-8 sm:py-4 2xl:px-10 2xl:py-5 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 border border-white/20 text-sm sm:text-base 2xl:text-lg">
                <Play className="h-4 w-4 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0 pt-6 border-t border-white/20">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 2xl:w-10 2xl:h-10 bg-[#17b5a7] rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 2xl:w-10 2xl:h-10 bg-[#e01c4e] rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 2xl:w-10 2xl:h-10 bg-yellow-400 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-xs sm:text-sm 2xl:text-base text-blue-100">1000+ users</span>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 2xl:h-5 2xl:w-5 text-yellow-400 fill-current" />
                ))}
                <span className="text-xs sm:text-sm 2xl:text-base text-blue-100 ml-2">4.9 rating</span>
              </div>
            </div>
          </div>


{/* Right Column - Visual */}
<div className="relative order-1 lg:order-2 flex justify-center lg:justify-end items-center py-8 lg:py-12">
  {/* Business Vector SVG - Now with larger dimensions and relaxed constraints */}
  <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
    <Image
      src="/images/vector.svg"
      alt="PayNasi Business Vector"
      width={600}  // Increased from 400
      height={600} // Increased from 400
      className="w-full h-auto"
      priority
    />

    {/* Floating Cards - Adjusted positioning for larger image */}
    <div className="hidden md:block absolute top-[-2rem] left-[-2rem] lg:top-[-3rem] lg:left-[-3rem] 2xl:top-[-4rem] 2xl:left-[-4rem] bg-white/90 backdrop-blur-sm rounded-xl p-3 lg:p-4 2xl:p-5 shadow-xl">
      <div className="flex items-center space-x-2 lg:space-x-3 2xl:space-x-4">
        <Lock className="h-6 w-6 lg:h-8 lg:w-8 2xl:h-10 2xl:w-10 text-[#17b5a7]" />
        <div>
          <div className="font-semibold text-[#15479e] text-sm lg:text-base 2xl:text-lg">Secure</div>
          <div className="text-xs lg:text-sm 2xl:text-base text-gray-600">Bank-level security</div>
        </div>
      </div>
    </div>

    <div className="hidden md:block absolute bottom-[-2rem] right-[-2rem] lg:bottom-[-3rem] lg:right-[-3rem] 2xl:bottom-[-4rem] 2xl:right-[-4rem] bg-white/90 backdrop-blur-sm rounded-xl p-3 lg:p-4 2xl:p-5 shadow-xl">
      <div className="flex items-center space-x-2 lg:space-x-3 2xl:space-x-4">
        <Users className="h-6 w-6 lg:h-8 lg:w-8 2xl:h-10 2xl:w-10 text-[#e01c4e]" />
        <div>
          <div className="font-semibold text-[#15479e] text-sm lg:text-base 2xl:text-lg">Trusted</div>
          <div className="text-xs lg:text-sm 2xl:text-base text-gray-600">1000+ users</div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 sm:h-16 2xl:h-20">
          <path d="M0,0V46.29C47.79,22.8,103.59,32.5,158,28,209.58,23.82,278.92,24.48,331,28c63.08,4.21,121.4,10.17,174,28,51.6,17.4,98.8,47.5,158,48,59.2,0.5,119.8-29.4,174-48,51.6-17.7,98.4-10.1,158-28,46.8-14.1,87.2-40.8,131-48V0Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;