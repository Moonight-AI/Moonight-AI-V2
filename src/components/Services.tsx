import React from 'react';
import { Bot, Database, Gauge, BarChart3, Cog, DollarSign } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Implementation',
    description: 'Simple AI tools and chatbots that help small businesses automate customer service and streamline operations.',
    features: ['Customer Service Bots', 'Lead Qualification', 'Content Generation', 'Smart Recommendations']
  },
  {
    icon: Database,
    title: 'Data Organization',
    description: 'Transform scattered business data into organized systems that provide clear insights for better decision-making.',
    features: ['Customer Data Management', 'Sales Tracking', 'Inventory Systems', 'Performance Metrics']
  },
  {
    icon: Gauge,
    title: 'Business Automation',
    description: 'Automate repetitive tasks and workflows to save time and reduce costs, letting you focus on growing your business.',
    features: ['Email Marketing Automation', 'Invoice Processing', 'Appointment Scheduling', 'Social Media Management']
  },
  {
    icon: BarChart3,
    title: 'Growth Analytics',
    description: 'Easy-to-understand dashboards that show what\'s working in your business and where opportunities lie.',
    features: ['Sales Performance', 'Customer Insights', 'Marketing ROI', 'Growth Forecasting']
  },
  {
    icon: Cog,
    title: 'AI Strategy Planning',
    description: 'Practical roadmaps for implementing AI in your business, designed specifically for small business budgets and needs.',
    features: ['Technology Assessment', 'Implementation Planning', 'Budget Optimization', 'Training & Support']
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective Solutions',
    description: 'Affordable AI solutions that deliver real ROI, designed to scale with your business as it grows.',
    features: ['Flexible Pricing', 'Scalable Solutions', 'Quick Implementation', 'Ongoing Support']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Solutions That Fit Your Business
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Practical AI tools designed for small businesses and startups ready to compete in tomorrow's market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 rounded-xl p-8 border border-purple-600/40 hover:border-purple-400/60 transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm shadow-lg hover:shadow-purple-500/20"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-700/40 rounded-lg flex items-center justify-center group-hover:bg-purple-500 transition-colors duration-300 border border-purple-500/50 shadow-lg">
                  <service.icon className="w-6 h-6 text-purple-300 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-white ml-4">{service.title}</h3>
              </div>
              
              <p className="text-gray-200 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}