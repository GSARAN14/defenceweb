import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Radar, Radio, Server, Lock } from 'lucide-react';
import axios from 'axios';

interface Product {
  _id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

interface ProductCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  delay: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, category, description, image, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden group hover:border-primary-800 transition-all duration-300"
    >
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 z-10"></div>
        <img 
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700" 
          src={image} 
          alt={title} 
        />
        <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm rounded-full px-3 py-1 z-20 flex items-center space-x-2">
          <div className="text-primary-400">
            {icon}
          </div>
          <span className="text-xs font-medium text-gray-300">{category}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-display font-semibold mb-2 text-white group-hover:text-primary-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <button className="text-primary-400 hover:text-primary-300 text-sm font-medium flex items-center space-x-1 group">
            <span>Learn more</span>
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <span className="text-xs text-gray-500">Military Grade</span>
        </div>
      </div>
    </motion.div>
  );
};

const ProductsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [products, setProducts] = useState<Product[]>([]);
  
  const categories = ['All', 'Aerial', 'Cyber', 'Communications', 'Intelligence'];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const getIconComponent = (category: string) => {
    switch (category) {
      case 'Aerial':
        return <Radar className="h-4 w-4" />;
      case 'Cyber':
        return <Lock className="h-4 w-4" />;
      case 'Communications':
        return <Radio className="h-4 w-4" />;
      default:
        return <Server className="h-4 w-4" />;
    }
  };

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent-900/10 via-transparent to-transparent z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-gray-800/70 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700 mb-4">
            <Shield className="h-4 w-4 text-tech-400" />
            <span className="text-sm font-medium text-tech-200">Defense Products</span>
          </div>
          
          <h2 className="text-4xl font-display font-bold mb-4">
            Cutting-Edge <span className="bg-clip-text text-transparent bg-gradient-to-r from-tech-400 to-primary-400">Defense Technology</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our range of advanced defense products designed to provide comprehensive protection against emerging threats.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-10 overflow-x-auto pb-2"
        >
          <div className="flex space-x-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${activeCategory === category
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-gray-300'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product._id}
              title={product.title}
              category={product.category}
              description={product.description}
              image={product.image}
              icon={getIconComponent(product.category)}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;