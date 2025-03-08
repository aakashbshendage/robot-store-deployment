import React, { useState } from 'react';
import RobotCard from '../components/RobotCard';
import { robots } from '../data/robots';

const categories = ['All', ...Array.from(new Set(robots.map(robot => robot.category)))];

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRobots = robots.filter(robot => {
    const matchesCategory = selectedCategory === 'All' || robot.category === selectedCategory;
    const matchesSearch = robot.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          robot.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to RoboShop</h1>
        <p className="text-gray-600 max-w-3xl">
          Discover our collection of cutting-edge robots designed to make your life easier, 
          safer, and more enjoyable. From home assistants to industrial solutions, we have 
          the perfect robot for every need.
        </p>
      </div>

      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-64">
          <input
            type="text"
            placeholder="Search robots..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredRobots.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-xl">No robots found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRobots.map(robot => (
            <RobotCard key={robot.id} robot={robot} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;