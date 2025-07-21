"use client";

import React, { useState } from 'react';
import { 
  Shield, 
  Target, 
  Users, 
  TrendingUp, 
  Award, 
  Heart, 
  Globe, 
  Lightbulb,
  CheckCircle,
  Eye,
  Zap,
  MessageCircle,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';

const AboutPage = () => {
  const [activeValue, setActiveValue] = useState(0);

  const stats = [
    { number: '1,000+', label: 'Active Users', icon: Users },
    { number: '5,000+', label: 'Transactions', icon: TrendingUp },
    { number: '99.9%', label: 'Success Rate', icon: Award },
    { number: '24/7', label: 'Support', icon: MessageCircle }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We implement bank-level security measures to protect every transaction and user data.',
      details: [
        'End-to-end encryption for all transactions',
        'Regular security audits and compliance checks',
        'Multi-factor authentication for enhanced protection',
        'Secure integration with trusted payment partners'
      ]
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Complete visibility into every step of your transaction process.',
      details: [
        'Real-time transaction tracking and updates',
        'Clear fee structure with no hidden charges',
        'Open communication between all parties',
        'Detailed transaction history and receipts'
      ]
    },
    {
      icon: Heart,
      title: 'Trust Building',
      description: 'Creating a marketplace where trust is built through secure processes, not just reputation.',
      details: [
        'Verified user profiles and ratings',
        'Dispute resolution system',
        'Community-driven feedback mechanisms',
        'Educational resources for safe trading'
      ]
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously improving our platform with cutting-edge technology and user feedback.',
      details: [
        'AI-powered fraud detection systems',
        'Mobile-first design for accessibility',
        'Integration with popular payment methods',
        'Regular feature updates based on user needs'
      ]
    }
  ];

  const team = [
    {
      name: 'Sarah Kamau',
      role: 'CEO & Co-Founder',
      image: '/api/placeholder/300/300',
      bio: 'Former fintech executive with 10+ years in digital payments and e-commerce security.',
      linkedin: '#'
    },
    {
      name: 'Michael Ochieng',
      role: 'CTO & Co-Founder',
      image: '/api/placeholder/300/300',
      bio: 'Tech veteran specializing in secure payment systems and mobile application development.',
      linkedin: '#'
    },
    {
      name: 'Grace Wanjiku',
      role: 'Head of Operations',
      image: '/api/placeholder/300/300',
      bio: 'Operations expert focused on customer experience and transaction processing efficiency.',
      linkedin: '#'
    },
    {
      name: 'David Kiprotich',
      role: 'Lead Developer',
      image: '/api/placeholder/300/300',
      bio: 'Full-stack developer passionate about building secure, scalable financial technology solutions.',
      linkedin: '#'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'PayNasi Founded',
      description: 'Started with a vision to make online transactions safer for everyone in Kenya.'
    },
    {
      year: '2024',
      title: 'MVP Launch',
      description: 'Launched our mobile application with core escrow functionality and MPESA integration.'
    },
    {
      year: '2024',
      title: '1,000 Users',
      description: 'Reached our first major milestone with over 1,000 active users and 5,000+ transactions.'
    },
    {
      year: '2025',
      title: 'Future Plans',
      description: 'Expanding features and exploring partnerships to serve more markets across East Africa.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#15479e] via-[#1e5bb8] to-[#17b5a7] py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="about-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#about-grid)" />
          </svg>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#e01c4e]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-[#17b5a7]/20 rounded-full blur-xl animate-pulse delay-2000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Users className="h-4 w-4 mr-2 text-[#17b5a7]" />
              About PayNasi
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Building Trust in Every
              <span className="text-[#17b5a7]"> Transaction</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-blue-100 font-medium mb-8 max-w-4xl mx-auto">
              We&apos;re on a mission to make online commerce safer, fairer, and more accessible for everyone in Kenya and beyond.
            </p>

            {/* Stats */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
  {stats.map((stat) => {
    const Icon = stat.icon;
    return (
      <div key={stat.label} className="text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-3">
          <Icon className="h-6 w-6 text-[#17b5a7]" />
        </div>
        <div className="text-3xl font-bold text-white">{stat.number}</div>
        <div className="text-blue-100 text-sm">{stat.label}</div>
      </div>
    );
  })}
</div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-[#15479e]/10 text-[#15479e] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Target className="h-4 w-4 mr-2" />
                Our Mission
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Making Trust Optional, Not Ascending
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our mission is to eliminate the risk and uncertainty in online transactions by providing a secure, transparent escrow platform that protects both buyers and sellers. We believe that everyone should be able to transact with confidence, regardless of whether they know the other party.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#17b5a7] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Secure Transactions</h4>
                    <p className="text-gray-600">Every payment is protected until both parties are satisfied</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#17b5a7] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fair Commerce</h4>
                    <p className="text-gray-600">Equal protection for buyers and sellers in every transaction</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#17b5a7] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Accessible Technology</h4>
                    <p className="text-gray-600">Simple, mobile-first design that works for everyone</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-[#e01c4e]/10 rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-[#e01c4e]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To become the leading escrow platform in East Africa, enabling millions of people to trade safely and confidently online. We envision a future where geographical boundaries don&apos;t limit commerce, and trust is built through technology, not just reputation.
              </p>
              <div className="bg-gradient-to-r from-[#15479e] to-[#17b5a7] rounded-lg p-6 text-white">
                <div className="flex items-center space-x-2 mb-3">
                  <Lightbulb className="h-5 w-5 text-[#17b5a7]" />
                  <span className="font-semibold">Innovation Goal</span>
                </div>
                <p className="text-sm">
                  By 2027, we aim to facilitate over 1 million secure transactions across East Africa, setting the standard for digital commerce protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#15479e]/10 text-[#15479e] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Heart className="h-4 w-4 mr-2" />
              Our Core Values
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our values shape every decision we make and every feature we build. They&apos;re the foundation of our commitment to our users.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Values List */}
            <div className="space-y-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      activeValue === index
                        ? 'border-[#17b5a7] bg-[#17b5a7]/5 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveValue(index)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        activeValue === index ? 'bg-[#17b5a7] text-white' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active Value Details */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-[#17b5a7] rounded-lg flex items-center justify-center">
                  {React.createElement(values[activeValue].icon, { className: "h-6 w-6 text-white" })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{values[activeValue].title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {values[activeValue].description}
              </p>
              
              <div className="space-y-3">
                {values[activeValue].details.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#17b5a7] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#15479e]/10 text-[#15479e] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="h-4 w-4 mr-2" />
              Our Journey
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              From Idea to Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow our journey from a simple idea to a trusted platform serving thousands of users across Kenya.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-[#17b5a7] hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#17b5a7] rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                  
                  <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 md:px-8">
                      <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="bg-[#15479e] text-white px-3 py-1 rounded-full text-sm font-bold">
                            {milestone.year}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="md:w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#15479e]/10 text-[#15479e] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Users className="h-4 w-4 mr-2" />
              Meet Our Team
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The People Behind PayNasi
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts is passionate about building secure, accessible financial technology that serves everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-[#15479e] to-[#17b5a7] flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <Users className="h-12 w-12 text-[#15479e]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#e01c4e] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <a 
                    href={member.linkedin} 
                    className="inline-flex items-center text-[#15479e] hover:text-[#17b5a7] transition-colors"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    Connect
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-[#15479e] to-[#17b5a7] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Have questions about PayNasi? Want to partner with us? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-[#17b5a7]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-blue-100 mb-4">Get support or ask questions</p>
              <a href="mailto:support@paynasi.com" className="text-[#17b5a7] hover:text-white transition-colors">
                support@paynasi.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-[#17b5a7]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Live Chat</h3>
              <p className="text-blue-100 mb-4">Chat with our support team</p>
              <button className="text-[#17b5a7] hover:text-white transition-colors">
                Start Chat
              </button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-[#17b5a7]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-blue-100 mb-4">Our offices in Nairobi</p>
              <p className="text-[#17b5a7]">
                Westlands, Nairobi<br />
                Kenya
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="flex justify-center space-x-6">
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="h-6 w-6 text-[#17b5a7]" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="h-6 w-6 text-[#17b5a7]" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="h-6 w-6 text-[#17b5a7]" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;