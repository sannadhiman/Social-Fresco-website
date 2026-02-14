import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CMO',
    company: 'TechFlow',
    content: "Social Fresco completely transformed our digital presence. Their strategy is data-driven yet incredibly creative. We saw a 200% increase in engagement within 3 months.",
    avatarUrl: 'https://picsum.photos/id/64/100/100',
    rating: 5,
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Founder',
    company: 'GreenEats',
    content: "The team is responsive, professional, and full of fresh ideas. They don't just post content; they build communities. Highly recommended for any brand looking to scale.",
    avatarUrl: 'https://picsum.photos/id/91/100/100',
    rating: 5,
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Director',
    company: 'ArtSpace',
    content: "I was hesitant about outsourcing our social media, but Social Fresco felt like an extension of our internal team. The visuals they produce are simply stunning.",
    avatarUrl: 'https://picsum.photos/id/129/100/100',
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-28 md:py-36 bg-fresco-cream relative overflow-hidden border-t border-gray-200" aria-labelledby="testimonials-heading">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-fresco-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-fresco-yellow/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <p className="text-xs font-heading font-bold tracking-[0.2em] text-fresco-blue uppercase mb-6 text-center">
          Testimonials
        </p>
        <div className="text-center mb-20">
            <h2 id="testimonials-heading" className="text-4xl md:text-6xl font-serif font-bold mb-4 text-gray-900">
                Reviews from <span className="font-script text-6xl md:text-7xl text-fresco-blue relative top-2">real people</span>
            </h2>
            <div className="flex items-center justify-center space-x-3 mt-8">
                <span className="font-heading font-bold text-2xl">4.9/5</span>
                <div className="flex text-fresco-yellow">
                    {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
                </div>
                <span className="text-gray-500 font-sans text-lg">Based on 300+ reviews</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col relative border border-gray-100 group">
              <Quote className="text-fresco-lightblue/30 absolute top-8 right-8 group-hover:text-fresco-blue/20 transition-colors" size={56} />
              
              <div className="flex-1">
                <p className="text-gray-600 font-sans text-lg italic mb-8 relative z-10 leading-relaxed">"{t.content}"</p>
              </div>

              <div className="flex items-center mt-6 border-t border-gray-100 pt-6">
                <img 
                  src={t.avatarUrl} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4 ring-4 ring-fresco-cream"
                />
                <div>
                  <h4 className="font-heading font-bold text-gray-900 text-base">{t.name}</h4>
                  <p className="text-sm text-fresco-blue font-heading font-semibold uppercase tracking-wide">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};