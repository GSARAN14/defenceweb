import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DestinationsSection from './components/DestinationsSection';
import ExperiencesSection from './components/ExperiencesSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
        <Navbar />
        <main>
          <HeroSection />
          <DestinationsSection />
          <ExperiencesSection />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;