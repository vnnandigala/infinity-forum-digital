import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, Calendar } from 'lucide-react';

const InfinityInvestment101 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      <div className="pt-20">
        <article className="max-w-4xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Infinity Investment 101 — Learn for free. Grow with guidance. Invest with confidence.
            </h1>
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <span>November 2024</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-amber-500/20">
              <p className="text-slate-200 leading-relaxed mb-0">
                I am excited to introduce <span className="text-amber-400 font-semibold">Infinity Investment 101</span>, a FREE beginner-friendly investing class where anyone can learn the basics of building wealth — from stocks and ETFs to diversification, portfolio creation, and market psychology.
              </p>
            </div>

            <div className="text-slate-300 space-y-6">
              <p className="leading-relaxed">
                This experience includes <strong className="text-white">hands-on practical learning</strong> and <strong className="text-white">personal one-on-one time with me (Usha)</strong> to help answer real investment questions and guide you step-by-step in applying these concepts.
              </p>

              <p className="leading-relaxed">
                Participants who engage consistently for <strong className="text-amber-400">6–9 months</strong> will gain the confidence and skills to transition into the main <strong className="text-white">Infinity Forum</strong> as paid members — where we go deeper into advanced investment strategies, wealth structuring, and real-world opportunities.
              </p>

              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6 my-8">
                <p className="text-amber-200 font-semibold mb-2">
                  Currently 30+ individuals are signed up
                </p>
              </div>

              <div className="border-t border-slate-700 pt-8 mt-8">
                <h2 className="text-2xl font-bold text-white mb-6">Before We Begin</h2>
                <p className="leading-relaxed mb-6">
                  Please complete the following two steps:
                </p>

                <div className="space-y-4">
                  <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 hover:border-amber-500/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                          <FileText className="w-5 h-5 text-amber-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          1) Sign the Participation Operating Agreement
                        </h3>
                        <p className="text-slate-400 mb-4">
                          Complete the Google Form to get started
                        </p>
                        <Button
                          asChild
                          className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-900 font-semibold"
                        >
                          <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdmuuodEpQAgUBw3fI08coK0D-y3SSmjuFZcpnJ9hvnVrHT5A/viewform?usp=dialog"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Complete Form
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 hover:border-amber-500/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-amber-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          2) Pick your 1:1 time slot with Usha
                        </h3>
                        <p className="text-slate-400 mb-4">
                          Schedule your personal consultation session
                        </p>
                        <Button
                          asChild
                          className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-900 font-semibold"
                        >
                          <a
                            href="https://calendar.app.google/kndxKukapy5aukKv5"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Schedule Now
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-xl p-8 border border-amber-500/20 mt-12 text-center">
                <p className="text-xl font-semibold text-amber-300 italic">
                  Infinity Investment 101 — Learn for free. Grow with guidance. Invest with confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12 pt-8 border-t border-slate-700">
            <Button
              asChild
              variant="outline"
              className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10"
            >
              <a href="/media">
                ← Back to Media
              </a>
            </Button>
          </div>
        </article>

        <div className="bg-white py-8"></div>
      </div>

      <Footer />
    </div>
  );
};

export default InfinityInvestment101;
