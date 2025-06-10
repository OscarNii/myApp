import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for culinary excellence and outstanding service'
    },
    {
      icon: Users,
      title: 'Expert Chefs',
      description: 'World-class chefs with decades of combined experience'
    },
    {
      icon: Clock,
      title: 'Fresh Daily',
      description: 'Ingredients sourced fresh daily from local suppliers'
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every dish crafted with passion and attention to detail'
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Story of
              <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Culinary Excellence
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              For over 15 years, Glassify has been at the forefront of fine dining, 
              creating memorable experiences through exceptional cuisine and warm hospitality. 
              Our commitment to quality and innovation has made us a beloved destination 
              for food enthusiasts and connoisseurs alike.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg"
                alt="Restaurant interior"
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold text-orange-400">4.9</div>
                <div>
                  <div className="text-gray-300 text-sm">Customer Rating</div>
                  <div className="text-white font-semibold">Excellent Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;