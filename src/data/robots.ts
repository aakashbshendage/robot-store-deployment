import { Robot } from '../types';

export const robots: Robot[] = [
  {
    id: '1',
    name: 'HomeBot 3000',
    price: 999.99,
    description: 'Your perfect home assistant. Can clean, cook, and manage your smart home devices.',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Home',
    features: ['Voice control', 'Smart home integration', 'Self-charging', 'Learning AI'],
    stock: 15
  },
  {
    id: '2',
    name: 'IndustrialArm X2',
    price: 2499.99,
    description: 'Heavy-duty industrial robot arm for manufacturing and assembly lines.',
    imageUrl: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Industrial',
    features: ['Precision control', '500kg lifting capacity', 'Programmable movements', 'Safety sensors'],
    stock: 8
  },
  {
    id: '3',
    name: 'CompanionBot Mini',
    price: 599.99,
    description: 'Your personal companion robot. Great for kids and elderly care.',
    imageUrl: 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Companion',
    features: ['Emotion recognition', 'Conversation AI', 'Reminder system', 'Health monitoring'],
    stock: 20
  },
  {
    id: '4',
    name: 'SecurityDrone Pro',
    price: 1299.99,
    description: 'Autonomous security drone for home and business surveillance.',
    imageUrl: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Security',
    features: ['4K camera', 'Night vision', 'Motion detection', 'Automatic patrolling'],
    stock: 12
  },
  {
    id: '5',
    name: 'GardenBot',
    price: 799.99,
    description: 'Automated gardening robot that waters, weeds, and monitors plant health.',
    imageUrl: 'https://images.unsplash.com/photo-1563207153-f403bf289096?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Home',
    features: ['Weather adaptive', 'Plant recognition', 'Automated watering', 'Weed removal'],
    stock: 10
  },
  {
    id: '6',
    name: 'TeachBot',
    price: 899.99,
    description: 'Educational robot for children to learn programming and robotics.',
    imageUrl: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Education',
    features: ['Block programming', 'Voice instructions', 'Interactive lessons', 'Progress tracking'],
    stock: 18
  }
];