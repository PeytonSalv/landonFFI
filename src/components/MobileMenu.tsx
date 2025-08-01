'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuContent = isOpen ? (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2147483647,
      }}
    >
      {/* Backdrop */}
      <div
        onClick={toggleMenu}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(4px)',
        }}
      />

      {/* Menu panel */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '300px',
          maxWidth: '85vw',
          backgroundColor: 'white',
          borderLeft: '1px solid #e5e7eb',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
          overflowY: 'auto',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <Image 
              src="/logo.png" 
              alt="Ford Frontier Investments" 
              width={24} 
              height={24} 
              className="w-6 h-6"
            />
            <span className="font-semibold text-gray-900">Ford Frontier Investments</span>
          </div>
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <div className="space-y-1">
            <Link
              href="/#services"
              onClick={toggleMenu}
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Services
            </Link>
            <Link
              href="/payment-processing"
              onClick={toggleMenu}
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Payment Processing
            </Link>
            <Link
              href="/partnership"
              onClick={toggleMenu}
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Partnership
            </Link>
            <Link
              href="/service-areas"
              onClick={toggleMenu}
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Service Areas
            </Link>
            <Link
              href="/locations"
              onClick={toggleMenu}
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Locations
            </Link>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Contact Info */}
        <div className="p-4 border-t border-gray-100">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-gray-500" />
              <a href="tel:+14047473899" className="text-gray-700 hover:text-gray-900 transition-colors">
                (404) 747-3899
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-gray-500" />
              <a href="mailto:Landon@fordfrontierinvestments.com" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">
                Landon@fordfrontierinvestments.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700 text-sm">AL, FL, MS, TN</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="p-4 border-t border-gray-100">
          <Link
            href="#contact-form"
            onClick={toggleMenu}
            className="w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <Menu className="w-5 h-5 text-gray-600" />
      </button>

      {/* Portal the mobile menu to document.body */}
      {mounted && typeof window !== 'undefined' && createPortal(menuContent, document.body)}
    </>
  );
} 