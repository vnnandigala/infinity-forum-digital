import React from 'react';
import Header from '@/components/Header';
import FocusAreas from '@/components/FocusAreas';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      <div className="pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Us</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-16">
              Discover what drives The Infinity Forum and the principles that guide our exclusive community of visionary leaders.
            </p>
          </div>
        </div>

        {/* Focus Areas Section - Seamlessly connected */}
        <div className="-mt-16">
          <FocusAreas />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;