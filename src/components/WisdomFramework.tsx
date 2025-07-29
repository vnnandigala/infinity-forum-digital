
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
          <h2 className="text-5xl font-bold text-slate-900 mb-8">
            Limitless <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">Learning</span>
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              At Infinity Forum, we focus on holistic human well-being, guided by the six pillars of living with <span className="font-semibold text-slate-800">W.I.S.D.O.M.</span>:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
                <div className="text-2xl font-bold text-emerald-600 mb-2">W</div>
                <div className="text-sm font-medium text-slate-800">Wealth and Estate</div>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
                <div className="text-2xl font-bold text-blue-600 mb-2">I</div>
                <div className="text-sm font-medium text-slate-800">Investments</div>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
                <div className="text-2xl font-bold text-pink-600 mb-2">S</div>
                <div className="text-sm font-medium text-slate-800">Spirituality, Health, and Well-being</div>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
                <div className="text-2xl font-bold text-orange-600 mb-2">D</div>
                <div className="text-sm font-medium text-slate-800">Disruptions and Innovations</div>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
                <div className="text-2xl font-bold text-purple-600 mb-2">O</div>
                <div className="text-sm font-medium text-slate-800">Ownership and Legacy</div>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
                <div className="text-2xl font-bold text-cyan-600 mb-2">M</div>
                <div className="text-sm font-medium text-slate-800">Mentorship and Giving Back</div>
              </div>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              These pillars form the foundation of our approach to personal and professional growth. Members gain access to curated content, pre-recorded podcasts, and live panel discussions with industry leaders, along with peer-to-peer engagement. This dynamic platform fosters insightful exchanges, empowering individuals to thrive in today's fast-paced world and build lasting success.
            </p>
          </div>
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
