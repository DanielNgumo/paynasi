import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const PrivacyPage = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            PayNasi <span className="text-[#e01c4e]">Privacy Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            How we collect, use, and protect your personal information
          </p>
        </div>

        {/* Privacy Policy */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <div className="flex items-center mb-6">
            <FileText className="h-8 w-8 text-[#15479e] mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2>
          </div>
          
          <div className="space-y-6 text-gray-600">
            <p>
              This Privacy Policy describes how PayNasi (“we,” “us,” or “our”) collects, uses, and discloses your personal information when you use our escrow payment platform services (the “Services”). By using the Services, you consent to the practices described in this policy.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">1. Information We Collect</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Account Information:</strong> When you create an account, we collect your name, mobile phone number, email address, and other information you provide.</li>
                <li><strong>Transaction Information:</strong> We collect information about transactions conducted through our platform, including the amount, date, and parties involved.</li>
                <li><strong>Payment Information:</strong> We collect payment information necessary to process transactions, including credit/debit card information, mobile money information, and other financial details.</li>
                <li><strong>Communication:</strong> We collect information when you contact us for customer support or other inquiries.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">2. How We Use Your Information</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>To Provide and Improve Services:</strong> We use your information to provide, maintain, and improve our Services, and to develop new features and offerings.</li>
                <li><strong>To Communicate:</strong> We may send you service-related communications, updates, or promotional offers.</li>
                <li><strong>For Security:</strong> We use your information for authentication, security, and fraud prevention purposes.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">3. Information Sharing</h3>
              <p>
                We do not sell, rent, or trade your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Service Providers:</strong> We may share information with third-party service providers who help us provide, maintain, and improve our Services.</li>
                <li><strong>Legal Compliance:</strong> We may disclose your information if required by law or in response to a valid legal request.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">4. Your Choices</h3>
              <p>
                You can access, update, or delete your account information at any time by logging into your account settings. You can opt out of receiving promotional emails from us by following the instructions in those emails. Please note that even if you opt out, you may still receive service-related communications.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">5. Data Security</h3>
              <p>
                We implement security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no data transmission over the internet or method of electronic storage is 100% secure.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">6. Changes to this Privacy Policy</h3>
              <p>
                We may update this Privacy Policy to reflect changes to our information practices. We encourage you to periodically review this page for the latest information about our privacy practices.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">7. Contact Us</h3>
              <p>
                If you have questions about this Privacy Policy, please contact us at <a href="mailto:info@paynasi.com" className="text-[#e01c4e] hover:underline">info@paynasi.com</a>.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="bg-[#e01c4e] hover:bg-[#c01640] text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 mx-auto transition-colors duration-200 shadow-lg inline-flex"
          >
            <span>Back to Home</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPage;
