import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Let's discuss how AI can help your small business or startup compete and grow in today's market
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900/60 rounded-xl p-8 border border-purple-600/40 backdrop-blur-sm shadow-xl">
            <h3 className="text-2xl font-semibold text-white mb-6">Get Your Free Consultation</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-200 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-gray-700/60 border border-purple-500/50 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-200 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-gray-700/60 border border-purple-500/50 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-300"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700/60 border border-purple-500/50 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-300"
                  placeholder="john@yourcompany.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-200 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 bg-gray-700/60 border border-purple-500/50 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-300"
                  placeholder="Your Business Name"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                  Tell Us About Your Goals
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700/60 border border-purple-500/50 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-300"
                  placeholder="What challenges are you facing? How can AI help your business grow?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-purple-500/30"
              >
                Get Free Consultation
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900/60 rounded-xl p-8 border border-purple-600/40 backdrop-blur-sm shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Talk About Your Future</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-purple-300 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-white">Email Us</h4>
                    <p className="text-gray-200">hello@moonight.ai</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-purple-300 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-white">Call Us</h4>
                    <p className="text-gray-200">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-purple-300 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-white">Visit Us</h4>
                    <p className="text-gray-200">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/60 to-purple-700/60 rounded-xl p-8 text-white border border-purple-500/40 shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Free AI Readiness Assessment</h3>
              <p className="mb-6 text-gray-100">
                Discover how ready your business is for AI and get a personalized roadmap for implementation.
              </p>
              <div className="text-3xl font-bold mb-2">100% Free</div>
              <div className="text-sm text-gray-200">30-minute consultation call</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}