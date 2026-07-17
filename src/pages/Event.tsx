import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Event = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-6xl mb-4 block">🌟</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Infinity Forum Sessions
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              A journey through <span className="text-amber-400 font-semibold">Wisdom. Beyond. Impact.</span> —
              curated conversations with exceptional individuals learning with purpose, building with
              intention, and creating an enduring legacy.
            </p>
          </div>
        </section>

        {/* Past Sessions Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">Past Sessions</h3>

            {/* Holistic Human Well Being Session */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-8">
              <h4 className="text-2xl font-semibold text-amber-400 mb-4">Holistic Human Well Being</h4>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="text-slate-300">
                  <div className="text-3xl mb-2">🧘</div>
                  <h5 className="font-semibold text-white mb-2">Mind, Body & Spirit</h5>
                  <p className="text-sm">Explored holistic approaches integrating physical, mental, and spiritual health for sustained vitality.</p>
                </div>
                <div className="text-slate-300">
                  <div className="text-3xl mb-2">💡</div>
                  <h5 className="font-semibold text-white mb-2">W.I.S.D.O.M. Framework</h5>
                  <p className="text-sm">Comprehensive insights into achieving balance and fulfillment for high-net-worth individuals.</p>
                </div>
                <div className="text-slate-300">
                  <div className="text-3xl mb-2">🌿</div>
                  <h5 className="font-semibold text-white mb-2">Sustainable Practices</h5>
                  <p className="text-sm">Actionable rituals and reflective tools to cultivate lasting well-being beyond material success.</p>
                </div>
              </div>
            </div>

            {/* Deep Dive into Investments Session */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-8">
              <h4 className="text-2xl font-semibold text-amber-400 mb-4">Deep Dive into Investments</h4>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="text-slate-300">
                  <div className="text-3xl mb-2">📊</div>
                  <h5 className="font-semibold text-white mb-2">Investment Spectrum</h5>
                  <p className="text-sm">Explored the full spectrum of investment opportunities and strategies for building wealth with purpose.</p>
                </div>
                <div className="text-slate-300">
                  <div className="text-3xl mb-2">💡</div>
                  <h5 className="font-semibold text-white mb-2">W.I.S.D.O.M. Framework</h5>
                  <p className="text-sm">Comprehensive insights into diverse investment options for high-net-worth individuals.</p>
                </div>
                <div className="text-slate-300">
                  <div className="text-3xl mb-2">🎯</div>
                  <h5 className="font-semibold text-white mb-2">Strategic Planning</h5>
                  <p className="text-sm">Actionable strategies for portfolio diversification and long-term wealth creation.</p>
                </div>
              </div>
            </div>

            {/* Wealth Management Re-imagined Session */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-8">
              <h4 className="text-2xl font-semibold text-amber-400 mb-4">Wealth Management Re-imagined</h4>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="text-slate-300">
                  <div className="text-3xl mb-2">👉</div>
                  <h5 className="font-semibold text-white mb-2">Wealth Management Discussion</h5>
                  <p className="text-sm">A lively discussion around creating and preserving wealth while living a life rich with purpose.</p>
                </div>
                <div className="text-slate-300">
                  <div className="text-3xl mb-2">🎧</div>
                  <h5 className="font-semibold text-white mb-2">Featured Podcast</h5>
                  <p className="text-sm">Pre-recorded podcast with Daniel Beckerman, Yale & Columbia graduate and New York-based wealth manager.</p>
                </div>
                <div className="text-slate-300">
                  <div className="text-3xl mb-2">🤝</div>
                  <h5 className="font-semibold text-white mb-2">Giving Back Initiative</h5>
                  <p className="text-sm">Introduction to "Giving Back as Angel Investors" supporting underprivileged entrepreneurs in India.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Event;
