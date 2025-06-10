import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Logo size="md" />
              <span className="text-2xl font-bold">Moonight AI</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Helping small businesses and startups become future-ready with accessible AI solutions 
              that drive growth and competitive advantage.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2 text-purple-400" />
                contact@moonight.ai
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                Vancouver, BC, Canada
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">AI Implementation</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Data Organization</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Business Automation</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Growth Analytics</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">AI Strategy</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/benefits" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Benefits</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Contact</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Success Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Resources</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 Moonight AI. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}