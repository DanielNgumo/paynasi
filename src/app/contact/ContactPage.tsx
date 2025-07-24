"use client";

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  Shield, 
  MessageCircle,
  Clock,
  Users,
  ArrowRight,
  Star,
  Headphones,
  Smartphone,
  Heart
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@paynasi.com",
      action: "Send Email",
      color: "text-[#e01c4e]",
      bgColor: "bg-[#e01c4e]/10"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us directly",
      contact: "+254 700 000 000",
      action: "Call Now",
      color: "text-[#15479e]",
      bgColor: "bg-[#15479e]/10"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our team",
      contact: "Available 24/7",
      action: "Start Chat",
      color: "text-[#17b5a7]",
      bgColor: "bg-[#17b5a7]/10"
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Technical Support' },
    { value: 'billing', label: 'Billing & Payments' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'feedback', label: 'Feedback & Suggestions' }
  ];

  const faqs = [
    {
      question: "How does PayNasi protect my money?",
      answer: "PayNasi uses bank-level security to hold your funds in escrow until both parties confirm the transaction is complete."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We currently accept MPESA and are working on adding more mobile money options across East Africa."
    },
    {
      question: "How long does it take to release funds?",
      answer: "Funds are released instantly once the buyer confirms satisfaction with the product or service."
    },
    {
      question: "What are your transaction fees?",
      answer: "We charge a small percentage fee only when transactions are completed successfully. No hidden charges."
    }
  ];

  const supportStats = [
    { icon: Clock, value: "< 2 hrs", label: "Average Response Time" },
    { icon: Users, value: "1,000+", label: "Happy Customers" },
    { icon: Star, value: "4.9/5", label: "Customer Satisfaction" },
    { icon: Shield, value: "99.9%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-white">
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

        {/* Floating Elements - Hidden on mobile for performance */}
        <div className="hidden md:block absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="hidden md:block absolute top-40 right-20 w-24 h-24 bg-[#e01c4e]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="hidden md:block absolute bottom-20 left-1/4 w-20 h-20 bg-[#17b5a7]/20 rounded-full blur-xl animate-pulse delay-2000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-24">
          <div className="text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Headphones className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-[#17b5a7]" />
              We're Here to Help
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 px-2">
              Get in <span className="text-[#17b5a7]">Touch</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 font-medium mb-3 sm:mb-4 px-4">
              Questions? Feedback? We would love to hear from you.
            </p>
            
            <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto px-4">
              Our dedicated support team is here to help you with any questions about the PayNasi secure escrow platform. Reach out anytime!
            </p>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8 sm:h-12 lg:h-16">
            <path d="M0,0V46.29C47.79,22.8,103.59,32.5,158,28,209.58,23.82,278.92,24.48,331,28c63.08,4.21,121.4,10.17,174,28,51.6,17.4,98.8,47.5,158,48,59.2,0.5,119.8-29.4,174-48,51.6-17.7,98.4-10.1,158-28,46.8-14.1,87.2-40.8,131-48V0Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              Multiple Ways to <span className="text-[#e01c4e]">Connect</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Choose the method that works best for you. We are committed to providing fast, helpful support across all channels.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${method.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6`}>
                    <Icon className={`h-6 w-6 sm:h-8 sm:w-8 ${method.color}`} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{method.description}</p>
                  <div className="text-base sm:text-lg font-medium text-gray-900 mb-4 sm:mb-6 break-all">{method.contact}</div>
                  <button className={`w-full ${method.color.replace('text-', 'bg-')}/10 hover:${method.color.replace('text-', 'bg-')}/20 ${method.color} px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200 text-sm sm:text-base`}>
                    <span>{method.action}</span>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Support Stats */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
              {supportStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="space-y-2 sm:space-y-3">
                    <div className="bg-[#15479e]/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mx-auto">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#15479e]" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-[#15479e]">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-600 leading-tight">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Form */}
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 order-2 lg:order-1">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Send us a Message</h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Fill out the form below and we will get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8 sm:py-12">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#17b5a7]/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-[#17b5a7]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-6">
                    Thank you for reaching out. We will get back to you soon.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[#e01c4e] hover:bg-[#c01640] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e01c4e] focus:border-[#e01c4e] transition-colors duration-200 text-sm sm:text-base"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e01c4e] focus:border-[#e01c4e] transition-colors duration-200 text-sm sm:text-base"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e01c4e] focus:border-[#e01c4e] transition-colors duration-200 text-sm sm:text-base"
                        placeholder="+254 700 000 000"
                      />
                    </div>
                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Inquiry Type
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e01c4e] focus:border-[#e01c4e] transition-colors duration-200 text-sm sm:text-base"
                      >
                        {inquiryTypes.map(type => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e01c4e] focus:border-[#e01c4e] transition-colors duration-200 text-sm sm:text-base"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e01c4e] focus:border-[#e01c4e] transition-colors duration-200 resize-none text-sm sm:text-base"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    className="w-full bg-[#e01c4e] hover:bg-[#c01640] disabled:bg-gray-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Contact Info & FAQs */}
            <div className="space-y-8 sm:space-y-12 order-1 lg:order-2">
              {/* Contact Info */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Get in Touch</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-[#e01c4e]/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-[#e01c4e]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email</h4>
                      <p className="text-gray-600 text-sm sm:text-base break-all">support@paynasi.com</p>
                      <p className="text-xs sm:text-sm text-gray-500">We will respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-[#15479e]/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-[#15479e]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Location</h4>
                      <p className="text-gray-600 text-sm sm:text-base">Nairobi, Kenya</p>
                      <p className="text-xs sm:text-sm text-gray-500">East Africa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-[#17b5a7]/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-[#17b5a7]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Business Hours</h4>
                      <p className="text-gray-600 text-sm sm:text-base">Monday - Friday: 8AM - 6PM</p>
                      <p className="text-xs sm:text-sm text-gray-500">EAT (East Africa Time)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Frequently Asked Questions</h3>
                <div className="space-y-4 sm:space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 sm:p-6">
                      <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">{faq.question}</h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#15479e] to-[#17b5a7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
              Ready to Start Secure Transactions?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 px-4">
              Join thousands of users who trust the PayNasi secure escrow transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button className="bg-[#e01c4e] hover:bg-[#c01640] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200 text-sm sm:text-base">
                <Smartphone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Download App</span>
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200 border border-white/20 text-sm sm:text-base">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;