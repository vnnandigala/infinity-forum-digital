
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Vision from '../components/Vision';
import WisdomFramework from '../components/WisdomFramework';
import LimitlessImpact from '../components/LimitlessImpact';
import FocusAreas from '../components/FocusAreas';
import CoreOfferings from '../components/CoreOfferings';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20"> {/* Add padding top to account for fixed header */}
        <Hero />
      <Vision />
      <WisdomFramework />
      <LimitlessImpact />
      <FocusAreas />
      <CoreOfferings />
      <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
