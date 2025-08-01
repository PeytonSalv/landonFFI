'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Settings, Zap, Lock, Eye, Headphones, Star } from 'lucide-react';
import Header from '@/components/Header';

export default function PaymentProcessingPage() {
  const features = [
    {
      icon: Lock,
      title: "Secure & Fast Transactions",
      description: "Advanced encryption technology with PCI compliance standards ensuring the highest security for every transaction."
    },
    {
      icon: Eye,
      title: "Transparent Pricing",
      description: "No hidden fees or surprises. You&apos;ll always know exactly what you&apos;re paying each month with our clear pricing structure."
    },
    {
      icon: Settings,
      title: "Tailored Solutions",
      description: "Flexible payment processing systems customized to fit businesses of any size or industry."
    },
    {
      icon: Headphones,
      title: "Exceptional Support",
      description: "24/7 customer service with quick response times to keep your payment systems running smoothly."
    },
    {
      icon: Zap,
      title: "Fast Setup",
      description: "Quick installation and seamless integration with ongoing support from our dedicated team."
    },
    {
      icon: Star,
      title: "Multiple System Options",
      description: "Traditional POS systems, mobile payment solutions, and online processing - we have it all."
    }
  ];

  const businessTypes = [
    "Retail Stores",
    "Restaurants & Cafes", 
    "Convenience Stores & Gas Stations",
    "Hotels & Motels",
    "Bars & Nightclubs",
    "Tattoo Parlors, Barber Shops, and Salons",
    "E-commerce Businesses",
    "Professional Services"
  ];

  const paymentSolutions = [
    {
      title: "Cash Discounting",
      description: "Offer discounts to customers who pay in cash, helping you avoid processing fees while encouraging cash transactions and improving your bottom line.",
      benefits: ["Avoid card processing fees", "Encourage cash payments", "Improve profit margins", "Customer incentive program"],
      gradient: "from-green-600 to-green-700"
    },
    {
      title: "Dual Pricing",
      description: "Display two prices - one for cash payments and a higher price for card payments. Pass processing fees to cardholders without impacting cash customers.",
      benefits: ["Transparent fee structure", "Protect cash customers", "Offset processing costs", "Simple implementation"],
      gradient: "from-lime-600 to-green-600"
    },
    {
      title: "Normal Surcharging",
      description: "Add a small fee to credit card transactions to offset processing costs. A straightforward approach that doesn&apos;t affect your overall pricing structure.",
      benefits: ["Cover processing fees", "Maintain pricing structure", "Apply to all card payments", "Simple fee management"],
      gradient: "from-yellow-500 to-lime-600"
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Payment Processing Solutions</h1>
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
                Seamless Payment Processing <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600">Tailored for Your Business</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
                At Ford Frontier Investments, we understand that accepting payments seamlessly is crucial to your business&apos;s success. We provide secure, reliable payment processing services tailored to meet the unique needs of your business, whatever its size or industry.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 border border-blue-100">
                <p className="text-lg text-gray-700 font-medium">
                  <span className="font-bold text-green-700">Powered by Rate Tracker</span> - Our trusted partner ensures transparent fees and reliable service with no surprises, no hidden costs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Features section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our Payment Processing?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Business types section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-3xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold text-center mb-8">We Serve All Types of Businesses</h2>
              <p className="text-xl text-green-100 text-center mb-8 max-w-3xl mx-auto">
                Whether you&apos;re a small local shop or a large enterprise, we&apos;ll ensure you have the tools needed to accept payments securely and efficiently.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {businessTypes.map((business, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                    <span className="text-green-100">{business}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Payment solutions section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Payment Solutions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {paymentSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-green-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-full h-2 bg-gradient-to-r ${solution.gradient} rounded-full mb-6`}></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-700 mb-6">{solution.description}</p>
                  <div className="space-y-3">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why choose us section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-green-100 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Businesses Choose FFI</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Headphones className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Service is Key</h3>
                  <p className="text-gray-700">Our team is always available to support you with quick, efficient responses to keep your systems running smoothly.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-lime-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-lime-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Multiple System Options</h3>
                  <p className="text-gray-700">Unlike large processors, we offer various systems including traditional POS, mobile solutions, and online processing.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-yellow-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Setup & Support</h3>
                  <p className="text-gray-700">Quick installation with seamless integration and 24/7 support to address any issues immediately.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-3xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Payment Processing?</h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Choose the right payment processing solution that can make a world of difference for your business. With our transparent pricing and customer-first approach, there&apos;s no reason not to choose us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-green-800 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  Get Free Quote
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-center"
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