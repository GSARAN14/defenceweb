import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProductsSection from './components/ProductsSection';
import TechnologySection from './components/TechnologySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
        <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-950/30 via-gray-950/95 to-gray-950 -z-10"></div>
        
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <ProductsSection />
          <TechnologySection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;