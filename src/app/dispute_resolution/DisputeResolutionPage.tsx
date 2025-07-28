"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { 
  ArrowRight, 
  Shield, 
  ChevronDown, 
  FileText, 
  Scale, 
  AlertTriangle, 
  Download,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  Users,
  Phone,
  Home
} from 'lucide-react';

const DisputeResolutionPage = () => {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([1]));
  const [activeTab, setActiveTab] = useState('overview');

  const toggleSection = (sectionId: number) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const disputeData = [
    {
      id: 1,
      title: "Automated Resolution by Design",
      icon: FileText,
      color: "from-[#17b5a7] to-[#15479e]",
      content: [
        "Our platform is built to operate with minimal disputes through automation, verified delivery, and strict timelines. However, we recognize that exceptions may occur.",
        "**Delivery Code Verification:** Confirms product handover and triggers the 1-hour inspection period.",
        "**1-Hour Inspection Window:** Allows buyers to inspect and either accept or return the product.",
        "**Auto-Release of Funds:** If no return is initiated within the hour, funds are automatically released to the seller."
      ]
    },
    {
      id: 2,
      title: "When a Dispute Can Be Raised",
      icon: Scale,
      color: "from-[#e01c4e] to-[#17b5a7]",
      content: [
        "Disputes are only considered in these exceptional cases:",
        "**Item-Switching During Returns:** Seller must have tamper-proof verification methods or serial number documentation shared before dispatch.",
        "**Service Milestone Not Acknowledged:** When milestone is completed via email but buyer becomes unresponsive.",
        "**Seller Refuses Returned Item:** When seller intentionally delays or refuses to provide return code for legitimate returns."
      ]
    },
    {
      id: 3,
      title: "When Disputes Are Not Handled",
      icon: AlertTriangle,
      color: "from-[#15479e] to-[#e01c4e]",
      content: [
        "We cannot assist with disputes in these situations:",
        "Buyer fails to initiate return within the 1-hour inspection period.",
        "No delivery code verification was performed before handover.",
        "No return code verification during item return.",
        "Lack of tamper-proof documentation for switching claims.",
        "Missing email confirmation for service milestones."
      ]
    },
    {
      id: 4,
      title: "Resolution Process",
      icon: Clock,
      color: "from-[#17b5a7] to-[#15479e]",
      content: [
        "Our dispute resolution follows a structured process:",
        "**Submit Evidence:** Parties provide relevant documentation and proof.",
        "**48-Hour Review:** Our support team examines all evidence thoroughly.",
        "**Decision & Action:** Final decision communicated with immediate fund release or return.",
        "**Case Closure:** Both parties receive detailed resolution summary."
      ]
    }
  ];

  const quickActions = [
    { 
      title: "File a Dispute", 
      description: "Submit a new dispute case", 
      icon: Scale, 
      color: "bg-[#e01c4e]",
      action: "dispute" 
    },
    { 
      title: "Check Status", 
      description: "Track your dispute progress", 
      icon: Eye, 
      color: "bg-[#17b5a7]",
      action: "status" 
    },
    { 
      title: "Guidelines PDF", 
      description: "Download complete guidelines", 
      icon: Download, 
      color: "bg-[#15479e]",
      action: "download" 
    }
  ];

  const stats = [
    { number: "48hrs", label: "Max Resolution Time" },
    { number: "99.2%", label: "Resolution Success Rate" },
    { number: "1,000+", label: "Cases Resolved" },
    { number: "4.8★", label: "Satisfaction Rating" }
  ];

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
              Fair & Transparent Resolution
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Dispute Resolution
              <span className="text-[#17b5a7] block sm:inline"> Guidelines</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-blue-100 font-medium mb-8 max-w-3xl mx-auto">
              How we ensure fair and transparent transaction disputes
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
              <Scale className="h-4 w-4 mr-2" />
              Detailed Guidelines
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Understanding Our 
              <span className="text-[#e01c4e]"> Process</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our dispute resolution system is designed to be fair, transparent, and efficient for all parties involved.
            </p>
          </div>

          {/* Dispute Guidelines */}
          <div className="space-y-6 mb-16">
            {disputeData.map((section) => {
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

          {/* Key Principles */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Our Resolution Principles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#17b5a7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-[#17b5a7]" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Fair & Impartial</h4>
                <p className="text-gray-600 text-sm">Every case is reviewed objectively based on evidence and platform guidelines.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#e01c4e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-[#e01c4e]" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Quick Resolution</h4>
                <p className="text-gray-600 text-sm">Most disputes are resolved within 48 hours of submission with complete evidence.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#15479e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-[#15479e]" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Full Transparency</h4>
                <p className="text-gray-600 text-sm">Clear communication throughout the process with detailed resolution explanations.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#15479e] to-[#e01c4e] rounded-3xl p-8 text-center text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Need Help with a Dispute?</h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Our support team is ready to assist you with any transaction disputes or questions about our resolution process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white text-[#15479e] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center space-x-2">
                <Scale className="h-5 w-5 transition-all duration-300 group-hover:scale-110" />
                <span>File a Dispute</span>
              </button>
              <Link
                href="/contact"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30 inline-flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Contact Support</span>
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

export default DisputeResolutionPage;