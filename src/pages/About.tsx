import React from 'react';
import Header from '@/components/Header';
import FocusAreas from '@/components/FocusAreas';
import CoreOfferings from '@/components/CoreOfferings';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      <div className="pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="pt-8">
          <FocusAreas />
        </div>
        
        <div className="bg-white py-8"></div>
        
        <div>
          <CoreOfferings />
        </div>
        
        <div className="bg-white py-8"></div>
      </div>

      <Footer />
    </div>
  );
};

export default About;