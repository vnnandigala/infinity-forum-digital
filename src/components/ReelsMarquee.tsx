import React from 'react';

const reels = [
  { id: 'JqZTqVglfxA', title: 'Everybody is Fighting for Data' },
  { id: 'T6aYlwTAIPM', title: "Care Comes to You" },
  { id: 'zGrGsq9myBo', title: 'The Day I Forgot Who I Was' },
  { id: 'RInR3TbUzQo', title: 'What is Inner Engineering?' },
  { id: 'HrLGu8QHecM', title: 'Skepticism vs. Suspension' },
  { id: 'xt1xBIH3xd8', title: 'Leadership & Opportunity' },
];

const ReelCard = ({ id, title }: { id: string; title: string }) => (
  <a
    href={`https://youtube.com/shorts/${id}`}
    target="_blank"
    rel="noopener noreferrer"
    className="relative flex-shrink-0 w-[220px] h-[390px] mx-3 rounded-2xl overflow-hidden bg-black border border-amber-500/20 shadow-xl group hover:border-amber-500/60 transition-all duration-300"
  >
    <iframe
      src={`https://www.youtube.com/embed/${id}?loop=1&playlist=${id}&mute=1&controls=1&rel=0&modestbranding=1`}
      title={title}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
      <p className="text-white font-semibold text-sm line-clamp-2">{title}</p>
      <p className="text-amber-400 text-xs mt-1">Infinity Forum</p>
    </div>
  </a>
);

const ReelsMarquee = () => {
  const loop = [...reels, ...reels];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Moments from the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
            Forum
          </span>
        </h2>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Glimpses of wisdom, connection, and impact from our community.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none"></div>

        <div className="flex marquee-track">
          {loop.map((reel, idx) => (
            <ReelCard key={`${reel.id}-${idx}`} id={reel.id} title={reel.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsMarquee;
