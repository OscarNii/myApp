import React, { useState } from 'react';
import { ShoppingCart, Trash2, Plus, Minus, CheckCircle, MapPin, Clock } from 'lucide-react';
import { CartItem, OrderFormData } from '../types';

interface OrderSystemProps {
  cart: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onClearCart: () => void;
}

const OrderSystem: React.FC<OrderSystemProps> = ({ cart, onUpdateQuantity, onClearCart }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderForm, setOrderForm] = useState<OrderFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    orderType: 'delivery'
  });
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = orderForm.orderType === 'delivery' ? 5 : 0;
  const tax = (total + deliveryFee) * 0.1;
  const grandTotal = total + deliveryFee + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setOrderForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', { orderForm, cart, total: grandTotal });
    setIsOrderComplete(true);
    setTimeout(() => {
      setIsOrderComplete(false);
      setShowCheckout(false);
      onClearCart();
      setOrderForm({
        name: '',
        email: '',
        phone: '',
        address: '',
        orderType: 'delivery'
      });
    }, 4000);
  };

  if (isOrderComplete) {
    return (
      <section id="order\" className="py-20 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/20">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Order Confirmed!</h2>
              <p className="text-lg text-gray-300 mb-6">
                Thank you for your order! We're preparing your delicious meal and will {orderForm.orderType === 'delivery' ? 'deliver it soon' : 'have it ready for pickup'}.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="font-semibold text-white mb-4">Order Summary:</h3>
                <div className="space-y-2 text-left">
                  <p className="text-gray-300"><span className="font-medium text-white">Order Type:</span> {orderForm.orderType === 'delivery' ? 'Delivery' : 'Pickup'}</p>
                  <p className="text-gray-300"><span className="font-medium text-white">Total:</span> ${grandTotal.toFixed(2)}</p>
                  <p className="text-gray-300"><span className="font-medium text-white">Estimated Time:</span> {orderForm.orderType === 'delivery' ? '45-60 minutes' : '25-35 minutes'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Order
            <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Summary
            </span>
          </h2>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-300 mb-2">Your cart is empty</h3>
            <p className="text-gray-400">Add some delicious items from our menu to get started!</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-lg border border-white/20 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Cart Items</h3>
                  <button
                    onClick={onClearCart}
                    className="text-red-400 hover:text-red-300 transition-colors flex items-center space-x-2"
                  >
                    <Trash2 className="w-5 h-5" />
                    <span>Clear Cart</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-xl"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{item.name}</h4>
                        <p className="text-gray-300 text-sm">${item.price}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-white/20 shadow-md flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          <Minus className="w-4 h-4 text-white" />
                        </button>
                        <span className="font-semibold text-white min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white flex items-center justify-center hover:from-amber-600 hover:to-orange-700 transition-all shadow-md"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-lg font-bold text-white min-w-[80px] text-right">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Subtotal</span>
                    <span className="font-semibold text-white">${total.toFixed(2)}</span>
                  </div>
                  {deliveryFee > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-300">Delivery Fee</span>
                      <span className="font-semibold text-white">${deliveryFee.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-300">Tax (10%)</span>
                    <span className="font-semibold text-white">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-white/20 pt-3">
                    <div className="flex justify-between text-lg">
                      <span className="font-bold text-white">Total</span>
                      <span className="font-bold text-orange-400">${grandTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setShowCheckout(true)}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Checkout Modal */}
        {showCheckout && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Checkout</h3>
                  <button
                    onClick={() => setShowCheckout(false)}
                    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors text-white"
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={handleSubmitOrder} className="space-y-6">
                  {/* Order Type */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">
                      Order Type
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className={`p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                        orderForm.orderType === 'delivery' 
                          ? 'border-orange-500 bg-orange-500/20' 
                          : 'border-white/20 hover:border-white/30 bg-white/10'
                      }`}>
                        <input
                          type="radio"
                          name="orderType"
                          value="delivery"
                          checked={orderForm.orderType === 'delivery'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-5 h-5 text-orange-400" />
                          <div>
                            <div className="font-semibold text-white">Delivery</div>
                            <div className="text-sm text-gray-300">45-60 mins</div>
                          </div>
                        </div>
                      </label>
                      
                      <label className={`p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                        orderForm.orderType === 'pickup' 
                          ? 'border-orange-500 bg-orange-500/20' 
                          : 'border-white/20 hover:border-white/30 bg-white/10'
                      }`}>
                        <input
                          type="radio"
                          name="orderType"
                          value="pickup"
                          checked={orderForm.orderType === 'pickup'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-orange-400" />
                          <div>
                            <div className="font-semibold text-white">Pickup</div>
                            <div className="text-sm text-gray-300">25-35 mins</div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={orderForm.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors bg-white/10 backdrop-blur-sm text-white placeholder-gray-400"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={orderForm.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors bg-white/10 backdrop-blur-sm text-white placeholder-gray-400"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={orderForm.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors bg-white/10 backdrop-blur-sm text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>

                  {orderForm.orderType === 'delivery' && (
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Delivery Address
                      </label>
                      <textarea
                        name="address"
                        value={orderForm.address}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors resize-none bg-white/10 backdrop-blur-sm text-white placeholder-gray-400"
                        placeholder="Your full delivery address including apartment/unit number"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Special Instructions (Optional)
                    </label>
                    <textarea
                      name="specialInstructions"
                      value={orderForm.specialInstructions || ''}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors resize-none bg-white/10 backdrop-blur-sm text-white placeholder-gray-400"
                      placeholder="Any special requests or instructions..."
                    />
                  </div>

                  {/* Order Summary */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h4 className="font-semibold text-white mb-4">Final Order Summary</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Subtotal</span>
                        <span className="text-white">${total.toFixed(2)}</span>
                      </div>
                      {deliveryFee > 0 && (
                        <div className="flex justify-between">
                          <span className="text-gray-300">Delivery Fee</span>
                          <span className="text-white">${deliveryFee.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-gray-300">Tax</span>
                        <span className="text-white">${tax.toFixed(2)}</span>
                      </div>
                      <div className="border-t border-white/20 pt-2">
                        <div className="flex justify-between font-semibold text-lg">
                          <span className="text-white">Total</span>
                          <span className="text-orange-400">${grandTotal.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Place Order - ${grandTotal.toFixed(2)}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderSystem;