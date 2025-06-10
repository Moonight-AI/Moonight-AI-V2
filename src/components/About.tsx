import React from 'react';
import { Award, Users, Globe, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Empowering Small Business Success
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Moonight AI specializes in making advanced AI technology accessible to small businesses and startups. 
              We believe every growing company deserves the competitive advantages that AI can provide.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our team understands the unique challenges of small businesses - limited budgets, tight timelines, 
              and the need for solutions that work immediately. That's why we've designed our services to be 
              practical, affordable, and results-driven.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-800/60 rounded-lg border border-purple-600/40 shadow-lg">
                <div className="text-3xl font-bold text-purple-300 mb-2">5+</div>
                <div className="text-gray-200 font-medium">Years Helping SMBs</div>
              </div>
              <div className="text-center p-4 bg-gray-800/60 rounded-lg border border-purple-600/40 shadow-lg">
                <div className="text-3xl font-bold text-purple-300 mb-2">15+</div>
                <div className="text-gray-200 font-medium">AI Specialists</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800/60 p-6 rounded-xl border border-purple-600/40 backdrop-blur-sm shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <Award className="w-8 h-8 text-purple-300 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-gray-200 text-sm">Track record of successful AI implementations</p>
            </div>
            <div className="bg-gray-800/60 p-6 rounded-xl border border-purple-600/40 backdrop-blur-sm shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <Users className="w-8 h-8 text-purple-300 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Personal Approach</h3>
              <p className="text-gray-200 text-sm">Dedicated support throughout your journey</p>
            </div>
            <div className="bg-gray-800/60 p-6 rounded-xl border border-purple-600/40 backdrop-blur-sm shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <Globe className="w-8 h-8 text-purple-300 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Small Business Focus</h3>
              <p className="text-gray-200 text-sm">Solutions designed for growing companies</p>
            </div>
            <div className="bg-gray-800/60 p-6 rounded-xl border border-purple-600/40 backdrop-blur-sm shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <Zap className="w-8 h-8 text-purple-300 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Quick Implementation</h3>
              <p className="text-gray-200 text-sm">See results in weeks, not months</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}