import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { robots } from '../data/robots';
import { useCart } from '../context/CartContext';
import { ShoppingCart, ArrowLeft, Check } from 'lucide-react';

const RobotDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const robot = robots.find(r => r.id === id);
  
  if (!robot) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Robot not found</h2>
        <p className="text-gray-600 mb-8">The robot you're looking for doesn't exist or has been removed.</p>
        <button 
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Back to Home
        </button>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button 
        onClick={() => navigate('/')}
        className="flex items-center text-blue-600 mb-6 hover:text-blue-800"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to all robots
      </button>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img 
              src={robot.imageUrl} 
              alt={robot.name} 
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{robot.name}</h1>
                <p className="text-sm text-gray-500 mb-4">Category: {robot.category}</p>
              </div>
              <div className="text-2xl font-bold text-gray-900">${robot.price.toFixed(2)}</div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Description</h2>
              <p className="text-gray-600">{robot.description}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {robot.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center">
                <div className={`h-3 w-3 rounded-full mr-2 ${
                  robot.stock > 5 ? 'bg-green-500' : robot.stock > 0 ? 'bg-yellow-500' : 'bg-red-500'
                }`}></div>
                <span className="text-sm">
                  {robot.stock > 5 
                    ? `In Stock (${robot.stock} available)` 
                    : robot.stock > 0 
                      ? `Low Stock (only ${robot.stock} left)` 
                      : 'Out of Stock'}
                </span>
              </div>
            </div>
            
            <button 
              onClick={() => addToCart(robot)}
              disabled={robot.stock === 0}
              className={`w-full flex items-center justify-center px-6 py-3 rounded-md text-white ${
                robot.stock === 0 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              {robot.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotDetailPage;