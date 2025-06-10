import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail, User, MessageSquare, CheckCircle } from 'lucide-react';
import { BookingFormData } from '../types';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 2,
        specialRequests: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="booking\" className="py-20 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/20">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Booking Confirmed!</h2>
              <p className="text-lg text-gray-300 mb-6">
                Thank you for your reservation. We've sent a confirmation email to {formData.email}.
                We look forward to serving you!
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="font-semibold text-white mb-4">Reservation Details:</h3>
                <div className="space-y-2 text-left">
                  <p className="text-gray-300"><span className="font-medium text-white">Name:</span> {formData.name}</p>
                  <p className="text-gray-300"><span className="font-medium text-white">Date:</span> {formData.date}</p>
                  <p className="text-gray-300"><span className="font-medium text-white">Time:</span> {formData.time}</p>
                  <p className="text-gray-300"><span className="font-medium text-white">Guests:</span> {formData.guests}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const timeSlots = [
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', 
    '20:00', '20:30', '21:00', '21:30', '22:00'
  ];

  return (
    <section id="booking" className="py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Reserve Your
              <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Perfect Table
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Secure your spot for an unforgettable dining experience. 
              Choose your preferred date and time, and let us take care of the rest.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-orange-400" />
                <span className="text-gray-300">Available 7 days a week</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-orange-400" />
                <span className="text-gray-300">Dinner service from 5:00 PM</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-orange-400" />
                <span className="text-gray-300">Accommodating 1-12 guests</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/20 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors bg-white/10 backdrop-blur-sm text-white placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/20 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors bg-white/10 backdrop-blur-sm text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/20 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors bg-white/10 backdrop-blur-sm text-white placeholder-gray-400"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors bg-white/10 backdrop-blur-sm text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors bg-white/10 backdrop-blur-sm text-white"
                  >
                    <option value="" className="bg-gray-800">Select time</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time} className="bg-gray-800">{time}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors bg-white/10 backdrop-blur-sm text-white"
                  >
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={i + 1} className="bg-gray-800">
                        {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Special Requests (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests || ''}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/20 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors bg-white/10 backdrop-blur-sm resize-none text-white placeholder-gray-400"
                    placeholder="Any dietary restrictions, celebration details, or special requests..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Reserve Table
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;