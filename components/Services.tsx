import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Zap, BarChart, PenTool, Smartphone, ArrowRight } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Brand Strategy',
    description: 'We define your voice, vision, and value proposition to carve out your unique spot in the market.',
    iconName: 'Zap',
  },
  {
    id: '2',
    title: 'Content Creation',
    description: 'High-fidelity visuals, reels, and copy that stop the scroll and engage your target audience.',
    iconName: 'PenTool',
  },
  {
    id: '3',
    title: 'Social Growth',
    description: 'Organic and paid strategies designed to scale your following and increase community engagement.',
    iconName: 'Smartphone',
  },
  {
    id: '4',
    title: 'Analytics & ROI',
    description: 'Deep dive reporting to understand what works, ensuring every dollar spent delivers returns.',
    iconName: 'BarChart',
  },
];

const IconMap = {
  Zap: Zap,
  BarChart: BarChart,
  PenTool: PenTool,
  Smartphone: Smartphone,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Intro */}
          <div>
            <div className="inline-block mb-4 px-3 py-1 rounded bg-fresco-yellow/20 text-fresco-brown font-medium text-sm">
              OUR EXPERTISE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              What we can do <br/> for you
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We take pride in delivering exceptional results. Whether you're a startup or an established enterprise, we provide quality force solutions tailored to your needs.
            </p>
            <div className="relative rounded-xl overflow-hidden shadow-xl group">
               <img 
                 src="https://picsum.photos/id/445/600/400" 
                 alt="Team working" 
                 className="w-full h-auto transform transition duration-500 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p className="text-white font-medium">"Redefining social interactions with empathy and ends with impact."</p>
               </div>
            </div>
          </div>

          {/* Right Side: Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = IconMap[service.iconName];
              return (
                <div 
                  key={service.id} 
                  className="bg-fresco-cream p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-fresco-yellow/30"
                >
                  <div className="w-12 h-12 bg-fresco-blue text-white rounded-lg flex items-center justify-center mb-6">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <a href="#contact" className="inline-flex items-center text-fresco-blue font-semibold text-sm hover:underline">
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};