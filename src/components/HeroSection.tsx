import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { Shield, ArrowRight, ChevronDown } from 'lucide-react';

function DroneModel(props: any) {
  // In a real implementation, you would load an actual GLTF/GLB model
  // This is a simplified cube to represent a 3D model
  return (
    <mesh {...props} rotation={[0, Math.PI / 4, 0]}>
      <boxGeometry args={[2, 0.5, 2]} />
      <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

const HeroSection: React.FC = () => {
  const scrollToNext = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern bg-cover bg-center opacity-10 z-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-gray-950/90 to-gray-950 z-0"></div>
      
      {/* Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-gray-800/70 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700">
              <Shield className="h-4 w-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-200">Advanced Defense Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              <span className="block">Next Generation</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-tech-400">
                Defense Technology
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-xl">
              Cutting-edge defense solutions integrating AI, robotics, and cybersecurity to protect critical infrastructure and national interests.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-accent-600 to-accent-500 hover:from-accent-500 hover:to-accent-400 text-white font-medium rounded-md shadow-lg shadow-accent-600/20 flex items-center space-x-2"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-gray-700 hover:border-primary-400 text-white font-medium rounded-md bg-gray-800/30 backdrop-blur-sm transition-colors"
              >
                View Capabilities
              </motion.button>
            </div>
            
            <div className="flex items-center space-x-8 pt-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full border-2 border-gray-800" src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Client" />
                </div>
                <div className="flex-shrink-0 -ml-3">
                  <img className="h-10 w-10 rounded-full border-2 border-gray-800" src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Client" />
                </div>
                <div className="flex-shrink-0 -ml-3">
                  <img className="h-10 w-10 rounded-full border-2 border-gray-800" src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Client" />
                </div>
                <div className="flex-shrink-0 -ml-3">
                  <div className="h-10 w-10 rounded-full border-2 border-gray-800 bg-primary-900 flex items-center justify-center text-sm font-medium text-primary-200">
                    12+
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400">Trusted by government agencies and defense contractors worldwide</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[400px] lg:h-[500px] max-w-lg mx-auto relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-tech-500/0 rounded-2xl animate-pulse-slow"></div>
            <div className="relative w-full h-full">
              <Canvas dpr={[1, 2]} shadows>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <PresentationControls
                  global
                  rotation={[0, 0, 0]}
                  polar={[-Math.PI / 4, Math.PI / 4]}
                  azimuth={[-Math.PI / 4, Math.PI / 4]}
                  config={{ mass: 2, tension: 400 }}
                  snap={{ mass: 4, tension: 400 }}
                >
                  <Stage environment="city" intensity={0.6}>
                    <DroneModel />
                  </Stage>
                </PresentationControls>
              </Canvas>
            </div>
            <div className="absolute bottom-0 right-0 h-24 w-24 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full blur-2xl opacity-30"></div>
            <div className="absolute top-0 left-0 h-32 w-32 bg-gradient-to-r from-tech-500 to-primary-500 rounded-full blur-2xl opacity-20"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <button onClick={scrollToNext} className="flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 text-primary-400" />
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;