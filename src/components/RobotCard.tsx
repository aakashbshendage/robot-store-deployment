import React from 'react';
import { Robot } from '../types';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

interface RobotCardProps {
  robot: Robot;
}

const RobotCard: React.FC<RobotCardProps> = ({ robot }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <Link to={`/robot/${robot.id}`}>
        <img 
          src={robot.imageUrl} 
          alt={robot.name} 
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/robot/${robot.id}`}>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{robot.name}</h2>
        </Link>
        <p className="text-gray-600 mb-2 line-clamp-2">{robot.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-gray-900">${robot.price.toFixed(2)}</span>
          <button 
            onClick={() => addToCart(robot)}
            className="bg-blue-600 text-white px-3 py-2 rounded-md flex items-center hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add to Cart
          </button>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          {robot.stock > 0 ? (
            <span className="text-green-600">{robot.stock} in stock</span>
          ) : (
            <span className="text-red-600">Out of stock</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default RobotCard;