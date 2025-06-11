import React from 'react';
import { Utensils, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickLinks = [
    { label: 'Home', section: 'hero' },
    { label: 'About Us', section: 'about' },
    { label: 'Menu', section: 'menu' },
    { label: 'Reservations', section: 'booking' }
  ];

  const serviceLinks = [
    { label: 'Order Online', section: 'order' },
    { label: 'Private Events', section: 'contact' },
    { label: 'Catering', section: 'contact' },
    { label: 'Gift Cards', section: 'contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div 
              className="flex items-center space-x-2 mb-6 cursor-pointer"
              onClick={() => onNavigate('hero')}
            >
              <div className="p-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                We-Eat
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Experience culinary excellence in an atmosphere of refined elegance. 
              At Glassify, every meal is a journey through flavors, textures, and 
              artistry that will leave lasting memories.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for food lovers everywhere</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.section}>
                  <button
                    onClick={() => onNavigate(link.section)}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.section)}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 We-Eat Restaurant. All rights reserved.
            </div>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <button className="hover:text-orange-400 transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-orange-400 transition-colors">
                Terms of Service
              </button>
              <button className="hover:text-orange-400 transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;