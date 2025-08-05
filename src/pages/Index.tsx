
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Vision from '../components/Vision';
import WisdomFramework from '../components/WisdomFramework';

import CoreOfferings from '../components/CoreOfferings';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div>
        <Hero />
        <div className="bg-slate-50">
          <Vision />
        </div>
        <div className="bg-white">
          <WisdomFramework />
        </div>
        <div className="bg-slate-50">
          <CoreOfferings />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
