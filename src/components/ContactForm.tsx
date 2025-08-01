'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, Building, CheckCircle, Star } from 'lucide-react';
import Image from 'next/image';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email subject and body
    const subject = encodeURIComponent('ATM Service Inquiry - ' + (formData.business || formData.name));
    const body = encodeURIComponent(`
New ATM Service Inquiry:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Business: ${formData.business || 'Not provided'}

Message:
${formData.message || 'No additional message provided'}

---
This inquiry was submitted through the Ford Frontier Investments website contact form.
    `.trim());
    
    // Create mailto link
    const mailtoLink = `mailto:Landon@fordfrontierinvestments.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const benefitItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-white rounded-3xl shadow-2xl overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Left Side - Image & Content */}
        <div className="relative bg-gradient-to-br from-green-600 to-green-700 p-8 lg:p-12 flex flex-col justify-center">
          {/* Background Image with subtle animation */}
          <motion.div 
            className="absolute inset-0 opacity-30"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src="/contact.jpeg"
              alt="ATM Service"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-700/90"></div>
          
          {/* Floating background elements */}
          <motion.div
            className="absolute top-10 right-10 w-4 h-4 bg-green-300 rounded-full opacity-20"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-3 h-3 bg-lime-300 rounded-full opacity-30"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -360, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 text-white">
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Get Your 
                <span className="block text-green-200">FREE ATM Quote</span>
              </h2>
            </motion.div>
            
            <motion.p 
              variants={itemVariants} 
              className="text-xl text-green-100 mb-8 leading-relaxed"
            >
              Ready to boost your business with a premium ATM solution? Our experts will contact you within 24 hours with a personalized quote.
            </motion.p>
            
            <motion.div variants={itemVariants} className="space-y-4">
              {[
                "100% FREE consultation & quote",
                "No upfront costs or hidden fees", 
                "Licensed & insured ATM provider"
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  variants={benefitItemVariants}
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                  className="flex items-center space-x-3 cursor-default"
                >
                  <motion.div 
                    className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      backgroundColor: "#86efac"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-700" />
                  </motion.div>
                  <span className="text-green-100">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 0.8 + (i * 0.1),
                      duration: 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360
                    }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>
              <motion.span 
                className="text-green-100 font-medium"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Trusted by businesses across the US
              </motion.span>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 lg:p-12 bg-gray-50">
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <motion.div 
                  className="relative group"
                  whileFocus={{ scale: 1.02 }}
                >
                  <motion.div
                    className="absolute left-3 top-3"
                    animate={{ 
                      rotate: formData.name ? 360 : 0,
                      scale: formData.name ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <User className="w-5 h-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                  </motion.div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white hover:border-green-300 hover:shadow-md"
                    placeholder="Enter your full name"
                  />
                </motion.div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <motion.div 
                  className="relative group"
                  whileFocus={{ scale: 1.02 }}
                >
                  <motion.div
                    className="absolute left-3 top-3"
                    animate={{ 
                      rotate: formData.email ? 360 : 0,
                      scale: formData.email ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Mail className="w-5 h-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                  </motion.div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white hover:border-green-300 hover:shadow-md"
                    placeholder="Enter your email"
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <motion.div 
                  className="relative group"
                  whileFocus={{ scale: 1.02 }}
                >
                  <motion.div
                    className="absolute left-3 top-3"
                    animate={{ 
                      rotate: formData.phone ? 360 : 0,
                      scale: formData.phone ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Phone className="w-5 h-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                  </motion.div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white hover:border-green-300 hover:shadow-md"
                    placeholder="Enter your phone number"
                  />
                </motion.div>
              </div>

              <div>
                <label htmlFor="business" className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Name
                </label>
                <motion.div 
                  className="relative group"
                  whileFocus={{ scale: 1.02 }}
                >
                  <motion.div
                    className="absolute left-3 top-3"
                    animate={{ 
                      rotate: formData.business ? 360 : 0,
                      scale: formData.business ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Building className="w-5 h-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                  </motion.div>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white hover:border-green-300 hover:shadow-md"
                    placeholder="Enter your business name"
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Tell us about your business and ATM needs
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white resize-none hover:border-green-300 hover:shadow-md"
                placeholder="Describe your business type, location, and any specific requirements..."
                whileFocus={{ scale: 1.01 }}
              />
            </motion.div>

            <motion.button
              variants={itemVariants}
              type="submit"
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="relative z-10"
              >
                <Send className="w-5 h-5" />
              </motion.div>
              <span className="relative z-10">Get My FREE ATM Quote</span>
            </motion.button>

            <motion.p variants={itemVariants} className="text-sm text-gray-600 text-center">
              * Required fields. We respect your privacy and will never share your information.
            </motion.p>
          </form>
        </div>
      </div>
    </motion.div>
  );
} 