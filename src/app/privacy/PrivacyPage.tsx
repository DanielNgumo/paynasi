"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { ArrowRight, Shield, ChevronDown, ChevronUp, FileText, Users, CreditCard, Lock, Edit, Download, AlertTriangle, Globe } from 'lucide-react';
import jsPDF from 'jspdf';

const PrivacyPage = () => {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([1])); // First section expanded by default

  // Toggle section visibility
  const toggleSection = (sectionId: number) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  // Download PDF function using jsPDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('PayNasi Platform - Privacy Policy', 20, 20);
    doc.setFontSize(12);
    doc.text('Last Updated: January 2025', 20, 30);
    let yOffset = 40;

    privacyData.forEach((section) => {
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text(`${section.id}. ${section.title}`, 20, yOffset);
      yOffset += 10;

      if (Array.isArray(section.content)) {
        section.content.forEach((paragraph) => {
          const cleanText = paragraph.replace(/\*\*(.*?)\*\*/g, '$1');
          const lines = doc.splitTextToSize(cleanText, 170);
          doc.setFont('helvetica', 'normal');
          doc.text(lines, 20, yOffset);
          yOffset += lines.length * 7 + 5;
        });
      } else {
        const cleanText = section.content.replace(/\*\*(.*?)\*\*/g, '$1');
        const lines = doc.splitTextToSize(cleanText, 170);
        doc.setFont('helvetica', 'normal');
        doc.text(lines, 20, yOffset);
        yOffset += lines.length * 7 + 5;
      }
      yOffset += 5;
    });

    doc.save('PayNasi-Privacy-Policy.pdf');
  };

  const privacyData = [
    {
      id: 1,
      title: "Introduction",
      icon: FileText,
      color: "from-[#e01c4e] to-[#15479e]",
      content: "This Privacy Policy describes how PayNasi (“we,” “us,” or “our”) collects, uses, and discloses your personal information when you use our escrow payment platform services (the “Services”). By using the Services, you consent to the practices described in this policy."
    },
    {
      id: 2,
      title: "Information We Collect",
      icon: Users,
      color: "from-[#17b5a7] to-[#e01c4e]",
      content: [
        "**Account Information:** When you create an account, we collect your name, mobile phone number, email address, and other information you provide.",
        "**Transaction Information:** We collect information about transactions conducted through our platform, including the amount, date, and parties involved.",
        "**Payment Information:** We collect payment information necessary to process transactions, including credit/debit card information, mobile money information and other financial details.",
        "**Communication:** We collect information when you contact us for customer support or other inquiries."
      ]
    },
    {
      id: 3,
      title: "How We Use Your Information",
      icon: Shield,
      color: "from-[#15479e] to-[#17b5a7]",
      content: [
        "**To Provide and Improve Services:** We use your information to provide, maintain, and improve our Services, and to develop new features and offerings.",
        "**To Communicate:** We may send you service-related communications, updates, or promotional offers.",
        "**For Security:** We use your information for authentication, security, and fraud prevention purposes."
      ]
    },
    {
      id: 4,
      title: "Information Sharing",
      icon: Globe,
      color: "from-[#e01c4e] to-[#17b5a7]",
      content: [
        "We do not sell, rent, or trade your personal information to third parties. We may share your information with:",
        "**Service Providers:** We may share information with third-party service providers who help us provide, maintain, and improve our Services.",
        "**Legal Compliance:** We may disclose your information if required by law or in response to a valid legal request."
      ]
    },
    {
      id: 5,
      title: "Your Choices",
      icon: Edit,
      color: "from-[#17b5a7] to-[#15479e]",
      content: "You can access, update, or delete your account information at any time by logging into your account settings. You can opt out of receiving promotional emails from us by following the instructions in those emails. Please note that even if you opt out, you may still receive service-related communications."
    },
    {
      id: 6,
      title: "Data Security",
      icon: Lock,
      color: "from-[#15479e] to-[#e01c4e]",
      content: "We implement security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no data transmission over the internet or method of electronic storage is 100% secure."
    },
    {
      id: 7,
      title: "Changes to this Privacy Policy",
      icon: FileText,
      color: "from-[#e01c4e] to-[#15479e]",
      content: "We may update this Privacy Policy to reflect changes to our information practices. We encourage you to periodically review this page for the latest information about our privacy practices."
    },
    {
      id: 8,
      title: "Contact Us",
      icon: AlertTriangle,
      color: "from-[#17b5a7] to-[#e01c4e]",
      content: "If you have questions about this Privacy Policy, please contact us at <a href=\"mailto:info@paynasi.com\" class=\"text-[#e01c4e] hover:underline\">info@paynasi.com</a>."
    }
  ];

  // Render content with markdown and link support
  const renderContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
      return content.map((paragraph, index) => (
        <div key={index} className="mb-4 last:mb-0">
          {paragraph.includes('**') || paragraph.includes('<a') ? (
            <div
              dangerouslySetInnerHTML={{
                __html: paragraph
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 font-semibold">$1</strong>')
                  .replace(/<a href="([^"]+)" class="([^"]+)">([^<]+)<\/a>/g, '<a href="$1" class="$2">$3</a>')
              }}
            />
          ) : (
            <p className="leading-relaxed">{paragraph}</p>
          )}
        </div>
      ));
    }
    
    return (
      <p className="leading-relaxed">
        {content.includes('**') || content.includes('<a') ? (
          <span
            dangerouslySetInnerHTML={{
              __html: content
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 font-semibold">$1</strong>')
                .replace(/<a href="([^"]+)" class="([^"]+)">([^<]+)<\/a>/g, '<a href="$1" class="$2">$3</a>')
            }}
          />
        ) : (
          content
        )}
      </p>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stunning Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e01c4e]/10 via-[#17b5a7]/10 to-[#15479e]/10 rounded-3xl blur-3xl"></div>
          <div className="relative">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#e01c4e] to-[#15479e] rounded-2xl mb-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#15479e] via-[#e01c4e] to-[#17b5a7] mb-6 leading-tight">
              PayNasi Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              How we collect, use, and protect your personal information
            </p>
          </div>
        </div>

        {/* Interactive Privacy Sections */}
        <div className="space-y-4 mb-16">
          {privacyData.map((section) => {
            const IconComponent = section.icon;
            const isExpanded = expandedSections.has(section.id);
            
            return (
              <div
                key={section.id}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden ${
                  isExpanded ? 'ring-2 ring-offset-2 ring-[#e01c4e]/20' : ''
                }`}
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-300"
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
                  <div className="border-t border-gray-200/50 pt-6">
                    <div className="text-gray-700 leading-relaxed">
                      {renderContent(section.content)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-r from-[#15479e] to-[#e01c4e] rounded-3xl p-8 text-center text-white shadow-2xl mb-12">
          <h3 className="text-2xl font-bold mb-4">Need Clarification?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Our support team is here to help you understand our privacy policies and ensure a smooth experience on PayNasi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={downloadPDF}
              className="group bg-white text-[#15479e] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <Download className="h-4 w-4 transition-all duration-300 group-hover:scale-110" />
              <span>Download as PDF</span>
            </button>
            <Link
              href="/contact"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30 inline-flex items-center justify-center space-x-2"
            >
              <span>Contact Support</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30 inline-flex items-center justify-center space-x-2"
            >
              <span>Back to Home</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Quick Navigation Summary */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
          <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Quick Reference</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
            {privacyData.map((section) => (
              <button
                key={section.id}
                onClick={() => toggleSection(section.id)}
                className="text-left p-3 rounded-lg hover:bg-[#e01c4e]/10 transition-colors duration-200 border border-transparent hover:border-[#e01c4e]/20"
              >
                <div className="font-medium text-gray-900 mb-1">{section.id}. {section.title}</div>
                <div className="text-gray-500 text-xs">Click to view</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
