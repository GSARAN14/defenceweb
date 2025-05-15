import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Cpu, Radio, Radar, Server } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:bg-gray-800/60 transition-all duration-300 group"
    >
      <div className="h-12 w-12 bg-primary-900/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-900/80 transition-colors duration-300">
        <div className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-display font-semibold mb-2 text-white group-hover:text-primary-300 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Aerial Defense Systems',
      description: 'Advanced drone and aircraft detection systems with counter-measure deployment capabilities.',
      icon: <Radar className="h-6 w-6" />,
    },
    {
      title: 'Cybersecurity',
      description: 'Military-grade protection for critical infrastructure and sensitive data networks.',
      icon: <Lock className="h-6 w-6" />,
    },
    {
      title: 'AI Threat Analysis',
      description: 'Real-time monitoring and analysis of potential threats using advanced AI algorithms.',
      icon: <Cpu className="h-6 w-6" />,
    },
    {
      title: 'Secure Communications',
      description: 'Encrypted communication systems designed for high-security environments.',
      icon: <Radio className="h-6 w-6" />,
    },
    {
      title: 'Perimeter Security',
      description: 'Integrated physical security solutions with motion detection and response capabilities.',
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: 'Cloud Defense',
      description: 'Protective measures for cloud infrastructure against sophisticated cyber attacks.',
      icon: <Server className="h-6 w-6" />,
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/10 via-transparent to-transparent z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gray-800/70 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700 mb-4">
            <Shield className="h-4 w-4 text-accent-400" />
            <span className="text-sm font-medium text-accent-200">Core Capabilities</span>
          </div>
          
          <h2 className="text-4xl font-display font-bold mb-4">
            Advanced Defense <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-primary-400">Solutions</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our comprehensive suite of defense technologies provides protection across multiple domains, from physical security to cybersecurity.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;