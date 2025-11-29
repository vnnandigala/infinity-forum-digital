import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Infinity, TrendingUp, Target, Users, Lightbulb, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const InvestmentPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: "Deep Dive on Spectrum of Investments",
      subtitle: "November 29th, 2025 • 2:00 PM - 5:00 PM",
      icon: <Infinity className="w-20 h-20 text-amber-400" />,
      content: (
        <div className="space-y-6">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg flex items-center justify-center">
              <Infinity className="w-8 h-8 text-slate-900" strokeWidth={3} />
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-amber-400 mb-4">The Infinity Forum</h3>
          <p className="text-xl text-slate-200 leading-relaxed">
            Join us for an immersive exploration of investment opportunities across the spectrum—from traditional markets to alternative assets.
          </p>
          <div className="text-slate-300 mt-8">
            <p className="mb-2">📍 1414 Rivona Drive, Waterford, MI 48328</p>
            <p>👥 Limited seating available</p>
          </div>
        </div>
      )
    },
    {
      title: "What You'll Learn",
      subtitle: "Comprehensive Investment Knowledge",
      icon: <BookOpen className="w-20 h-20 text-amber-400" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-6 border border-amber-400/20">
              <h4 className="text-xl font-semibold text-amber-400 mb-3">📈 Traditional Investments</h4>
              <ul className="text-slate-300 space-y-2">
                <li>• Stocks & ETFs</li>
                <li>• Bonds & Fixed Income</li>
                <li>• Mutual Funds</li>
                <li>• Index Funds</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-amber-400/20">
              <h4 className="text-xl font-semibold text-amber-400 mb-3">🏢 Alternative Investments</h4>
              <ul className="text-slate-300 space-y-2">
                <li>• Real Estate</li>
                <li>• Private Equity</li>
                <li>• Venture Capital</li>
                <li>• Angel Investing</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-amber-400/20">
              <h4 className="text-xl font-semibold text-amber-400 mb-3">💎 Emerging Assets</h4>
              <ul className="text-slate-300 space-y-2">
                <li>• Cryptocurrency</li>
                <li>• Digital Assets</li>
                <li>• Commodities</li>
                <li>• Precious Metals</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-amber-400/20">
              <h4 className="text-xl font-semibold text-amber-400 mb-3">🎯 Portfolio Strategy</h4>
              <ul className="text-slate-300 space-y-2">
                <li>• Diversification</li>
                <li>• Risk Management</li>
                <li>• Asset Allocation</li>
                <li>• Long-term Planning</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Session Structure",
      subtitle: "Three Hours of Deep Learning",
      icon: <Target className="w-20 h-20 text-amber-400" />,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-xl p-6 border border-amber-400/30">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">🕐</span>
                <h4 className="text-xl font-semibold text-white">2:00 PM - 2:45 PM</h4>
              </div>
              <p className="text-slate-200 font-semibold mb-2">Introduction & Foundation</p>
              <p className="text-slate-300">Understanding the investment landscape and building blocks of wealth creation</p>
            </div>

            <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-xl p-6 border border-amber-400/30">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">🕑</span>
                <h4 className="text-xl font-semibold text-white">2:45 PM - 4:00 PM</h4>
              </div>
              <p className="text-slate-200 font-semibold mb-2">Deep Dive into Asset Classes</p>
              <p className="text-slate-300">Exploring each investment type with real-world examples and case studies</p>
            </div>

            <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-xl p-6 border border-amber-400/30">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">🕓</span>
                <h4 className="text-xl font-semibold text-white">4:00 PM - 5:00 PM</h4>
              </div>
              <p className="text-slate-200 font-semibold mb-2">Portfolio Building & Q&A</p>
              <p className="text-slate-300">Practical application, portfolio strategies, and answering your questions</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Your Host",
      subtitle: "Usha Nandigala",
      icon: <Users className="w-20 h-20 text-amber-400" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-8 border border-amber-400/20">
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl">👩‍💼</span>
            </div>
            <h3 className="text-2xl font-bold text-amber-400 mb-6 text-center">Usha Nandigala</h3>
            <div className="space-y-4 text-slate-200">
              <div className="flex items-start space-x-3">
                <span className="text-amber-400 mt-1">✓</span>
                <p>Ex-Amazon & Ex-GM Executive</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-amber-400 mt-1">✓</span>
                <p>MBA from Purdue University</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-amber-400 mt-1">✓</span>
                <p>Wealth Management Certificate from Columbia University</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-amber-400 mt-1">✓</span>
                <p>Accredited Investor & Active Angel Investor</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-amber-400 mt-1">✓</span>
                <p>Entrepreneur & Spiritual Guide</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-amber-500/10 rounded-lg border border-amber-400/20">
              <p className="text-slate-300 italic text-center">
                "I believe in empowering individuals to build wealth with wisdom, purpose, and integrity."
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Why Attend?",
      subtitle: "Transform Your Investment Journey",
      icon: <Lightbulb className="w-20 h-20 text-amber-400" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-xl p-6 border border-amber-400/20">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold text-white mb-3">Comprehensive Knowledge</h4>
              <p className="text-slate-300">
                Gain a complete understanding of the investment spectrum—from basics to advanced strategies
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-xl p-6 border border-amber-400/20">
              <div className="text-4xl mb-4">💡</div>
              <h4 className="text-xl font-semibold text-white mb-3">Practical Insights</h4>
              <p className="text-slate-300">
                Learn from real-world examples and case studies that you can apply immediately
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-xl p-6 border border-amber-400/20">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-semibold text-white mb-3">Network & Connect</h4>
              <p className="text-slate-300">
                Meet like-minded individuals who are serious about building wealth with purpose
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-xl p-6 border border-amber-400/20">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-semibold text-white mb-3">Accelerate Growth</h4>
              <p className="text-slate-300">
                Fast-track your investment education and avoid costly mistakes
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Ready to Join?",
      subtitle: "Secure Your Spot Today",
      icon: <TrendingUp className="w-20 h-20 text-amber-400" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-xl p-8 border border-amber-400/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Event Details</h3>
            <div className="space-y-4 text-slate-200 text-lg">
              <div className="flex items-center justify-center space-x-3">
                <span className="text-amber-400">📅</span>
                <p>Friday, November 29th, 2025</p>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="text-amber-400">🕐</span>
                <p>2:00 PM - 5:00 PM</p>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="text-amber-400">📍</span>
                <p>1414 Rivona Drive, Waterford, MI 48328</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={() => navigate('/rsvp')}
              className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-900 font-bold text-lg px-8 py-6 h-auto"
            >
              RSVP Now
            </Button>
            <p className="text-slate-400 mt-4">Limited seating • Registration required</p>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-amber-400/10">
            <p className="text-slate-300 text-center">
              Questions? Contact us at{' '}
              <a href="mailto:contact@infinityforum.com" className="text-amber-400 hover:text-amber-300 underline">
                contact@infinityforum.com
              </a>
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      <div className="pt-20 pb-12">
        {/* Presentation Container */}
        <div className="max-w-6xl mx-auto px-6">
          {/* Slide Content */}
          <div className="bg-slate-800/50 rounded-3xl p-12 border border-amber-400/20 shadow-2xl min-h-[600px] flex flex-col">
            {/* Slide Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-6">
                {slides[currentSlide].icon}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl text-amber-400">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            {/* Slide Content */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full">
                {slides[currentSlide].content}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12 pt-6 border-t border-slate-700">
              <Button
                onClick={prevSlide}
                variant="outline"
                className="border-amber-400/30 text-amber-400 hover:bg-amber-400/10"
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Previous
              </Button>

              {/* Slide Indicators */}
              <div className="flex items-center space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-amber-400 w-8'
                        : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                onClick={nextSlide}
                variant="outline"
                className="border-amber-400/30 text-amber-400 hover:bg-amber-400/10"
                disabled={currentSlide === slides.length - 1}
              >
                Next
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-4 text-slate-400">
              Slide {currentSlide + 1} of {slides.length}
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center mt-8">
            <Button
              onClick={() => navigate('/event')}
              variant="ghost"
              className="text-slate-300 hover:text-amber-400 hover:bg-white/5"
            >
              ← Back to Event Page
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InvestmentPresentation;