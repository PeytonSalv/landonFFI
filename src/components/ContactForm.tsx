'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, Building } from 'lucide-react';

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-green-100 shadow-sm"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Get Your FREE ATM Quote
        </h3>
        <p className="text-gray-700">
          Fill out the form below and we'll contact you within 24 hours
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 bg-white"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 bg-white"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 bg-white"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div>
            <label htmlFor="business" className="block text-sm font-semibold text-gray-700 mb-2">
              Business Name
            </label>
            <div className="relative">
              <Building className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
              <input
                type="text"
                id="business"
                name="business"
                value={formData.business}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 bg-white"
                placeholder="Enter your business name"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Tell us about your business and ATM needs
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 bg-white resize-none"
            placeholder="Describe your business type, location, and any specific requirements..."
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <Send className="w-5 h-5" />
          <span>Get My FREE ATM Quote</span>
        </motion.button>

        <p className="text-sm text-gray-600 text-center">
          * Required fields. We respect your privacy and will never share your information.
        </p>
      </form>
    </motion.div>
  );
} 