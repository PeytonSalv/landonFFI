'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

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
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}
      />

      {/* Menu panel */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '320px',
          maxWidth: '85vw',
          backgroundColor: 'white',
          borderLeft: '1px solid #e5e7eb',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflowY: 'auto',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
          <div className="flex items-center space-x-2">
            <Image 
              src="/logo.png" 
              alt="Ford Frontier Investments Logo" 
              width={32} 
              height={32} 
              className="w-8 h-8 object-contain"
            />
            <span className="text-lg font-bold text-gray-900">Ford Frontier Investments</span>
          </div>
          <button
            onClick={toggleMenu}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-6 bg-white">
          <div className="space-y-2">
            <a
              href="/#services"
              onClick={toggleMenu}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 hover:text-green-700"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium">Services</span>
            </a>
            <a
              href="/partnership"
              onClick={toggleMenu}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 hover:text-green-700"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="font-medium">Partnership</span>
            </a>
            <a
              href="/payment-processing"
              onClick={toggleMenu}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 hover:text-green-700"
            >
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="font-medium">Payment Processing</span>
            </a>
            <a
              href="/service-areas"
              onClick={toggleMenu}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 hover:text-green-700"
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="font-medium">Service Areas</span>
            </a>
            <a
              href="/locations"
              onClick={toggleMenu}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 hover:text-green-700"
            >
              <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
              <span className="font-medium">Locations</span>
            </a>
            <a
              href="/contact"
              onClick={toggleMenu}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 hover:text-green-700"
            >
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="font-medium">Contact</span>
            </a>
          </div>
        </nav>

        {/* Contact Info */}
        <div className="p-6 border-t border-gray-200 bg-white">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Get In Touch</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-gray-700">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <a href="tel:+14047473899" className="text-sm hover:text-green-700 transition-colors">
                (404) 747-3899
              </a>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <div className="w-8 h-8 bg-gradient-to-r from-lime-600 to-green-600 rounded-lg flex items-center justify-center">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <a href="mailto:Landon@fordfrontierinvestments.com" className="text-sm hover:text-green-700 transition-colors break-all">
                Landon@fordfrontierinvestments.com
              </a>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-lime-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm">AL, FL, MS, TN</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="p-6 bg-white">
          <a
            href="/contact"
            onClick={toggleMenu}
            className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center inline-block hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/80 backdrop-blur-sm border border-green-200 shadow-sm"
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      {/* Portal the mobile menu to document.body */}
      {mounted && typeof window !== 'undefined' && createPortal(menuContent, document.body)}
    </>
  );
} 