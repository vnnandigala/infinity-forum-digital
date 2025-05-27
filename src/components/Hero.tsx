
import React from 'react';
import { Infinity } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23374151" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Infinity Logo */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 mb-6 shadow-2xl">
            <Infinity className="w-12 h-12 text-slate-900" strokeWidth={3} />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in animate-delay-200">
          The Infinity <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Forum</span>
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl text-slate-300 mb-8 font-light animate-fade-in animate-delay-400">
          Limitless Learning. Limitless Impact.
        </p>

        {/* Description */}
        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in animate-delay-600">
          A private community of influential wealth creators, visionary leaders, and deep thinkers 
          engaged in transformative dialogue on the many dimensions of human well-being.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in animate-delay-800">
          <button className="bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-12 py-4 rounded-full text-lg font-semibold hover:from-amber-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Join the Forum
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
