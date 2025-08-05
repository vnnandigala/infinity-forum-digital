
import React, { useState } from 'react';
import { DollarSign, TrendingUp, Heart, Zap, Shield, Users, HandHeart, Building, Brain } from 'lucide-react';

const WisdomFramework = () => {
  const [selectedImpact, setSelectedImpact] = useState<string | null>(null);

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

  const impactAreas = [
    {
      title: 'Yoga & Meditation Program Sponsorship',
      description: 'Sponsoring programs for mental health support',
      detailedDescription: "Inspired by Yoda's teachings on balance and mindfulness, we sponsor yoga and meditation programs for mental health support, fostering well-being and resilience in underserved communities.",
      icon: Brain,
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Development through Syndicate Fund for impact investments',
      description: 'Fund high-impact ventures that align with our values',
      detailedDescription: "Just as Yoda uses his knowledge of the Force for greater good, our Syndicate Fund for Impact VC Investments helps channel resources into ventures that align with our core values. By supporting impactful startups and social enterprises, we drive long-term social and economic change, creating opportunities for growth and progress worldwide.",
      icon: Building,
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Angel Investment & Mentorship',
      description: 'Pre-seed for underprivileged entrepreneurs internationally',
      detailedDescription: "Like Yoda's role as a mentor, we support aspiring entrepreneurs from underprivileged backgrounds through angel investments and mentorship. Our members gain access to a pipeline of vetted opportunities, focused on individuals who have the drive, passion, and commitment to succeed. These ventures are funded either through forum funds or individual investments, and our members remain actively involved as mentors, guiding these entrepreneurs toward success and impact.",
      icon: HandHeart,
      gradient: 'from-emerald-500 to-green-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Limitless Learning Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 mb-12 border border-white/20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Limitless <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">Learning</span>
            </h2>
            <h3 className="text-2xl font-semibold text-amber-400 mb-8">
              Living W.I.S.D.O.M.
            </h3>
            
            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Our dialogues explore the full spectrum of human well-being and future readiness—anchored in the transformative topics of <span className="font-semibold text-white">W.I.S.D.O.M.</span>
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

          <div className="text-center max-w-5xl mx-auto">
            <p className="text-lg text-slate-300 leading-relaxed">
              These pillars form the foundation of our approach to personal and professional growth, covering both limitless learning and limitless impact. Members gain access to curated content, pre-recorded podcasts, and live panel discussions with industry leaders, along with peer-to-peer engagement.
            </p>
          </div>
        </div>

        {/* Limitless Impact Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Limitless <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">Impact</span>
            </h2>
            <h3 className="text-2xl font-semibold text-amber-400 mb-4">
              Living Y.O.D.A.
            </h3>
            <div className="max-w-5xl mx-auto">
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Empower entrepreneurs. Elevate mental health. Invest for transformational change.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              const isSelected = selectedImpact === area.title;
              return (
                <div 
                  key={area.title}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 cursor-pointer"
                  onMouseEnter={() => setSelectedImpact(area.title)}
                  onMouseLeave={() => setSelectedImpact(null)}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${area.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{area.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {isSelected ? area.detailedDescription : area.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Detailed Description Area */}
          {selectedImpact && (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10 animate-fade-in">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-amber-400 mb-4">
                  {impactAreas.find(area => area.title === selectedImpact)?.title}
                </h4>
                <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto">
                  {impactAreas.find(area => area.title === selectedImpact)?.detailedDescription}
                </p>
              </div>
            </div>
          )}

          <div className="text-center max-w-5xl mx-auto">
            <p className="text-lg text-slate-300 leading-relaxed">
              We create limitless impact by empowering underprivileged entrepreneurs, elevating mental health through yoga and meditation, and investing strategically for transformational change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WisdomFramework;
