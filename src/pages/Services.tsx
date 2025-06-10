import React from 'react';
import { Bot, Database, Gauge, BarChart3, Cog, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Bot,
    title: 'AI Implementation',
    description: 'Transform your customer interactions and business processes with intelligent AI solutions designed for small businesses.',
    longDescription: 'Our AI implementation services help you integrate cutting-edge artificial intelligence into your existing business operations without the complexity. We focus on practical, results-driven solutions that provide immediate value.',
    features: [
      'Custom AI Chatbots for customer service',
      'Lead qualification and scoring systems',
      'Automated content generation for marketing',
      'Smart product recommendations',
      'Voice assistants for internal operations',
      'AI-powered email responses'
    ],
    benefits: [
      '24/7 customer support availability',
      'Reduced response times by 80%',
      'Increased lead conversion rates',
      'Consistent brand messaging'
    ],
    pricing: 'Starting at $2,500/month'
  },
  {
    icon: Database,
    title: 'Data Organization & Analytics',
    description: 'Turn your scattered business data into organized, actionable insights that drive informed decision-making.',
    longDescription: 'We help small businesses organize their data chaos into structured systems that provide clear visibility into business performance, customer behavior, and growth opportunities.',
    features: [
      'Customer data management and CRM integration',
      'Sales performance tracking and reporting',
      'Inventory management systems',
      'Financial performance dashboards',
      'Marketing campaign analytics',
      'Predictive analytics for forecasting'
    ],
    benefits: [
      'Clear visibility into business metrics',
      'Data-driven decision making',
      'Improved customer retention',
      'Better inventory management'
    ],
    pricing: 'Starting at $1,800/month'
  },
  {
    icon: Gauge,
    title: 'Business Process Automation',
    description: 'Automate repetitive tasks and workflows to save time, reduce costs, and eliminate human error.',
    longDescription: 'Our automation solutions streamline your business operations by identifying and automating time-consuming manual processes, allowing your team to focus on high-value activities.',
    features: [
      'Email marketing automation sequences',
      'Invoice generation and processing',
      'Appointment scheduling and reminders',
      'Social media posting and management',
      'Document generation and approval workflows',
      'Customer onboarding automation'
    ],
    benefits: [
      'Save 20+ hours per week',
      'Reduce operational costs by 40%',
      'Eliminate human errors',
      'Improve customer experience'
    ],
    pricing: 'Starting at $1,200/month'
  },
  {
    icon: BarChart3,
    title: 'Growth Analytics & Insights',
    description: 'Get clear, actionable insights into your business performance with easy-to-understand dashboards and reports.',
    longDescription: 'We create comprehensive analytics solutions that help you understand what\'s working in your business, identify growth opportunities, and make data-driven decisions with confidence.',
    features: [
      'Real-time business performance dashboards',
      'Customer behavior analysis and segmentation',
      'Marketing ROI tracking and optimization',
      'Sales funnel analysis and improvement',
      'Competitive analysis and benchmarking',
      'Growth forecasting and planning'
    ],
    benefits: [
      'Identify new revenue opportunities',
      'Optimize marketing spend',
      'Improve customer lifetime value',
      'Make confident business decisions'
    ],
    pricing: 'Starting at $1,500/month'
  },
  {
    icon: Cog,
    title: 'AI Strategy & Consulting',
    description: 'Get expert guidance on implementing AI in your business with practical roadmaps designed for small business budgets.',
    longDescription: 'Our strategic consulting services help you navigate the AI landscape and create a practical implementation plan that aligns with your business goals and budget constraints.',
    features: [
      'AI readiness assessment and audit',
      'Custom AI strategy development',
      'Technology stack recommendations',
      'Implementation timeline and milestones',
      'Team training and change management',
      'Ongoing optimization and support'
    ],
    benefits: [
      'Clear AI implementation roadmap',
      'Avoid costly technology mistakes',
      'Maximize ROI on AI investments',
      'Stay ahead of competitors'
    ],
    pricing: 'Starting at $5,000 one-time'
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective AI Solutions',
    description: 'Affordable AI implementations that deliver real ROI, designed to scale with your business as it grows.',
    longDescription: 'We specialize in creating cost-effective AI solutions that provide immediate value while being scalable for future growth. Our approach ensures you get maximum return on your AI investment.',
    features: [
      'Flexible pricing models to fit your budget',
      'Scalable solutions that grow with you',
      'Quick implementation for faster ROI',
      'Ongoing support and optimization',
      'Integration with existing tools',
      'Performance monitoring and reporting'
    ],
    benefits: [
      'Immediate return on investment',
      'No large upfront costs',
      'Flexible scaling options',
      'Dedicated support team'
    ],
    pricing: 'Custom pricing available'
  }
];

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Solutions That Fit Your Business
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive AI services designed specifically for small businesses and startups ready to compete in tomorrow's market
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/30"
          >
            Get Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <service.icon className="w-8 h-8 text-purple-700" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                      <p className="text-purple-600 font-medium">{service.pricing}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.longDescription}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`bg-gray-50 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">What's Included:</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Let's discuss which AI solutions are right for your business and create a custom implementation plan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Schedule Free Consultation
            </Link>
            <Link
              to="/benefits"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-700 transition-all duration-200"
            >
              See Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}