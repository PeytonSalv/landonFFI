'use client';

import { motion } from 'framer-motion';
import { MapPin, Star, CheckCircle, Phone, Mail, Clock, Users, TrendingUp, Sun, Landmark, Music } from 'lucide-react';
import Header from '@/components/Header';

export default function ServiceAreasPage() {
  const primaryState = {
    name: "Alabama",
    tagline: "Our Primary Service Area",
    description: "Alabama is our home base and primary focus area. We provide comprehensive ATM services, partnership programs, and payment processing solutions throughout the Heart of Dixie.",
    cities: [
      "Birmingham", "Montgomery", "Huntsville", "Mobile", "Tuscaloosa", 
      "Hoover", "Dothan", "Auburn", "Decatur", "Madison", "Florence", "Gadsden"
    ],
    highlights: [
      "24/7 local support and maintenance",
      "Fastest response times in the state",
      "Deep understanding of local business needs",
      "Established relationships with local banks",
      "Coverage in all major cities and rural areas"
    ]
  };

  const otherStates = [
    {
      name: "Florida",
      description: "Expanding our proven ATM solutions to the Sunshine State with reliable service and local support.",
      icon: Sun,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100",
      coverage: "Major metropolitan areas"
    },
    {
      name: "Mississippi", 
      description: "Bringing our trusted ATM services to businesses across the Magnolia State.",
      icon: Landmark,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      coverage: "Statewide coverage"
    },
    {
      name: "Tennessee",
      description: "Serving the Volunteer State with comprehensive ATM and payment processing solutions.",
      icon: Music,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      coverage: "Nashville, Memphis, and surrounding areas"
    }
  ];

  const serviceStats = [
    {
      icon: MapPin,
      number: "500+",
      label: "ATM Locations",
      description: "Across all service areas"
    },
    {
      icon: Users,
      number: "1000+",
      label: "Business Partners",
      description: "Trusting our services"
    },
    {
      icon: TrendingUp,
      number: "99.9%",
      label: "Uptime Rate",
      description: "Reliable service guarantee"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support Available",
      description: "When you need us most"
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Areas We Service</h1>
            <p className="text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
              Providing reliable ATM services, partnership programs, and payment processing solutions across the Southeast
            </p>
          </motion.div>

          {/* Alabama - Primary Focus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-yellow-300 mr-3" />
                  <span className="text-2xl font-bold text-yellow-300">{primaryState.tagline}</span>
                  <Star className="w-8 h-8 text-yellow-300 ml-3" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">{primaryState.name} ATM Services</h2>
                <p className="text-xl text-green-100 text-center mb-8 max-w-3xl mx-auto">
                  {primaryState.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Cities Served */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <MapPin className="w-6 h-6 mr-2" />
                      Major Cities Served
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {primaryState.cities.map((city, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-300 flex-shrink-0" />
                          <span className="text-green-100">{city}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <Star className="w-6 h-6 mr-2" />
                      Why Choose Us in Alabama
                    </h3>
                    <div className="space-y-3">
                      {primaryState.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                          <span className="text-green-100">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other States */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Additional Service Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherStates.map((state, index) => (
                                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                   className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-green-100 shadow-sm hover:shadow-md transition-all duration-300"
                 >
                   <div className="text-center mb-6">
                     <div className={`w-20 h-20 ${state.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                       <state.icon className={`w-10 h-10 ${state.iconColor}`} />
                     </div>
                     <h3 className="text-2xl font-bold text-gray-900 mb-2">{state.name} ATM Services</h3>
                     <p className="text-gray-700 mb-4">{state.description}</p>
                     <div className="bg-gradient-to-r from-green-50 to-lime-50 rounded-lg p-3 border border-green-100">
                       <span className="text-sm font-medium text-green-700">{state.coverage}</span>
                     </div>
                   </div>
                 </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Service Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-green-100 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Service Excellence</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {serviceStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-green-700" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-3xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started in Your Area?</h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Whether you&apos;re in Alabama, Florida, Mississippi, or Tennessee, we&apos;re here to provide exceptional ATM services for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-green-800 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  Get Free Consultation
                </motion.a>
                <motion.a
                  href="/#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-center"
                >
                  View Our Services
                </motion.a>
              </div>
              
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-green-100">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>info@fordfrontier.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 