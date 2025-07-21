"use client";
import Link from 'next/link';
import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const TermsPage = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            PayNasi <span className="text-[#e01c4e]">Policies</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our Terms and Conditions and Privacy Policy for safe and secure transactions
          </p>
        </div>

        {/* Terms and Conditions */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-12">
          <div className="flex items-center mb-6">
            <Shield className="h-8 w-8 text-[#15479e] mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Terms and Conditions</h2>
          </div>
          
          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">1. Introduction</h3>
              <p>
                Welcome to PayNasi Platform, a secure online escrow service that facilitates transactions between buyers and sellers. By using our services, you agree to comply with and are bound by these terms and conditions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">2. User Accounts</h3>
              <p>
                To use our services, you must create an account. You are responsible for maintaining the confidentiality of your account information and are fully responsible for all activities that occur under your account. You agree to notify us immediately of any unauthorized use or access to your account.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">3. Escrow Process</h3>
              <p>
                Buyers and sellers agree to the terms of the transaction. Buyers place funds in PayNasi escrow. Sellers deliver the goods or services. Buyers receive and inspects the goods. Funds are released to the seller upon buyer approval.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">4. Fees and Payments</h3>
              <p>
                Our fee structure is outlined on our website and mobile application. You agree to pay all applicable fees associated with your use of our services. Fees are non-refundable, except as expressly stated in our refund policy.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">5. Buyer’s Responsibility for Confirming Receipts and Product Status</h3>
              <p>
                Upon receiving a product, the buyer must confirm both the receipt and the status of the product through the system. Failure to do so will waive any claims of non-receipt or product issues, and the system will not be liable for processing seller payment requests or addressing disputes in such cases.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">6. Seller’s Responsibility for Accurate and Timely Shipment</h3>
              <p>
                The seller must ship the correct products within the agreed timelines. Failure to do so may affect the seller’s success rating. The seller must also ensure the delivery person requests and confirms the buyer’s delivery code before handing over the product.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">7. Refund Policy</h3>
              <p>
                If a seller fails to fulfill an order, the buyer will be refunded the transaction amount. However, the refund will be processed less the platform fees and any transaction charges incurred.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">8. Dispute Resolution</h3>
              <p>
                In case of a dispute, both parties agree to cooperate with our resolution process. We may provide mediation or arbitration services. Our decision is final and binding.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">9. User Conduct</h3>
              <p>
                You agree not to engage in any prohibited activities, including fraud, illegal transactions, or any activity that violates applicable laws and regulations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">10. Privacy Policy</h3>
              <p>
                Our privacy practices are outlined in our Privacy Policy. By using our services, you consent to our collection, use, and sharing of your information as described in the Privacy Policy. <a href="#privacy-policy" className="text-[#e01c4e] hover:underline">View Privacy Policy</a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">11. Intellectual Property</h3>
              <p>
                Intellectual property laws protect all content on our platform. You agree not to reproduce, distribute, or create derivative works from our content without our express consent.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">12. Limitation of Liability</h3>
              <p>
                We are not liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">13. Termination</h3>
              <p>
                We reserve the right to suspend or terminate your account at our sole discretion, without notice, for conduct that we believe violates these terms or is harmful to other users or us.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">14. Governing Law</h3>
              <p>
                These terms are governed by and construed in accordance with the laws of Kenya, and you submit to the non-exclusive jurisdiction of courts located in Kenya for the resolution of any disputes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">15. Amendments</h3>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes constitute your acceptance of the updated terms.
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

export default TermsPage;