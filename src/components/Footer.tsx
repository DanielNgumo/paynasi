import React from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight,
  CheckCircle,
  Users,
  CreditCard,
  Lock,
  Star,
  Shield
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#15479e] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src="/images/logo.jpg" alt="PayNasi Logo" className="h-8 w-8 object-contain" />
              <span className="text-2xl font-bold">PayNasi</span>
            </div>
            <p className="text-blue-100 leading-relaxed">
              A secure mobile xAI escrow platform that protects both buyers and sellers during transactions. 
              Your money moves safely, fairly, and only when it should.
            </p>
            
            {/* Key Features */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-[#17b5a7]" />
                <span className="text-sm text-blue-100">No risk. No scams.</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-[#17b5a7]" />
                <span className="text-sm text-blue-100">Bank-level security</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-[#17b5a7]" />
                <span className="text-sm text-blue-100">24/7 support</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 hover:bg-[#e01c4e] p-2 rounded-lg transition-colors duration-200">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-[#e01c4e] p-2 rounded-lg transition-colors duration-200">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-[#e01c4e] p-2 rounded-lg transition-colors duration-200">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-[#e01c4e] p-2 rounded-lg transition-colors duration-200">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-white text-lg">Quick Links</h4>
            <div className="space-y-3">
              <Link href="/" className="flex items-center text-blue-100 hover:text-white transition-colors duration-200">
                <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Home
              </Link>
              <Link href="/about" className="flex items-center text-blue-100 hover:text-white transition-colors duration-200">
                <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                About Us
              </Link>
              <Link href="/buyer" className="flex items-center text-blue-100 hover:text-white transition-colors duration-200">
                <Users className="h-4 w-4 mr-2 text-[#17b5a7]" />
                For Buyers
              </Link>
              <Link href="/seller" className="flex items-center text-blue-100 hover:text-white transition-colors duration-200">
                <CreditCard className="h-4 w-4 mr-2 text-[#17b5a7]" />
                For Sellers
              </Link>
              <Link href="/escrow" className="flex items-center text-blue-100 hover:text-white transition-colors duration-200">
                <Lock className="h-4 w-4 mr-2 text-[#17b5a7]" />
                Escrow Process
              </Link>
            </div>
          </div>

          {/* Support & Legal */}
          <div className="space-y-6">
            <h4 className="font-semibold text-white text-lg">Support & Legal</h4>
            <div className="space-y-3">
              <Link href="/contact" className="flex items-center text-blue-100 hover:text-white transition-colors duration-200">
                <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Contact Support
              </Link>
              <Link href="/terms" className="flex items-center text-blue-100 hover:text-white transition-colors duration-200">
                <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Terms of Service
              </Link>
              <Link href="/privacy" className="flex items-center text-blue-100 hover:text-white transition-colors duration-200">
                <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Privacy Policy
              </Link>
              <Link href="/faq" className="flex items-center text-blue-100 hover:text-white transition-colors duration-200">
                <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                FAQ
              </Link>
              <Link href="/security" className="flex items-center text-blue-100 hover:text-white transition-colors duration-200">
                <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Security
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="space-y-3">
              <h5 className="font-medium text-white">Security & Trust</h5>
              <div className="flex space-x-2">
                <div className="bg-white/10 px-3 py-1 rounded-full text-xs">
                  <Lock className="h-3 w-3 inline mr-1" />
                  SSL Secure
                </div>
                <div className="bg-white/10 px-3 py-1 rounded-full text-xs">
                  <Shield className="h-3 w-3 inline mr-1" />
                  Bank Grade
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Download */}
          <div className="space-y-6">
            <h4 className="font-semibold text-white text-lg">Get In Touch</h4>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#17b5a7] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-100">Email Support</p>
                  <a href="mailto:support@paynasi.com" className="text-white hover:text-[#17b5a7] transition-colors">
                    support@paynasi.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#17b5a7] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-100">Call Us</p>
                  <a href="tel:+254700000000" className="text-white hover:text-[#17b5a7] transition-colors">
                    +254 700 000 000
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#17b5a7] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-100">Location</p>
                  <p className="text-white">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            {/* Download App */}
            <div className="space-y-4">
              <h5 className="font-medium text-white">Download App</h5>
              <button className="w-full bg-[#e01c4e] hover:bg-[#c01640] text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200">
                <Download className="h-5 w-5" />
                <span>Google Play Store</span>
              </button>
              <p className="text-xs text-blue-100 text-center">
                More platforms coming soon
              </p>
            </div>

            {/* Stats */}
            <div className="bg-white/10 rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-blue-100">Active Users</span>
                <span className="font-semibold">1,000+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-100">Rating</span>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.9</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-100">Transactions</span>
                <span className="font-semibold">5,000+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-100 text-sm">
              © 2025 PayNasi. All rights reserved. 
              <span className="ml-2">Your money. Your rules. Our protection.</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/terms" className="text-blue-100 hover:text-white transition-colors">Terms</Link>
              <Link href="/privacy" className="text-blue-100 hover:text-white transition-colors">Privacy</Link>
              <Link href="/cookies" className="text-blue-100 hover:text-white transition-colors">Cookies</Link>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-[#17b5a7]" />
                <span className="text-blue-100">Secure Platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;