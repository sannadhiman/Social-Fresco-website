import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Work', to: '/work' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ];

  const linkClass = "text-gray-700 hover:text-fresco-blue font-heading font-semibold tracking-wide text-sm uppercase transition-colors";
  const activeClass = "text-fresco-blue";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center cursor-pointer"
            aria-label="Social Fresco – home"
          >
            <img src="/logo.png" alt="" className="h-8 md:h-10 object-contain" onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }} />
            <span className="hidden text-2xl md:text-3xl tracking-tighter text-fresco-blue font-heading">
              <span className="font-light">SOCIAL</span><span className="font-bold italic">FRESCO</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`${linkClass} ${location.pathname === link.to ? activeClass : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 border-transparent text-white bg-fresco-blue hover:bg-blue-800 hover:shadow-lg focus:ring-fresco-blue font-heading tracking-wide"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-fresco-blue focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full animate-fade-in-down border-t border-gray-100">
          <div className="px-6 pt-4 pb-8 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`block py-2 text-lg font-heading font-medium transition-colors ${location.pathname === link.to ? 'text-fresco-blue' : 'text-gray-900 hover:text-fresco-blue'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/contact"
                className="flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-fresco-blue hover:bg-blue-800 hover:shadow-lg font-heading tracking-wide"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
