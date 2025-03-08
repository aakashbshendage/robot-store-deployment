import React, { useState } from 'react';
import { ShoppingCart, Notebook as Robot, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { getCartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Robot className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">RoboShop</span>
            </Link>
            <div className="hidden md:flex ml-10 space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md">
                Home
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-800">
              <ShoppingCart className="h-6 w-6" />
              {getCartCount() > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
            <div className="md:hidden ml-2">
              <button
                type="button"
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;