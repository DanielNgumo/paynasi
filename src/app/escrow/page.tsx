'use client';

import React from 'react';
import { Shield, CheckCircle, Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const EscrowPage = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#15479e] via-[#1e5bb8] to-[#17b5a7] overflow-hidden">
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

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-[#e01c4e]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-[#17b5a7]/20 rounded-full blur-xl animate-pulse delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-white space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
            <Shield className="h-4 w-4 mr-2 text-[#17b5a7]" />
            Secure Escrow Process
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Trust in Every Transaction
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 font-medium">
              PayNasi’s escrow ensures safe, fair, and transparent deals.
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-blue-100 leading-relaxed max-w-2xl">
            PayNasi’s escrow process protects both buyers and sellers by securely holding funds until all terms are met. From agreement to delivery and confirmation, we ensure trust and transparency every step of the way.
          </p>

          {/* Escrow Steps */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">How Our Escrow Works</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#17b5a7] text-white flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <h3 className="text-lg font-semibold text-white">Agree on Terms</h3>
                  <p className="text-sm text-blue-100">Buyer and seller agree independently on the product, service, price, and delivery terms outside the PayNasi platform.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#17b5a7] text-white flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <h3 className="text-lg font-semibold text-white">Buyer Deposits Payment</h3>
                  <p className="text-sm text-blue-100">The buyer deposits funds into PayNasi’s secure escrow account via MPESA.</p>
                  <Link href="/escrow/initiate" className="flex items-center text-sm text-[#e01c4e] mt-2 hover:text-[#c01640] transition-all duration-200">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#17b5a7] text-white flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <h3 className="text-lg font-semibold text-white">Seller Delivers</h3>
                  <p className="text-sm text-blue-100">The seller fulfills the agreed terms, with real-time tracking updates for transparency.</p>
                  <Link href="/escrow/track" className="flex items-center text-sm text-[#e01c4e] mt-2 hover:text-[#c01640] transition-all duration-200">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#17b5a7] text-white flex items-center justify-center text-sm font-bold">4</span>
                <div>
                  <h3 className="text-lg font-semibold text-white">Funds Released</h3>
                  <p className="text-sm text-blue-100">Once the buyer confirms satisfaction, funds are securely released to the seller.</p>
                  <Link href="/escrow/release" className="flex items-center text-sm text-[#e01c4e] mt-2 hover:text-[#c01640] transition-all duration-200">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Why Use PayNasi’s Escrow?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-[#17b5a7] flex-shrink-0" />
                <span className="text-blue-100">No risk. No scams.</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-[#17b5a7] flex-shrink-0" />
                <span className="text-blue-100">Total transaction protection.</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-[#17b5a7] flex-shrink-0" />
                <span className="text-blue-100">Transparent process with real-time updates.</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-[#17b5a7] flex-shrink-0" />
                <span className="text-blue-100">Fair for both buyers and sellers.</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="https://play.google.com/store" className="bg-[#e01c4e] hover:bg-[#c01640] text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105 shadow-lg">
              <Download className="h-5 w-5" />
              <span>Download on Google Play</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0,0V46.29C47.79,22.8,103.59,32.5,158,28,209.58,23.82,278.92,24.48,331,28c63.08,4.21,121.4,10.17,174,28,51.6,17.4,98.8,wrong,158,48,59.2,0.5,119.8-29.4,174-48,51.6-17.7,98.4-10.1,158-28,46.8-14.1,87.2-40.8,131-48V0Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};

export default EscrowPage;