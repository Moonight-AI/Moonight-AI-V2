import React from 'react';
import { TrendingUp, Clock, Users, Target, DollarSign, Shield, Zap, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Accelerated Growth',
    description: 'AI-powered insights help you identify new opportunities and optimize your business for faster, sustainable growth.',
    metric: '3x Faster Growth',
    details: [
      'Identify high-value customer segments',
      'Optimize pricing strategies with data',
      'Predict market trends and opportunities',
      'Automate lead nurturing processes'
    ],
    caseStudy: 'TechStart Inc. increased their monthly recurring revenue by 300% within 6 months using our AI-powered customer segmentation and pricing optimization.'
  },
  {
    icon: Clock,
    title: 'Massive Time Savings',
    description: 'Automate routine tasks and streamline operations, giving you more time to focus on what matters most.',
    metric: '20+ Hours Saved Weekly',
    details: [
      'Automated email marketing campaigns',
      'Smart appointment scheduling',
      'Instant customer support responses',
      'Automated invoice processing'
    ],
    caseStudy: 'Local Marketing Agency reduced administrative work by 25 hours per week, allowing them to take on 40% more clients without hiring additional staff.'
  },
  {
    icon: Users,
    title: 'Superior Customer Experience',
    description: 'Provide 24/7 support and personalized experiences that keep customers coming back for more.',
    metric: '90% Customer Satisfaction',
    details: [
      '24/7 AI-powered customer support',
      'Personalized product recommendations',
      'Proactive issue resolution',
      'Consistent service quality'
    ],
    caseStudy: 'E-commerce Boutique saw customer satisfaction scores increase from 72% to 94% after implementing our AI customer service solution.'
  },
  {
    icon: Target,
    title: 'Competitive Advantage',
    description: 'Stay ahead of competitors by leveraging AI tools that were once only available to large corporations.',
    metric: 'Future-Ready Business',
    details: [
      'Advanced analytics and insights',
      'Predictive business intelligence',
      'Automated competitive monitoring',
      'Market trend analysis'
    ],
    caseStudy: 'Small Manufacturing Company gained 15% market share by using AI to optimize their supply chain and predict customer demand.'
  },
  {
    icon: DollarSign,
    title: 'Increased Revenue',
    description: 'Drive more sales through intelligent lead scoring, personalized marketing, and optimized pricing strategies.',
    metric: '40% Revenue Increase',
    details: [
      'Smart lead qualification and scoring',
      'Dynamic pricing optimization',
      'Personalized marketing campaigns',
      'Cross-sell and upsell automation'
    ],
    caseStudy: 'Professional Services Firm increased their conversion rate by 45% using AI-powered lead scoring and personalized follow-up sequences.'
  },
  {
    icon: Shield,
    title: 'Risk Reduction',
    description: 'Minimize business risks through predictive analytics, fraud detection, and automated compliance monitoring.',
    metric: '60% Risk Reduction',
    details: [
      'Fraud detection and prevention',
      'Predictive maintenance alerts',
      'Compliance monitoring',
      'Financial risk assessment'
    ],
    caseStudy: 'Financial Services Startup reduced fraudulent transactions by 80% and improved compliance reporting efficiency by 70%.'
  },
  {
    icon: Zap,
    title: 'Operational Efficiency',
    description: 'Streamline operations and eliminate bottlenecks with intelligent process automation and optimization.',
    metric: '50% Efficiency Gain',
    details: [
      'Process automation and optimization',
      'Resource allocation optimization',
      'Workflow streamlining',
      'Performance monitoring'
    ],
    caseStudy: 'Logistics Company reduced delivery times by 30% and operational costs by 25% through AI-powered route optimization.'
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Decisions',
    description: 'Make confident business decisions backed by comprehensive data analysis and predictive insights.',
    metric: '85% Better Decisions',
    details: [
      'Real-time business intelligence',
      'Predictive analytics and forecasting',
      'Performance benchmarking',
      'Trend analysis and insights'
    ],
    caseStudy: 'Retail Chain improved inventory management and reduced waste by 35% using AI-powered demand forecasting and analytics.'
  }
];

export default function Benefits() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Real Results for Growing Businesses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover how AI transforms small businesses and startups, delivering measurable improvements in growth, efficiency, and profitability
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/30"
          >
            See How We Can Help You
          </Link>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {benefits.map((benefit, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <benefit.icon className="w-8 h-8 text-purple-700" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{benefit.title}</h2>
                      <p className="text-purple-600 font-bold text-lg">{benefit.metric}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{benefit.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Improvements:</h3>
                    <ul className="space-y-3">
                      {benefit.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`bg-gray-50 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Success Story</h3>
                  <p className="text-gray-700 leading-relaxed italic">"{benefit.caseStudy}"</p>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      Results may vary. Individual outcomes depend on business model, implementation, and market conditions.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Calculate Your Potential ROI</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how much time and money you could save with AI automation
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-700 mb-2">20+</div>
                <div className="text-gray-600">Hours Saved Per Week</div>
                <div className="text-sm text-gray-500 mt-2">Average across all clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-700 mb-2">$50K+</div>
                <div className="text-gray-600">Annual Cost Savings</div>
                <div className="text-sm text-gray-500 mt-2">Through automation & efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-700 mb-2">6 Months</div>
                <div className="text-gray-600">Average Payback Period</div>
                <div className="text-sm text-gray-500 mt-2">Return on AI investment</div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-600 mb-6">
                Ready to calculate your specific ROI? Let's discuss your business needs and create a custom projection.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/30"
              >
                Get Your Custom ROI Analysis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from small businesses that have transformed with AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Moonight AI helped us automate our customer service and increase our response rate by 300%. We're now able to handle 3x more inquiries with the same team size.",
                author: "Jennifer Martinez",
                company: "GrowthTech Solutions",
                role: "CEO"
              },
              {
                quote: "The AI-powered analytics dashboard gave us insights we never had before. We identified new revenue opportunities worth $200K in our first quarter.",
                author: "David Chen",
                company: "Urban Retail Co.",
                role: "Founder"
              },
              {
                quote: "Implementation was seamless and results were immediate. We saw a 40% reduction in operational costs within the first month of using their automation tools.",
                author: "Sarah Thompson",
                company: "ServicePro Inc.",
                role: "Operations Manager"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="border-t border-gray-200 pt-6">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-purple-600">{testimonial.role}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience These Benefits?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of small businesses that have transformed their operations and achieved remarkable growth with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Transformation
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-700 transition-all duration-200"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}