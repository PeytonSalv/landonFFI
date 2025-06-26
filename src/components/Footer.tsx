import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image 
                src="/logo.png" 
                alt="Ford Frontier Investments Logo" 
                width={40} 
                height={40} 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold">Ford Frontier Investments</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Reliable, secure, and profitable ATM services for businesses of all sizes. 
              Increase foot traffic and generate passive income with our premium ATM solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <a href="tel:+14047473899" className="text-gray-300 hover:text-white transition-colors">
                  (404) 747-3899
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <a href="mailto:Landon@fordfrontierinvestments.com" className="text-gray-300 hover:text-white transition-colors">
                  Landon@fordfrontierinvestments.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Alabama, Florida, Mississippi, Tennessee</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-white transition-colors">
                  ATM Placement
                </Link>
              </li>
              <li>
                <Link href="/payment-processing" className="text-gray-300 hover:text-white transition-colors">
                  Payment Processing
                </Link>
              </li>
              <li>
                <Link href="/partnership" className="text-gray-300 hover:text-white transition-colors">
                  ATM Partnership
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-300 hover:text-white transition-colors">
                  Location Analysis
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="text-gray-300 hover:text-white transition-colors">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/partnership" className="text-gray-300 hover:text-white transition-colors">
                  Become a Partner
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ford Frontier Investments. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Powered By{' '}
              <a 
                href="https://cascadecoresolutions.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors font-medium"
              >
                Cascade Core Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 