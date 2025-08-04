
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Vision from '../components/Vision';
import WisdomFramework from '../components/WisdomFramework';
import LimitlessImpact from '../components/LimitlessImpact';

import CoreOfferings from '../components/CoreOfferings';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div>
        <Hero />
      <Vision />
      <WisdomFramework />
        <LimitlessImpact />
        <CoreOfferings />
      <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
