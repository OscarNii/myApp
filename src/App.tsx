import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { Utensils } from 'lucide-react';
import About from './components/About';
import Menu from './components/Menu';
import BookingForm from './components/BookingForm';
import OrderSystem from './components/OrderSystem';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MenuItem, CartItem } from './types';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  const handleNavigation = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const addToCart = (item: MenuItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      setCart(prevCart => prevCart.filter(item => item.id !== id));
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-90 fixed inset-0 z-[9999]">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2 animate-pulse">
            <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full">
              <Utensils className="w-8 h-8 text-white" />
            </div>
            <span className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              We-Eat
            </span>
          </div>
          <div className="w-32 h-1 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-amber-500 to-orange-600 animate-progress"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header onNavigate={handleNavigation} />
      <Hero onNavigate={handleNavigation} />
      <About />
      <Menu cart={cart} onAddToCart={addToCart} onUpdateQuantity={updateQuantity} />
      <BookingForm />
      <OrderSystem cart={cart} onUpdateQuantity={updateQuantity} onClearCart={clearCart} />
      <Contact />
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}
export default App;