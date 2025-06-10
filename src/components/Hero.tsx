import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero\" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 lg:px-8 max-w-4xl mx-auto">
        {/* Rating */}
        <div className="flex items-center justify-center space-x-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
          <span className="ml-2 text-white/90 font-medium">4.9 out of 5 stars</span>
        </div>

        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Exquisite Dining
          <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Indulge in culinary artistry where every dish tells a story of passion, 
          creativity, and the finest ingredients.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            onClick={() => onNavigate('booking')}
            className="group bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-2"
          >
            <span>Reserve Table</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => onNavigate('menu')}
            className="group bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            View Menu
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">15+</div>
            <div className="text-white/80 font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-white/80 font-medium">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-white/80 font-medium">Signature Dishes</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;