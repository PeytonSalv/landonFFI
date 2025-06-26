'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from '@/components/MobileMenu';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 px-4 py-6 shadow-sm"
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <Image 
            src="/logo.png" 
            alt="Ford Frontier Investments Logo" 
            width={40} 
            height={40} 
            className="w-10 h-10 object-contain"
          />
          <span className="text-2xl font-bold text-gray-900">Ford Frontier Investments</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/#services" className="text-gray-700 hover:text-green-700 transition-colors">Services</Link>
          <Link href="/partnership" className="text-gray-700 hover:text-green-700 transition-colors">Partnership</Link>
          <Link href="/payment-processing" className="text-gray-700 hover:text-green-700 transition-colors">Payment Processing</Link>
          <Link href="/service-areas" className="text-gray-700 hover:text-green-700 transition-colors">Service Areas</Link>
          <Link href="/locations" className="text-gray-700 hover:text-green-700 transition-colors">Locations</Link>
          <Link href="/contact" className="text-gray-700 hover:text-green-700 transition-colors">Contact</Link>
        </div>
        <MobileMenu />
      </nav>
    </motion.header>
  );
} 