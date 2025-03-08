import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const navigate = useNavigate();
  
  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Looks like you haven't added any robots to your cart yet.</p>
        <Link 
          to="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Your Shopping Cart</h1>
        <button 
          onClick={clearCart}
          className="text-red-600 hover:text-red-800"
        >
          Clear Cart
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <ul className="divide-y divide-gray-200">
          {cartItems.map((item) => (
            <li key={item.robot.id} className="p-4 sm:p-6 flex flex-col sm:flex-row">
              <div className="sm:w-24 sm:h-24 mb-4 sm:mb-0 flex-shrink-0">
                <img 
                  src={item.robot.imageUrl} 
                  alt={item.robot.name} 
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="sm:ml-6 flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      <Link to={`/robot/${item.robot.id}`} className="hover:text-blue-600">
                        {item.robot.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{item.robot.category}</p>
                  </div>
                  <p className="text-lg font-medium text-gray-900">${item.robot.price.toFixed(2)}</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center border border-gray-300 rounded">
                    <button 
                      onClick={() => updateQuantity(item.robot.id, item.quantity - 1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-3 py-1">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.robot.id, item.quantity + 1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                      disabled={item.quantity >= item.robot.stock}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.robot.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Subtotal: ${(item.robot.price * item.quantity).toFixed(2)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
        <div className="flex justify-between text-lg font-medium text-gray-900 mb-4">
          <span>Subtotal</span>
          <span>${getCartTotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-medium text-gray-900 mb-4">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between text-xl font-bold text-gray-900 mb-6 pt-4 border-t border-gray-200">
          <span>Total</span>
          <span>${getCartTotal().toFixed(2)}</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Continue Shopping
          </button>
          <button 
            onClick={() => alert('Checkout functionality would be implemented here!')}
            className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;