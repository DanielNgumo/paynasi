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
    // Show modal after a short delay when component mounts
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
    // In real implementation, this would redirect to Google Play Store
    console.log('Redirecting to Google Play Store...');
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-all duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
          isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div 
          className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Gradient */}
          <div className="bg-gradient-to-r from-[#15479e] via-[#1e5bb8] to-[#17b5a7] p-6 relative">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Floating Elements */}
            <div className="absolute top-2 left-6 w-8 h-8 bg-white/10 rounded-full blur-md"></div>
            <div className="absolute bottom-2 right-10 w-6 h-6 bg-[#e01c4e]/30 rounded-full blur-md"></div>

            <div className="text-center text-white">
              {/* App Logo/Icon */}
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-2xl font-bold mb-2">Get PayNasi App</h2>
              <p className="text-blue-100 text-sm">
                Secure transactions, anywhere, anytime
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Features List */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#17b5a7]/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-[#17b5a7]" />
                </div>
                <span className="text-gray-700 text-sm">Secure escrow transactions</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#e01c4e]/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-4 w-4 text-[#e01c4e]" />
                </div>
                <span className="text-gray-700 text-sm">Bank-level security protection</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#15479e]/10 rounded-lg flex items-center justify-center">
                  <Smartphone className="h-4 w-4 text-[#15479e]" />
                </div>
                <span className="text-gray-700 text-sm">Easy mobile money integration</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between text-center">
                <div>
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs text-gray-600">4.9 Rating</div>
                </div>
                
                <div className="w-px h-8 bg-gray-300"></div>
                
                <div>
                  <div className="text-lg font-bold text-[#15479e] mb-1">1,000+</div>
                  <div className="text-xs text-gray-600">Active Users</div>
                </div>
                
                <div className="w-px h-8 bg-gray-300"></div>
                
                <div>
                  <div className="text-lg font-bold text-[#17b5a7] mb-1">99.9%</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="w-full bg-gradient-to-r from-[#e01c4e] to-[#c01640] hover:from-[#c01640] hover:to-[#a01335] text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-3 transition-all duration-200 transform hover:scale-[1.02] shadow-lg mb-4"
            >
              <div className="bg-white/20 p-2 rounded-lg">
                <Download className="h-5 w-5" />
              </div>
              <span>Download on Google Play</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            {/* Alternative Action */}
            <button
              onClick={handleClose}
              className="w-full text-gray-500 hover:text-gray-700 text-sm py-2 transition-colors"
            >
              Continue to website instead
            </button>

            {/* Trust Badge */}
            <div className="text-center mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                <Shield className="h-3 w-3" />
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