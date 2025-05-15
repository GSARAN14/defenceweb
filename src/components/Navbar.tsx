import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Technology', href: '#technology' },
    { name: 'Contact', href: '#contact' },
  ];

  const dropdownItems = [
    { name: 'Air Defense', href: '#air-defense' },
    { name: 'Cyber Security', href: '#cyber-security' },
    { name: 'Land Systems', href: '#land-systems' },
    { name: 'Naval Defense', href: '#naval-defense' },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Shield className="h-8 w-8 text-accent-500" />
              <span className="ml-2 text-xl font-display font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-primary-400">
                DEFENSE<span className="text-tech-400">TECH</span>
              </span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navItems.map((item, index) => (
                index === 1 ? (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="group text-gray-300 hover:text-white px-2 py-2 rounded-md text-sm font-medium flex items-center"
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-1 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-700"
                        >
                          {dropdownItems.map((dropItem) => (
                            <a
                              key={dropItem.name}
                              href={dropItem.href}
                              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                              {dropItem.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white px-2 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </a>
                )
              ))}
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-accent-600 to-accent-500 hover:from-accent-500 hover:to-accent-400 text-white px-4 py-2 rounded-md text-sm font-medium shadow-lg shadow-accent-600/20"
              >
                Get a Quote
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full bg-gradient-to-r from-accent-600 to-accent-500 hover:from-accent-500 hover:to-accent-400 text-white px-3 py-2 rounded-md text-base font-medium">
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;