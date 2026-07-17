import React from 'react';
import { Play, Coins, LineChart, Heart, Sparkles, Cpu, Crown, HandHeart } from 'lucide-react';

type Talk = {
  letter: string;
  pillar: string;
  title: string;
  speaker: string;
  credentials: string;
  overview: string;
  icon: React.ComponentType<{ className?: string }>;
  bonus?: boolean;
};

const talks: Talk[] = [
  {
    letter: 'W',
    pillar: 'Wealth & Estate',
    title: 'Building, Protecting & Transferring Wealth',
    speaker: 'Daniel Beckerman',
    credentials: 'Wealth Advisor | Columbia University | Family Office & Estate Planning Strategist',
    overview:
      'Learn proven strategies for building multi-generational wealth through tax-efficient investing, estate planning, trusts, charitable giving, and family governance.',
    icon: Coins,
  },
  {
    letter: 'I',
    pillar: 'Investments',
    title: 'Investing Across Public & Private Markets',
    speaker: 'Ashish Shah',
    credentials: 'Investment Executive | Public & Private Markets Investor',
    overview:
      'Explore investment frameworks across equities, venture capital, private equity, real estate, alternatives, and portfolio construction for long-term wealth creation.',
    icon: LineChart,
  },
  {
    letter: 'S',
    pillar: 'Spirituality & Health',
    title: 'Building Health, Balance & Inner Well-Being',
    speaker: 'Dr. Suresh Alankar',
    credentials: 'Surgeon | Isha Meditator | Health & Wellness Advocate',
    overview:
      'Discover how physical health, mental clarity, and spiritual practices create the foundation for sustained success and a meaningful life.',
    icon: Heart,
  },
  {
    letter: '✦',
    pillar: 'Bonus Perspective',
    title: 'Healthcare Innovation & Patient-Centered Care',
    speaker: 'Jyothi Devakumar',
    credentials: 'Healthcare Executive | Digital Health Leader',
    overview:
      'Understand how innovation and technology are transforming healthcare while improving patient outcomes and leadership in the industry.',
    icon: Sparkles,
    bonus: true,
  },
  {
    letter: 'D',
    pillar: 'Disruptions & Innovation',
    title: 'Artificial Intelligence, Entrepreneurship & the Future',
    speaker: 'Vihaar Nandigala',
    credentials: 'Founder & CEO, OrangeSlice (YC W25) | University of Michigan',
    overview:
      'Learn how AI, startups, and disruptive technologies are reshaping industries and creating the next generation of billion-dollar companies.',
    icon: Cpu,
  },
  {
    letter: 'O',
    pillar: 'Ownership & Legacy',
    title: 'Leadership, Ownership & Building Your Legacy',
    speaker: 'Esther Acosta',
    credentials: 'Harvard University | Executive Leadership & Governance Advisor',
    overview:
      'Gain insights into executive leadership, ownership thinking, governance, and creating a legacy that extends beyond financial success.',
    icon: Crown,
  },
  {
    letter: 'M',
    pillar: 'Mentorship & Giving Back',
    title: 'Mentorship, Community & Creating Impact',
    speaker: 'Poondla Siddharth Reddy',
    credentials: 'Entrepreneur | Investor | Founder, Janana Foundation',
    overview:
      'Learn how mentorship, community building, and purposeful philanthropy can multiply success while creating opportunities for future generations.',
    icon: HandHeart,
  },
];

const WisdomPerspectives = () => {
  return (
    <section className="py-20 bg-slate-900/60 border-y border-amber-500/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Inaugural Collection</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            A curated series of conversations with industry leaders, investors, entrepreneurs, and thought leaders—designed to help members build wealth, broaden perspective, and create lasting impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {talks.map((talk, idx) => {
            const Icon = talk.icon;
            return (
              <div
                key={idx}
                className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  talk.bonus
                    ? 'bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-900 border-amber-500/40'
                    : 'bg-slate-800/70 border-slate-700/60 hover:border-amber-500/40'
                }`}
              >
                {/* Placeholder video slot */}
                <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-black flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-yellow-500/5"></div>
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span
                      className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-lg ${
                        talk.bonus
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-gradient-to-br from-amber-500 to-yellow-600 text-slate-900'
                      }`}
                    >
                      {talk.letter}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-slate-400">
                      {talk.pillar}
                    </span>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-amber-500/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 text-slate-900 ml-1" fill="currentColor" />
                  </div>
                  <span className="absolute bottom-3 right-4 text-xs text-slate-500 italic">Coming soon</span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-5 h-5 text-amber-400" />
                    <span className="text-xs font-semibold text-amber-400 tracking-widest uppercase">
                      WISDOM Perspectives · 2025–26
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {talk.title}
                  </h3>
                  <p className="text-amber-300 font-semibold text-sm mb-1">{talk.speaker}</p>
                  <p className="text-slate-400 text-xs mb-4">{talk.credentials}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{talk.overview}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WisdomPerspectives;
