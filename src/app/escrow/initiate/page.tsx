'use client';

import React from 'react';
import { Shield, CheckCircle, Download } from 'lucide-react';
import Link from 'next/link';

const EscrowInitiatePage = () => {
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

      <div className="relative max-w-[90rem] 2xl:max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10 py-20 lg:py-32">
        <div className="text-white space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
            <Shield className="h-4 w-4 mr-2 text-[#17b5a7]" />
            Secure Escrow Deposit
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Start Your Transaction Safely
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 font-medium">
              Deposit funds securely with PayNasi’s escrow system.
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-blue-100 leading-relaxed max-w-2xl">
            With PayNasi, buyers deposit funds into a secure escrow account using MPESA. Your money is held safely until you confirm satisfaction with the delivery, ensuring a risk-free transaction.
          </p>

          {/* Benefits List */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-[#17b5a7] flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white">Secure Payment</h3>
                <p className="text-sm text-blue-100">Funds are held in a protected escrow account until you’re ready to release them.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-[#17b5a7] flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white">Easy MPESA Integration</h3>
                <p className="text-sm text-blue-100">Deposit funds quickly and conveniently using MPESA.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-[#17b5a7] flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white">No Risk for Buyers</h3>
                <p className="text-sm text-blue-100">Your money stays safe until you verify the product or service.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-[#17b5a7] flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white">Transparent Process</h3>
                <p className="text-sm text-blue-100">Get notified when your payment is securely deposited.</p>
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
          <path d="M0,0V46.29C47.79,22.8,103.59,32.5,158,28,209.58,23.82,278.92,24.48,331,28c63.08,4.21,121.4,10.17,174,28,51.6,17.4,98.8,47.5,158,48,59.2,0.5,119.8-29.4,174-48,51.6-17.7,98.4-10.1,158-28,46.8-14.1,87.2-40.8,131-48V0Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};

export default EscrowInitiatePage;
