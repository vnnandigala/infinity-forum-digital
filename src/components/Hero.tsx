
import React from 'react';
import { Infinity, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in">
              The Infinity <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Forum</span>
            </h1>

            {/* Tagline */}
            <p className="text-2xl md:text-3xl text-slate-200 mb-6 font-light animate-fade-in animate-delay-200">
              Limitless Learning. Limitless Impact.
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed animate-fade-in animate-delay-400">
              A peer-to-peer network of successful investors, entrepreneurs, and corporate leaders, driving intellectual growth, wealth creation, and social impact through collaboration and mentorship.
            </p>

            {/* Event Badge */}
            <div className="mb-8 animate-fade-in animate-delay-500">
              <div className="inline-flex items-center bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-6 py-3 text-amber-300">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm font-semibold">Next Event: Well Being - Jan 31st, 2-6 PM</span>
              </div>
            </div>

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

          {/* Right Column - Video */}
          <div className="animate-fade-in animate-delay-400 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-2xl border-2 border-amber-500/30 hover:border-amber-500/50 transition-all duration-300">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/z8DYVxKeKr4"
                  title="Infinity Forum Introduction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
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
