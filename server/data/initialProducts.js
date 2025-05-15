import mongoose from 'mongoose';
import Product from '../models/Product.js';

const initialProducts = [
  {
    title: "Advanced Drone Defense System",
    category: "Aerial",
    description: "State-of-the-art anti-drone system with AI-powered detection and neutralization capabilities.",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg"
  },
  {
    title: "Quantum Encryption Suite",
    category: "Cyber",
    description: "Next-generation encryption system utilizing quantum computing principles for unbreakable security.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
  },
  {
    title: "Tactical Communications Hub",
    category: "Communications",
    description: "Military-grade communications system with advanced encryption and jamming resistance.",
    image: "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg"
  },
  {
    title: "AI Threat Analysis Platform",
    category: "Intelligence",
    description: "Real-time threat detection and analysis system powered by advanced machine learning algorithms.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
  },
  {
    title: "Perimeter Defense System",
    category: "Intelligence",
    description: "Comprehensive perimeter security solution with multi-sensor integration and automated response.",
    image: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg"
  },
  {
    title: "Cyber Warfare Suite",
    category: "Cyber",
    description: "Advanced cyber defense and counter-offensive toolkit for military and government applications.",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg"
  }
];

export const seedProducts = async () => {
  try {
    // Clear existing products
    await Product.deleteMany({});
    
    // Insert new products
    await Product.insertMany(initialProducts);
    
    console.log('Initial products seeded successfully');
  } catch (error) {
    console.error('Error seeding products:', error);
  }
};