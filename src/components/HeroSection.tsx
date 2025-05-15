import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Plane, MapPin, Compass } from 'lucide-react';

function Globe() {
  return (
    <mesh rotation={[0, 0, 0]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshPhongMaterial color="#60A5FA" wireframe />
    </mesh>
  );
}

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Globe />
          <OrbitControls autoRotate enableZoom={false} />
        </Canvas>
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-6xl font-bold text-blue-900 mb-6">
            Discover the World's
            <span className="block text-purple-600">Hidden Treasures</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8">
            Embark on unforgettable journeys to the most breathtaking destinations around the globe.
          </p>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 text-white rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors"
            >
              <Plane className="h-5 w-5" />
              Start Your Journey
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-purple-600 text-white rounded-full flex items-center gap-2 hover:bg-purple-700 transition-colors"
            >
              <MapPin className="h-5 w-5" />
              Explore Destinations
            </motion.button>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex -space-x-4">
              <img className="w-12 h-12 rounded-full border-2 border-white" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="User" />
              <img className="w-12 h-12 rounded-full border-2 border-white" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" alt="User" />
              <img className="w-12 h-12 rounded-full border-2 border-white" src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg" alt="User" />
              <div className="w-12 h-12 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-white text-sm">
                +2k
              </div>
            </div>
            <p className="text-gray-600">
              Join thousands of adventurers exploring the world
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;