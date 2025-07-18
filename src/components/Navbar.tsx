// components/Navbar.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link'; // Import Link
import React, { useState } from 'react';
import { Menu, X, Shield, Download, Phone, FileText, Users, CreditCard } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <Image
              src="/images/logo.jpg"
              alt="PayNasi Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <span className="text-2xl font-bold text-[#15479e]">PayNasi</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#e01c4e] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#e01c4e] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                About
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-[#e01c4e] px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center">
                  How It Works
                  <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                  <div className="py-1">
                    <Link href="/buyer" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#e01c4e]">
                      <Users className="h-4 w-4 mr-2" />
                      For Buyers
                    </Link>
                    <Link href="/seller" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#e01c4e]">
                      <CreditCard className="h-4 w-4 mr-2" />
                      For Sellers
                    </Link>
                    <Link href="/escrow" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#e01c4e]">
                      <Shield className="h-4 w-4 mr-2" />
                      Escrow Process
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-[#e01c4e] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Link>
              <Link
                href="/terms"
                className="text-gray-700 hover:text-[#e01c4e] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Terms
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-[#e01c4e] text-white px-6 py-2 rounded-lg hover:bg-[#c01640] transition-colors duration-200 flex items-center space-x-2 font-medium">
              <Download className="h-4 w-4" />
              <span>Download App</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#e01c4e] focus:outline-none focus:text-[#e01c4e] p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#e01c4e] hover:bg-gray-50 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#e01c4e] hover:bg-gray-50 rounded-md"
            >
              About
            </Link>
            <Link
              href="/buyer"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#e01c4e] hover:bg-gray-50 rounded-md"
            >
              For Buyers
            </Link>
            <Link
              href="/seller"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#e01c4e] hover:bg-gray-50 rounded-md"
            >
              For Sellers
            </Link>
            <Link
              href="/escrow"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#e01c4e] hover:bg-gray-50 rounded-md"
            >
              Escrow Process
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#e01c4e] hover:bg-gray-50 rounded-md"
            >
              Contact
            </Link>
            <Link
              href="/terms"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#e01c4e] hover:bg-gray-50 rounded-md"
            >
              Terms
            </Link>
          </div>
          <div className="px-4 py-3 border-t border-gray-200">
            <button className="w-full bg-[#e01c4e] text-white px-4 py-2 rounded-lg hover:bg-[#c01640] transition-colors duration-200 flex items-center justify-center space-x-2 font-medium">
              <Download className="h-4 w-4" />
              <span>Download App</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;