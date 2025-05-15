import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Twitter, Linkedin, Github, Mail, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/5 via-transparent to-transparent z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-accent-500" />
              <span className="text-xl font-display font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-primary-400">
                DEFENSE<span className="text-tech-400">TECH</span>
              </span>
            </div>
            
            <p className="text-gray-400 text-sm">
              Advanced defense solutions integrating AI, robotics, and cybersecurity to protect critical infrastructure and national interests.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 hover:bg-primary-900 flex items-center justify-center text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 hover:bg-primary-900 flex items-center justify-center text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 hover:bg-primary-900 flex items-center justify-center text-gray-400 hover:text-primary-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 hover:bg-primary-900 flex items-center justify-center text-gray-400 hover:text-primary-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 text-sm flex items-center"><ChevronRight className="h-3 w-3 mr-1" /> Aerial Defense</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 text-sm flex items-center"><ChevronRight className="h-3 w-3 mr-1" /> Cybersecurity</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 text-sm flex items-center"><ChevronRight className="h-3 w-3 mr-1" /> AI Defense Systems</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 text-sm flex items-center"><ChevronRight className="h-3 w-3 mr-1" /> Secure Communications</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 text-sm flex items-center"><ChevronRight className="h-3 w-3 mr-1" /> Perimeter Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 text-sm flex items-center"><ChevronRight className="h-3 w-3 mr-1" /> Defense Cloud</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 text-sm flex items-center"><ChevronRight className="h-3 w-3 mr-1" /> About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 text-sm flex items-center"><ChevronRight className="h-3 w-3 mr-1" /> Leadership</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 text-sm flex items-center"><ChevronRight className="h-3 w-3 mr-1" /> Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 text-sm flex items-center"><ChevronRight className="h-3 w-3 mr-1" /> News</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 text-sm flex items-center"><ChevronRight className="h-3 w-3 mr-1" /> Press Kit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 text-sm flex items-center"><ChevronRight className="h-3 w-3 mr-1" /> Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates on defense technology and cybersecurity.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white text-sm"
                placeholder="Your email address"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white py-2 px-4 rounded-lg text-sm font-medium shadow-lg shadow-primary-600/20"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} DefenseTech Solutions. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;