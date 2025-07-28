
import React from 'react';
import { BookOpen, Heart } from 'lucide-react';

const Vision = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Limitless Learning */}
          <div className="group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Limitless Learning</h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              At Infinity Forum, we focus on holistic human well-being, guided by the six pillars of living with W.I.S.D.O.M.:
            </p>
            <ul className="text-slate-700 mb-6 space-y-2 pl-4">
              <li><strong>W:</strong> Wealth and Estate</li>
              <li><strong>I:</strong> Investments</li>
              <li><strong>S:</strong> Spirituality, Health, and Well-being</li>
              <li><strong>D:</strong> Disruptions and Innovations</li>
              <li><strong>O:</strong> Ownership and Legacy</li>
              <li><strong>M:</strong> Mentorship and Giving Back</li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              These pillars form the foundation of our approach to personal and professional growth. Members gain access to curated content, pre-recorded podcasts, and live panel discussions with industry leaders, along with peer-to-peer engagement. This dynamic platform fosters insightful exchanges, empowering individuals to thrive in today's fast-paced world and build lasting success.
            </p>
          </div>

          {/* Limitless Impact */}
          <div className="group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Limitless Impact</h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              At Infinity Forum, we create limitless impact by giving back. As angel investors, our members have access to a pipeline of vetted opportunities, carefully curated by the board, focused on underprivileged aspiring entrepreneurs who have the drive, passion, and commitment to succeed.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Forum funds or individual funds will be invested in these ventures, and members will also stay connected as mentors, guiding these entrepreneurs towards success. By empowering them, we help build businesses that uplift not only their families but also their communities, creating a ripple effect of positive change and long-term transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
