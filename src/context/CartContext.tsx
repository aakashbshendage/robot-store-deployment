import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Robot, CartItem } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (robot: Robot) => void;
  removeFromCart: (robotId: string) => void;
  updateQuantity: (robotId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (robot: Robot) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.robot.id === robot.id);
      
      if (existingItem) {
        return prevItems.map(item => 
          item.robot.id === robot.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevItems, { robot, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (robotId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.robot.id !== robotId));
  };

  const updateQuantity = (robotId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(robotId);
      return;
    }
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.robot.id === robotId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.robot.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};