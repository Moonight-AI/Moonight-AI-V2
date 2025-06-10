import React from 'react';
import { TrendingUp, Clock, Users, Target } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Accelerated Growth',
    description: 'AI-powered insights help you identify new opportunities and optimize your business for faster, sustainable growth.',
    metric: '3x Faster Growth'
  },
  {
    icon: Clock,
    title: 'Time Savings',
    description: 'Automate routine tasks and streamline operations, giving you more time to focus on what matters most.',
    metric: '20+ Hours Saved Weekly'
  },
  {
    icon: Users,
    title: 'Better Customer Experience',
    description: 'Provide 24/7 support and personalized experiences that keep customers coming back for more.',
    metric: '90% Customer Satisfaction'
  },
  {
    icon: Target,
    title: 'Competitive Edge',
    description: 'Stay ahead of competitors by leveraging AI tools that were once only available to large corporations.',
    metric: 'Future-Ready Business'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Small Businesses Choose Us
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Real results that help growing businesses compete and thrive in an AI-driven world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600/60 to-purple-700/60 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-purple-500 group-hover:to-purple-600 transition-all duration-300 border border-purple-500/50 shadow-lg">
                <benefit.icon className="w-8 h-8 text-purple-200 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-200 mb-4 leading-relaxed">{benefit.description}</p>
              <div className="text-sm font-medium text-purple-300">{benefit.metric}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-700/60 to-purple-600/60 rounded-2xl p-8 md:p-12 text-center text-white border border-purple-500/40 backdrop-blur-sm shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Future-Proof Your Business?</h3>
          <p className="text-xl mb-8 text-gray-100">
            Join hundreds of small businesses and startups that have transformed their operations with AI
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}