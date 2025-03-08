import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RobotDetailPage from './pages/RobotDetailPage';
import CartPage from './pages/CartPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/robot/:id" element={<RobotDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="mb-6 md:mb-0">
                  <h2 className="text-xl font-bold mb-4">RoboShop</h2>
                  <p className="text-gray-400">Your trusted source for cutting-edge robots.</p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Shop</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-300 hover:text-white">All Robots</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white">Home Robots</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white">Industrial Robots</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white">Companion Robots</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Company</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                      <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                      <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                <p>&copy; 2025 RoboShop. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;