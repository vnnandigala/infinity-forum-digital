
import React, { useState } from 'react';
import { DollarSign, TrendingUp, Heart, Zap, Shield, Users, HandHeart, Building, Brain, GraduationCap, Target } from 'lucide-react';

const WisdomFramework = () => {
  const [selectedImpact, setSelectedImpact] = useState<string | null>(null);
  const [hoveredWisdom, setHoveredWisdom] = useState<string | null>(null);

  const wisdomAreas = [
    {
      letter: 'W',
      title: 'Wealth & Estate',
      description: 'Wealth planning, asset protection, and intelligent portfolio design',
      hoverText: 'Master wealth management and estate planning to grow and preserve assets, building legacies for future generations.',
      icon: DollarSign,
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      letter: 'I',
      title: 'Investments',
      description: 'Private equity, venture capital, and global market opportunities',
      hoverText: 'Unlock high-impact investment opportunities to build diversified portfolios and maximize returns.',
      icon: TrendingUp,
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      letter: 'S',
      title: 'Spirituality, Health & Wellness',
      description: 'Inner alignment, mental well-being, and conscious lifestyle design',
      hoverText: 'Achieve holistic growth by integrating spirituality, health, and mindfulness into daily life.',
      icon: Heart,
      gradient: 'from-pink-500 to-rose-600'
    }
  ];

  const domAreas = [
    {
      letter: 'D',
      title: 'Disruptions & Innovations',
      description: 'AI, exponential technologies, and transformative global shifts',
      hoverText: 'Lead in a changing world by leveraging emerging technologies and market disruptions to create new opportunities.',
      icon: Zap,
      gradient: 'from-orange-500 to-red-600'
    },
    {
      letter: 'O',
      title: 'Ownership & Legacy',
      description: 'Estate planning, family offices, and multi-generational impact',
      hoverText: 'Build sustainable businesses and leave a lasting legacy through smart ownership and strategic succession.',
      icon: Shield,
      gradient: 'from-purple-500 to-violet-600'
    },
    {
      letter: 'M',
      title: 'Mentorship & Giving Back',
      description: 'Philanthropic initiatives, mentorship, and meaningful contributions',
      hoverText: 'Empower others by sharing knowledge, mentoring future leaders, and making a meaningful impact through giving back.',
      icon: Users,
      gradient: 'from-cyan-500 to-teal-600'
    }
  ];

  const impactAreas = [
    {
      title: 'Yoga & Meditation Sponsorship',
      description: 'Fund mental-health programs that build resilience in underserved communities.',
      detailedDescription: "Inspired by Yoda's wisdom, we sponsor mental health programs to build resilience and well-being in underserved communities.",
      icon: Brain,
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Develop Impact VC Syndicate',
      description: 'Pool capital into mission-aligned ventures to drive scalable social and economic change.',
      detailedDescription: "Channeling Yoda's transformative power, our Syndicate Fund invests in mission-driven ventures to foster long-term social and economic impact.",
      icon: Building,
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Angel Investing & Mentorship',
      description: 'Back underprivileged founders through a board-vetted pre-seed pipeline; invest via forum or individual capital and stay hands-on as mentors.',
      detailedDescription: "Like Yoda, we mentor and invest in underprivileged entrepreneurs, providing access to a vetted pipeline and ongoing guidance for success.",
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
            <h2 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-4">
              <GraduationCap className="w-12 h-12 text-amber-500" />
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
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 cursor-pointer"
                  onMouseEnter={() => setHoveredWisdom(area.letter)}
                  onMouseLeave={() => setHoveredWisdom(null)}
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

          {/* Hover Description Area */}
          {hoveredWisdom && (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10 animate-fade-in">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-amber-400 mb-4">
                  {hoveredWisdom} – {[...wisdomAreas, ...domAreas].find(area => area.letter === hoveredWisdom)?.title}
                </h4>
                <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto">
                  {[...wisdomAreas, ...domAreas].find(area => area.letter === hoveredWisdom)?.hoverText}
                </p>
              </div>
            </div>
          )}

          <div className="text-center max-w-5xl mx-auto">
            <p className="text-lg text-slate-300 leading-relaxed">
              Limitless learning, powered by LIVING W.I.S.D.O.M.—Wealth, Investments, Spirituality, Disruptions, Ownership, Mentorship. We trade actionable insights peer-to-peer to think sharper, grow faster, and turn ideas into impact.
            </p>
          </div>

        </div>

        {/* Limitless Impact Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-4">
              <Target className="w-12 h-12 text-amber-500" />
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
                     {area.description}
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

        {/* Summary Section - Highlighted Box */}
        <div className="mt-16"></div>
        <div className="bg-gradient-to-r from-amber-500/20 to-yellow-600/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-amber-400/30 shadow-lg">
          <div className="text-center max-w-5xl mx-auto">
            <p className="text-xl font-bold text-white leading-relaxed">
              ∞ These pillars form the foundation of our approach to personal and professional growth, covering both limitless learning and limitless impact. ∞
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WisdomFramework;
