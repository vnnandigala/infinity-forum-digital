import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WisdomPerspectives from '@/components/WisdomPerspectives';

const Media = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />

      <div className="pt-20">
        {/* Hero Section */}
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold tracking-widest uppercase mb-6">
              2025–2026 Inaugural Collection
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              WISDOM <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Perspectives</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Timeless conversations with exceptional leaders—capturing the insights, strategies, and perspectives that shape wealth, leadership, innovation, and legacy.
            </p>
          </div>
        </div>

        {/* WISDOM Perspectives Collection */}
        <WisdomPerspectives />
      </div>

      <Footer />
    </div>
  );
};

export default Media;