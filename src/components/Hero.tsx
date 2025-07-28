
import React from 'react';
import { Infinity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          preload="auto"
        >
          <source src="/lovablebg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Fallback background gradient - only if video fails */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      </div>
      
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
        <p className="text-xl text-slate-400 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in animate-delay-600">
          Infinity Forum connects successful investors, corporate leaders, and entrepreneurs in a private peer-to-peer community, empowering members with knowledge, opportunities, and mentorship to drive wealth creation, global impact, and give back.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-800">
          <button 
            onClick={() => navigate('/contact')}
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
