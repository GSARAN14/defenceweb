import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would handle form submission in a real application
    console.log(formState);
    // Reset form
    setFormState({
      name: '',
      email: '',
      company: '',
      message: '',
    });
    // Show success message
    alert('Thank you for your message. We will contact you shortly.');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary-900/10 via-transparent to-transparent z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gray-800/70 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700 mb-4">
            <Shield className="h-4 w-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-200">Get in Touch</span>
          </div>
          
          <h2 className="text-4xl font-display font-bold mb-4">
            Contact Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-tech-400">Defense Experts</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Reach out to discuss how our advanced defense solutions can protect your organization or to schedule a personalized demonstration.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-display font-semibold mb-6 text-white">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 bg-primary-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">contact@defensetech.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 bg-primary-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 bg-primary-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Headquarters</p>
                    <p className="text-white">1234 Defense Blvd, Suite 500</p>
                    <p className="text-white">Arlington, VA 22202, USA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-display font-semibold mb-4 text-white">
                Secure Communications
              </h3>
              <p className="text-gray-400 mb-4">
                For sensitive inquiries, we offer secure encrypted communication channels.
              </p>
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 py-2 rounded-md text-sm font-medium transition-colors">
                Request Secure Channel
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full blur-3xl opacity-20"></div>
              
              <h3 className="text-2xl font-display font-semibold mb-6 text-white">
                Send us a Message
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                  placeholder="Your Company"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white py-3 px-6 rounded-lg font-medium shadow-lg shadow-primary-600/20 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </motion.button>
              
              <p className="text-gray-500 text-xs mt-4 text-center">
                Your information is secure and encrypted. We adhere to strict data protection protocols.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;