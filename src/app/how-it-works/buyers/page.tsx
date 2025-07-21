"use client";

import React, { useState } from 'react';
import { 
  Shield, 
  Eye, 
  CheckCircle, 
  Package, 
  CreditCard, 
  Smartphone, 
  ArrowRight, 
  Star,
  Clock,
  Lock,
  AlertTriangle,
  TrendingUp,
  Users,
  MessageCircle,
  RefreshCw,
  Zap
} from 'lucide-react';

const BuyersHowItWorksPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const buyerSteps = [
    {
      id: 1,
      title: " Agree on Terms",
      subtitle: "Negotiate Privately",
      description: "Connect with the seller and agree on product details, price, and delivery terms outside the platform.",
      icon: MessageCircle,
      color: "text-[#17b5a7]",
      bgColor: "bg-[#17b5a7]",
      details: [
        "Discuss product specifications and condition",
        "Negotiate price and payment terms",
        " Agree on delivery method and timeline",
        "Clarify return/refund policies if needed"
      ],
      tip: "Always verify seller details and ask for product photos before proceeding."
    },
    {
      id: 2,
      title: "Deposit Payment Securely",
      subtitle: "MPESA to Escrow",
      description: "Pay the agreed amount via MPESA into PayNasi's secure escrow account. Your money is protected until delivery.",
      icon: CreditCard,
      color: "text-[#e01c4e]",
      bgColor: "bg-[#e01c4e]",
      details: [
        "Pay using familiar MPESA interface",
        "Funds held securely in escrow account",
        "Seller receives payment confirmation",
        "Transaction tracking begins immediately"
      ],
      tip: "Your money is safe - it won&apos;t be released until you confirm satisfaction."
    },
    {
      id: 3,
      title: "Track Your Order",
      subtitle: "Real-time Updates",
      description: "Monitor your order status with real-time notifications as the seller prepares and ships your item.",
      icon: Package,
      color: "text-[#15479e]",
      bgColor: "bg-[#15479e]",
      details: [
        "Get instant notifications on order status",
        "Track shipping and delivery progress",
        "Communicate with seller through platform",
        "Receive delivery confirmation alerts"
      ],
      tip: "Stay informed every step of the way with automatic updates."
    },
    {
      id: 4,
      title: "Inspect & Confirm",
      subtitle: "Your Protection",
      description: "Receive and inspect your item. Only release payment when you&apos;re completely satisfied with your purchase.",
      icon: CheckCircle,
      color: "text-[#17b5a7]",
      bgColor: "bg-[#17b5a7]",
      details: [
        "Thoroughly inspect the received item",
        "Verify it matches agreed specifications",
        "Test functionality if applicable",
        "Confirm satisfaction to release funds"
      ],
      tip: "Take your time to inspect - you&apos;re in control of when payment is released."
    }
  ];

  const buyerBenefits = [
    {
      icon: Shield,
      title: "Total Fund Protection",
      description: "Your money is held safely until you're completely satisfied with your purchase.",
      highlight: "100% Secure"
    },
    {
      icon: Eye,
      title: "Inspect Before You Pay",
      description: "Only release money after confirming the delivery meets your expectations.",
      highlight: "Your Control"
    },
    {
      icon: Clock,
      title: "Real-time Tracking",
      description: "Get instant notifications every step of the way from payment to delivery.",
      highlight: "Stay Informed"
    },
    {
      icon: RefreshCw,
      title: "Easy Dispute Resolution",
      description: "If something goes wrong, our team helps resolve issues fairly and quickly.",
      highlight: "Fair Support"
    }
  ];

  const protectionFeatures = [
    {
      icon: Lock,
      title: "Escrow Protection",
      description: "Funds are held securely until you confirm satisfaction"
    },
    {
      icon: AlertTriangle,
      title: "Fraud Prevention",
      description: "Advanced security measures protect against scams"
    },
    {
      icon: Users,
      title: "Verified Sellers",
      description: "All sellers go through our verification process"
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description: "Real-time updates on your transaction status"
    }
  ];

  const stats = [
    { number: '1,000+', label: 'Protected Buyers', icon: Users },
    { number: '99.9%', label: 'Success Rate', icon: TrendingUp },
    { number: '4.9', label: 'Average Rating', icon: Star },
    { number: '24/7', label: 'Support', icon: MessageCircle }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#15479e] via-[#1e5bb8] to-[#17b5a7] py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="buyer-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#buyer-grid)" />
          </svg>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#e01c4e]/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2 text-[#17b5a7]" />
              For Buyers
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Shop with Complete
              <span className="text-[#17b5a7]"> Confidence</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-blue-100 font-medium mb-8 max-w-4xl mx-auto">
              PayNasi protects every purchase. Pay only when you&apos;re satisfied with what you receive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-[#e01c4e] hover:bg-[#c01640] text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-colors duration-200 shadow-lg">
                <Smartphone className="h-5 w-5" />
                <span>Download App</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, _) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-3">
                      <Icon className="h-6 w-6 text-[#17b5a7]" />
                    </div>
                    <div className="text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-blue-100 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#15479e]/10 text-[#15479e] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Package className="h-4 w-4 mr-2" />
              How It Works for Buyers
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Journey to Safe
              <span className="text-[#e01c4e]"> Shopping</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Follow these simple steps to shop safely with PayNasi's buyer protection.
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block mb-20">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-24 left-0 w-full h-1 bg-gray-200">
                <div 
                  className="h-full bg-gradient-to-r from-[#17b5a7] to-[#e01c4e] transition-all duration-1000"
                  style={{ width: `${((activeStep + 1) / buyerSteps.length) * 100}%` }}
                ></div>
              </div>
              
              {/* Steps */}
              <div className="grid grid-cols-4 gap-8">
                {buyerSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.id}
                      className={`relative cursor-pointer transition-all duration-300 ${
                        activeStep === index ? 'transform scale-105' : ''
                      }`}
                      onMouseEnter={() => setActiveStep(index)}
                    >
                      {/* Step Circle */}
                      <div className={`relative z-10 w-16 h-16 rounded-full ${step.bgColor} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      {/* Step Content */}
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 mb-1">{step.id}</div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-sm text-[#e01c4e] font-medium mb-3">{step.subtitle}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Steps */}
          <div className="lg:hidden space-y-8 mb-20">
            {buyerSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full ${step.bgColor} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg font-bold text-gray-900">{step.id}</span>
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-sm text-[#e01c4e] font-medium mb-2">{step.subtitle}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Details */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-12 h-12 rounded-full ${buyerSteps[activeStep].bgColor} flex items-center justify-center`}>
                      {React.createElement(buyerSteps[activeStep].icon, { className: "h-6 w-6 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{buyerSteps[activeStep].title}</h3>
                      <p className="text-[#e01c4e] font-medium">{buyerSteps[activeStep].subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{buyerSteps[activeStep].description}</p>
                  <div className="space-y-3 mb-6">
                    {buyerSteps[activeStep].details.map((detail, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#17b5a7] flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#17b5a7]/10 border border-[#17b5a7]/20 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Eye className="h-5 w-5 text-[#17b5a7] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Pro Tip</h4>
                        <p className="text-gray-700 text-sm">{buyerSteps[activeStep].tip}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`w-24 h-24 rounded-full ${buyerSteps[activeStep].bgColor} flex items-center justify-center mx-auto mb-4`}>
                      {React.createElement(buyerSteps[activeStep].icon, { className: "h-12 w-12 text-white" })}
                    </div>
                    <div className="text-gray-500 text-sm">Step {activeStep + 1} of {buyerSteps.length}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#15479e]/10 text-[#15479e] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Buyer Benefits
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Buyers Choose PayNasi
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the confidence of protected shopping with features designed specifically for buyers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {buyerBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#15479e]/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-[#15479e]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                        <span className="bg-[#e01c4e] text-white px-2 py-1 rounded-full text-xs font-medium">
                          {benefit.highlight}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Protection Features */}
          <div className="bg-gradient-to-r from-[#15479e] to-[#17b5a7] rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Complete Buyer Protection</h3>
              <p className="text-blue-100 text-lg">Advanced security features that keep your money and purchases safe</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {protectionFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-[#17b5a7]" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                    <p className="text-blue-100 text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="w-16 h-16 bg-[#e01c4e]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Smartphone className="h-8 w-8 text-[#e01c4e]" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Start Shopping Safely Today
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of buyers who trust PayNasi for secure online shopping. Download the app and experience worry-free transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#e01c4e] hover:bg-[#c01640] text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-colors duration-200 shadow-lg">
                <Smartphone className="h-5 w-5" />
                <span>Download PayNasi App</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Available on Google Play • More platforms coming soon
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyersHowItWorksPage;