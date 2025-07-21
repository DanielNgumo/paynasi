"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Download, Phone, FileText, Users, CreditCard, CheckCircle, Lock, Clock, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect for 3D appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`
      fixed top-0 left-0 right-0 w-full transition-all duration-500 ease-out
      ${scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-2xl transform-gpu' 
        : 'bg-white shadow-md'
      }
      z-[9999]
    `}>
      <div className={`
        max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500
        ${scrolled ? 'py-2' : 'py-0'}
      `}>
        <div className="flex justify-between items-center h-16">
          {/* Logo with enhanced hover effect */}
          <div className="flex-shrink-0 flex items-center space-x-2 group cursor-pointer">
            <div className="relative transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Image
                src="/images/logo.jpg"
                alt="PayNasi Logo"
                width={40}
                height={40}
                className="object-contain transition-all duration-300"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#15479e]/20 to-[#e01c4e]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
            <span className="text-2xl font-bold text-[#15479e] transition-all duration-300 group-hover:text-[#e01c4e] group-hover:scale-105">
              PayNasi
            </span>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              <Link
                href="/"
                className="relative px-4 py-3 text-lg font-semibold text-gray-700 transition-all duration-300 group overflow-hidden rounded-lg"
              >
                <span className="relative z-10 transition-all duration-300 group-hover:text-white group-hover:scale-105">
                  Home
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#e01c4e] to-[#15479e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#e01c4e] to-[#15479e] opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm rounded-lg"></div>
              </Link>
              
              <Link
                href="/about"
                className="relative px-4 py-3 text-lg font-semibold text-gray-700 transition-all duration-300 group overflow-hidden rounded-lg"
              >
                <span className="relative z-10 transition-all duration-300 group-hover:text-white group-hover:scale-105">
                  About
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#17b5a7] to-[#e01c4e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#17b5a7] to-[#e01c4e] opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm rounded-lg"></div>
              </Link>

              {/* Enhanced Dropdown */}
              <div className="relative group">
                <button className="relative px-4 py-3 text-lg font-semibold text-gray-700 transition-all duration-300 group overflow-hidden rounded-lg flex items-center">
                  <span className="relative z-10 transition-all duration-300 group-hover:text-white group-hover:scale-105">
                    How It Works
                  </span>
                  <svg className="ml-2 h-5 w-5 relative z-10 transition-all duration-300 group-hover:rotate-180 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#15479e] to-[#17b5a7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#15479e] to-[#17b5a7] opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm rounded-lg"></div>
                </button>
                
                {/* Enhanced Mega Dropdown with 3D effect and higher z-index */}
                <div className="absolute left-0 mt-2 w-[600px] bg-white/95 backdrop-blur-md rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-[10000] border border-gray-100 transform perspective-1000 rotateX-5 group-hover:rotateX-0">
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-6">
                      
                      {/* For Buyers - Enhanced */}
                      <div className="space-y-3">
                        <Link href="/buyer" className="block p-4 rounded-lg hover:bg-blue-50 transition-all duration-300 group/card transform hover:scale-105 hover:shadow-lg">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-10 h-10 bg-[#17b5a7]/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover/card:bg-[#17b5a7]/20 group-hover/card:scale-110">
                              <Users className="h-5 w-5 text-[#17b5a7] transition-all duration-300 group-hover/card:scale-110" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 group-hover/card:text-[#e01c4e] transition-colors duration-300">For Buyers</h3>
                              <p className="text-xs text-gray-500">Safe purchasing</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-xs text-gray-600 transition-all duration-300 group-hover/card:text-gray-800">
                              <CheckCircle className="h-3 w-3 text-[#17b5a7]" />
                              <span>Pay only after inspection</span>
                            </div>
                            <div className="flex items-center space-x-2 text-xs text-gray-600 transition-all duration-300 group-hover/card:text-gray-800">
                              <Shield className="h-3 w-3 text-[#17b5a7]" />
                              <span>100% fraud protection</span>
                            </div>
                            <div className="flex items-center space-x-2 text-xs text-gray-600 transition-all duration-300 group-hover/card:text-gray-800">
                              <Lock className="h-3 w-3 text-[#17b5a7]" />
                              <span>Secure escrow holding</span>
                            </div>
                          </div>
                          <div className="flex items-center text-xs text-[#e01c4e] mt-3 group-hover/card:text-[#15479e] transition-all duration-300">
                            <span>Learn more</span>
                            <ArrowRight className="h-3 w-3 ml-1 transition-all duration-300 group-hover/card:translate-x-1" />
                          </div>
                        </Link>
                      </div>

                      {/* For Sellers - Enhanced */}
                      <div className="space-y-3">
                        <Link href="/seller" className="block p-4 rounded-lg hover:bg-red-50 transition-all duration-300 group/card transform hover:scale-105 hover:shadow-lg">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-10 h-10 bg-[#e01c4e]/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover/card:bg-[#e01c4e]/20 group-hover/card:scale-110">
                              <CreditCard className="h-5 w-5 text-[#e01c4e] transition-all duration-300 group-hover/card:scale-110" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 group-hover/card:text-[#e01c4e] transition-colors duration-300">For Sellers</h3>
                              <p className="text-xs text-gray-500">Guaranteed payment</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-xs text-gray-600 transition-all duration-300 group-hover/card:text-gray-800">
                              <CheckCircle className="h-3 w-3 text-[#e01c4e]" />
                              <span>Payment verified upfront</span>
                            </div>
                            <div className="flex items-center space-x-2 text-xs text-gray-600 transition-all duration-300 group-hover/card:text-gray-800">
                              <Clock className="h-3 w-3 text-[#e01c4e]" />
                              <span>Fast fund releases</span>
                            </div>
                            <div className="flex items-center space-x-2 text-xs text-gray-600 transition-all duration-300 group-hover/card:text-gray-800">
                              <Shield className="h-3 w-3 text-[#e01c4e]" />
                              <span>No chargeback risk</span>
                            </div>
                          </div>
                          <div className="flex items-center text-xs text-[#e01c4e] mt-3 group-hover/card:text-[#15479e] transition-all duration-300">
                            <span>Learn more</span>
                            <ArrowRight className="h-3 w-3 ml-1 transition-all duration-300 group-hover/card:translate-x-1" />
                          </div>
                        </Link>
                      </div>

                      {/* Escrow Process - Enhanced */}
                      <div className="space-y-3">
                        <Link href="/escrow" className="block p-4 rounded-lg hover:bg-indigo-50 transition-all duration-300 group/card transform hover:scale-105 hover:shadow-lg">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-10 h-10 bg-[#15479e]/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover/card:bg-[#15479e]/20 group-hover/card:scale-110">
                              <Shield className="h-5 w-5 text-[#15479e] transition-all duration-300 group-hover/card:scale-110" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 group-hover/card:text-[#e01c4e] transition-colors duration-300">Escrow Process</h3>
                              <p className="text-xs text-gray-500">How it works</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-xs text-gray-600 transition-all duration-300 group-hover/card:text-gray-800">
                              <span className="w-4 h-4 rounded-full bg-[#15479e] text-white flex items-center justify-center text-[10px] transition-all duration-300 group-hover/card:scale-110">1</span>
                              <span>Buyer deposits payment</span>
                            </div>
                            <div className="flex items-center space-x-2 text-xs text-gray-600 transition-all duration-300 group-hover/card:text-gray-800">
                              <span className="w-4 h-4 rounded-full bg-[#15479e] text-white flex items-center justify-center text-[10px] transition-all duration-300 group-hover/card:scale-110">2</span>
                              <span>Seller ships item</span>
                            </div>
                            <div className="flex items-center space-x-2 text-xs text-gray-600 transition-all duration-300 group-hover/card:text-gray-800">
                              <span className="w-4 h-4 rounded-full bg-[#15479e] text-white flex items-center justify-center text-[10px] transition-all duration-300 group-hover/card:scale-110">3</span>
                              <span>Buyer confirms & pays</span>
                            </div>
                          </div>
                          <div className="flex items-center text-xs text-[#e01c4e] mt-3 group-hover/card:text-[#15479e] transition-all duration-300">
                            <span>See full process</span>
                            <ArrowRight className="h-3 w-3 ml-1 transition-all duration-300 group-hover/card:translate-x-1" />
                          </div>
                        </Link>
                      </div>
                    </div>
                    
                    {/* Enhanced Bottom CTA */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Ready to start?</p>
                          <p className="text-xs text-gray-500">Join 1000+ users transacting safely</p>
                        </div>
                        <button className="bg-[#e01c4e] text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-[#c01640] transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                          Download App
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="relative px-4 py-3 text-lg font-semibold text-gray-700 transition-all duration-300 group overflow-hidden rounded-lg"
              >
                <span className="relative z-10 transition-all duration-300 group-hover:text-white group-hover:scale-105">
                  Contact
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#17b5a7] to-[#15479e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#17b5a7] to-[#15479e] opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm rounded-lg"></div>
              </Link>

              <Link
                href="/terms"
                className="relative px-4 py-3 text-lg font-semibold text-gray-700 transition-all duration-300 group overflow-hidden rounded-lg"
              >
                <span className="relative z-10 transition-all duration-300 group-hover:text-white group-hover:scale-105">
                  Terms
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#e01c4e] to-[#17b5a7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#e01c4e] to-[#17b5a7] opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm rounded-lg"></div>
              </Link>
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="relative bg-[#e01c4e] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2 overflow-hidden group">
              <span className="relative z-10 flex items-center space-x-2">
                <Download className="h-4 w-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <span>Download App</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#c01640] to-[#15479e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-[#e01c4e] opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
            </button>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#e01c4e] focus:outline-none focus:text-[#e01c4e] p-2 transition-all duration-300 transform hover:scale-110"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-180" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation with higher z-index */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg z-[10000]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              onClick={toggleMenu}
              className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#e01c4e] hover:bg-gray-50 rounded-md transition-all duration-300 transform hover:scale-105 hover:translate-x-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={toggleMenu}
              className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#e01c4e] hover:bg-gray-50 rounded-md transition-all duration-300 transform hover:scale-105 hover:translate-x-2"
            >
              About
            </Link>
            <Link
              href="/buyer"
              onClick={toggleMenu}
              className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#e01c4e] hover:bg-gray-50 rounded-md transition-all duration-300 transform hover:scale-105 hover:translate-x-2"
            >
              For Buyers
            </Link>
            <Link
              href="/seller"
              onClick={toggleMenu}
              className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#e01c4e] hover:bg-gray-50 rounded-md transition-all duration-300 transform hover:scale-105 hover:translate-x-2"
            >
              For Sellers
            </Link>
            <Link
              href="/escrow"
              onClick={toggleMenu}
              className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#e01c4e] hover:bg-gray-50 rounded-md transition-all duration-300 transform hover:scale-105 hover:translate-x-2"
            >
              Escrow Process
            </Link>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#e01c4e] hover:bg-gray-50 rounded-md transition-all duration-300 transform hover:scale-105 hover:translate-x-2"
            >
              Contact
            </Link>
            <Link
              href="/terms"
              onClick={toggleMenu}
              className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#e01c4e] hover:bg-gray-50 rounded-md transition-all duration-300 transform hover:scale-105 hover:translate-x-2"
            >
              Terms
            </Link>
          </div>
          <div className="px-4 py-3 border-t border-gray-200">
            <button className="w-full bg-[#e01c4e] text-white px-4 py-3 rounded-lg hover:bg-[#c01640] transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 font-medium">
              <Download className="h-4 w-4" />
              <span>Download App</span>
            </button>
          </div>
        </div>
      )}

      {/* Add custom CSS for 3D perspective effect */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotateX-5 {
          transform: rotateX(-5deg);
        }
        .rotateX-0 {
          transform: rotateX(0deg);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;