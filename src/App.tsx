import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import BookingForm from './components/BookingForm';
import OrderSystem from './components/OrderSystem';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MenuItem, CartItem } from './types';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

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

  return (
    <div className="min-h-screen bg-black">
      <Header onNavigate={handleNavigation} />
      <Hero onNavigate={handleNavigation} />
      <About />
      <Menu 
        cart={cart}
        onAddToCart={addToCart}
        onUpdateQuantity={updateQuantity}
      />
      <BookingForm />
      <OrderSystem 
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onClearCart={clearCart}
      />
      <Contact />
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}

export default App;