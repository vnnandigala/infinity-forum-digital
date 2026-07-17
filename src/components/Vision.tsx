import React from 'react';
import { BookOpen, Compass, Award } from 'lucide-react';

const Vision = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Vision statement */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">Vision</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
            To build a community of exceptional individuals on a journey from
            <span className="font-semibold text-slate-900"> WISDOM </span> to
            <span className="font-semibold text-slate-900"> BEYOND </span> to
            <span className="font-semibold text-slate-900"> IMPACT</span>—learning with purpose,
            building with intention, and creating an enduring legacy for generations to come.
          </p>
          <p className="mt-4 text-amber-600 font-semibold tracking-wide">
            Wisdom. Beyond. Impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* WISDOM */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">WISDOM</h3>
            <p className="text-amber-600 font-semibold mb-4">The Foundation for Extraordinary Decisions</p>
            <p className="text-slate-700 leading-relaxed">
              Learn the right way to think. Sharpen judgment through peer-to-peer dialogue,
              expert insight, and living W.I.S.D.O.M.—the mental models behind every great decision.
            </p>
          </div>

          {/* BEYOND */}
          <a
            href="https://beyond-wine.vercel.app/membership"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center group block rounded-2xl p-6 -m-6 bg-white/60 backdrop-blur-sm border border-amber-500/20 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:border-amber-500/60 transition-all duration-300 cursor-pointer relative"
            aria-label="Explore Beyond membership"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Compass className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">BEYOND</h3>
            <p className="text-amber-600 font-semibold mb-4">Where Wisdom Becomes Opportunity</p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Beyond is our exclusive circle where members turn wisdom into action—unlocking
              curated investments, deep relationships, and rare opportunities alongside a
              community of exceptional builders.
            </p>
            <span className="inline-flex items-center text-amber-600 font-semibold group-hover:text-amber-700">
              Explore Beyond →
            </span>
          </a>

          {/* IMPACT */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">IMPACT</h3>
            <p className="text-amber-600 font-semibold mb-4">Where Success Becomes Legacy</p>
            <p className="text-slate-700 leading-relaxed">
              Create lasting wealth, significance, and legacy through mentorship,
              philanthropy, and mission-aligned investment that outlives us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
