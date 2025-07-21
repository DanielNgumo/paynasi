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
        className={`fixed inset-x-0 bottom-0 z-[1001] flex items-end justify-center p-3 sm:p-4 transition-all duration-300 ${
          isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        } sm:items-center sm:inset-0`}
      >
        <div 
          className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-2 sm:mx-4 max-h-[85vh] sm:max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Gradient */}
          <div className="bg-gradient-to-r from-[#15479e] via-[#1e5bb8] to-[#17b5a7] p-4 sm:p-6 relative">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>

            {/* Floating Elements */}
            <div className="absolute top-1 left-4 w-6 h-6 sm:w-8 sm:h-8 bg-white/10 rounded-full blur-md"></div>
            <div className="absolute bottom-1 right-8 w-5 h-5 sm:w-6 sm:h-6 bg-[#e01c4e]/30 rounded-full blur-md"></div>

            <div className="text-center text-white">
              {/* App Logo/Icon */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              
              <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Get PayNasi App</h2>
              <p className="text-blue-100 text-xs sm:text-sm">
                Secure transactions, anywhere, anytime
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6">
            {/* Features List */}
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#17b5a7]/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-[#17b5a7]" />
                </div>
                <span className="text-gray-700 text-xs sm:text-sm">Secure escrow transactions</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#e01c4e]/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-[#e01c4e]" />
                </div>
                <span className="text-gray-700 text-xs sm:text-sm">Bank-level security protection</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#15479e]/10 rounded-lg flex items-center justify-center">
                  <Smartphone className="h-3 w-3 sm:h-4 sm:w-4 text-[#15479e]" />
                </div>
                <span className="text-gray-700 text-xs sm:text-sm">Easy mobile money integration</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
              <div className="flex items-center justify-between text-center">
                <div>
                  <div className="flex items-center justify-center space-x-0.5 sm:space-x-1 mb-0.5 sm:mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-600">4.9 Rating</div>
                </div>
                
                <div className="w-px h-6 sm:h-8 bg-gray-300"></div>
                
                <div>
                  <div className="text-base sm:text-lg font-bold text-[#15479e] mb-0.5 sm:mb-1">1,000+</div>
                  <div className="text-[10px] sm:text-xs text-gray-600">Active Users</div>
                </div>
                
                <div className="w-px h-6 sm:h-8 bg-gray-300"></div>
                
                <div>
                  <div className="text-base sm:text-lg font-bold text-[#17b5a7] mb-0.5 sm:mb-1">99.9%</div>
                  <div className="text-[10px] sm:text-xs text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="w-full bg-gradient-to-r from-[#e01c4e] to-[#c01640] hover:from-[#c01640] hover:to-[#a01335] text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold flex items-center justify-center space-x-2 sm:space-x-3 transition-all duration-200 transform hover:scale-[1.02] shadow-lg mb-3 sm:mb-4"
            >
              <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg">
                <Download className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <span className="text-sm sm:text-base">Download on Google Play</span>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>

            {/* Alternative Action */}
            <button
              onClick={handleClose}
              className="w-full text-gray-500 hover:text-gray-700 text-xs sm:text-sm py-1 sm:py-2 transition-colors"
            >
              Continue to website instead
            </button>

            {/* Trust Badge */}
            <div className="text-center mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
              <div className="flex items-center justify-center space-x-1 sm:space-x-2 text-[10px] sm:text-xs text-gray-500">
                <Shield className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
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