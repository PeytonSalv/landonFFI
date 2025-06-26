'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Clock, Settings, DollarSign, Zap, Shield, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';

export default function PartnershipPage() {
  const benefits = [
    {
      icon: Settings,
      title: "Complete Control",
      description: "Maintain full control of the machine with complete access to all necessary components and reporting systems."
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Minimize liability without machine ownership while we handle PCI compliance, maintenance, and regulatory requirements."
    },
    {
      icon: TrendingUp,
      title: "Higher ROI",
      description: "Earn returns typically higher than traditional banking while securing your cash in a productive asset."
    },
    {
      icon: Clock,
      title: "Streamlined Operations",
      description: "Reduce bank trips and optimize cash flow by loading customer payments directly into the ATM."
    },
    {
      icon: DollarSign,
      title: "Passive Income Stream",
      description: "Receive a portion of transaction surcharges while using existing business cash flow."
    },
    {
      icon: Zap,
      title: "Comprehensive Training",
      description: "Free professional training for you and your staff on machine operation and basic maintenance."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Submit Application",
      description: "Complete our streamlined application using your business address. Our team responds within 24 hours."
    },
    {
      step: "02",
      title: "Professional Installation",
      description: "We handle all setup, installation, and configuration at your business location with minimal disruption."
    },
    {
      step: "03",
      title: "Comprehensive Training",
      description: "Receive professional training on machine operation, loading procedures, and basic troubleshooting."
    },
    {
      step: "04",
      title: "Cash Management",
      description: "Load the machine with existing business cash flow from customer payments."
    },
    {
      step: "05",
      title: "Revenue Generation",
      description: "Customers use your ATM for cash access, driving sales and foot traffic to your business."
    },
    {
      step: "06",
      title: "Ongoing Support",
      description: "Access real-time reporting and receive alerts when machine needs restocking."
    }
  ];

  const idealBusinesses = [
    "Convenience stores, gas stations, and liquor stores",
    "Restaurants, bars, and entertainment venues",
    "Tattoo parlors, barbershops, and personal services",
    "Hotels, motels, and hospitality businesses",
    "Smoke shops, dispensaries, and specialty retail",
    "Any high-traffic business seeking passive income"
  ];

  const faqs = [
    {
      question: "How much capital should I invest in the ATM?",
      answer: "Investment amounts vary based on location traffic and business type. Our team will provide customized recommendations based on your specific situation and projected transaction volume."
    },
    {
      question: "What revenue can I expect from the partnership?",
      answer: "Revenue depends on transaction volume, location, and surcharge rates. Most partners see positive returns within the first month, with many generating $500-$2,000+ monthly in additional income."
    },
    {
      question: "What happens if the ATM requires service?",
      answer: "We handle all technical issues, maintenance, and repairs. Our 24/7 support team ensures minimal downtime with rapid response times and professional service."
    },
    {
      question: "What are the startup costs for the partnership?",
      answer: "There are no upfront costs for equipment or installation. You only provide the initial cash loading amount, which remains your working capital generating returns."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-yellow-50">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-green-200 rounded-full mix-blend-normal filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-lime-200 rounded-full mix-blend-normal filter blur-3xl opacity-25 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-yellow-200 rounded-full mix-blend-normal filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Header */}
      <Header />

      <div className="relative z-10 px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">ATM Partnership Program</h1>
          </motion.div>

          {/* Hero section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-green-100 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Control, <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600">Zero Ownership Risk</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
                Our ATM Partnership Program is designed for businesses that want complete operational control without the complexities of ownership. We handle installation, maintenance, and compliance while you maintain full control and generate additional revenue.
              </p>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Experience all the benefits of ATM ownership with none of the operational headaches. Simply load the machine with your existing cash flow, and we&apos;ll handle the rest while you focus on growing your business.
              </p>
            </div>
          </motion.div>

          {/* How it works section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How Our Partnership Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-700">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Partnership Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Ideal businesses section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-3xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold text-center mb-8">Ideal Partnership Candidates</h2>
              <p className="text-xl text-green-100 text-center mb-8 max-w-3xl mx-auto">
                Our partnership program delivers exceptional results for businesses with high cash transaction volumes and consistent foot traffic.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {idealBusinesses.map((business, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                    <span className="text-green-100">{business}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* FAQ section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-center"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-green-100 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Partnership?</h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Join successful business owners who are already generating additional revenue through our partnership program. Apply today and receive a response within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  Apply for Partnership
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-green-300 text-green-700 font-semibold rounded-full hover:bg-green-50 hover:border-green-400 transition-all duration-300 text-center"
                >
                  Schedule Consultation
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 