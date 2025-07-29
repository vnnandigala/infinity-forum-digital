
import React from 'react';
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
      <Hero />
      <Vision />
      <WisdomFramework />
      <LimitlessImpact />
      <FocusAreas />
      <CoreOfferings />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
