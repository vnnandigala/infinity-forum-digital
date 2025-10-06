import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const UpcomingEvents = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Next Event
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Join fellow members for our upcoming exclusive event focused on wealth building and strategic planning.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Event Details */}
              <div className="flex-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Investments Masterclass
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Explore investment strategies and opportunities for growing wealth with purpose. 
                    Following our W.I.S.D.O.M. framework, this session will provide actionable insights 
                    into strategic investing for high-net-worth individuals.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-slate-200">
                    <Calendar className="w-5 h-5 text-amber-400" />
                    <span className="font-semibold">December 7th, 2024</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-slate-200">
                    <Clock className="w-5 h-5 text-amber-400" />
                    <span className="font-semibold">2:00 PM - 5:00 PM EST</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-slate-200">
                    <MapPin className="w-5 h-5 text-amber-400" />
                    <span className="font-semibold">Exclusive Member Location</span>
                    <span className="text-slate-400 text-sm">(Details sent to confirmed attendees)</span>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="lg:flex-shrink-0 text-center lg:text-left">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-4">
                    <Calendar className="w-8 h-8 text-amber-400" />
                  </div>
                  <p className="text-slate-300 text-sm mb-2">Limited to Members Only</p>
                  <p className="text-white font-semibold">Reserve Your Spot</p>
                </div>
                
                <Button 
                  onClick={() => navigate('/rsvp')}
                  className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-900 font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  RSVP Now
                </Button>
                
                <p className="text-slate-400 text-xs mt-3">
                  Members receive event details via email
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-2xl mx-auto mt-8 text-center">
          <p className="text-slate-400 text-sm">
            Not a member yet? 
            <a href="/apply" className="text-amber-400 hover:text-amber-300 font-semibold ml-1 underline">
              Apply for membership
            </a> 
            to join our exclusive community and access events like this.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;