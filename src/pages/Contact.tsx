import React from 'react';
import { Mail, MapPin, Send, Clock, CheckCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Let's discuss how AI can help your small business or startup compete and grow in today's market
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Your Free Consultation</h2>
              <p className="text-gray-600 mb-8">
                Schedule a 30-minute call to discuss your business goals and discover how AI can help you achieve them.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                    placeholder="john@yourcompany.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your Business Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                    Industry
                  </label>
                  <select
                    id="industry"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select your industry</option>
                    <option value="technology">Technology</option>
                    <option value="retail">Retail/E-commerce</option>
                    <option value="professional-services">Professional Services</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="finance">Finance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Size
                  </label>
                  <select
                    id="employees"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select company size</option>
                    <option value="1-5">1-5 employees</option>
                    <option value="6-20">6-20 employees</option>
                    <option value="21-50">21-50 employees</option>
                    <option value="51-100">51-100 employees</option>
                    <option value="100+">100+ employees</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell Us About Your Goals *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                    placeholder="What challenges are you facing? How can AI help your business grow?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-purple-500/30"
                >
                  Schedule Free Consultation
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Information & Benefits */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-purple-600 mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email Us</h4>
                      <p className="text-gray-600">contact@moonight.ai</p>
                      <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-purple-600 mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Visit Us</h4>
                      <p className="text-gray-600">Vancouver, BC, Canada</p>
                      <p className="text-sm text-gray-500 mt-1">Serving clients globally</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-purple-600 mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Business Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9 AM - 6 PM PST</p>
                      <p className="text-sm text-gray-500 mt-1">Emergency support available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Free Consultation Benefits */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What You'll Get</h3>
                <p className="text-gray-700 mb-6">
                  Your free 30-minute consultation includes:
                </p>
                <ul className="space-y-4">
                  {[
                    'AI readiness assessment for your business',
                    'Custom recommendations for your industry',
                    'ROI projections and timeline estimates',
                    'No-obligation discussion of next steps'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-white rounded-lg border border-purple-200">
                  <p className="text-center text-purple-700 font-semibold">
                    100% Free • No Commitment Required
                  </p>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">How quickly can we get started?</h4>
                    <p className="text-gray-600 text-sm">Most projects begin within 1-2 weeks of our initial consultation.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Do you work with very small businesses?</h4>
                    <p className="text-gray-600 text-sm">Yes! We specialize in businesses with 1-100 employees and have solutions for every budget.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What if AI doesn't work for my business?</h4>
                    <p className="text-gray-600 text-sm">We offer pilot programs to prove value before full implementation, ensuring AI is right for you.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Prefer a Different Approach?</h2>
            <p className="text-lg text-gray-600">Choose the method that works best for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center border border-gray-200 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email First</h3>
              <p className="text-gray-600 mb-6">
                Send us a detailed message about your needs and we'll respond with a customized proposal.
              </p>
              <a
                href="mailto:contact@moonight.ai"
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Send Email
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 text-center border border-gray-200 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Assessment</h3>
              <p className="text-gray-600 mb-6">
                Take our 5-minute AI readiness quiz to get personalized recommendations.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200">
                Start Assessment
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 text-center border border-gray-200 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Schedule Later</h3>
              <p className="text-gray-600 mb-6">
                Browse our calendar and pick a time that works perfectly for your schedule.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200">
                View Calendar
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}