
import React from 'react';
import { DollarSign, TrendingUp, Heart, Zap, Shield, Users } from 'lucide-react';

const WisdomFramework = () => {
  const wisdomAreas = [
    {
      letter: 'W',
      title: 'Wealth & Estate',
      description: 'Wealth planning, asset protection, and intelligent portfolio design',
      icon: DollarSign,
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      letter: 'I',
      title: 'Investments',
      description: 'Private equity, venture capital, and global market opportunities',
      icon: TrendingUp,
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      letter: 'S',
      title: 'Spirituality, Health & Wellness',
      description: 'Inner alignment, mental well-being, and conscious lifestyle design',
      icon: Heart,
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      letter: 'D',
      title: 'Disruptions & Innovations',
      description: 'AI, exponential technologies, and transformative global shifts',
      icon: Zap,
      gradient: 'from-orange-500 to-red-600'
    },
    {
      letter: 'O',
      title: 'Ownership & Legacy',
      description: 'Estate planning, family offices, and multi-generational impact',
      icon: Shield,
      gradient: 'from-purple-500 to-violet-600'
    },
    {
      letter: 'M',
      title: 'Mentorship & Giving Back',
      description: 'Philanthropic initiatives, mentorship, and meaningful contributions',
      icon: Users,
      gradient: 'from-cyan-500 to-teal-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Limitless <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">Learning</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
            At Infinity Forum, we focus on holistic human well-being, guided by the six pillars of living with W.I.S.D.O.M.:
          </p>
          <div className="text-lg text-slate-600 max-w-4xl mx-auto space-y-2 mb-8">
            <p><strong>W:</strong> Wealth and Estate</p>
            <p><strong>I:</strong> Investments</p>
            <p><strong>S:</strong> Spirituality, Health, and Well-being</p>
            <p><strong>D:</strong> Disruptions and Innovations</p>
            <p><strong>O:</strong> Ownership and Legacy</p>
            <p><strong>M:</strong> Mentorship and Giving Back</p>
          </div>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto">
            These pillars form the foundation of our approach to personal and professional growth. Members gain access to curated content, pre-recorded podcasts, and live panel discussions with industry leaders, along with peer-to-peer engagement. This dynamic platform fosters insightful exchanges, empowering individuals to thrive in today's fast-paced world and build lasting success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wisdomAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div 
                key={area.letter}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${area.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex items-center mb-4">
                  <span className={`text-4xl font-bold bg-gradient-to-r ${area.gradient} bg-clip-text text-transparent mr-3`}>
                    {area.letter}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">{area.title}</h3>
                </div>
                
                <p className="text-slate-600 leading-relaxed">{area.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WisdomFramework;
