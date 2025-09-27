import React from 'react';
import { Calendar, Clock, MapPin, Users, Gift, TrendingUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Event = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="text-6xl mb-4 block">🌟</span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Infinity Forum
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-amber-400 mb-8">
                This Afternoon: Wealth Management Re-imagined
              </h2>
            </div>
            
            {/* Event Details Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl mb-12">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-center space-x-4">
                  <Calendar className="w-6 h-6 text-amber-400 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 text-sm">Date & Time</p>
                    <p className="text-white font-semibold">Friday, September 27th, 2–5 pm</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-amber-400 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 text-sm">Location</p>
                    <p className="text-white font-semibold">1414 Rivona Drive, Waterford, MI 48328</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-16 px-6 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Welcome</h3>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <p className="text-slate-200 text-lg leading-relaxed text-center">
                I'm <span className="text-amber-400 font-semibold">Usha Nandigala</span> – Ex-Amazon, Ex-GM, MBA (Purdue), 
                Wealth Management (Columbia), Accredited Investor, Entrepreneur & Spiritual—and I'm excited to host 
                the inaugural Infinity Forum gathering.
              </p>
            </div>
          </div>
        </section>

        {/* Today's Focus Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">Today's Focus</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Discussion Focus */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="text-4xl mb-4">👉</div>
                <h4 className="text-xl font-semibold text-white mb-4">Wealth Management Discussion</h4>
                <p className="text-slate-300">
                  Come prepared for a lively discussion around Wealth Management—how to create and preserve wealth 
                  while living a life rich with purpose.
                </p>
              </div>

              {/* Podcast Feature */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="text-4xl mb-4">🎧</div>
                <h4 className="text-xl font-semibold text-white mb-4">Featured Podcast</h4>
                <p className="text-slate-300">
                  We will feature a pre-recorded podcast with <span className="text-amber-400 font-semibold">Daniel Beckerman</span>, 
                  a distinguished Yale & Columbia graduate and New-York based wealth manager whose insights will challenge 
                  and expand the way you think about money and legacy.
                </p>
              </div>

              {/* Angel Investor Initiative */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-xl font-semibold text-white mb-4">Giving Back Initiative</h4>
                <p className="text-slate-300">
                  I will introduce "Giving Back as Angel Investors," an initiative to support carefully vetted 
                  underprivileged entrepreneurs in India, transforming financial success into meaningful social impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Special Takeaways */}
        <section className="py-16 px-6 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-8">
              <Gift className="w-8 h-8 text-amber-400 mr-3" />
              <h3 className="text-3xl font-bold text-white">Special Takeaways</h3>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-4xl mb-4">💡</div>
              <p className="text-slate-200 text-lg leading-relaxed">
                You'll receive giveaways and reflective tools designed to help you develop a lasting mindset 
                and philosophy of wealth management, offering actionable insights long after the event.
              </p>
            </div>
          </div>
        </section>

        {/* Coming Next Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">Coming Next</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="text-4xl mb-4">✨</div>
                <h4 className="text-xl font-semibold text-white mb-4">November Session</h4>
                <p className="text-slate-300">
                  Following our W.I.S.D.O.M. framework, our November session will be a deep dive into 
                  <span className="text-amber-400 font-semibold"> Investments</span>—exploring strategies 
                  and opportunities for growing wealth with purpose.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="text-4xl mb-4">🌐</div>
                <h4 className="text-xl font-semibold text-white mb-4">Learn More</h4>
                <p className="text-slate-300 mb-4">
                  Visit <span className="text-amber-400 font-semibold">InfinityForum.club</span> to learn more 
                  about our mission of Limitless Learning, Limitless Impact.
                </p>
                <Button 
                  onClick={() => window.open('https://InfinityForum.club', '_blank')}
                  className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-900 font-semibold"
                >
                  Visit Website
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-amber-500/20 to-yellow-600/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Join Us?</h3>
            <p className="text-slate-200 text-lg mb-8">
              Reserve your spot for this transformative afternoon of wealth management insights and community building.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/rsvp')}
                className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-900 font-semibold px-8 py-3 text-lg"
              >
                RSVP Now
              </Button>
              
              <Button 
                onClick={() => navigate('/')}
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Event;