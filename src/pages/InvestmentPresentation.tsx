import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Infinity, TrendingUp, Target, Users, Lightbulb, BookOpen, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import html2pdf from 'html2pdf.js';
import { toast } from 'sonner';

const InvestmentPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const navigate = useNavigate();
  const presentationRef = useRef<HTMLDivElement>(null);

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

  const handleDownloadPDF = async () => {
    if (!presentationRef.current) return;
    
    setIsDownloading(true);
    toast.info('Generating PDF... This may take a moment.');

    try {
      const opt = {
        margin: 0.5,
        filename: 'Infinity-Forum-Investment-Presentation.pdf',
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' as const }
      };

      // Create a temporary container with all slides
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      document.body.appendChild(tempContainer);

      // Render all slides
      for (let i = 0; i < slides.length; i++) {
        const slideDiv = document.createElement('div');
        slideDiv.style.width = '1100px';
        slideDiv.style.minHeight = '800px';
        slideDiv.style.padding = '40px';
        slideDiv.style.backgroundColor = '#1e293b';
        slideDiv.style.marginBottom = '20px';
        slideDiv.style.pageBreakAfter = 'always';
        
        // Clone and render slide content
        const slideContent = `
          <div style="color: white; font-family: system-ui, -apple-system, sans-serif;">
            <div style="text-align: center; margin-bottom: 40px;">
              <h1 style="font-size: 42px; font-weight: bold; margin-bottom: 10px; color: #fbbf24;">${slides[i].title}</h1>
              <p style="font-size: 20px; color: #fbbf24;">${slides[i].subtitle}</p>
            </div>
            <div style="font-size: 16px; line-height: 1.6;">
              ${getSlideContentHTML(i)}
            </div>
            <div style="text-align: center; margin-top: 40px; color: #94a3b8; font-size: 14px;">
              Slide ${i + 1} of ${slides.length} | The Infinity Forum
            </div>
          </div>
        `;
        slideDiv.innerHTML = slideContent;
        tempContainer.appendChild(slideDiv);
      }

      await html2pdf().set(opt).from(tempContainer).save();
      
      document.body.removeChild(tempContainer);
      toast.success('PDF downloaded successfully!');
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error('Failed to generate PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const getSlideContentHTML = (slideIndex: number) => {
    // Simplified HTML versions of slide content for PDF
    switch(slideIndex) {
      case 0:
        return `
          <div style="text-align: center; padding: 20px;">
            <h3 style="color: #fbbf24; margin-bottom: 20px;">The Infinity Forum</h3>
            <p style="margin-bottom: 20px;">Join us for an immersive exploration of investment opportunities across the spectrum—from traditional markets to alternative assets.</p>
            <div style="margin-top: 30px;">
              <p>📍 1414 Rivona Drive, Waterford, MI 48328</p>
              <p>👥 Limited seating available</p>
            </div>
          </div>
        `;
      case 1:
        return `
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px;">
              <h4 style="color: #fbbf24; margin-bottom: 10px;">📈 Traditional Investments</h4>
              <p>• Stocks & ETFs<br>• Bonds & Fixed Income<br>• Mutual Funds<br>• Index Funds</p>
            </div>
            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px;">
              <h4 style="color: #fbbf24; margin-bottom: 10px;">🏢 Alternative Investments</h4>
              <p>• Real Estate<br>• Private Equity<br>• Venture Capital<br>• Angel Investing</p>
            </div>
            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px;">
              <h4 style="color: #fbbf24; margin-bottom: 10px;">💎 Emerging Assets</h4>
              <p>• Cryptocurrency<br>• Digital Assets<br>• Commodities<br>• Precious Metals</p>
            </div>
            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px;">
              <h4 style="color: #fbbf24; margin-bottom: 10px;">🎯 Portfolio Strategy</h4>
              <p>• Diversification<br>• Risk Management<br>• Asset Allocation<br>• Long-term Planning</p>
            </div>
          </div>
        `;
      case 2:
        return `
          <div>
            <div style="background: rgba(251, 191, 36, 0.1); padding: 20px; border-radius: 10px; margin-bottom: 15px;">
              <h4 style="margin-bottom: 10px;">🕐 2:00 PM - 2:45 PM</h4>
              <p style="color: #fbbf24; font-weight: bold;">Introduction & Foundation</p>
              <p>Understanding the investment landscape and building blocks of wealth creation</p>
            </div>
            <div style="background: rgba(251, 191, 36, 0.1); padding: 20px; border-radius: 10px; margin-bottom: 15px;">
              <h4 style="margin-bottom: 10px;">🕑 2:45 PM - 4:00 PM</h4>
              <p style="color: #fbbf24; font-weight: bold;">Deep Dive into Asset Classes</p>
              <p>Exploring each investment type with real-world examples and case studies</p>
            </div>
            <div style="background: rgba(251, 191, 36, 0.1); padding: 20px; border-radius: 10px;">
              <h4 style="margin-bottom: 10px;">🕓 4:00 PM - 5:00 PM</h4>
              <p style="color: #fbbf24; font-weight: bold;">Portfolio Building & Q&A</p>
              <p>Practical application, portfolio strategies, and answering your questions</p>
            </div>
          </div>
        `;
      case 3:
        return `
          <div style="text-align: center;">
            <div style="font-size: 60px; margin-bottom: 20px;">👩‍💼</div>
            <h3 style="color: #fbbf24; font-size: 28px; margin-bottom: 20px;">Usha Nandigala</h3>
            <div style="text-align: left; max-width: 600px; margin: 0 auto;">
              <p style="margin: 10px 0;"><span style="color: #fbbf24;">✓</span> Ex-Amazon & Ex-GM Executive</p>
              <p style="margin: 10px 0;"><span style="color: #fbbf24;">✓</span> MBA from Purdue University</p>
              <p style="margin: 10px 0;"><span style="color: #fbbf24;">✓</span> Wealth Management Certificate from Columbia University</p>
              <p style="margin: 10px 0;"><span style="color: #fbbf24;">✓</span> Accredited Investor & Active Angel Investor</p>
              <p style="margin: 10px 0;"><span style="color: #fbbf24;">✓</span> Entrepreneur & Spiritual Guide</p>
            </div>
            <div style="margin-top: 30px; padding: 20px; background: rgba(251, 191, 36, 0.1); border-radius: 10px;">
              <p style="font-style: italic;">"I believe in empowering individuals to build wealth with wisdom, purpose, and integrity."</p>
            </div>
          </div>
        `;
      case 4:
        return `
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div style="background: rgba(251, 191, 36, 0.1); padding: 20px; border-radius: 10px;">
              <div style="font-size: 40px; margin-bottom: 10px;">🎯</div>
              <h4 style="margin-bottom: 10px;">Comprehensive Knowledge</h4>
              <p>Gain a complete understanding of the investment spectrum—from basics to advanced strategies</p>
            </div>
            <div style="background: rgba(251, 191, 36, 0.1); padding: 20px; border-radius: 10px;">
              <div style="font-size: 40px; margin-bottom: 10px;">💡</div>
              <h4 style="margin-bottom: 10px;">Practical Insights</h4>
              <p>Learn from real-world examples and case studies that you can apply immediately</p>
            </div>
            <div style="background: rgba(251, 191, 36, 0.1); padding: 20px; border-radius: 10px;">
              <div style="font-size: 40px; margin-bottom: 10px;">🤝</div>
              <h4 style="margin-bottom: 10px;">Network & Connect</h4>
              <p>Meet like-minded individuals who are serious about building wealth with purpose</p>
            </div>
            <div style="background: rgba(251, 191, 36, 0.1); padding: 20px; border-radius: 10px;">
              <div style="font-size: 40px; margin-bottom: 10px;">🚀</div>
              <h4 style="margin-bottom: 10px;">Accelerate Growth</h4>
              <p>Fast-track your investment education and avoid costly mistakes</p>
            </div>
          </div>
        `;
      case 5:
        return `
          <div style="text-align: center;">
            <div style="background: rgba(251, 191, 36, 0.1); padding: 30px; border-radius: 10px; margin-bottom: 30px;">
              <h3 style="font-size: 28px; margin-bottom: 20px;">Event Details</h3>
              <p style="margin: 10px 0; font-size: 18px;"><span style="color: #fbbf24;">📅</span> Friday, November 29th, 2025</p>
              <p style="margin: 10px 0; font-size: 18px;"><span style="color: #fbbf24;">🕐</span> 2:00 PM - 5:00 PM</p>
              <p style="margin: 10px 0; font-size: 18px;"><span style="color: #fbbf24;">📍</span> 1414 Rivona Drive, Waterford, MI 48328</p>
            </div>
            <p style="font-size: 18px; margin: 20px 0;">Limited seating • Registration required</p>
            <p style="margin-top: 30px;">Questions? Contact us at contact@infinityforum.com</p>
          </div>
        `;
      default:
        return '';
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
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-900 font-semibold"
            >
              <Download className="w-4 h-4 mr-2" />
              {isDownloading ? 'Generating PDF...' : 'Download as PDF'}
            </Button>
          </div>
        </div>

        {/* Presentation Container */}
        <div className="max-w-6xl mx-auto px-6" ref={presentationRef}>
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