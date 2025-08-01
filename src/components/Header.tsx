'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import MobileMenu from '@/components/MobileMenu';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Far Left */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
              <Image 
                src="/logo.png" 
                alt="Ford Frontier Investments" 
                width={32} 
                height={32} 
                className="w-8 h-8"
              />
              <span className="text-xl font-semibold text-gray-900 whitespace-nowrap">
                Ford Frontier Investments
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/#services" 
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium whitespace-nowrap flex items-center"
            >
              Services
            </Link>
            <Link 
              href="/payment-processing" 
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium whitespace-nowrap flex items-center"
            >
              Payments
            </Link>
            <Link 
              href="/partnership" 
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium whitespace-nowrap flex items-center"
            >
              Partnership
            </Link>
            <Link 
              href="/service-areas" 
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium whitespace-nowrap flex items-center"
            >
              Areas
            </Link>
            <Link 
              href="/locations" 
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium whitespace-nowrap flex items-center"
            >
              Locations
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium whitespace-nowrap flex items-center"
            >
              Contact
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Phone */}
            <a 
              href="tel:+14047473899" 
              className="hidden md:flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">404-747-3899</span>
            </a>

            {/* CTA Button */}
            <Link
              href="#contact-form"
              className="hidden sm:inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
            >
              Get Quote
            </Link>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </motion.header>
  );
} 