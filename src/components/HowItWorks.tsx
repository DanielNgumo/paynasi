"use client"; // Add this directive to mark as client component

import React, { useState } from 'react';
import { 
  Handshake, 
  CreditCard, 
  Package, 
  CheckCircle, 
  ArrowRight, 
  Shield, 
  Users, 
  Clock,
  Star,
  Eye,
  Smartphone,
  DollarSign
} from 'lucide-react';

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Agree on Terms",
      subtitle: "(Off Platform)",
      description: "Buyer and seller agree independently on the product, service, price, and delivery terms.",
      icon: Handshake,
      color: "text-[#17b5a7]",
      bgColor: "bg-[#17b5a7]",
      details: [
        "Negotiate price and terms privately",
        "Agree on delivery method",
        "Set timeline expectations",
        "No platform involvement in negotiations"
      ]
    },
    {
      id: 2,
      title: "Buyer Deposits Payment",
      subtitle: "Secure Escrow",
      description: "The buyer pays into the PayNasi secure escrow account via mobile money (MPESA).",
      icon: CreditCard,
      color: "text-[#e01c4e]",
      bgColor: "bg-[#e01c4e]",
      details: [
        "Pay securely via MPESA",
        "Funds held in escrow account",
        "Seller gets payment confirmation",
        "Transaction officially begins"
      ]
    },
    {
      id: 3,
      title: "Seller Delivers Product/Service",
      subtitle: "Fulfillment",
      description: "The seller fulfills the agreed terms and delivers the product or service.",
      icon: Package,
      color: "text-[#15479e]",
      bgColor: "bg-[#15479e]",
      details: [
        "Seller ships or delivers item",
        "Real-time tracking updates",
        "Buyer receives notifications",
        "Delivery confirmation required"
      ]
    },
    {
      id: 4,
      title: "Buyer Confirms & Funds Are Released",
      subtitle: "Completion",
      description: "Once the buyer confirms satisfaction, PayNasi releases the funds to the seller.",
      icon: CheckCircle,
      color: "text-[#17b5a7]",
      bgColor: "bg-[#17b5a7]",
      details: [
        "Buyer inspects and approves",
        "Instant fund release to seller",
        "Transaction marked complete",
        "Both parties receive confirmation"
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your funds are protected with enterprise-grade security"
    },
    {
      icon: Eye,
      title: "Full Transparency",
      description: "Track every step of your transaction in real-time"
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Instant notifications and quick fund releases"
    },
    {
      icon: Users,
      title: "Trusted by Thousands",
      description: "Join over 1000+ satisfied users"
    },
    {
      icon: Smartphone,
      title: "Mobile Convenience",
      description: "Manage transactions anytime, anywhere with our app"
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Low fees ensure more value for your transactions"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center bg-[#15479e]/10 text-[#15479e] px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            How PayNasi Works
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Simple, Safe, and 
            <span className="text-[#e01c4e] block sm:inline"> Secure</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Our escrow process ensures your money moves safely, fairly, and only when it should. 
            No risks, no scams, just secure transactions.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-16 md:mb-20">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-20 xl:top-24 left-0 w-full h-1 bg-gray-200">
                <div 
                  className="h-full bg-gradient-to-r from-[#17b5a7] to-[#e01c4e] transition-all duration-1000"
                  style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                ></div>
              </div>
              
              {/* Steps */}
              <div className="grid grid-cols-4 gap-4 xl:gap-8">
                {steps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.id} className={`relative cursor-pointer transition-all duration-300 ${
                        activeStep === step.id - 1 ? 'transform scale-105' : ''
                      }`}
                      onMouseEnter={() => setActiveStep(step.id - 1)}
                    >
                      {/* Step Circle */}
                      <div className={`relative z-10 w-12 h-12 xl:w-16 xl:h-16 rounded-full ${step.bgColor} flex items-center justify-center mx-auto mb-4 xl:mb-6 shadow-lg`}>
                        <Icon className="h-6 w-6 xl:h-8 xl:w-8 text-white" />
                      </div>
                      
                      {/* Step Content */}
                      <div className="text-center px-2">
                        <div className="text-xl xl:text-2xl font-bold text-gray-900 mb-1">{step.id}</div>
                        <h3 className="text-base xl:text-lg font-semibold text-gray-900 mb-2 leading-tight">{step.title}</h3>
                        <p className="text-xs xl:text-sm text-[#e01c4e] font-medium mb-2 xl:mb-3">{step.subtitle}</p>
                        <p className="text-gray-600 text-xs xl:text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Tablet Steps (md screens) */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-2 gap-8">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full ${step.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-lg font-bold text-gray-900">{step.id}</span>
                          <h3 className="text-lg font-semibold text-gray-900 leading-tight">{step.title}</h3>
                        </div>
                        <p className="text-sm text-[#e01c4e] font-medium mb-2">{step.subtitle}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Steps */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="bg-white rounded-xl p-4 shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${step.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-base sm:text-lg font-bold text-gray-900">{step.id}</span>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-tight">{step.title}</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[#e01c4e] font-medium mb-2">{step.subtitle}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                      
                      {/* Mobile Step Details */}
                      <div className="mt-3 space-y-2">
                        {step.details.slice(0, 2).map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-[#17b5a7] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-xs leading-relaxed">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Step connector line - hidden for last item */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center mt-4">
                      <div className="w-px h-6 bg-gray-200"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Step Details - Desktop Only */}
        <div className="hidden lg:block mb-16 xl:mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-6 xl:p-8">
            <div className="grid lg:grid-cols-2 gap-6 xl:gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4 xl:mb-6">
                  <div className={`w-10 h-10 xl:w-12 xl:h-12 rounded-full ${steps[activeStep].bgColor} flex items-center justify-center`}>
                    {React.createElement(steps[activeStep].icon, { className: "h-5 w-5 xl:h-6 xl:w-6 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-xl xl:text-2xl font-bold text-gray-900">{steps[activeStep].title}</h3>
                    <p className="text-[#e01c4e] font-medium text-sm xl:text-base">{steps[activeStep].subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 xl:mb-6 leading-relaxed text-sm xl:text-base">{steps[activeStep].description}</p>
                <div className="space-y-2 xl:space-y-3">
                  {steps[activeStep].details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 xl:h-5 xl:w-5 text-[#17b5a7] flex-shrink-0" />
                      <span className="text-gray-700 text-sm xl:text-base">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 h-48 xl:h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className={`w-16 h-16 xl:w-24 xl:h-24 rounded-full ${steps[activeStep].bgColor} flex items-center justify-center mx-auto mb-3 xl:mb-4`}>
                    {React.createElement(steps[activeStep].icon, { className: "h-8 w-8 xl:h-12 xl:w-12 text-white" })}
                  </div>
                  <div className="text-gray-500 text-xs xl:text-sm">Step {activeStep + 1} of {steps.length}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Why Choose PayNasi?</h3>
            <p className="text-base sm:text-lg text-gray-600 px-4 sm:px-0">Experience the difference of secure, transparent transactions</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            {benefits.map((benefit, benefitIndex) => {
              const Icon = benefit.icon;
              return (
                <div key={benefitIndex} className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 xl:col-span-1">
                  <div className="bg-[#15479e]/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#15479e]" />
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 leading-tight">{benefit.title}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-[#15479e] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-white mb-12 md:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">1,000+</div>
              <div className="text-blue-100 text-xs sm:text-sm md:text-base">Active Users</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">5,000+</div>
              <div className="text-blue-100 text-xs sm:text-sm md:text-base">Transactions</div>
            </div>
            <div>
              <div className="flex items-center justify-center space-x-1 mb-2">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">4.9</span>
                <Star className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-yellow-400 fill-current" />
              </div>
              <div className="text-blue-100 text-xs sm:text-sm md:text-base">Average Rating</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100 text-xs sm:text-sm md:text-base">Success Rate</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4 sm:px-0">Ready to Start Secure Transactions?</h3>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-4 sm:px-0">Join thousands of users who trust PayNasi for their transactions</p>
          <button className="bg-[#e01c4e] hover:bg-[#c01640] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold flex items-center space-x-2 mx-auto transition-colors duration-200 shadow-lg text-sm sm:text-base">
            <Smartphone className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Download PayNasi App</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;