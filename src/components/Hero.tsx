import React from 'react';
import { Shield, CheckCircle, Download, Play,  Star, Users, Lock } from 'lucide-react';
import Image from "next/image";


const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#15479e] via-[#1e5bb8] to-[#17b5a7] overflow-hidden">
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

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-[#e01c4e]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-[#17b5a7]/20 rounded-full blur-xl animate-pulse delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
              <Shield className="h-4 w-4 mr-2 text-[#17b5a7]" />
              Secure Escrow Platform
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Trust. Transact.{' '}
                <span className="text-[#17b5a7]">Track.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 font-medium">
                Your money moves safely, fairly, and only when it should.
              </p>
            </div>

            {/* Description */}
<p className="text-lg text-blue-100 leading-relaxed max-w-2xl">
  PayNasi is a secure mobile escrow platform that protects both buyers and sellers during transactions. 
  Whether you&apos;re purchasing a product or hiring for a service, we ensure payment is only released when everything checks out.
</p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-[#17b5a7] flex-shrink-0" />
                <span className="text-blue-100">No risk. No scams.</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-[#17b5a7] flex-shrink-0" />
                <span className="text-blue-100">Inspect before you pay</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-[#17b5a7] flex-shrink-0" />
                <span className="text-blue-100">Verify payment before you Send goods.</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-[#17b5a7] flex-shrink-0" />
                <span className="text-blue-100">Total transactions protection</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-[#e01c4e] hover:bg-[#c01640] text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105 shadow-lg">
                <Download className="h-5 w-5" />
                <span>Download on Google Play</span>
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 border border-white/20">
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 pt-6 border-t border-white/20">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-[#17b5a7] rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-[#e01c4e] rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm text-blue-100">1000+ users</span>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-blue-100 ml-2">4.9 rating</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Phone Mockup */}
            <div className="relative mx-auto w-80 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl shadow-2xl">
              {/* Phone Screen */}
              <div className="absolute top-4 left-4 right-4 bottom-4 bg-white rounded-2xl overflow-hidden">
                {/* App Interface */}
                <div className="h-full bg-gradient-to-b from-blue-50 to-white p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    {/* <div className="flex items-center space-x-2">
                      <Shield className="h-6 w-6 text-[#e01c4e]" />
                      <span className="font-bold text-[#15479e]">PayNasi</span>
                    </div> */}
                    <div className="flex items-center space-x-2">
  {/* Real logo */}
  <Image
    src="/images/logo.jpg"      /* file lives in /public/images/ */
    alt="PayNasi logo"
    width={24}                  /* tweak sizes as needed */
    height={24}
    className="h-6 w-6 object-contain"
    priority                    /* optional: pre‑loads above‑the‑fold */
  />
  <span className="font-bold text-[#15479e]">PayNasi</span>
</div>

                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  </div>
                  
                  {/* Transaction Card */}
                  <div className="bg-white rounded-xl shadow-md p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Transaction</span>
                      <span className="text-xs bg-[#17b5a7]/20 text-[#17b5a7] px-2 py-1 rounded-full">In Progress</span>
                    </div>
                    <div className="text-lg font-bold text-[#15479e] mb-1">KSH 15,000</div>
                    <div className="text-sm text-gray-500">iPhone 13 Pro</div>
                  </div>

                  {/* Steps */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#17b5a7] rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm text-gray-700">Payment deposited</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#17b5a7] rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm text-gray-700">Seller confirmed</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#15479e] rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-700">Awaiting delivery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-8 -left-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <Lock className="h-8 w-8 text-[#17b5a7]" />
                <div>
                  <div className="font-semibold text-[#15479e]">Secure</div>
                  <div className="text-sm text-gray-600">Bank-level security</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <Users className="h-8 w-8 text-[#e01c4e]" />
                <div>
                  <div className="font-semibold text-[#15479e]">Trusted</div>
                  <div className="text-sm text-gray-600">1000+ users</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0,0V46.29C47.79,22.8,103.59,32.5,158,28,209.58,23.82,278.92,24.48,331,28c63.08,4.21,121.4,10.17,174,28,51.6,17.4,98.8,47.5,158,48,59.2,0.5,119.8-29.4,174-48,51.6-17.7,98.4-10.1,158-28,46.8-14.1,87.2-40.8,131-48V0Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;