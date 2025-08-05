
import React from 'react';
import Header from '../components/Header';
import EventBanner from '../components/EventBanner';
import Hero from '../components/Hero';
import Vision from '../components/Vision';
import WisdomFramework from '../components/WisdomFramework';
import UpcomingEvents from '../components/UpcomingEvents';
import CoreOfferings from '../components/CoreOfferings';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <EventBanner />
      <Header />
      <div>
        <Hero />
        <div className="bg-slate-50">
          <Vision />
        </div>
        <div className="bg-white">
          <WisdomFramework />
        </div>
      </div>
      <UpcomingEvents />
      <div className="bg-white py-8"></div>
      <CoreOfferings />
      <div className="bg-white py-8"></div>
      <Footer />
    </div>
  );
};

export default Index;
