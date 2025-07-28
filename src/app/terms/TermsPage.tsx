"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { 
  ArrowRight, 
  Shield, 
  ChevronDown, 
  FileText, 
  Scale, 
  Users, 
  CreditCard, 
  RefreshCw, 
  AlertTriangle, 
  Lock, 
  Globe, 
  Edit, 
  Power,
  Clock,
  CheckCircle,
  Eye,
  Phone,
  Home,
  BookOpen,
  UserCheck,
  Gavel
} from 'lucide-react';

const TermsPage = () => {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([1]));
  const [activeCategory, setActiveCategory] = useState('all');

  const toggleSection = (sectionId: number) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const categories = [
    { id: 'all', name: 'All Terms', icon: BookOpen },
    { id: 'account', name: 'Account & Access', icon: Users },
    { id: 'transaction', name: 'Transactions', icon: CreditCard },
    { id: 'legal', name: 'Legal & Policy', icon: Gavel }
  ];

  const quickActions = [
    { 
      title: "Contact Support", 
      description: "Get help with our terms", 
      icon: Phone, 
      color: "bg-[#e01c4e]",
      action: "contact" 
    },
    { 
      title: "View Guidelines", 
      description: "Dispute resolution info", 
      icon: Scale, 
      color: "bg-[#17b5a7]",
      action: "dispute" 
    },
    { 
      title: "Account Setup", 
      description: "Get started guide", 
      icon: UserCheck, 
      color: "bg-[#15479e]",
      action: "setup" 
    }
  ];

  const stats = [
    { number: "15", label: "Policy Sections" },
    { number: "99.9%", label: "Platform Uptime" },
    { number: "Jan 2025", label: "Last Updated" },
    { number: "Kenya", label: "Governed By" }
  ];

  const termsData = [
    {
      id: 1,
      title: "Introduction",
      icon: FileText,
      color: "from-[#17b5a7] to-[#15479e]",
      category: "legal",
      content: "Welcome to PayNasi Platform, a secure online escrow service that facilitates transactions between buyers and sellers. By using our services, you agree to comply with and are bound by these terms and conditions."
    },
    {
      id: 2,
      title: "User Accounts",
      icon: Users,
      color: "from-[#e01c4e] to-[#17b5a7]",
      category: "account",
      content: "To use our services, you must create an account. You are responsible for maintaining the confidentiality of your account information and are fully responsible for all activities that occur under your account. You agree to notify us immediately of any unauthorized use or access to your account."
    },
    {
      id: 3,
      title: "Escrow Process",
      icon: Shield,
      color: "from-[#15479e] to-[#17b5a7]",
      category: "transaction",
      content: "Buyers and sellers agree to the terms of the transaction. Buyers place funds in PayNasi escrow. Sellers deliver the goods or services. Buyers receive and inspect the goods. Funds are released to the seller upon buyer approval."
    },
    {
      id: 4,
      title: "Fees and Payments",
      icon: CreditCard,
      color: "from-[#e01c4e] to-[#17b5a7]",
      category: "transaction",
      content: "Our fee structure is outlined on our website and mobile application. You agree to pay all applicable fees associated with your use of our services. Fees are non-refundable, except as expressly stated in our refund policy."
    },
    {
      id: 5,
      title: "Buyer's Responsibility Upon Delivery and Return Process",
      icon: RefreshCw,
      color: "from-[#17b5a7] to-[#15479e]",
      category: "transaction",
      content: [
        "Upon receiving a product, the buyer must: Provide the delivery code to the delivery personnel. This action confirms receipt and automatically triggers a 1-hour inspection period. Inspect the product during this inspection window. If satisfied, no further action is needed and funds will be automatically released to the seller after the hour.",
        "If satisfied, the buyer may click \"Satisfied\" in the platform, and the funds will be released to the seller immediately, without waiting for the one-hour period to expire. If not satisfied, the buyer must initiate a return within the 1-hour window through the platform.",
        "When returning a product: The buyer must instruct the delivery personnel or courier to request and confirm the seller's return code before handing over the product. This step is critical—it confirms verified return. If the return code is not requested or verified, the platform will not support the buyer in case of any disputes regarding non-receipt of a returned item."
      ]
    },
    {
      id: 6,
      title: "Seller's Responsibility for Accurate Delivery, Timeliness, and Return Compliance",
      icon: Shield,
      color: "from-[#15479e] to-[#e01c4e]",
      category: "transaction",
      content: [
        "The seller is responsible for ensuring a smooth and verifiable transaction process. This includes:",
        "**Before Delivery:** Ship the correct product(s) as described in the order, and within the agreed timelines. For high-value items, the seller is encouraged to use a tamper-proof sticker/tag or record the serial number, and share evidence (e.g., photo or message) with the buyer before dispatch.",
        "**During Delivery:** Instruct the delivery personnel or courier to request and confirm the buyer's delivery code before handing over the product. This step is critical—it confirms verified delivery and triggers the buyer's 1-hour inspection window.",
        "**During Returns (If Initiated):** If the buyer initiates a return during the inspection period, the seller must be prepared to receive the returned product at their provided location or designated courier station. Provide the return code to the delivery personnel before accepting the returned item."
      ]
    },
    {
      id: 7,
      title: "Refund Policy",
      icon: RefreshCw,
      color: "from-[#e01c4e] to-[#15479e]",
      category: "transaction",
      content: [
        "Refunds may occur under the following circumstances:",
        "**Order Not Fulfilled:** If a seller fails to fulfill an order (e.g., does not ship the product or fails to deliver within the agreed timeframe), the buyer will be refunded the transaction amount less any platform fees and applicable transaction charges.",
        "**Product Returned After Inspection:** If a buyer initiates a return within the 1-hour inspection window and completes the return process according to platform guidelines, the buyer will be refunded once the return is confirmed.",
        "**Invalid Refund Claims:** No refund will be processed if the buyer fails to initiate the return within the allowed inspection period or the return is not completed using the required return code protocol."
      ]
    },
    {
      id: 8,
      title: "Dispute Resolution",
      icon: Scale,
      color: "from-[#17b5a7] to-[#e01c4e]",
      category: "legal",
      content: [
        "Our platform is designed to prevent most disputes through automation, delivery verification, and strict timelines. However, certain exceptions are handled as outlined below.",
        "**Automated Resolution System:** Upon delivery, buyers must provide the delivery code to confirm receipt. This triggers a 1-hour inspection period to accept or initiate a return. If the buyer does not initiate a return within this timeframe, the system automatically releases the funds to the seller.",
        "**Valid Grounds for Raising a Dispute:** Disputes are only accepted under specific circumstances including item-switching during returns, service milestone disputes, and seller refusal to accept returns.",
        "**Evidence Review:** If a valid dispute is submitted, our support team will review all relevant evidence and respond within 48 hours. Our resolution will be final and binding."
      ]
    },
    {
      id: 9,
      title: "User Conduct",
      icon: AlertTriangle,
      color: "from-[#15479e] to-[#17b5a7]",
      category: "account",
      content: "You agree not to engage in any prohibited activities, including fraud, illegal transactions, or any activity that violates applicable laws and regulations. Violation of these terms may result in account suspension or termination."
    },
    {
      id: 10,
      title: "Privacy Policy",
      icon: Lock,
      color: "from-[#e01c4e] to-[#17b5a7]",
      category: "legal",
      content: "Our privacy practices are outlined in our Privacy Policy. By using our services, you consent to our collection, use, and sharing of your information as described in the Privacy Policy. We are committed to protecting your personal data and maintaining transparency about our data practices."
    },
    {
      id: 11,
      title: "Intellectual Property",
      icon: FileText,
      color: "from-[#17b5a7] to-[#15479e]",
      category: "legal",
      content: "Intellectual property laws protect all content on our platform. You agree not to reproduce, distribute, or create derivative works from our content without our express consent. This includes our logo, branding, software, and proprietary systems."
    },
    {
      id: 12,
      title: "Limitation of Liability",
      icon: Shield,
      color: "from-[#15479e] to-[#e01c4e]",
      category: "legal",
      content: "We are not liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services."
    },
    {
      id: 13,
      title: "Termination",
      icon: Power,
      color: "from-[#e01c4e] to-[#15479e]",
      category: "account",
      content: "We reserve the right to suspend or terminate your account at our sole discretion, without notice, for conduct that we believe violates these terms or is harmful to other users or us. Upon termination, your access to our services will cease immediately."
    },
    {
      id: 14,
      title: "Governing Law",
      icon: Globe,
      color: "from-[#17b5a7] to-[#e01c4e]",
      category: "legal",
      content: "These terms are governed by and construed in accordance with the laws of Kenya, and you submit to the non-exclusive jurisdiction of courts located in Kenya for the resolution of any disputes arising from or relating to these terms or your use of our services."
    },
    {
      id: 15,
      title: "Amendments",
      icon: Edit,
      color: "from-[#15479e] to-[#17b5a7]",
      category: "legal",
      content: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes constitute your acceptance of the updated terms. We recommend reviewing these terms periodically."
    }
  ];

  const filteredTerms = activeCategory === 'all' 
    ? termsData 
    : termsData.filter(term => term.category === activeCategory);

  const renderContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
      return content.map((paragraph, index) => (
        <div key={index} className="mb-4 last:mb-0">
          {paragraph.includes('**') ? (
            <div
              className="leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: paragraph
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 font-semibold">$1</strong>')
                  .replace(/\n/g, '<br />')
              }}
            />
          ) : (
            <p className="leading-relaxed text-gray-700">{paragraph}</p>
          )}
        </div>
      ));
    }
    
    return (
      <p className="leading-relaxed text-gray-700">
        {content.includes('**') ? (
          <span
            dangerouslySetInnerHTML={{
              __html: content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 font-semibold">$1</strong>')
            }}
          />
        ) : (
          content
        )}
      </p>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#15479e] via-[#1e5bb8] to-[#17b5a7] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating Elements */}
        <div className="hidden md:block absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="hidden lg:block absolute top-40 right-20 w-24 h-24 bg-[#e01c4e]/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center text-white">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2 text-[#17b5a7]" />
              Terms & Conditions
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              PayNasi
              <span className="text-[#17b5a7] block sm:inline"> Policies</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-blue-100 font-medium mb-8 max-w-3xl mx-auto">
              Comprehensive terms designed for safe, secure, and transparent transactions
            </p>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                    <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{action.title}</h3>
                    <p className="text-blue-100 text-sm">{action.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 sm:h-16">
            <path d="M0,0V46.29C47.79,22.8,103.59,32.5,158,28,209.58,23.82,278.92,24.48,331,28c63.08,4.21,121.4,10.17,174,28,51.6,17.4,98.8,47.5,158,48,59.2,0.5,119.8-29.4,174-48,51.6-17.7,98.4-10.1,158-28,46.8-14.1,87.2-40.8,131-48V0Z" fill="#f9fafb"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center bg-[#15479e]/10 text-[#15479e] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <BookOpen className="h-4 w-4 mr-2" />
              Complete Terms
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our 
              <span className="text-[#e01c4e]"> Commitment</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              These terms ensure transparency, security, and fairness for all PayNasi users.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-[#e01c4e] text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  <span className="text-sm sm:text-base">{category.name}</span>
                </button>
              );
            })}
          </div>

          {/* Terms Sections */}
          <div className="space-y-6 mb-16">
            {filteredTerms.map((section) => {
              const IconComponent = section.icon;
              const isExpanded = expandedSections.has(section.id);
              
              return (
                <div
                  key={section.id}
                  className={`bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden ${
                    isExpanded ? 'ring-2 ring-[#e01c4e]/20' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center shadow-lg transform transition-transform duration-300 ${isExpanded ? 'scale-110' : 'hover:scale-105'}`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {section.id}. {section.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {isExpanded ? 'Click to collapse' : 'Click to expand'}
                        </p>
                      </div>
                    </div>
                    <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    </div>
                  </button>
                  
                  <div className={`px-6 overflow-hidden transition-all duration-500 ease-out ${
                    isExpanded ? 'max-h-[2000px] pb-6' : 'max-h-0'
                  }`}>
                    <div className="border-t border-gray-200 pt-6">
                      <div className="text-gray-700 leading-relaxed">
                        {renderContent(section.content)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Key Highlights */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Key Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#17b5a7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-[#17b5a7]" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Secure Escrow</h4>
                <p className="text-gray-600 text-sm">Your funds are protected until transaction completion with automated release systems.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#e01c4e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-[#e01c4e]" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">1-Hour Inspection</h4>
                <p className="text-gray-600 text-sm">Buyers get a full hour to inspect products before funds are released to sellers.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#15479e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-[#15479e]" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Full Transparency</h4>
                <p className="text-gray-600 text-sm">Clear terms, transparent processes, and open communication throughout transactions.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#15479e] to-[#e01c4e] rounded-3xl p-8 text-center text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Questions About Our Terms?</h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Our support team is available to help you understand any aspect of our terms and conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group bg-white text-[#15479e] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5 transition-all duration-300 group-hover:scale-110" />
                <span>Contact Support</span>
              </Link>
              <Link
                href="/dispute_resolution"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30 inline-flex items-center justify-center space-x-2"
              >
                <Scale className="h-5 w-5" />
                <span>Dispute Guidelines</span>
              </Link>
              <Link
                href="/"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30 inline-flex items-center justify-center space-x-2"
              >
                <Home className="h-5 w-5" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;