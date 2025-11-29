import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Infinity, TrendingUp, Target, Users, Lightbulb, BookOpen, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PptxGenJS from 'pptxgenjs';
import { toast } from 'sonner';

const InvestmentPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
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

  const handleDownloadPPT = async () => {
    setIsDownloading(true);
    toast.info('Generating PowerPoint... This may take a moment.');

    try {
      const pres = new PptxGenJS();
      
      // Set presentation properties
      pres.author = 'The Infinity Forum';
      pres.company = 'The Infinity Forum';
      pres.subject = 'Deep Dive on Spectrum of Investments';
      pres.title = 'Investment Presentation - November 29th, 2025';

      // Slide 1: Title Slide
      const slide1 = pres.addSlide();
      slide1.background = { color: '1e293b' };
      slide1.addText('Deep Dive on Spectrum of Investments', {
        x: 0.5, y: 1.5, w: 9, h: 1,
        fontSize: 44, bold: true, color: 'fbbf24', align: 'center'
      });
      slide1.addText('November 29th, 2025 • 2:00 PM - 5:00 PM', {
        x: 0.5, y: 2.7, w: 9, h: 0.5,
        fontSize: 24, color: 'fbbf24', align: 'center'
      });
      slide1.addText('The Infinity Forum', {
        x: 0.5, y: 3.5, w: 9, h: 0.5,
        fontSize: 28, color: 'FFFFFF', align: 'center'
      });
      slide1.addText('Join us for an immersive exploration of investment opportunities across the spectrum—from traditional markets to alternative assets.', {
        x: 1, y: 4.3, w: 8, h: 0.8,
        fontSize: 18, color: 'e2e8f0', align: 'center'
      });
      slide1.addText('📍 1414 Rivona Drive, Waterford, MI 48328\n👥 Limited seating available', {
        x: 1, y: 5.5, w: 8, h: 0.6,
        fontSize: 16, color: 'cbd5e1', align: 'center'
      });

      // Slide 2: What You'll Learn
      const slide2 = pres.addSlide();
      slide2.background = { color: '1e293b' };
      slide2.addText('What You\'ll Learn', {
        x: 0.5, y: 0.5, w: 9, h: 0.7,
        fontSize: 40, bold: true, color: 'FFFFFF', align: 'center'
      });
      slide2.addText('Comprehensive Investment Knowledge', {
        x: 0.5, y: 1.3, w: 9, h: 0.4,
        fontSize: 20, color: 'fbbf24', align: 'center'
      });

      const categories = [
        { title: '📈 Traditional Investments', items: ['Stocks & ETFs', 'Bonds & Fixed Income', 'Mutual Funds', 'Index Funds'], x: 0.5, y: 2.2 },
        { title: '🏢 Alternative Investments', items: ['Real Estate', 'Private Equity', 'Venture Capital', 'Angel Investing'], x: 5.2, y: 2.2 },
        { title: '💎 Emerging Assets', items: ['Cryptocurrency', 'Digital Assets', 'Commodities', 'Precious Metals'], x: 0.5, y: 4.2 },
        { title: '🎯 Portfolio Strategy', items: ['Diversification', 'Risk Management', 'Asset Allocation', 'Long-term Planning'], x: 5.2, y: 4.2 }
      ];

      categories.forEach(cat => {
        slide2.addShape(pres.ShapeType.rect, {
          x: cat.x, y: cat.y, w: 4.5, h: 1.8,
          fill: { color: '334155', transparency: 50 }
        });
        slide2.addText(cat.title, {
          x: cat.x, y: cat.y + 0.1, w: 4.5, h: 0.4,
          fontSize: 18, bold: true, color: 'fbbf24'
        });
        slide2.addText(cat.items.map(i => '• ' + i).join('\n'), {
          x: cat.x + 0.2, y: cat.y + 0.6, w: 4.1, h: 1.1,
          fontSize: 14, color: 'e2e8f0'
        });
      });

      // Slide 3: Session Structure
      const slide3 = pres.addSlide();
      slide3.background = { color: '1e293b' };
      slide3.addText('Session Structure', {
        x: 0.5, y: 0.5, w: 9, h: 0.7,
        fontSize: 40, bold: true, color: 'FFFFFF', align: 'center'
      });
      slide3.addText('Three Hours of Deep Learning', {
        x: 0.5, y: 1.3, w: 9, h: 0.4,
        fontSize: 20, color: 'fbbf24', align: 'center'
      });

      const sessions = [
        { emoji: '🕐', time: '2:00 PM - 2:45 PM', title: 'Introduction & Foundation', desc: 'Understanding the investment landscape and building blocks of wealth creation', y: 2.2 },
        { emoji: '🕑', time: '2:45 PM - 4:00 PM', title: 'Deep Dive into Asset Classes', desc: 'Exploring each investment type with real-world examples and case studies', y: 3.5 },
        { emoji: '🕓', time: '4:00 PM - 5:00 PM', title: 'Portfolio Building & Q&A', desc: 'Practical application, portfolio strategies, and answering your questions', y: 4.8 }
      ];

      sessions.forEach(session => {
        slide3.addShape(pres.ShapeType.rect, {
          x: 1, y: session.y, w: 8, h: 1,
          fill: { color: 'fbbf24', transparency: 80 }
        });
        slide3.addText(`${session.emoji} ${session.time}`, {
          x: 1.2, y: session.y + 0.1, w: 7.6, h: 0.3,
          fontSize: 18, bold: true, color: 'FFFFFF'
        });
        slide3.addText(session.title, {
          x: 1.2, y: session.y + 0.4, w: 7.6, h: 0.2,
          fontSize: 16, bold: true, color: 'fbbf24'
        });
        slide3.addText(session.desc, {
          x: 1.2, y: session.y + 0.65, w: 7.6, h: 0.3,
          fontSize: 14, color: 'e2e8f0'
        });
      });

      // Slide 4: Your Host
      const slide4 = pres.addSlide();
      slide4.background = { color: '1e293b' };
      slide4.addText('Your Host', {
        x: 0.5, y: 0.5, w: 9, h: 0.7,
        fontSize: 40, bold: true, color: 'FFFFFF', align: 'center'
      });
      slide4.addText('Usha Nandigala', {
        x: 0.5, y: 1.3, w: 9, h: 0.5,
        fontSize: 32, bold: true, color: 'fbbf24', align: 'center'
      });

      const credentials = [
        '✓ Ex-Amazon & Ex-GM Executive',
        '✓ MBA from Purdue University',
        '✓ Wealth Management Certificate from Columbia University',
        '✓ Accredited Investor & Active Angel Investor',
        '✓ Entrepreneur & Spiritual Guide'
      ];

      slide4.addText(credentials.join('\n'), {
        x: 2, y: 2.5, w: 6, h: 2,
        fontSize: 18, color: 'e2e8f0', lineSpacing: 28
      });

      slide4.addShape(pres.ShapeType.rect, {
        x: 1.5, y: 4.8, w: 7, h: 0.8,
        fill: { color: 'fbbf24', transparency: 80 }
      });
      slide4.addText('"I believe in empowering individuals to build wealth with wisdom, purpose, and integrity."', {
        x: 1.7, y: 5, w: 6.6, h: 0.4,
        fontSize: 16, italic: true, color: 'e2e8f0', align: 'center'
      });

      // Slide 5: Why Attend
      const slide5 = pres.addSlide();
      slide5.background = { color: '1e293b' };
      slide5.addText('Why Attend?', {
        x: 0.5, y: 0.5, w: 9, h: 0.7,
        fontSize: 40, bold: true, color: 'FFFFFF', align: 'center'
      });
      slide5.addText('Transform Your Investment Journey', {
        x: 0.5, y: 1.3, w: 9, h: 0.4,
        fontSize: 20, color: 'fbbf24', align: 'center'
      });

      const benefits = [
        { emoji: '🎯', title: 'Comprehensive Knowledge', desc: 'Gain a complete understanding of the investment spectrum—from basics to advanced strategies', x: 0.8, y: 2.2 },
        { emoji: '💡', title: 'Practical Insights', desc: 'Learn from real-world examples and case studies that you can apply immediately', x: 5.2, y: 2.2 },
        { emoji: '🤝', title: 'Network & Connect', desc: 'Meet like-minded individuals who are serious about building wealth with purpose', x: 0.8, y: 4.2 },
        { emoji: '🚀', title: 'Accelerate Growth', desc: 'Fast-track your investment education and avoid costly mistakes', x: 5.2, y: 4.2 }
      ];

      benefits.forEach(benefit => {
        slide5.addShape(pres.ShapeType.rect, {
          x: benefit.x, y: benefit.y, w: 4, h: 1.6,
          fill: { color: 'fbbf24', transparency: 85 }
        });
        slide5.addText(benefit.emoji, {
          x: benefit.x + 0.2, y: benefit.y + 0.1, w: 3.6, h: 0.3,
          fontSize: 28
        });
        slide5.addText(benefit.title, {
          x: benefit.x + 0.2, y: benefit.y + 0.5, w: 3.6, h: 0.3,
          fontSize: 16, bold: true, color: 'FFFFFF'
        });
        slide5.addText(benefit.desc, {
          x: benefit.x + 0.2, y: benefit.y + 0.85, w: 3.6, h: 0.7,
          fontSize: 13, color: 'e2e8f0'
        });
      });

      // Slide 6: Ready to Join
      const slide6 = pres.addSlide();
      slide6.background = { color: '1e293b' };
      slide6.addText('Ready to Join?', {
        x: 0.5, y: 0.5, w: 9, h: 0.7,
        fontSize: 40, bold: true, color: 'FFFFFF', align: 'center'
      });
      slide6.addText('Secure Your Spot Today', {
        x: 0.5, y: 1.3, w: 9, h: 0.4,
        fontSize: 20, color: 'fbbf24', align: 'center'
      });

      slide6.addShape(pres.ShapeType.rect, {
        x: 2, y: 2.5, w: 6, h: 1.5,
        fill: { color: 'fbbf24', transparency: 80 }
      });
      slide6.addText('Event Details', {
        x: 2, y: 2.7, w: 6, h: 0.4,
        fontSize: 24, bold: true, color: 'FFFFFF', align: 'center'
      });
      slide6.addText('📅 Friday, November 29th, 2025\n🕐 2:00 PM - 5:00 PM\n📍 1414 Rivona Drive, Waterford, MI 48328', {
        x: 2, y: 3.2, w: 6, h: 1,
        fontSize: 16, color: 'e2e8f0', align: 'center', lineSpacing: 24
      });

      slide6.addText('Limited seating • Registration required', {
        x: 2, y: 4.5, w: 6, h: 0.3,
        fontSize: 14, color: 'cbd5e1', align: 'center'
      });

      slide6.addText('Questions? Contact us at contact@infinityforum.com', {
        x: 2, y: 5.5, w: 6, h: 0.3,
        fontSize: 14, color: 'cbd5e1', align: 'center'
      });

      // Save the presentation
      await pres.writeFile({ fileName: 'Infinity-Forum-Investment-Presentation.pptx' });
      toast.success('PowerPoint downloaded successfully!');
    } catch (error) {
      console.error('Error generating PowerPoint:', error);
      toast.error('Failed to generate PowerPoint. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      <div className="pt-20 pb-12">
        {/* Download Button */}
        <div className="max-w-6xl mx-auto px-6 mb-6">
          <div className="flex justify-end">
            <Button
              onClick={handleDownloadPPT}
              disabled={isDownloading}
              className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-900 font-semibold"
            >
              <Download className="w-4 h-4 mr-2" />
              {isDownloading ? 'Generating PowerPoint...' : 'Download as PowerPoint'}
            </Button>
          </div>
        </div>

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