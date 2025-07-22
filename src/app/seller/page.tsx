'use client';

import React from 'react';
import { Shield, CheckCircle, Download } from 'lucide-react';

const SellerPage = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#15479e] via-[#1e5bb8] to-[#17b5a7] overflow-hidden min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Elements - Responsive positioning */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-[#e01c4e]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 sm:bottom-20 left-1/4 w-14 h-14 sm:w-20 sm:h-20 bg-[#17b5a7]/20 rounded-full blur-xl animate-pulse delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-18 sm:py-16 md:py-20 lg:py-32">
        <div className="text-white space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium">
            <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-[#17b5a7]" />
            Seller Protection
          </div>

          {/* Main Heading */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Sell with Confidence
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-100 font-medium leading-tight">
              PayNasi guarantees your payment, so you can focus on delivering.
            </p>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-2xl lg:max-w-3xl">
            PayNasi protects sellers by ensuring funds are secured before delivery. With no registration fees and no risky cash-on-delivery transactions, you can grow your business with trust and confidence.
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2 sm:pt-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#17b5a7] flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">Zero Registration Fees</h3>
                <p className="text-sm text-blue-100 mt-1">Signing up with PayNasi is completely free.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#17b5a7] flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">Guaranteed Funds Before Delivery</h3>
                <p className="text-sm text-blue-100 mt-1">Know the money is secure before sending your product or service.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#17b5a7] flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">No Risky Cash On Delivery</h3>
                <p className="text-sm text-blue-100 mt-1">Eliminate uncertain in-person cash transactions.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#17b5a7] flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">Grow With Confidence</h3>
                <p className="text-sm text-blue-100 mt-1">Offer safer terms to build trust with first-time buyers.</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
            <button className="bg-[#e01c4e] hover:bg-[#c01640] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm sm:text-base">
              <Download className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Download on Google Play</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Wave - Responsive height */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 sm:h-16">
          <path d="M0,0V46.29C47.79,22.8,103.59,32.5,158,28,209.58,23.82,278.92,24.48,331,28c63.08,4.21,121.4,10.17,174,28,51.6,17.4,98.8,47.5,158,48,59.2,0.5,119.8-29.4,174-48,51.6-17.7,98.4-10.1,158-28,46.8-14.1,87.2-40.8,131-48V0Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};

export default SellerPage;