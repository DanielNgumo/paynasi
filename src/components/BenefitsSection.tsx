"use client";

import React, { useState } from 'react';
import { 
  Eye, 
  Package, 
  Shield, 
  Search, 
  DollarSign, 
  CheckCircle, 
  TrendingUp, 
  ShoppingCart,
  User,
  Users,
  ArrowRight
} from 'lucide-react';

const BenefitsSection = () => {
  const [activeTab, setActiveTab] = useState('buyers');

  const buyerBenefits = [
    {
      icon: Eye,
      title: "Inspect Before You Pay",
      description: "Release money only after confirming delivery",
      color: "text-[#17b5a7]"
    },
    {
      icon: Package,
      title: "Real-Time Tracking",
      description: "Get notifications every step of the way",
      color: "text-[#e01c4e]"
    },
    {
      icon: Shield,
      title: "Total Fund Protection",
      description: "Your money is held safely until satisfied",
      color: "text-[#15479e]"
    },
    {
      icon: Search,
      title: "Verify Before You Buy",
      description: "Avoid fraud with secure verification",
      color: "text-[#17b5a7]"
    }
  ];

  const sellerBenefits = [
    {
      icon: DollarSign,
      title: "Zero Registration Fees",
      description: "Sign up 100% free, no hidden costs",
      color: "text-[#17b5a7]"
    },
    {
      icon: CheckCircle,
      title: "Guaranteed Funds",
      description: "Money confirmed before delivery",
      color: "text-[#e01c4e]"
    },
    {
      icon: ShoppingCart,
      title: "No Risky Cash Deliveries",
      description: "Eliminate uncertain cash transactions",
      color: "text-[#15479e]"
    },
    {
      icon: TrendingUp,
      title: "Grow With Confidence",
      description: "Win trust even with first-time buyers",
      color: "text-[#17b5a7]"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose 
            <span className="text-[#e01c4e]"> PayNasi?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Safe transactions for everyone
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-xl p-1 inline-flex">
            <button
              onClick={() => setActiveTab('buyers')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 ${
                activeTab === 'buyers'
                  ? 'bg-[#15479e] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <ShoppingCart className="h-5 w-5" />
              <span>For Buyers</span>
            </button>
            <button
              onClick={() => setActiveTab('sellers')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 ${
                activeTab === 'sellers'
                  ? 'bg-[#15479e] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Users className="h-5 w-5" />
              <span>For Sellers</span>
            </button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {(activeTab === 'buyers' ? buyerBenefits : sellerBenefits).map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
              key={index}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100"
              >
                <div className={`w-14 h-14 rounded-xl ${benefit.color === 'text-[#17b5a7]' ? 'bg-[#17b5a7]/10' : benefit.color === 'text-[#e01c4e]' ? 'bg-[#e01c4e]/10' : 'bg-[#15479e]/10'} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-7 w-7 ${benefit.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Trust Banner */}
        <div className="bg-gradient-to-r from-[#15479e] to-[#17b5a7] rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Trust Optional, Not Mandatory
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Most transactions rely on trust. PayNasi adds safety — making every deal secure.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-2xl md: text-3xl font-bold mb-1">1,000+</div>
                <div className="text-blue-100 text-sm">Happy Users</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-1">5,000+</div>
                <div className="text-blue-100 text-sm">Safe Transactions</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-1">99.9%</div>
                <div className="text-blue-100 text-sm">Success Rate</div>
              </div>
            </div>

            <button className="bg-[#e01c4e] hover:bg-[#c01640] text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 mx-auto transition-colors duration-200 shadow-lg">
              <span>Start Safe Transactions</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;