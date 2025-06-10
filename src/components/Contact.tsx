import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Gourmet Avenue', 'Culinary District, CD 12345'],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', 'Reservations & Inquiries'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@glassify.com', 'info@glassify.com'],
      action: 'Send Email'
    }
  ];

  const hours = [
    { day: 'Monday - Thursday', time: '5:00 PM - 10:00 PM' },
    { day: 'Friday - Saturday', time: '5:00 PM - 11:00 PM' },
    { day: 'Sunday', time: '4:00 PM - 9:00 PM' }
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In Touch
            <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              With Glassify
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have questions, special requests, 
            or just want to share your experience, we're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <div className="grid gap-8 mb-12">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-300 mb-1">
                          {detail}
                        </p>
                      ))}
                      <button className="text-orange-400 hover:text-orange-300 font-medium mt-2 transition-colors">
                        {info.action} →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Operating Hours */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Operating Hours
                </h3>
              </div>
              <div className="space-y-3">
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0">
                    <span className="text-gray-300">{schedule.day}</span>
                    <span className="text-white font-medium">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group p-3 bg-white/10 rounded-full hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-600 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map/Location */}
          <div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Find Us</h3>
                  <p className="text-gray-300">Interactive map coming soon</p>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Located in the Heart of the Culinary District
                </h4>
                <p className="text-gray-300 mb-4">
                  Easily accessible by public transport with valet parking available. 
                  We're situated in the vibrant Culinary District, surrounded by 
                  art galleries, boutique shops, and cultural attractions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                    Valet Parking
                  </span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                    Metro Access
                  </span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                    Wheelchair Accessible
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;