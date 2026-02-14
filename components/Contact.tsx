import React, { useState } from 'react';
import { Button } from './Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thanks for reaching out! We'll be in touch shortly.");
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-white border-t border-gray-200" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p id="contact-heading" className="text-xs font-heading font-bold tracking-[0.2em] text-fresco-blue uppercase mb-6 text-center">
          Contact
        </p>
        <div className="max-w-4xl mx-auto bg-fresco-cream rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Left Side Info */}
          <div className="bg-fresco-blue text-white p-12 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
             <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
             <div className="absolute bottom-0 left-0 w-40 h-40 bg-fresco-yellow/20 rounded-full blur-2xl -ml-10 -mb-10"></div>
             
             <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">Let's talk.</h3>
                <p className="text-blue-100 mb-12">We've been waiting for you. Tell us about your project and let's create something amazing together.</p>
                
                <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                        <Mail className="text-fresco-yellow" size={20} />
                        <span>hello@socialfresco.in</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Phone className="text-fresco-yellow" size={20} />
                        <span>+1 (555) 000-0000</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <MapPin className="text-fresco-yellow" size={20} />
                        <span>123 Creative Blvd, Design City</span>
                    </div>
                </div>
             </div>
             
             <div className="mt-12 relative z-10">
                <p className="text-sm text-blue-200">© {new Date().getFullYear()} Social Fresco Inc.</p>
             </div>
          </div>

          {/* Right Side Form */}
          <div className="p-12 md:w-3/5 bg-white">
            <div className="mb-8">
               <span className="text-xs font-bold tracking-wider uppercase text-gray-400">Members</span>
               <h2 className="text-2xl font-bold text-gray-900 mt-1">Send us a Message</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Enter your name"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full pl-4 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fresco-blue/50 focus:bg-white transition-colors"
                      required
                    />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full pl-4 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fresco-blue/50 focus:bg-white transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full pl-4 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fresco-blue/50 focus:bg-white transition-colors resize-none"
                  required
                ></textarea>
              </div>
              <Button type="submit" variant="dark" className="w-full">
                Submit <Send size={16} className="ml-2" />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};