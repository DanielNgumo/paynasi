"use client";

import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  Shield, 
  Star, 
  CheckCircle, 
  Smartphone,
  ArrowRight
} from 'lucide-react';

const DownloadAppModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setIsAnimating(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  const handleDownload = () => {
    console.log('Redirecting to Google Play Store...');
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[1000] transition-all duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div 
        className={`fixed inset-0 z-[1001] flex items-end sm:items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 transition-all duration-300 ${
          isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div 
          className="relative bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-2 sm:mx-4 max-h-[90vh] sm:max-h-[85vh] md:max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Gradient */}
          <div className="bg-gradient-to-r from-[#15479e] via-[#1e5bb8] to-[#17b5a7] p-3 xs:p-4 sm:p-6 md:p-8 lg:p-10 relative">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 xs:top-3 xs:right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X className="h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
            </button>

            {/* Floating Elements */}
            <div className="absolute top-1 left-2 xs:left-4 w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/10 rounded-full blur-md"></div>
            <div className="absolute bottom-1 right-6 xs:right-8 w-3 h-3 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-[#e01c4e]/30 rounded-full blur-md"></div>

            <div className="text-center text-white">
              {/* App Logo/Icon */}
              <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/20 backdrop-blur-sm rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-2 xs:mb-3 sm:mb-4 md:mb-6">
                <Shield className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-white" />
              </div>
              
              <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 xs:mb-1 sm:mb-2 md:mb-3">Get PayNasi App</h2>
              <p className="text-blue-100 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg opacity-90">
                Secure transactions, anywhere, anytime
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-3 xs:p-4 sm:p-6 md:p-8 lg:p-10">
            {/* Features List */}
            <div className="space-y-2 xs:space-y-2 sm:space-y-3 md:space-y-4 mb-4 xs:mb-4 sm:mb-6 md:mb-8">
              <div className="flex items-center space-x-2 xs:space-x-2 sm:space-x-3 md:space-x-4">
                <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#17b5a7]/10 rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-3 w-3 xs:h-3 xs:w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-[#17b5a7]" />
                </div>
                <span className="text-gray-700 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium">Secure escrow transactions</span>
              </div>
              
              <div className="flex items-center space-x-2 xs:space-x-2 sm:space-x-3 md:space-x-4">
                <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#e01c4e]/10 rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="h-3 w-3 xs:h-3 xs:w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-[#e01c4e]" />
                </div>
                <span className="text-gray-700 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium">Bank-level security protection</span>
              </div>
              
              <div className="flex items-center space-x-2 xs:space-x-2 sm:space-x-3 md:space-x-4">
                <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#15479e]/10 rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Smartphone className="h-3 w-3 xs:h-3 xs:w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-[#15479e]" />
                </div>
                <span className="text-gray-700 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium">Easy mobile money integration</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-gray-50 rounded-lg xs:rounded-lg sm:rounded-xl md:rounded-2xl p-2 xs:p-3 sm:p-4 md:p-6 mb-4 xs:mb-4 sm:mb-6 md:mb-8">
              <div className="flex items-center justify-between text-center">
                <div className="flex-1">
                  <div className="flex items-center justify-center space-x-0.5 xs:space-x-0.5 sm:space-x-1 mb-0.5 xs:mb-0.5 sm:mb-1 md:mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900 mb-0.5">4.9</div>
                  <div className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm text-gray-600">Rating</div>
                </div>
                
                <div className="w-px h-4 xs:h-6 sm:h-8 md:h-10 bg-gray-300"></div>
                
                <div className="flex-1">
                  <div className="text-xs xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#15479e] mb-0.5 xs:mb-0.5 sm:mb-1 md:mb-2">1,000+</div>
                  <div className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm text-gray-600">Active Users</div>
                </div>
                
                <div className="w-px h-4 xs:h-6 sm:h-8 md:h-10 bg-gray-300"></div>
                
                <div className="flex-1">
                  <div className="text-xs xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#17b5a7] mb-0.5 xs:mb-0.5 sm:mb-1 md:mb-2">99.9%</div>
                  <div className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="w-full bg-gradient-to-r from-[#e01c4e] to-[#c01640] hover:from-[#c01640] hover:to-[#a01335] text-white py-2.5 xs:py-3 sm:py-4 md:py-5 lg:py-6 px-3 xs:px-4 sm:px-6 md:px-8 rounded-lg xs:rounded-lg sm:rounded-xl md:rounded-2xl font-semibold flex items-center justify-center space-x-2 xs:space-x-2 sm:space-x-3 md:space-x-4 transition-all duration-200 transform hover:scale-[1.02] shadow-lg mb-2 xs:mb-3 sm:mb-4 md:mb-6 text-xs xs:text-sm sm:text-base md:text-lg"
            >
              <div className="bg-white/20 p-1 xs:p-1.5 sm:p-2 md:p-2.5 rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl">
                <Download className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </div>
              <span>Download on Google Play</span>
              <ArrowRight className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
            </button>

            {/* Alternative Action */}
            <button
              onClick={handleClose}
              className="w-full text-gray-500 hover:text-gray-700 text-xs xs:text-xs sm:text-sm md:text-base py-1 xs:py-1 sm:py-2 md:py-3 transition-colors"
            >
              Continue to website instead
            </button>

            {/* Trust Badge */}
            <div className="text-center mt-2 xs:mt-3 sm:mt-4 md:mt-6 pt-2 xs:pt-3 sm:pt-4 md:pt-6 border-t border-gray-100">
              <div className="flex items-center justify-center space-x-1 xs:space-x-1 sm:space-x-2 text-[9px] xs:text-[10px] sm:text-xs md:text-sm text-gray-500">
                <Shield className="h-2 w-2 xs:h-2.5 xs:w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4" />
                <span>Trusted by thousands • Secure transactions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadAppModal;