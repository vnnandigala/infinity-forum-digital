
import React from 'react';
import { Brain, DollarSign, User, Heart, Lightbulb } from 'lucide-react';

const FocusAreas = () => {
  const areas = [
    {
      icon: Brain,
      title: 'Intellectual Growth',
      description: 'Exploring emerging trends, global shifts, and future-defining technologies through thought-provoking dialogue',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: DollarSign,
      title: 'Financial Empowerment',
      description: 'Strategic insights into wealth management, estate planning, tax efficiency, and investment opportunities',
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      icon: User,
      title: 'Personal Development',
      description: 'Advancing lifestyle design, legacy building, wellness, spirituality, and conscious leadership',
      gradient: 'from-purple-500 to-violet-600'
    },
    {
      icon: Heart,
      title: 'Philanthropy & Giving Back',
      description: 'Championing mentorship, purposeful contribution, and community impact through aligned service',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      icon: Lightbulb,
      title: 'Driving Meaningful Innovation',
      description: 'Supporting transformative ideas, ventures, and technologies that elevate human well-being',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            <span className="mr-3">📚</span>
            Focus Areas
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Five core pillars that guide our transformative conversations and collective growth.
          </p>
        </div>

        <div className="space-y-8">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div 
                key={index}
                className="bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-700 group"
              >
                <div className="flex items-start space-x-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${area.gradient} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
                    <p className="text-slate-300 leading-relaxed text-lg">{area.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
