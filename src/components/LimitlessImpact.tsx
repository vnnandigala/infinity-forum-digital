import React from 'react';
import { Heart, Users, TrendingUp } from 'lucide-react';

const LimitlessImpact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Limitless <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">Impact</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Giving Back</h3>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Angel Investing</h3>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Mentorship</h3>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <p className="text-lg text-white leading-relaxed">
            At Infinity Forum, we create limitless impact by giving back. As angel investors, our members have access to a pipeline of vetted opportunities, carefully curated by the board, focused on underprivileged aspiring entrepreneurs who have the drive, passion, and commitment to succeed. Forum funds or individual funds will be invested in these ventures, and members will also stay connected as mentors, guiding these entrepreneurs towards success. By empowering them, we help build businesses that uplift not only their families but also their communities, creating a ripple effect of positive change and long-term transformation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LimitlessImpact;