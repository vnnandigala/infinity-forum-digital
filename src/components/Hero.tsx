
import React from 'react';
import { Infinity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import abstractBg from '../assets/abstract-innovation-bg.jpg';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${abstractBg})` }}
        ></div>
        {/* Animated overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80"></div>
        {/* Subtle animation overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent animate-pulse"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <div className="relative">
              <Infinity className="w-28 h-28 text-amber-400 drop-shadow-lg" strokeWidth={2} />
              <div className="absolute inset-0 animate-pulse">
                <Infinity className="w-28 h-28 text-amber-300/30" strokeWidth={3} />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
            The Infinity <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Forum</span>
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-slate-200 mb-8 font-light animate-fade-in animate-delay-200">
            Limitless Learning. Limitless Impact.
          </p>

          {/* Description */}
          <p className="text-xl text-slate-300 max-w-3xl mb-12 leading-relaxed animate-fade-in animate-delay-400">
            A peer-to-peer network of successful investors, entrepreneurs, and corporate leaders, driving intellectual growth, wealth creation, and social impact through collaboration and mentorship.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-600">
            <button 
              onClick={() => navigate('/apply')}
              className="bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-12 py-4 rounded-full text-lg font-semibold hover:from-amber-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Join the Forum
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="border-2 border-amber-500 text-amber-500 px-12 py-4 rounded-full text-lg font-semibold hover:bg-amber-500 hover:text-slate-900 transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
