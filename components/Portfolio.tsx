import React, { useEffect, useRef, useState } from 'react';
import { PortfolioItem } from '../types';

const items: PortfolioItem[] = [
  { 
    id: '1', 
    title: 'Akiva School', 
    category: 'Education & Community', 
    description: 'The Akiva Recipe for Growth. A campaign focusing on small rituals, big meaning, and whole-child approaches.',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop' 
  },
  { 
    id: '2', 
    title: 'K-Beauty Essentials', 
    category: 'Beauty & Skincare', 
    description: 'Wake up to brighter skin. Promoting Medicube, TIRTIR, and Centella products with radiant visuals.',
    imageUrl: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1974&auto=format&fit=crop' 
  },
  { 
    id: '3', 
    title: 'Be Well Psychology', 
    category: 'Health & Wellness', 
    description: 'Building meaningful connections through empathy. Content addressing inner child healing and OCD support.',
    imageUrl: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2000&auto=format&fit=crop' 
  },
  { 
    id: '4', 
    title: 'Con fe Media', 
    category: 'B2B Marketing', 
    description: 'Maximize your online presence. Engaging B2B content that addresses marketing pain points with humor and value.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    id: '5', 
    title: 'Evoke Art Clinic', 
    category: 'Health & Supplements', 
    description: 'Educational content on Vitamin D usage and breaking stigmas around TRT for women.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop' 
  },
  { 
    id: '6', 
    title: "Gini's Beverages", 
    category: 'Food & Beverage', 
    description: 'Your cozy evening ritual. Showcasing authentic ginger wellness shots and golden milk syrups.',
    imageUrl: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop' 
  },
];

export const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="py-28 md:py-36 bg-white relative border-t border-gray-200" ref={sectionRef} aria-labelledby="portfolio-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-heading font-bold tracking-[0.2em] text-fresco-blue uppercase mb-6 text-center md:text-left">
          Work
        </p>
        {/* Header Section */}
        <div className={`mb-20 text-center md:text-left transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 id="portfolio-heading" className="text-5xl md:text-7xl font-serif font-light tracking-tight text-gray-900 mb-2 leading-none">
                Brands I've <br /> <span className="font-bold">worked on</span>
            </h2>
            <div className="h-1 w-24 bg-fresco-blue mt-6 mb-6 mx-auto md:mx-0"></div>
            <p className="text-3xl md:text-4xl text-fresco-brown font-script">
                Building Strong, Memorable Brands
            </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
           {items.map((item, index) => (
             <div 
               key={item.id} 
               className={`group cursor-pointer transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
               style={{ transitionDelay: `${200 + index * 100}ms` }}
             >
               {/* Image Container */}
               <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100 mb-6 relative shadow-sm group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-500 border border-gray-100">
                 <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                 />
                 <div className="absolute inset-0 bg-fresco-blue/0 group-hover:bg-fresco-blue/10 transition-colors duration-300 mix-blend-multiply"></div>
               </div>

               {/* Content */}
               <div className="space-y-3">
                 <span className="text-fresco-blue font-heading font-bold tracking-widest text-xs uppercase bg-blue-50 px-3 py-1.5 rounded-lg inline-block transition-all duration-300 hover:scale-105 hover:bg-fresco-blue hover:text-white hover:shadow-md">{item.category}</span>
                 <h3 className="text-3xl font-serif font-bold text-gray-900 group-hover:text-fresco-blue transition-colors">{item.title}</h3>
                 <p className="text-gray-600 leading-relaxed font-sans text-lg">{item.description}</p>
               </div>
             </div>
           ))}
        </div>
        
        <div className={`mt-20 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
             <button className="text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all px-12 py-4 rounded-full font-heading font-bold tracking-widest text-sm uppercase">
                 View All Projects
             </button>
        </div>
      </div>
    </section>
  );
};