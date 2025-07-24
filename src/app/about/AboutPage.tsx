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
  const [expandedBios, setExpandedBios] = useState<Record<number, boolean>>({});

  const toggleBio = (index: number) => {
    setExpandedBios(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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
      name: 'Ian Ruthi',
      role: 'Value Innovator & Product Strategist',
      image: '/api/placeholder/300/300',
      bio: 'A seasoned serial intrapreneur, Ian has spent years turning complex ideas into practical, user-driven solutions across various industries.',
      fullBio: 'A seasoned serial intrapreneur, Ian has spent years turning complex ideas into practical, user-driven solutions across various industries. With a sharp focus on value innovation and product management, they lead the development of PayNasi\'s core features; ensuring that each solution is both scalable and tailored to local market needs. Ian thrives at the intersection of business strategy, design thinking, and execution, making them the visionary behind the platform\'s product roadmap.',
      linkedin: '#'
    },
    {
      name: 'Martin Njuguna',
      role: 'Marketing Lead & E-commerce Expert',
      image: '/api/placeholder/300/300',
      bio: 'Martin brings deep insights into the African e-commerce landscape, with a proven track record in marketing and customer engagement.',
      fullBio: 'Martin brings deep insights into the African e-commerce landscape, with a proven track record in marketing and customer engagement. Their understanding of buyer behavior, merchant dynamics, and digital growth strategies is instrumental in driving adoption and building brand trust. With a passion for storytelling and market positioning, Martin ensures that PayNasi not only solves a problem—but also resonates with the people it serves.',
      linkedin: '#'
    },
    {
      name: 'Erick Karanja',
      role: 'Backend Engineer & Payment Systems Architect',
      image: '/api/placeholder/300/300',
      bio: 'A skilled computer engineer with a specialty in backend development and payment integration, Erick is the architect behind PayNasi\'s secure infrastructure.',
      fullBio: 'A skilled computer engineer with a specialty in backend development and payment integration, Erick is the architect behind PayNasi\'s secure and reliable infrastructure. With years of experience building scalable systems and integrating complex APIs, they ensure that every transaction on the platform is fast, traceable, and secure. Eric\'s attention to technical detail and commitment to security is what powers PayNasi\'s promise of safe online transactions.',
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
      <style>{`
        .bio-text {
          transition: max-height 0.3s ease-in-out, opacity 0.2s ease-in-out;
          overflow: hidden;
        }
        .bio-collapsed {
          max-height: 4.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .bio-expanded {
          max-height: 500px;
        }
        .fade-gradient {
          background: linear-gradient(transparent, white);
          height: 1rem;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          pointer-events: none;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#15479e] via-[#1e5bb8] to-[#17b5a7] py-16 sm:py-20 lg:py-32 overflow-hidden">
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
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 sm:top-40 right-8 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-[#e01c4e]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/4 w-14 h-14 sm:w-20 sm:h-20 bg-[#17b5a7]/20 rounded-full blur-xl animate-pulse delay-2000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-[#17b5a7]" />
              About PayNasi
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 px-2">
              Building Trust in Every
              <span className="text-[#17b5a7] block sm:inline"> Transaction</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 font-medium mb-8 max-w-4xl mx-auto px-4">
              We&apos;re on a mission to make online commerce safer, fairer, and more accessible for everyone in Kenya and beyond.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg mb-2 sm:mb-3">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#17b5a7]" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-blue-100 text-xs sm:text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center bg-[#15479e]/10 text-[#15479e] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                <Target className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Our Mission
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Making Trust Optional, Not Essential
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Our mission is to eliminate the risk and uncertainty in online transactions by providing a secure, transparent escrow platform that protects both buyers and sellers. We believe that everyone should be able to transact with confidence, regardless of whether they know the other party.
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#17b5a7] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Secure Transactions</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Every payment is protected until both parties are satisfied</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#17b5a7] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Fair Commerce</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Equal protection for buyers and sellers in every transaction</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#17b5a7] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Accessible Technology</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Simple, mobile-first design that works for everyone</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#e01c4e]/10 rounded-lg flex items-center justify-center">
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-[#e01c4e]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                To become the leading escrow platform in East Africa, enabling millions of people to trade safely and confidently online. We envision a future where geographical boundaries don&apos;t limit commerce, and trust is built through technology, not just reputation.
              </p>
              <div className="bg-gradient-to-r from-[#15479e] to-[#17b5a7] rounded-lg p-4 sm:p-6 text-white">
                <div className="flex items-center space-x-2 mb-3">
                  <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-[#17b5a7]" />
                  <span className="font-semibold text-sm sm:text-base">Innovation Goal</span>
                </div>
                <p className="text-xs sm:text-sm">
                  By 2027, we aim to facilitate over 1 million secure transactions across East Africa, setting the standard for digital commerce protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-[#15479e]/10 text-[#15479e] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
              Our Core Values
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              What Drives Us Forward
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Our values shape every decision we make and every feature we build. They&apos;re the foundation of our commitment to our users.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Values List */}
            <div className="space-y-3 sm:space-y-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className={`p-4 sm:p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      activeValue === index
                        ? 'border-[#17b5a7] bg-[#17b5a7]/5 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveValue(index)}
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center ${
                        activeValue === index ? 'bg-[#17b5a7] text-white' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{value.title}</h3>
                        <p className="text-gray-600 text-sm sm:text-base">{value.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active Value Details */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#17b5a7] rounded-lg flex items-center justify-center">
                  {React.createElement(values[activeValue].icon, { className: "h-5 w-5 sm:h-6 sm:w-6 text-white" })}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{values[activeValue].title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {values[activeValue].description}
              </p>
              
              <div className="space-y-2 sm:space-y-3">
                {values[activeValue].details.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#17b5a7] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm sm:text-base">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-[#15479e]/10 text-[#15479e] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
              Our Journey
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              From Idea to Impact
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Follow our journey from a simple idea to a trusted platform serving thousands of users across Kenya.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-[#17b5a7] hidden md:block"></div>
            
            <div className="space-y-8 sm:space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot - Hidden on mobile */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#17b5a7] rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                  
                  {/* Mobile Version - Full width */}
                  <div className="md:hidden">
                    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="bg-[#15479e] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                          {milestone.year}
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Desktop Version - Alternating sides */}
                  <div className={`hidden md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
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
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-[#15479e]/10 text-[#15479e] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
              Meet Our Team
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              Meet the Founders Behind PayNasi 
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              At the heart of PayNasi is a dynamic team of founders driven by a shared vision: to build trust and simplify commerce across Africa through secure, tech-enabled escrow solutions. Together, they combine technical depth, market intelligence, and product vision; setting a new standard for trust and transparency in African digital commerce.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-[#15479e] to-[#17b5a7] flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center">
                    <Users className="h-10 w-10 sm:h-12 sm:w-12 text-[#15479e]" />
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#e01c4e] font-medium mb-3 text-sm sm:text-base">{member.role}</p>
                  
                  <div className="relative mb-4">
                    <div className={`bio-text text-gray-600 text-xs sm:text-sm leading-relaxed ${
                      expandedBios[index] ? 'bio-expanded' : 'bio-collapsed'
                    }`}>
                      {expandedBios[index] ? member.fullBio : member.bio}
                    </div>
                    
                    {!expandedBios[index] && member.fullBio.length > member.bio.length && (
                      <div className="fade-gradient"></div>
                    )}
                    
                    {member.fullBio.length > member.bio.length && (
                      <button
                        onClick={() => toggleBio(index)}
                        className="text-[#17b5a7] hover:text-[#15479e] transition-colors text-xs sm:text-sm font-medium mt-2 flex items-center group"
                      >
                        {expandedBios[index] ? (
                          <>
                            Show Less
                            <svg className="w-3 h-3 ml-1 transform rotate-180 group-hover:translate-y-0.5 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </>
                        ) : (
                          <>
                            Read More
                            <svg className="w-3 h-3 ml-1 group-hover:translate-y-0.5 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                  
                  <a 
                    href={member.linkedin} 
                    className="inline-flex items-center text-[#15479e] hover:text-[#17b5a7] transition-colors text-sm"
                  >
                    <Linkedin className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    Connect
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#15479e] to-[#17b5a7] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 px-2">Get in Touch</h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto px-4">
              Have questions about PayNasi? Want to partner with us? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-[#17b5a7]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Email Us</h3>
              <p className="text-blue-100 mb-4 text-sm sm:text-base">Get support or ask questions</p>
              <a href="mailto:support@paynasi.com" className="text-[#17b5a7] hover:text-white transition-colors text-sm sm:text-base break-all">
                support@paynasi.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-[#17b5a7]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Live Chat</h3>
              <p className="text-blue-100 mb-4 text-sm sm:text-base">Chat with our support team</p>
              <button className="text-[#17b5a7] hover:text-white transition-colors text-sm sm:text-base">
                Start Chat
              </button>
            </div>

            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-[#17b5a7]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-blue-100 mb-4 text-sm sm:text-base">Our offices in Nairobi</p>
              <p className="text-[#17b5a7] text-sm sm:text-base">
                Westlands, Nairobi<br />
                Kenya
              </p>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <div className="flex justify-center space-x-4 sm:space-x-6">
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="h-5 w-5 sm:h-6 sm:w-6 text-[#17b5a7]" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-[#17b5a7]" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6 text-[#17b5a7]" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;