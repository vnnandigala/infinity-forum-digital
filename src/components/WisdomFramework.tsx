
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
    }
  ];

  const domAreas = [
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
        {/* Limitless Learning Section - WIS */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-8">
            Limitless <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">Learning</span>
          </h2>
          
          <div className="max-w-5xl mx-auto mb-12">
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              At Infinity Forum, we focus on holistic human well-being, guided by the first three pillars of living with <span className="font-semibold text-slate-800">W.I.S.</span>:
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[...wisdomAreas, ...domAreas].map((area, index) => {
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

        <div className="text-center max-w-5xl mx-auto mb-20">
          <p className="text-lg text-slate-600 leading-relaxed">
            These pillars form the foundation of our approach to personal and professional growth, covering both limitless learning and limitless impact. Members gain access to curated content, pre-recorded podcasts, and live panel discussions with industry leaders, along with peer-to-peer engagement.
          </p>
        </div>

        {/* Limitless Impact Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Limitless <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">Impact</span>
            </h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                We create limitless impact by giving back and empowering the next generation of entrepreneurs.
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-lg text-white leading-relaxed">
              At Infinity Forum, we create limitless impact by giving back. As angel investors, our members have access to a pipeline of vetted opportunities, carefully curated by the board, focused on underprivileged aspiring entrepreneurs who have the drive, passion, and commitment to succeed. Forum funds or individual funds will be invested in these ventures, and members will also stay connected as mentors, guiding these entrepreneurs towards success. By empowering them, we help build businesses that uplift not only their families but also their communities, creating a ripple effect of positive change and long-term transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WisdomFramework;
