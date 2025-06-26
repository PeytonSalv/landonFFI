'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Send, User, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email subject and body
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const subject = encodeURIComponent(`Contact Form Submission - ${fullName}`);
    const body = encodeURIComponent(`
New Contact Form Submission:

Name: ${fullName}
Email: ${formData.email}

Message:
${formData.message}

---
This message was submitted through the Ford Frontier Investments contact page.
    `.trim());
    
    // Create mailto link
    const mailtoLink = `mailto:Landon@fordfrontierinvestments.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

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
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We&apos;d love to hear from you! Whether you have questions about our ATM placement services, payment processing solutions, or partnership opportunities, feel free to reach out.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-green-100 shadow-sm">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-green-50 to-lime-50 rounded-2xl border border-green-100">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                      <a 
                        href="mailto:Landon@fordfrontierinvestments.com" 
                        className="text-green-700 hover:text-green-800 transition-colors"
                      >
                        Landon@fordfrontierinvestments.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-lime-50 to-yellow-50 rounded-2xl border border-lime-100">
                    <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-lime-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                      <a 
                        href="tel:+14047473899" 
                        className="text-lime-700 hover:text-lime-800 transition-colors text-xl font-medium"
                      >
                        (404) 747-3899
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Hours or Additional Info */}
                <div className="mt-8 p-6 bg-gradient-to-r from-green-700 to-green-800 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-3">Why Contact Us?</h3>
                  <ul className="space-y-2 text-green-100">
                    <li>• Free consultation and quotes</li>
                    <li>• Quick response within 24 hours</li>
                    <li>• Custom solutions for your business</li>
                    <li>• No obligation - just honest advice</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-green-100 shadow-sm">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Send Us a Message</h2>
                <p className="text-gray-700 text-center mb-8">
                  Fill out the form below, and we&apos;ll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your first name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell us about your business and how we can help..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>SEND MESSAGE</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Additional CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-3xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses already benefiting from our ATM and payment processing services across Alabama, Florida, Mississippi, and Tennessee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tel:+14047473899"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-green-800 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now: (404) 747-3899</span>
                </motion.a>
                <motion.a
                  href="mailto:Landon@fordfrontierinvestments.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 