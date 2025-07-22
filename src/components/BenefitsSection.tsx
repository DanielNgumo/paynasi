"use client";

import React, { useState } from 'react';
import { 
  Eye, 
  Package, 
  Shield, 
  CheckCircle, 
  DollarSign, 
  Users, 
  ArrowRight,
  ShoppingCart
} from 'lucide-react';

const BenefitsSection = () => {
  const [activeTab, setActiveTab] = useState('buyers');

  const buyerBenefits = [
    {
      icon: Shield,
      title: "Pay When It's Real",
      description: "Your money stays in escrow and is only released when you receive and approve the item or service.",
      color: "text-[#15479e]"
    },
    {
      icon: CheckCircle,
      title: "Trusted Sellers Only",
      description: "Sellers who accept PayNasi are verified and ready to do honest business.",
      color: "text-[#17b5a7]"
    },
    {
      icon: Eye,
      title: "You're in Control",
      description: "Inspect before you pay. If it's not right, you can initiate a return within the set timeframe.",
      color: "text-[#e01c4e]"
    },
    {
      icon: Package,
      title: "Track Every Step",
      description: "Follow the progress of your order or project—from payment to delivery or completion.",
      color: "text-[#17b5a7]"
    }
  ];

  const sellerBenefits = [
    {
      icon: DollarSign,
      title: "Payment First",
      description: "You get confirmation that the buyer has paid before you release any goods or services.",
      color: "text-[#17b5a7]"
    },
    {
      icon: Users,
      title: "Serious Buyers Only",
      description: "Only engage with buyers who are committed—PayNasi users are ready to transact.",
      color: "text-[#e01c4e]"
    },
    {
      icon: Shield,
      title: "Secured Earnings",
      description: "Your product or service is protected; payment is guaranteed once terms are met.",
      color: "text-[#15479e]"
    },
    {
      icon: Package,
      title: "Real-Time Tracking",
      description: "Stay updated on every step—track product delivery or service milestones in real time.",
      color: "text-[#17b5a7]"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Why Choose 
            <span className="text-[#e01c4e]"> PayNasi?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Safe transactions for everyone
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 sm:mb-12 px-4">
          <div className="bg-gray-100 rounded-xl p-1 inline-flex w-full max-w-md sm:w-auto">
            <button
              onClick={() => setActiveTab('buyers')}
              className={`flex-1 sm:flex-none px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base ${
                activeTab === 'buyers'
                  ? 'bg-[#15479e] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>For Buyers</span>
            </button>
            <button
              onClick={() => setActiveTab('sellers')}
              className={`flex-1 sm:flex-none px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base ${
                activeTab === 'sellers'
                  ? 'bg-[#15479e] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Users className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>For Sellers</span>
            </button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {(activeTab === 'buyers' ? buyerBenefits : sellerBenefits).map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${benefit.color === 'text-[#17b5a7]' ? 'bg-[#17b5a7]/10' : benefit.color === 'text-[#e01c4e]' ? 'bg-[#e01c4e]/10' : 'bg-[#15479e]/10'} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-6 w-6 sm:h-7 sm:w-7 ${benefit.color}`} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Trust Banner */}
        <div className="bg-gradient-to-r from-[#15479e] to-[#17b5a7] rounded-2xl p-6 sm:p-8 lg:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
              PayNasi Trust is Optional, Not Mandatory.
            </h3>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 px-2">
              Most transactions rely on trust. PayNasi adds safety — making every deal secure.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1">1,000+</div>
                <div className="text-blue-100 text-xs sm:text-sm">Happy Users</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1">5,000+</div>
                <div className="text-blue-100 text-xs sm:text-sm">Safe Transactions</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1">99.9%</div>
                <div className="text-blue-100 text-xs sm:text-sm">Success Rate</div>
              </div>
            </div>

            <button className="bg-[#e01c4e] hover:bg-[#c01640] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center space-x-2 mx-auto transition-colors duration-200 shadow-lg text-sm sm:text-base">
              <span>Start Safe Transactions</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;