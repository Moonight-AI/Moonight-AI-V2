import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23A855F7%22 fill-opacity=%220.08%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-purple-800/40 border border-purple-400/40 rounded-full text-purple-200 text-sm font-medium mb-8 backdrop-blur-sm shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            Future-Proof Your Business
          </div>

          {/* Main heading - Made much larger and more prominent */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-tight tracking-tight">
            AI Solutions for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-200 to-purple-400 drop-shadow-lg">
              Growing Businesses
            </span>
          </h1>

          {/* Marketing slogan - Made more prominent */}
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-200 mb-8 tracking-wide">
            FUTURE-PROOF YOUR BUSINESS
          </div>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Empower your small business or startup with accessible AI solutions. We help emerging companies 
            compete with industry leaders through smart automation and data-driven growth strategies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="#contact"
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/30 text-lg"
            >
              Start Your AI Journey
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-10 py-5 border-2 border-purple-400/60 hover:border-purple-300 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-purple-800/30 backdrop-blur-sm text-lg shadow-lg"
            >
              See How We Help
            </a>
          </div>

          {/* Stats - Made brighter and more prominent */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-800/40 rounded-2xl border border-purple-600/40 backdrop-blur-sm shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
              <div className="text-4xl font-bold text-purple-300 mb-3">200+</div>
              <div className="text-gray-200 font-medium text-lg">Small Businesses Transformed</div>
            </div>
            <div className="text-center p-8 bg-gray-800/40 rounded-2xl border border-purple-600/40 backdrop-blur-sm shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
              <div className="text-4xl font-bold text-purple-300 mb-3">3x</div>
              <div className="text-gray-200 font-medium text-lg">Average Growth Increase</div>
            </div>
            <div className="text-center p-8 bg-gray-800/40 rounded-2xl border border-purple-600/40 backdrop-blur-sm shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
              <div className="text-4xl font-bold text-purple-300 mb-3">30 Days</div>
              <div className="text-gray-200 font-medium text-lg">To See Results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}