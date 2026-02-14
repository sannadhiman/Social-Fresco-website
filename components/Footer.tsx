import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="flex items-center mb-6 md:mb-0">
             <img src="/logo.png" alt="SOCIAL FRESCO" className="h-8 object-contain filter brightness-0 invert" onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
             }} />
            <span className="hidden text-2xl tracking-tighter text-white">
              <span className="font-light">SOCIAL</span><span className="font-bold">FRESCO</span>
            </span>
          </Link>

          <div className="flex space-x-6" role="list">
            <a href="#" className="text-gray-400 hover:text-fresco-yellow transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-fresco-yellow transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-fresco-yellow transition-colors" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-fresco-yellow transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Social Fresco. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-6">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};