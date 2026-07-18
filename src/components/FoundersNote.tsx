import React from 'react';
import { Quote } from 'lucide-react';

const FoundersNote = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            A Note from the Founder
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
              Infinity Forum
            </span>
          </h2>
        </div>

        <div className="relative bg-slate-900/60 backdrop-blur border border-amber-500/20 rounded-3xl p-8 md:p-14 shadow-2xl">
          <Quote className="absolute -top-6 -left-2 w-16 h-16 text-amber-500/30" />

          <blockquote className="text-xl md:text-2xl italic text-amber-100 leading-relaxed border-l-4 border-amber-500 pl-6 mb-10">
            "Some of the most meaningful opportunities in my life came through people
            who generously shared their wisdom, opened doors, and believed in me.
            Infinity Forum is my way of paying that forward."
          </blockquote>

          <div className="space-y-6 text-slate-300 leading-relaxed text-[17px]">
            <p>
              Throughout my career—from engineering and technology to leadership roles
              at General Motors and Amazon, entrepreneurship, executive education, and
              investing—I have been fortunate to learn from exceptional founders,
              investors, executives, innovators, and thought leaders.
            </p>
            <p>
              I've always believed that if you want to grow, you should learn from
              people who are already where you aspire to be. That belief led me to
              become part of remarkable communities such as{' '}
              <em className="text-amber-200">Tiger 21</em>, the{' '}
              <em className="text-amber-200">Stanford Intelligent Investors Forum</em>,
              and the <em className="text-amber-200">Indian School of Future (ISF)</em>.
            </p>
            <p>
              These communities broadened my perspective, introduced me to accomplished
              entrepreneurs, investors, and family office leaders, and opened doors to
              meaningful relationships, innovative ideas, and exceptional investment
              and business opportunities. Through ISF, I have also been inspired by
              initiatives that support innovation, entrepreneurship, Junicorns, and
              rural community development across India.
            </p>
            <p>
              What has inspired me most has been the generosity of people who
              willingly shared their wisdom, relationships, and opportunities. Several
              members of communities like Tiger 21 took the time to mentor me,
              encourage my journey, and open doors that would have otherwise remained
              closed. Their generosity reinforced a belief that has stayed with me:
            </p>

            <p className="text-center text-amber-200 italic text-lg md:text-xl py-4">
              The greatest value isn't simply having access to knowledge or
              opportunities—it's sharing them with others.
            </p>

            <p>
              That belief inspired me to create{' '}
              <span className="text-white font-semibold">Infinity Forum</span>—my way
              of paying forward the generosity, wisdom, relationships, and
              opportunities that others have so generously shared with me. My vision
              is to build a trusted community where exceptional people come together
              to learn, build meaningful relationships, discover new opportunities,
              and help one another grow.
            </p>
            <p>
              We are living through one of the most exciting periods in history.
              Artificial intelligence, global connectivity, and innovation are
              transforming how we learn, invest, build businesses, and create impact.
              I believe the greatest opportunities of the future will belong to those
              who continuously learn, build trusted relationships, embrace innovation,
              and generously share their knowledge with others.
            </p>

            <p className="text-white font-semibold pt-2">
              Our journey is guided by three simple pillars:
            </p>

            <div className="grid md:grid-cols-3 gap-4 py-4">
              <div className="bg-slate-950/60 border border-amber-500/20 rounded-xl p-5">
                <p className="text-amber-400 font-bold text-lg mb-2">WISDOM</p>
                <p className="text-slate-300 text-sm">
                  Develop the perspective to make better decisions.
                </p>
              </div>
              <div className="bg-slate-950/60 border border-amber-500/20 rounded-xl p-5">
                <p className="text-amber-400 font-bold text-lg mb-2">BEYOND</p>
                <p className="text-slate-300 text-sm">
                  Transform wisdom into opportunity through curated relationships,
                  investments, and innovative resources.
                </p>
              </div>
              <div className="bg-slate-950/60 border border-amber-500/20 rounded-xl p-5">
                <p className="text-amber-400 font-bold text-lg mb-2">IMPACT</p>
                <p className="text-slate-300 text-sm">
                  Use success to strengthen families, empower communities, and create
                  an enduring legacy.
                </p>
              </div>
            </div>

            <p>
              Whether you join us to learn, invest, build a business, expand your
              network, or simply grow as a person, I hope Infinity Forum becomes a
              community where you feel inspired, challenged, supported, and encouraged
              to create lasting impact.
            </p>
            <p>
              I look forward to learning, growing, and building this community
              together.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-amber-500/20">
            <p className="text-2xl font-signature text-amber-300 italic">
              Usha Nandigala
            </p>
            <p className="text-slate-400 text-sm mt-1">Founder, Infinity Forum</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersNote;
