"use client";

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Shield, CreditCard, Clock, Users, Package, Settings } from 'lucide-react';

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
          answer: "You don’t need to release manually. Once you retrieve the delivery code for verification, you have a 1-hour product inspection window. If you confirm satisfaction upon inspection, payment is released instantly. If not, it auto-releases after the 1 hour."
        },
        {
          id: 'product-issues',
          question: "What if the product is not as described?",
          answer: "You can reject the item during inspection and initiate a return. Ensure your delivery person requests a return code from the seller before handing it back."
        },
        {
          id: 'seller-refuses-return',
          question: "What happens if a seller refuses to receive a returned item?",
          answer: "If a buyer initiates a return during the inspection window and the item is sent back, the seller is expected to cooperate once the item reaches their address/location or courier station. If the delivery person/courier office requests the return code and the seller refuses to retrieve it or intentionally delays the return process, the return is marked successful, and the buyer is refunded. The seller forfeits payment in this case."
        },
        {
          id: 'disputes',
          question: "How do I report a dispute or problem?",
          answer: "Our platform minimizes the need for disputes by using automation and clear procedures. If you’re not satisfied with a product, you must initiate a return within 1 hour after retrieving the delivery code. Make sure your delivery person requests a return code from the seller before handing the item back. If no return is initiated within the hour, payment is automatically released to the seller. We only handle disputes in rare cases, such as: Item-switching during returns, Services Milestones Ignored by Buyer, or Seller Fails to Cooperate During a Return."
        },
        {
          id: 'cancel-transaction',
          question: "Can I cancel a transaction after payment?",
          answer: "Yes — you can cancel a transaction only if the delivery process hasn’t started (i.e. the item is still marked as 'waiting dispatch'). Once a courier has been allocated and the delivery process begins, cancellation is no longer possible. However, after delivery and code verification, you can still initiate a return during the 1-hour inspection period if you're not satisfied with the product."
        },
        {
          id: 'refund-proof',
          question: "What proof is required if I want a refund?",
          answer: "Refunds are only possible if you initiate a return within the 1-hour inspection window after delivery code verification. You must ensure your delivery person requests a return code from the seller before handing the item back. If the seller refuses to provide the return code or intentionally delays, the return is marked as complete. Proof of attempted return (e.g., courier tracking, delivery notes, or photos) will be accepted. In cases where the seller claims item-switching during a return, the burden of proof lies with tamper-proof documentation. Otherwise, no additional evidence is needed — the system tracks delivery and return actions in real time. No refunds are processed once the inspection window has passed without a return request."
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
          answer: "Funds are released to you under either of the following conditions: Immediately, if the buyer clicks 'Satisfied' right after confirming receipt through delivery code verification. Automatically after 1 hour, if the buyer does not take any action during the inspection period, but the delivery code was correctly verified at handover. Important: If the buyer does not provide the delivery code, the system will not consider the product as delivered, and payment will not be released."
        },
        {
          id: 'buyer-refuses',
          question: "What if the buyer refuses to release payment unfairly?",
          answer: "Once the delivery code is verified/entered and the 1-hour inspection window lapses without dispute, payment is auto-released. Buyers cannot hold funds indefinitely."
        },
        {
          id: 'no-delivery-code',
          question: "What if the delivery person fails to request the delivery code?",
          answer: "If no code is verified/entered, we consider the delivery unverified. The buyer will be refunded, and the seller bears the loss. Always instruct your delivery person to request the code before handover."
        },
        {
          id: 'prove-delivery',
          question: "How do I prove delivery happened?",
          answer: "Only the correct input/verification of the delivery code counts as verified delivery. It triggers automatic status updates on our platform and protects you from false claims."
        },
        {
          id: 'item-switching',
          question: "Am I protected against item-switching during returns?",
          answer: "Yes, but only if you take the proper steps. You can protect yourself against item-switching by using either: Option 1: Tamper-Proof, Signed Sticker or Tag - Attach a tamper-proof sticker or tag to the item and sign it before shipping. Take a clear photo showing the sticker/tag on the item and share it with the buyer before dispatch. If the buyer initiates a return, they must co-sign the same sticker/tag and send you a photo before shipping the item back. If the buyer fails to co-sign or share this proof, their claim of returning the correct item is invalid — and you will be entitled to payment. Option 2: Serial Number Verification - If the item has a serial number (e.g., electronics), record it and share it with the buyer (e.g., via photo, email, or platform message) before shipping. In case of a return, the serial number on the returned item must match the one originally shared. If it does not match — and you can prove you shared the original — your item-switching claim will be honored. Important: If neither a signed tamper-proof sticker nor a pre-shared serial number is used, the platform cannot verify your claim — and the return will be honored in the buyer’s favor."
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
          answer: "Our platform is built to resolve most transactions automatically, using delivery code verification, a 1-hour inspection window, and strict return procedures. Human intervention is only triggered in rare cases. We only step in to resolve disputes in the following three specific situations: Item-Switching During a Return, Service Milestone Disputes, or Seller Refuses to Cooperate During a Return. If your case qualifies for manual review, our support team will assess all submitted evidence and issue a decision within 48 hours. Note: Disputes will not be handled outside of these scenarios."
        },
        {
          id: 'unresponsive-party',
          question: "What happens if one party becomes unresponsive?",
          answer: "If a buyer is unresponsive post-delivery and the code has been used, the system auto-releases funds. If a seller is unresponsive before shipping, the buyer can cancel and get a refund."
        },
        {
          id: 'documentation',
          question: "What documentation do I need in case of a dispute?",
          answer: "Clear images, communication history, the signed document (if provided), and delivery records are all helpful. For services, email agreements and milestone confirmations matter."
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
          answer: "Sellers are expected to deliver within the agreed timelines. If delivery has not yet started (i.e. the item is still in 'waiting dispatch' status), the buyer can cancel the transaction and receive a full refund. However, once the delivery process begins and a courier is allocated, the transaction cannot be cancelled. In cases where the item is never delivered and no delivery code is verified, the system automatically refunds the buyer. Funds are only released after the delivery code is verified and the 1-hour inspection window has passed or if the buyer confirms satisfaction before the inspection window lapses."
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
          question: "What’s the inspection window for physical goods?",
          answer: "Buyers have 1 hour after code retrieval/verification to inspect goods. If no complaint is raised within this time, funds are automatically released."
        },
        {
          id: 'customer-support',
          question: "How can I contact customer support?",
          answer: "You can reach us via the in-app support button, email at support@paynasi.com, or call [insert number]."
        }
      ]
    }
  ];

  const toggleFAQ = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  const currentCategory = faqCategories.find(cat => cat.id === activeCategory);

  return (
    <section className="py-12 sm:py-16 lg:py-20 2xl:py-24 bg-gray-50">
      <div className="max-w-[90rem] 2xl:max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 2xl:mb-20">
          <div className="inline-flex items-center bg-[#15479e]/10 text-[#15479e] px-3 sm:px-4 py-2 2xl:py-2.5 rounded-full text-xs sm:text-sm 2xl:text-base font-semibold mb-4 sm:mb-6 2xl:mb-8">
            <HelpCircle className="h-3 w-3 sm:h-4 sm:w-4 2xl:h-5 2xl:w-5 mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 2xl:mb-6 leading-tight">
            Got Questions?
            <span className="text-[#e01c4e]"> We&apos;ve Got Answers</span>
          </h2>
          <p className="text-lg sm:text-xl 2xl:text-2xl text-gray-600 px-2">
            Everything you need to know about PayNasi escrow services
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 2xl:gap-4 mb-8 sm:mb-12 2xl:mb-16 px-2">
          {faqCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center px-3 sm:px-4 py-2 sm:py-2.5 2xl:py-3 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm 2xl:text-base ${
                  activeCategory === category.id
                    ? 'bg-[#15479e] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-[#15479e]'
                }`}
              >
                <Icon className="h-3 w-3 sm:h-4 sm:w-4 2xl:h-5 2xl:w-5 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">{category.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4 2xl:space-y-6">
          {currentCategory?.faqs.map((faq) => {
            const isOpen = openFAQ === faq.id;
            
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-6 2xl:py-8 text-left focus:outline-none focus:ring-2 focus:ring-[#15479e]/20"
                >
                  <div className="flex items-start sm:items-center justify-between">
                    <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 2xl:w-12 2xl:h-12 bg-[#15479e]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 sm:mt-0">
                        <currentCategory.icon className="h-4 w-4 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6 text-[#15479e]" />
                      </div>
                      <h3 className="text-sm sm:text-lg 2xl:text-xl font-semibold text-gray-900 pr-2 sm:pr-4 leading-snug sm:leading-normal">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 mt-1 sm:mt-0">
                      {isOpen ? (
                        <Minus className="h-4 w-4 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6 text-[#e01c4e]" />
                      ) : (
                        <Plus className="h-4 w-4 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6 text-[#15479e]" />
                      )}
                    </div>
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 2xl:pb-8">
                    <div className="ml-11 sm:ml-14 2xl:ml-16">
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base 2xl:text-lg">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 2xl:gap-8 mt-12 sm:mt-16 2xl:mt-20 mb-8 sm:mb-12 2xl:mb-16">
          <div className="bg-white rounded-xl p-4 sm:p-6 2xl:p-8 shadow-md text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 2xl:w-14 2xl:h-14 bg-[#15479e]/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 2xl:mb-6">
              <Clock className="h-5 w-5 sm:h-6 sm:w-6 2xl:h-7 2xl:w-7 text-[#15479e]" />
            </div>
            <h3 className="text-base sm:text-lg 2xl:text-xl font-semibold text-gray-900 mb-2">1 Hour Inspection</h3>
            <p className="text-gray-600 text-sm sm:text-base 2xl:text-lg">Strict inspection window for all physical goods</p>
          </div>
          <div className="bg-white rounded-xl p-4 sm:p-6 2xl:p-8 shadow-md text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 2xl:w-14 2xl:h-14 bg-[#e01c4e]/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 2xl:mb-6">
              <CreditCard className="h-5 w-5 sm:h-6 sm:w-6 2xl:h-7 2xl:w-7 text-[#e01c4e]" />
            </div>
            <h3 className="text-base sm:text-lg 2xl:text-xl font-semibold text-gray-900 mb-2">3% Service Fee</h3>
            <p className="text-gray-600 text-sm sm:text-base 2xl:text-lg">Simple, transparent pricing for buyers</p>
          </div>
          <div className="bg-white rounded-xl p-4 sm:p-6 2xl:p-8 shadow-md text-center sm:col-span-1 col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 2xl:w-14 2xl:h-14 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 2xl:mb-6">
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 2xl:h-7 2xl:w-7 text-green-600" />
            </div>
            <h3 className="text-base sm:text-lg 2xl:text-xl font-semibold text-gray-900 mb-2">100% Secure</h3>
            <p className="text-gray-600 text-sm sm:text-base 2xl:text-lg">Bank-grade encryption and verification</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-4 2xl:mb-6 text-sm sm:text-base 2xl:text-lg">Still have questions?</p>
          <a
            href="mailto:support@paynasi.com"
            className="inline-flex items-center bg-[#15479e] hover:bg-[#0f3a7a] text-white px-4 sm:px-6 py-2.5 sm:py-3 2xl:px-8 2xl:py-4 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base 2xl:text-lg"
          >
            <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6 mr-2" />
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;