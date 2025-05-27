
import React from 'react';
import { Target, Eye, Compass } from 'lucide-react';

const Vision = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Vision */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Eye className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6 flex items-center justify-center">
              <span className="mr-2">🌠</span> Vision
            </h3>
            <p className="text-slate-700 leading-relaxed">
              The Infinity Forum is a private community of influential wealth creators, visionary leaders, 
              and deep thinkers engaged in transformative dialogue on the many dimensions of human well-being.
            </p>
          </div>

          {/* Mission */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6 flex items-center justify-center">
              <span className="mr-2">🎯</span> Mission
            </h3>
            <p className="text-slate-700 leading-relaxed">
              We cultivate a world-class intellectual ecosystem to exchange ideas, challenge the status quo, 
              and explore expert insights—shaping the future with clarity, foresight, and collective wisdom.
            </p>
          </div>

          {/* Purpose */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Compass className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6 flex items-center justify-center">
              <span className="mr-2">🤝</span> Purpose
            </h3>
            <p className="text-slate-700 leading-relaxed">
              An exclusive intellectual community for accomplished individuals seeking a refined space 
              for strategic dialogue, financial empowerment, personal evolution, and meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
