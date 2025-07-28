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
        className={`fixed inset-0 z-[1001] flex items-end sm:items-center justify-center p-2 sm:p-3 md:p-4 lg:p-6 transition-all duration-300 ${
          isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div 
          className="relative bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-2 sm:mx-3 max-h-[60vh] sm:max-h-[60vh] md:max-h-[55vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Gradient */}
          <div className="bg-gradient-to-r from-[#15479e] via-[#1e5bb8] to-[#17b5a7] p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 relative">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-1 right-1 xs:top-2 xs:right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" />
            </button>

            {/* Floating Elements */}
            <div className="absolute top-1 left-1 xs:left-2 w-3 h-3 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-white/10 rounded-full blur-md"></div>
            <div className="absolute bottom-1 right-4 xs:right-6 w-2 h-2 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-[#e01c4e]/30 rounded-full blur-md"></div>

            <div className="text-center text-white">
              {/* App Logo/Icon */}
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-1 xs:mb-2 sm:mb-3 md:mb-4">
                <Shield className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-white" />
              </div>
              
              <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-0.5 xs:mb-0.5 sm:mb-1 md:mb-2">Get PayNasi App</h2>
              <p className="text-blue-100 text-[10px] xs:text-xs sm:text-xs md:text-sm lg:text-base opacity-90">
                Secure transactions, anywhere, anytime
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8">
            {/* Features List */}
            <div className="space-y-1 xs:space-y-1 sm:space-y-2 md:space-y-3 mb-2 xs:mb-3 sm:mb-4 md:mb-6">
              <div className="flex items-center space-x-1 xs:space-x-1 sm:space-x-2 md:space-x-3">
                <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-[#17b5a7]/10 rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 lg:h-5 lg:w-5 text-[#17b5a7]" />
                </div>
                <span className="text-gray-700 text-[10px] xs:text-xs sm:text-xs md:text-sm lg:text-base font-medium">Secure escrow transactions</span>
              </div>
              
              <div className="flex items-center space-x-1 xs:space-x-1 sm:space-x-2 md:space-x-3">
                <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-[#e01c4e]/10 rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 lg:h-5 lg:w-5 text-[#e01c4e]" />
                </div>
                <span className="text-gray-700 text-[10px] xs:text-xs sm:text-xs md:text-sm lg:text-base font-medium">Bank-level security protection</span>
              </div>
              
              <div className="flex items-center space-x-1 xs:space-x-1 sm:space-x-2 md:space-x-3">
                <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-[#15479e]/10 rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Smartphone className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 lg:h-5 lg:w-5 text-[#15479e]" />
                </div>
                <span className="text-gray-700 text-[10px] xs:text-xs sm:text-xs md:text-sm lg:text-base font-medium">Easy mobile money integration</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-gray-50 rounded-lg xs:rounded-lg sm:rounded-xl md:rounded-2xl p-1 xs:p-2 sm:p-3 md:p-4 mb-2 xs:mb-3 sm:mb-4 md:mb-6">
              <div className="flex items-center justify-between text-center">
                <div className="flex-1">
                  <div className="flex items-center justify-center space-x-0.5 xs:space-x-0.5 sm:space-x-0.5 mb-0.5 xs:mb-0.5 sm:mb-0.5 md:mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-2 w-2 xs:h-2.5 xs:w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-[10px] xs:text-xs sm:text-xs md:text-sm lg:text-base font-bold text-gray-900 mb-0.5">4.9</div>
                  <div className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs text-gray-600">Rating</div>
                </div>
                
                <div className="w-px h-3 xs:h-4 sm:h-6 md:h-8 bg-gray-300"></div>
                
                <div className="flex-1">
                  <div className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#15479e] mb-0.5 xs:mb-0.5 sm:mb-0.5 md:mb-1">1,000+</div>
                  <div className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs text-gray-600">Active Users</div>
                </div>
                
                <div className="w-px h-3 xs:h-4 sm:h-6 md:h-8 bg-gray-300"></div>
                
                <div className="flex-1">
                  <div className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#17b5a7] mb-0.5 xs:mb-0.5 sm:mb-0.5 md:mb-1">99.9%</div>
                  <div className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="w-full bg-gradient-to-r from-[#e01c4e] to-[#c01640] hover:from-[#c01640] hover:to-[#a01335] text-white py-2 xs:py-2.5 sm:py-3 md:py-4 px-2 xs:px-3 sm:px-4 md:px-6 rounded-lg xs:rounded-lg sm:rounded-xl md:rounded-2xl font-semibold flex items-center justify-center space-x-1 xs:space-x-1 sm:space-x-2 md:space-x-3 transition-all duration-200 transform hover:scale-[1.02] shadow-lg mb-1 xs:mb-2 sm:mb-3 md:mb-4 text-[10px] xs:text-xs sm:text-sm md:text-base"
            >
              <div className="bg-white/20 p-0.5 xs:p-1 sm:p-1.5 md:p-2 rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl">
                <Download className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              </div>
              <span>Download on Google Play</span>
              <ArrowRight className="h-2 w-2 xs:h-2.5 xs:w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4" />
            </button>

            {/* Alternative Action */}
            <button
              onClick={handleClose}
              className="w-full text-gray-500 hover:text-gray-700 text-[10px] xs:text-xs sm:text-xs md:text-sm py-0.5 xs:py-1 sm:py-1.5 md:py-2 transition-colors"
            >
              Continue to website instead
            </button>

            {/* Trust Badge */}
            <div className="text-center mt-1 xs:mt-2 sm:mt-3 md:mt-4 pt-1 xs:pt-2 sm:pt-3 md:pt-4 border-t border-gray-100">
              <div className="flex items-center justify-center space-x-0.5 xs:space-x-0.5 sm:space-x-1 text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs text-gray-500">
                <Shield className="h-1.5 w-1.5 xs:h-2 xs:w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3" />
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