'use client';

import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Store, Coffee, Fuel, Car } from 'lucide-react';
import Header from '@/components/Header';

export default function LocationsPage() {
  const locations = [
    {
      type: 'Convenience Store',
      icon: Store,
      revenue: '$2,400/month',
      transactions: '800/month',
      description: 'High-traffic convenience stores are perfect for ATM placement',
      gradient: 'from-green-600 to-green-700'
    },
    {
      type: 'Coffee Shop',
      icon: Coffee,
      revenue: '$1,800/month',
      transactions: '600/month',
      description: 'Busy coffee shops attract customers who need quick cash access',
      gradient: 'from-lime-600 to-green-600'
    },
    {
      type: 'Gas Station',
      icon: Fuel,
      revenue: '$3,200/month',
      transactions: '1,000/month',
      description: '24/7 gas stations provide consistent ATM usage around the clock',
      gradient: 'from-yellow-500 to-lime-600'
    },
    {
      type: 'Auto Shop',
      icon: Car,
      revenue: '$1,500/month',
      transactions: '500/month',
      description: 'Auto repair shops often deal in cash payments for services',
      gradient: 'from-green-700 to-lime-600'
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Prime ATM Locations</h1>
          </motion.div>

          {/* Hero section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-green-100 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Strategic ATM Placement for <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600">Maximum Revenue</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our data-driven approach helps identify the most profitable locations for ATM placement. 
                See real examples of successful installations and their monthly performance metrics.
              </p>
            </div>
          </motion.div>

          {/* Location cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-green-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${location.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <location.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{location.type}</h3>
                    <p className="text-gray-700">{location.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-lime-50 rounded-xl border border-green-100">
                    <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{location.revenue}</div>
                    <div className="text-sm text-gray-600">Monthly Revenue</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-lime-50 to-yellow-50 rounded-xl border border-lime-100">
                    <TrendingUp className="w-8 h-8 text-lime-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{location.transactions}</div>
                    <div className="text-sm text-gray-600">Transactions</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-3xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Location?</h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Our location analysis team will help you identify the best spots for ATM placement in your area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-green-800 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  Schedule Site Analysis
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-center"
                >
                  View Revenue Calculator
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 