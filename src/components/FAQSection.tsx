"use client";

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Shield, CreditCard, Clock, Users, Package,Settings } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('general');

  const faqCategories = [
    {
      id: 'general',
      title: 'General Questions',
      icon: HelpCircle,
      faqs: [
        {
          id: 'escrow-service',
          question: "What is an escrow service and how does it work?",
          answer: "Our escrow service protects both buyers and sellers by holding funds until both parties meet the agreed terms. The buyer deposits funds with us, the seller delivers the product or service, and funds are released once delivery or work is confirmed."
        },
        {
          id: 'why-escrow',
          question: "Why should I use escrow instead of paying directly?",
          answer: "Escrow reduces the risk of fraud. Funds are only released when the buyer confirms delivery or the inspection period lapses, ensuring trust and accountability."
        },
        {
          id: 'fund-holder',
          question: "Who holds the funds during a transaction?",
          answer: "The funds are held securely by our platform until the transaction is successfully completed and confirmed by both parties."
        },
        {
          id: 'transaction-types',
          question: "What types of transactions can I use this escrow service for?",
          answer: "Our platform supports both physical goods and services. For goods, we track delivery using a unique code. For services, we recommend breaking work into milestones for clarity and safety."
        }
      ]
    },
    {
      id: 'buyers',
      title: 'For Buyers',
      icon: Users,
      faqs: [
        {
          id: 'release-payment',
          question: "When should I release payment to the seller?",
          answer: "You don't need to release manually unless you're satisfied early. After receiving the product and providing the delivery code, you have a 1-hour inspection window. If you confirm satisfaction earlier, payment is released instantly. If not, it auto-releases after the 1 hour."
        },
        {
          id: 'product-issues',
          question: "What if the product is not as described?",
          answer: "You can reject the item during inspection and initiate a return. Ensure your delivery person requests a return code from the seller before handing it back."
        },
        {
          id: 'disputes',
          question: "How do I report a dispute or problem?",
          answer: "Our platform minimizes disputes through automation. If unsatisfied, initiate a return within 1 hour after getting the delivery code. We only handle rare cases like item-switching during returns (with tamper-proof documentation) or service milestone disputes where buyers become unresponsive."
        },
        {
          id: 'cancel-transaction',
          question: "Can I cancel a transaction after payment?",
          answer: "Yes, but only if delivery hasn't started (item still 'waiting dispatch'). Once a courier is allocated, cancellation isn't possible. However, you can still initiate a return during the 1-hour inspection period after delivery."
        },
        {
          id: 'refund-proof',
          question: "What proof is required if I want a refund?",
          answer: "Refunds are only possible if you initiate a return within the 1-hour inspection window after delivery code verification. Ensure your delivery person requests a return code from the seller. No refunds are processed once the inspection window passes without a return request."
        }
      ]
    },
    {
      id: 'sellers',
      title: 'For Sellers',
      icon: Package,
      faqs: [
        {
          id: 'payment-timing',
          question: "When will I receive my payment?",
          answer: "Funds are released once the buyer confirms satisfaction or the 1-hour inspection window ends after code verification. If the buyer confirms instantly, funds are released immediately."
        },
        {
          id: 'buyer-refuses',
          question: "What if the buyer refuses to release payment unfairly?",
          answer: "Once the delivery code is verified and the 1-hour window passes without dispute, payment is auto-released. Buyers cannot hold funds indefinitely."
        },
        {
          id: 'no-delivery-code',
          question: "What if the delivery person fails to request the delivery code?",
          answer: "If no code is verified, we consider the delivery unverified. The buyer will be refunded, and the seller bears the loss. Always instruct your delivery person to request the code before handover."
        },
        {
          id: 'prove-delivery',
          question: "How do I prove delivery happened?",
          answer: "Only the correct input/verification of the delivery code counts as verified delivery. It triggers automatic status updates on our platform and protects you from false claims."
        },
        {
          id: 'item-switching',
          question: "Am I protected against item-switching during returns?",
          answer: "Yes, but only if you take proper steps. Attach a tamper-proof, signed document to the item at shipment. The buyer must co-sign during return. If they fail to co-sign, their claim is invalid. However, it's your responsibility to ensure this document is properly attached before dispatch."
        }
      ]
    },
    {
      id: 'security',
      title: 'Security & Verification',
      icon: Shield,
      faqs: [
        {
          id: 'user-verification',
          question: "How are users verified?",
          answer: "All users must register with valid email address and phone number. This ensures traceability and accountability in every transaction."
        },
        {
          id: 'payment-safety',
          question: "Is my payment information safe?",
          answer: "Yes. We use bank-grade encryption and secure payment processors to protect all transactions."
        },
        {
          id: 'dispute-resolution',
          question: "How are disputes resolved, and how long does it take?",
          answer: "Our platform runs automatically with minimal human intervention. We only step in for item-switching during returns (with tamper-proof documentation) or service milestone disputes where buyers become unresponsive. All other transactions follow system rules with defined inspection windows."
        },
        {
          id: 'unresponsive-party',
          question: "What happens if one party becomes unresponsive?",
          answer: "If a buyer is unresponsive post-delivery and the code has been used, the system auto-releases funds. If a seller is unresponsive before shipping, the buyer can cancel and get a refund."
        },
        {
          id: 'documentation',
          question: "What documentation do I need in case of a dispute?",
          answer: "Clear images, communication history, signed documents (if provided), and delivery records are helpful. For services, email agreements and milestone confirmations matter."
        }
      ]
    },
    {
      id: 'fees',
      title: 'Fees & Payments',
      icon: CreditCard,
      faqs: [
        {
          id: 'service-fees',
          question: "Are there any fees for using the escrow service?",
          answer: "Yes, a 3% commission is charged to the buyer for each transaction."
        },
        {
          id: 'fee-responsibility',
          question: "Who pays the escrow fee — buyer or seller?",
          answer: "The buyer pays the 3% platform fee at the time of initiating a transaction."
        },
        {
          id: 'payment-methods',
          question: "Which payment methods are accepted?",
          answer: "Currently all payments are via M-PESA."
        },
        {
          id: 'receipts',
          question: "Can I get a receipt or invoice for my transaction?",
          answer: "Yes. A full digital receipt is available for download once a transaction is completed."
        }
      ]
    },
    {
      id: 'policies',
      title: 'Platform Policies',
      icon: Settings,
      faqs: [
        {
          id: 'delivery-delays',
          question: "What happens if delivery is delayed?",
          answer: "Sellers must deliver within agreed timelines. If delivery hasn't started ('waiting dispatch'), buyers can cancel for a full refund. Once delivery begins with courier allocation, cancellation isn't possible. If items are never delivered and no code is verified, the system automatically refunds the buyer."
        },
        {
          id: 'terms-violation',
          question: "What happens if I violate the terms of use?",
          answer: "Violating our policies may lead to suspension or permanent removal of your account, and in some cases, legal action."
        },
        {
          id: 'close-account',
          question: "How do I close my account or remove my data?",
          answer: "Submit a request through our support team. Your data will be securely deleted in line with our privacy policy."
        },
        {
          id: 'international',
          question: "Can I use the platform for international transactions?",
          answer: "Currently, we do not support international deliveries."
        },
        {
          id: 'inspection-window',
          question: "What's the inspection window for physical goods?",
          answer: "Buyers have 1 hour after code retrieval to inspect goods. If no complaint is raised within this time, funds are automatically released."
        },
        {
          id: 'customer-support',
          question: "How can I contact customer support?",
          answer: "You can reach us via the in-app support button, email at support@paynasi.com, or call our support line."
        }
      ]
    }
  ];

  const toggleFAQ = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  const currentCategory = faqCategories.find(cat => cat.id === activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Everything you need to know about PyNasi escrow services
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {faqCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-[#15479e] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-[#15479e]'
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {category.title}
              </button>
            );
          })}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {currentCategory?.faqs.map((faq) => {
            const isOpen = openFAQ === faq.id;
            
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-[#15479e]/20"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-[#15479e]/10 rounded-lg flex items-center justify-center">
                        <currentCategory.icon className="h-5 w-5 text-[#15479e]" />
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

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-[#15479e]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-[#15479e]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">1 Hour Inspection</h3>
            <p className="text-gray-600">Full inspection window for all physical goods</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-[#e01c4e]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CreditCard className="h-6 w-6 text-[#e01c4e]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">3% Fee</h3>
            <p className="text-gray-600">Simple, transparent pricing for buyers</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Secure</h3>
            <p className="text-gray-600">Bank-grade encryption and verification</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
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