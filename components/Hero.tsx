import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { WavyBackground } from './WavyBackground';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-fresco-cream" aria-label="Introduction">
      {/* Dynamic Wavy Background */}
      <WavyBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-6 px-5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-fresco-blue font-heading font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-fresco-yellow/10 hover:border-fresco-yellow hover:text-fresco-brown cursor-default">
            Creative studio
          </div>
          
          {/* Headline Section */}
          <div className="mb-8">
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight mb-6 font-serif">
                Built with intention.<br />
                <span className="text-gray-900">Grown with consistency.</span>
             </h1>
             {/* Blue Block - Updated to be a clean rounded rectangle with yellow hover glow */}
             <div className="w-full max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-fresco-blue to-blue-600 py-4 px-8 md:py-6 md:px-12 rounded-xl shadow-lg transform transition-all hover:scale-[1.01] duration-300 hover:shadow-[0_20px_40px_-10px_rgba(245,190,11,0.4)] hover:ring-2 hover:ring-fresco-yellow/50 hover:ring-offset-2 hover:ring-offset-fresco-cream">
                    <span className="text-white text-2xl md:text-3xl font-heading font-bold tracking-wide">
                        Our way of building social brands
                    </span>
                </div>
             </div>
          </div>
          
          {/* Subheadline */}
          <p className="mt-10 text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-sans font-light backdrop-blur-sm bg-fresco-cream/30 p-4 rounded-xl">
            From brand strategy to content and growth, we build social media systems that feel aligned, intentional, and sustainable.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 mb-12">
            <Link to="/contact">
              <Button variant="primary" className="h-14 px-10 text-lg font-heading tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                Talk to Us
              </Button>
            </Link>
            <Link to="/work">
              <Button variant="outline" className="h-14 px-10 text-lg font-heading tracking-wide hover:-translate-y-1 transition-all hover:border-fresco-yellow hover:text-fresco-brown hover:bg-fresco-yellow/10">
                View Work
              </Button>
            </Link>
          </div>

          {/* New Section: Words from brands */}
          <div className="mb-24 text-center">
             <Link to="/about" className="inline-block text-fresco-blue font-heading font-semibold text-lg tracking-wide border-b-2 border-transparent transition-all cursor-pointer hover:text-fresco-brown hover:border-fresco-yellow">
                Words from brands we've worked with
             </Link>
          </div>
        </div>

        {/* Enhanced "Built in Public" Section with Hover Effects */}
        <div className="relative max-w-4xl mx-auto mt-12 group perspective-1000">
            {/* Animated Background Blobs - Kept subtle behind the card for extra depth */}
            <div className="absolute top-0 -left-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -right-10 w-80 h-80 bg-fresco-yellow/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            
            {/* Content Card with Hover Effects */}
            <div className="relative bg-white/70 backdrop-blur-xl border border-white rounded-[2rem] p-10 md:p-16 text-center shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(245,190,11,0.25)] hover:border-fresco-yellow/30 overflow-hidden group">
                
                {/* Decorative Elements - Hover Reveal */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fresco-blue via-fresco-yellow to-fresco-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-fresco-green via-fresco-yellow to-fresco-blue transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight font-serif relative z-10">
                    SocialFresco is <span className="italic text-fresco-blue font-serif relative transition-colors duration-300 group-hover:text-fresco-brown">
                        built in public
                    </span>.
                </h2>
                
                <div className="max-w-3xl mx-auto space-y-6 relative z-10">
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-sans">
                        We share the process, the lessons, the experiments, and the growth. Because building a brand is not just about the end result, it’s about everything that happens along the way.
                    </p>
                    <p className="text-xl md:text-2xl text-fresco-blue font-heading font-bold mt-4 tracking-wide group-hover:scale-105 transition-transform duration-300 inline-block group-hover:text-fresco-brown">
                        If you value intention, creativity, and long-term growth, you’re in the right place.
                    </p>
                </div>
                
                {/* Subtle Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-fresco-yellow/5 to-fresco-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
        </div>
      </div>
    </section>
  );
};