
import React from 'react';
import { Calendar, Mic, Users, Gift, Coffee, BookOpen } from 'lucide-react';

const CoreOfferings = () => {
  const offerings = [
    {
      icon: Mic,
      title: 'Featured Expert Speakers',
      description: 'High-impact, future-focused insights from industry leaders'
    },
    {
      icon: BookOpen,
      title: 'Pre-recorded Podcasts',
      description: 'Thought-provoking content to spark meaningful dialogue'
    },
    {
      icon: Users,
      title: 'Interactive Discussions',
      description: 'Moderated panels and collaborative member dialogue'
    },
    {
      icon: Calendar,
      title: 'Networking Opportunities',
      description: 'Connect and collaborate with like-minded peers'
    },
    {
      icon: Gift,
      title: 'Curated Takeaways',
      description: 'Surprise books and resources aligned with session themes'
    },
    {
      icon: Coffee,
      title: 'Premium Hospitality',
      description: 'Artisanal coffee, fine teas, and nourishing fare'
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            <span className="mr-3">🔍</span>
            Core Offerings & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Signature Experiences</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Monthly in-person gatherings held in a warm, private setting, each session offers 
            a thoughtfully curated experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <div 
                key={index}
                className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-slate-900" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{offering.title}</h3>
                <p className="text-slate-300 leading-relaxed">{offering.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreOfferings;
