import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';

const TechnologySection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const features = [
    'AI-powered threat detection',
    'Quantum-resistant encryption',
    'Advanced radar technology',
    'Autonomous defensive systems',
    'Multi-layer security architecture',
    'Real-time battlefield analytics',
  ];

  const techStats = [
    { label: 'Threat Detection Rate', value: '99.8%' },
    { label: 'System Uptime', value: '99.999%' },
    { label: 'Response Time', value: '<10ms' },
    { label: 'Protection Coverage', value: '360°' },
  ];

  return (
    <section id="technology" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-tech-pattern bg-cover bg-center opacity-5 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-tech-900/20 via-gray-950/90 to-gray-950 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7 space-y-8"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-flex items-center space-x-2 bg-gray-800/70 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700">
              <Shield className="h-4 w-4 text-tech-400" />
              <span className="text-sm font-medium text-tech-200">Advanced Technology</span>
            </div>
            
            <h2 className="text-4xl font-display font-bold">
              Innovative <span className="bg-clip-text text-transparent bg-gradient-to-r from-tech-400 to-primary-400">Defense Technology</span> for the Modern World
            </h2>
            
            <p className="text-lg text-gray-300">
              Our proprietary defense systems integrate cutting-edge technologies including artificial intelligence, quantum encryption, and advanced materials science to provide unparalleled protection.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  <CheckCircle className="h-5 w-5 text-tech-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.3, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-tech-600 to-tech-500 hover:from-tech-500 hover:to-tech-400 text-white font-medium rounded-md shadow-lg shadow-tech-600/20"
            >
              Explore Technology
            </motion.button>
          </motion.div>
          
          <motion.div
            className="lg:col-span-5"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-xl shadow-tech-900/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 bg-gradient-to-r from-tech-500 to-primary-500 rounded-full blur-3xl opacity-20"></div>
              
              <h3 className="text-2xl font-display font-semibold mb-6 text-white">
                Performance Metrics
              </h3>
              
              <div className="space-y-6">
                {techStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400 text-sm">{stat.label}</span>
                      <span className="text-tech-400 font-semibold">{stat.value}</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-tech-500 to-primary-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: index === 0 ? '99.8%' : index === 1 ? '99.999%' : index === 2 ? '98%' : '100%' }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-800">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Security Rating</span>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="h-5 w-5 text-tech-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;