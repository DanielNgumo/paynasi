"use client";

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Shield, CreditCard, Clock, Users } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "How does PayNasi keep my money safe?",
      answer: "Your funds are held in a secure escrow account with bank-level security. Money is only released when both parties confirm the transaction is complete.",
      icon: Shield
    },
    {
      question: "What payment methods do you accept?",
      answer: "We currently accept MPESA for all transactions. More payment options coming soon.",
      icon: CreditCard
    },
    {
      question: "How long does the escrow process take?",
      answer: "Most transactions complete within 24-48 hours. The timeline depends on delivery and buyer confirmation speed.",
      icon: Clock
    },
    {
      question: "What fees does PayNasi charge?",
      answer: "Registration is 100% free. We charge a small transaction fee only when deals complete successfully.",
      icon: CreditCard
    },
    {
      question: "What if the seller doesn't deliver?",
      answer: "If delivery fails, your money is fully refunded. Our dispute resolution team handles any issues quickly.",
      icon: Shield
    },
    {
      question: "Can I cancel a transaction?",
      answer: "Yes, transactions can be cancelled before delivery with mutual agreement or valid dispute reasons.",
      icon: Users
    },
    {
      question: "Is PayNasi available outside Kenya?",
      answer: "Currently we serve Kenya only. We're expanding to other East African countries soon.",
      icon: Users
    },
    {
      question: "How do I get started?",
      answer: "Download the PayNasi app, verify your phone number, and start making secure transactions immediately.",
      icon: HelpCircle
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#15479e]/10 text-[#15479e] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <HelpCircle className="h-4 w-4 mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Got Questions?
            <span className="text-[#e01c4e]"> We've Got Answers</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about PayNasi
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openFAQ === index;
            
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-[#15479e]/20"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-[#15479e]/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-[#15479e]" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <Minus className="h-5 w-5 text-[#e01c4e]" />
                      ) : (
                        <Plus className="h-5 w-5 text-[#15479e]" />
                      )}
                    </div>
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="ml-14">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="mailto:support@paynasi.com"
            className="inline-flex items-center bg-[#15479e] hover:bg-[#0f3a7a] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <HelpCircle className="h-5 w-5 mr-2" />
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;