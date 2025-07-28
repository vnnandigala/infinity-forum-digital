
import React from 'react';
import { Heart } from 'lucide-react';

const Vision = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Limitless Impact */}
        <div className="group">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 mb-6 group-hover:scale-110 transition-transform duration-300">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-8">Our Mission</h2>
          <div className="text-left max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-slate-700 leading-relaxed">
              At Infinity Forum, we create limitless impact by giving back. As angel investors, our members have access to a pipeline of vetted opportunities, carefully curated by the board, focused on underprivileged aspiring entrepreneurs who have the drive, passion, and commitment to succeed.
            </p>
            <p className="text-xl text-slate-700 leading-relaxed">
              Forum funds or individual funds will be invested in these ventures, and members will also stay connected as mentors, guiding these entrepreneurs towards success. By empowering them, we help build businesses that uplift not only their families but also their communities, creating a ripple effect of positive change and long-term transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
