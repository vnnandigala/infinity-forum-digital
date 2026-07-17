import React from 'react';
import { Play } from 'lucide-react';

const placeholderReels = [
  { id: 1, title: 'Wisdom in Action' },
  { id: 2, title: 'Beyond Boundaries' },
  { id: 3, title: 'Legacy Builders' },
  { id: 4, title: 'Investment Insights' },
  { id: 5, title: 'Mentorship Moments' },
  { id: 6, title: 'Forum Highlights' },
  { id: 7, title: 'Founder Stories' },
  { id: 8, title: 'Impact in Motion' },
];

const ReelCard = ({ title }: { title: string }) => (
  <div className="relative flex-shrink-0 w-[220px] h-[390px] mx-3 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-black border border-amber-500/20 shadow-xl group cursor-pointer hover:border-amber-500/60 transition-all duration-300">
    {/* Animated gradient placeholder */}
    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-yellow-500/10 group-hover:from-amber-500/20 group-hover:to-yellow-500/20 transition-all duration-500"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-amber-500/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
        <Play className="w-7 h-7 text-slate-900 ml-1" fill="currentColor" />
      </div>
    </div>
    {/* Title overlay */}
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent">
      <p className="text-white font-semibold text-sm">{title}</p>
      <p className="text-amber-400 text-xs mt-1">Infinity Forum</p>
    </div>
  </div>
);

const ReelsMarquee = () => {
  const reels = [...placeholderReels, ...placeholderReels];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Moments from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Forum</span>
        </h2>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Glimpses of wisdom, connection, and impact from our community.
        </p>
      </div>

      <div className="relative">
        {/* Gradient masks for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <div className="flex marquee-track">
          {reels.map((reel, idx) => (
            <ReelCard key={`${reel.id}-${idx}`} title={reel.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsMarquee;
