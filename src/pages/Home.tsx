import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Clock, Users, Target, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-purple-50 to-white">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23A855F7%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-purple-100 border border-purple-200 rounded-full text-purple-700 text-sm font-medium mb-8 shadow-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Future-Proof Your Business
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              AI Solutions for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800">
                Growing Businesses
              </span>
            </h1>

            {/* Marketing slogan */}
            <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-purple-700 mb-8 tracking-wide">
              FUTURE-PROOF YOUR BUSINESS
            </div>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Empower your small business or startup with accessible AI solutions. We help emerging companies 
              compete with industry leaders through smart automation and data-driven growth strategies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                to="/contact"
                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30 text-lg"
              >
                Start Your AI Journey
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-10 py-5 border-2 border-purple-300 hover:border-purple-400 text-purple-700 font-semibold rounded-xl transition-all duration-300 hover:bg-purple-50 text-lg shadow-sm"
              >
                See How We Help
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white/60 rounded-2xl border border-purple-200 backdrop-blur-sm shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <div className="text-4xl font-bold text-purple-700 mb-3">200+</div>
                <div className="text-gray-600 font-medium text-lg">Small Businesses Transformed</div>
              </div>
              <div className="text-center p-8 bg-white/60 rounded-2xl border border-purple-200 backdrop-blur-sm shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <div className="text-4xl font-bold text-purple-700 mb-3">3x</div>
                <div className="text-gray-600 font-medium text-lg">Average Growth Increase</div>
              </div>
              <div className="text-center p-8 bg-white/60 rounded-2xl border border-purple-200 backdrop-blur-sm shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <div className="text-4xl font-bold text-purple-700 mb-3">30 Days</div>
                <div className="text-gray-600 font-medium text-lg">To See Results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Benefits Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Small Businesses Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results that help growing businesses compete and thrive in an AI-driven world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Accelerated Growth',
                description: 'AI-powered insights help you identify new opportunities and optimize your business.',
                metric: '3x Faster Growth'
              },
              {
                icon: Clock,
                title: 'Time Savings',
                description: 'Automate routine tasks and streamline operations for maximum efficiency.',
                metric: '20+ Hours Saved Weekly'
              },
              {
                icon: Users,
                title: 'Better Customer Experience',
                description: 'Provide 24/7 support and personalized experiences that keep customers coming back.',
                metric: '90% Customer Satisfaction'
              },
              {
                icon: Target,
                title: 'Competitive Edge',
                description: 'Stay ahead with AI tools that were once only available to large corporations.',
                metric: 'Future-Ready Business'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-purple-700 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                <div className="text-sm font-medium text-purple-700">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical AI tools designed for small businesses ready to compete in tomorrow's market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'AI Implementation',
                description: 'Simple AI tools and chatbots that automate customer service and streamline operations.',
                features: ['Customer Service Bots', 'Lead Qualification', 'Content Generation']
              },
              {
                title: 'Business Automation',
                description: 'Automate repetitive tasks and workflows to save time and reduce costs.',
                features: ['Email Marketing', 'Invoice Processing', 'Appointment Scheduling']
              },
              {
                title: 'Growth Analytics',
                description: 'Easy-to-understand dashboards that show what\'s working in your business.',
                features: ['Sales Performance', 'Customer Insights', 'Marketing ROI']
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-purple-500/10">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/30"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Future-Proof Your Business?</h3>
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Join hundreds of small businesses and startups that have transformed their operations with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-700 transition-all duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Your Free AI Consultation
            </h2>
            <p className="text-lg text-gray-600">
              Let's discuss how AI can transform your business operations and drive growth
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Doe"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  placeholder="john@yourcompany.com"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your Business Name"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell Us About Your Goals
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  placeholder="What challenges are you facing? How can AI help your business grow?"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/30"
                >
                  Get Free Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}