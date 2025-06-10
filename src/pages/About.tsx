import React from 'react';
import { Award, Users, Globe, Zap, Target, TrendingUp, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Empowering Small Business Success
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Moonight AI specializes in making advanced AI technology accessible to small businesses and startups. 
                We believe every growing company deserves the competitive advantages that AI can provide.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/30"
              >
                Work With Us
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl border border-purple-200 shadow-lg">
                <div className="text-3xl font-bold text-purple-700 mb-2">5+</div>
                <div className="text-gray-600 font-medium">Years Helping SMBs</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl border border-purple-200 shadow-lg">
                <div className="text-3xl font-bold text-purple-700 mb-2">200+</div>
                <div className="text-gray-600 font-medium">Businesses Transformed</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl border border-purple-200 shadow-lg">
                <div className="text-3xl font-bold text-purple-700 mb-2">15+</div>
                <div className="text-gray-600 font-medium">AI Specialists</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl border border-purple-200 shadow-lg">
                <div className="text-3xl font-bold text-purple-700 mb-2">98%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Founded in 2019, Moonight AI was born from a simple observation: while large corporations were rapidly 
              adopting AI to gain competitive advantages, small businesses were being left behind due to complexity, 
              cost, and lack of accessible solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our founders, having worked with both Fortune 500 companies and small startups, recognized the gap and 
              set out to democratize AI technology. Today, we're proud to have helped hundreds of small businesses 
              and startups leverage AI to compete with industry giants and achieve sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'We deliver high-quality solutions that exceed expectations and drive real business results.'
              },
              {
                icon: Users,
                title: 'Partnership',
                description: 'We work alongside our clients as true partners, invested in their long-term success.'
              },
              {
                icon: Globe,
                title: 'Accessibility',
                description: 'We make advanced AI technology accessible and affordable for businesses of all sizes.'
              },
              {
                icon: Zap,
                title: 'Innovation',
                description: 'We stay at the forefront of AI technology to bring cutting-edge solutions to our clients.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Small Businesses Trust Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges of small businesses and have designed our approach specifically for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: Target,
                title: 'Small Business Focus',
                description: 'Unlike large consulting firms, we specialize exclusively in small businesses and startups. We understand your constraints, challenges, and opportunities.',
                benefits: [
                  'Tailored solutions for small business budgets',
                  'Quick implementation timelines',
                  'Flexible engagement models',
                  'Personal attention from senior consultants'
                ]
              },
              {
                icon: TrendingUp,
                title: 'Proven Results',
                description: 'Our track record speaks for itself. We\'ve helped hundreds of businesses achieve measurable improvements in efficiency, growth, and profitability.',
                benefits: [
                  'Average 3x growth increase',
                  '40% reduction in operational costs',
                  '80% improvement in response times',
                  '90% client satisfaction rate'
                ]
              },
              {
                icon: Shield,
                title: 'Risk-Free Approach',
                description: 'We believe in our solutions so much that we offer guarantees and work with you to ensure success before requiring full investment.',
                benefits: [
                  'Free initial consultation and assessment',
                  'Pilot programs to prove value',
                  'Flexible payment terms',
                  'Ongoing support and optimization'
                ]
              },
              {
                icon: Clock,
                title: 'Fast Implementation',
                description: 'We know small businesses need results quickly. Our streamlined processes and pre-built solutions mean you see value in weeks, not months.',
                benefits: [
                  'Results visible within 30 days',
                  'Minimal disruption to operations',
                  'Comprehensive training included',
                  'Ongoing support and maintenance'
                ]
              }
            ].map((reason, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mr-4">
                    <reason.icon className="w-6 h-6 text-purple-700" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{reason.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{reason.description}</p>
                <ul className="space-y-2">
                  {reason.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'CEO & Co-Founder',
                background: 'Former McKinsey consultant with 10+ years helping businesses scale with technology',
                expertise: 'AI Strategy, Business Transformation'
              },
              {
                name: 'Michael Rodriguez',
                role: 'CTO & Co-Founder',
                background: 'Ex-Google AI engineer with expertise in machine learning and automation systems',
                expertise: 'AI Implementation, Technical Architecture'
              },
              {
                name: 'Emily Watson',
                role: 'Head of Client Success',
                background: 'Small business owner turned consultant, understands the challenges firsthand',
                expertise: 'Client Relations, Change Management'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.background}</p>
                <p className="text-purple-700 text-sm font-medium">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help your business leverage AI for competitive advantage and sustainable growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Schedule Free Consultation
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-700 transition-all duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}