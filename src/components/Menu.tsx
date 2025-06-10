import React, { useState } from 'react';
import { Star, Plus, Minus } from 'lucide-react';
import { MenuItem, CartItem } from '../types';
import { menuCategories, menuItems } from '../data/menuData';

interface MenuProps {
  cart: CartItem[];
  onAddToCart: (item: MenuItem) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

const Menu: React.FC<MenuProps> = ({ cart, onAddToCart, onUpdateQuantity }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const getCartQuantity = (itemId: number) => {
    const cartItem = cart.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const categories = ['All', ...menuCategories];

  return (
    <section id="menu" className="py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Exquisite
            <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Menu Collection
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, each crafted with 
            the finest ingredients and presented with artistic flair.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const quantity = getCartQuantity(item.id);
            
            return (
              <div 
                key={item.id}
                className="group bg-white/10 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20 hover:border-orange-400/50 hover:scale-105"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {item.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span>Popular</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-orange-400">
                      ${item.price}
                    </div>
                    
                    {quantity > 0 ? (
                      <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 border border-white/20">
                        <button
                          onClick={() => onUpdateQuantity(item.id, quantity - 1)}
                          className="w-8 h-8 rounded-full bg-white/20 shadow-md flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          <Minus className="w-4 h-4 text-white" />
                        </button>
                        <span className="font-semibold text-white min-w-[20px] text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, quantity + 1)}
                          className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white flex items-center justify-center hover:from-amber-600 hover:to-orange-700 transition-all shadow-md"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => onAddToCart(item)}
                        className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center space-x-2"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;