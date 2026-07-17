import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { BookOpen, Headphones, ExternalLink, Mail, Video } from 'lucide-react';

const Media = () => {
  const [subscribeOpen, setSubscribeOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscription submitted:', formData);
    setSubscribeOpen(false);
    setFormData({ name: '', email: '' });
  };
  const blogs = [
    {
      title: 'Yubhas Renewables pvt ltd',
      excerpt: 'A solar powered self charging AI based locomotive',
      date: 'November 1, 2025',
      readTime: '5 min read',
      url: '/brochures/yubhas-renewables-brochure.pdf'
    },
    {
      title: 'RescuingLives.org – Empowering hope, restoring freedom.',
      excerpt: 'Your donations help rescue victims of human trafficking and support their journey toward safety, dignity, and new beginnings.',
      date: 'November 1, 2025',
      readTime: '3 min read',
      url: '/brochures/rescuing-lives-brochure.jpg'
    },
    {
      title: 'Infinity Investment 101 — Learn for free. Grow with guidance. Invest with confidence.',
      excerpt: 'A FREE beginner-friendly investing class where anyone can learn the basics of building wealth.',
      date: 'November 2024',
      readTime: '5 min read',
      url: '/infinity-investment-101'
    }
  ];

  const podcasts = [
    {
      title: 'Wealth Management with Daniel Beckerman - Yale and Columbia University',
      description: 'A insightful and thought provoking discussion around the changing world of wealth managment',
      duration: '45 min',
      episode: 'Episode 1',
      url: 'https://youtu.be/RCd6wXYkJEc'
    },
    {
      title: 'Giving Back through Angel Investments with Padma Alluri and Junicorn platform',
      description: 'Exploring the intersection of philanthropy and strategic angel investing.',
      duration: '42 min',
      episode: 'Episode 2',
      url: 'https://youtu.be/K2sCDkUupyk'
    },
    {
      title: 'Deep Dive on Spectrum of Investments for Clarity and Opportunities',
      description: 'Understanding your investment spectrum is the first step toward building lasting wealth. This episode explores how clarity in your options—from traditional assets to emerging opportunities—empowers confident, purpose-driven investment decisions.',
      duration: '45 min',
      episode: 'Episode 3',
      url: 'https://youtu.be/VSrX6FJtVtQ'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Media & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Insights</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-16">
              Discover thought-provoking content, insights, and conversations that inspire transformative growth.
            </p>
          </div>
        </div>

        {/* Subscribe Section */}
        <section className="py-12 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border-y border-amber-500/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 mb-6">
              <Mail className="w-8 h-8 text-slate-900" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Connected
            </h3>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Subscribe to receive our latest insights, exclusive content, and updates on new episodes and articles.
            </p>
            <Dialog open={subscribeOpen} onOpenChange={setSubscribeOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-900 font-semibold px-8 py-3 text-lg">
                  Subscribe to Updates
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-amber-500" />
                    Subscribe to Updates
                  </DialogTitle>
                  <DialogDescription>
                    Stay connected with The Infinity Forum. Get the latest insights and updates delivered to your inbox.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubscribeSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="flex gap-3 pt-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setSubscribeOpen(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-900 font-semibold"
                    >
                      Subscribe
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Spotlight Podcast Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-amber-950/20 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
                ✦ Spotlight Episode ✦
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                A Conversation Worth <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Hearing</span>
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Our latest feature — an intimate, unfiltered exchange of ideas you won't want to miss.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/xTJmqCGTq58"
                    title="Spotlight Podcast"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-500/50"></div>
                  <Headphones className="w-6 h-6 text-amber-400" />
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-500/50"></div>
                </div>
                <h3 className="text-3xl font-bold text-white leading-tight">
                  Wisdom, Wealth & the Road Ahead
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Step inside a candid dialogue that traverses the principles of conscious wealth, the discipline of long-term thinking, and the human side of building lasting legacies. A featured conversation from The Infinity Forum.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-amber-500/20 text-amber-300 text-xs font-medium">Wealth</span>
                  <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-amber-500/20 text-amber-300 text-xs font-medium">Wisdom</span>
                  <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-amber-500/20 text-amber-300 text-xs font-medium">Legacy</span>
                  <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-amber-500/20 text-amber-300 text-xs font-medium">Mentorship</span>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=xTJmqCGTq58"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-900 font-semibold transition-all transform hover:-translate-y-0.5 shadow-lg"
                >
                  Watch on YouTube
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Podcasts Section */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                <Headphones className="inline-block w-12 h-12 mr-4 text-amber-400" />
                WISDOM
              </h2>
              <h3 className="text-2xl font-semibold text-amber-400 mb-6">
                The Foundation for Extraordinary Decisions
              </h3>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Featured podcasts — engaging conversations with visionary leaders and change-makers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {podcasts.map((podcast, index) => (
                <a 
                  key={index}
                  href={podcast.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-700/50 group cursor-pointer block"
                >
                  <div className="mb-4">
                    <span className="text-amber-400 text-sm font-medium">{podcast.episode}</span>
                    <span className="text-slate-400 text-sm ml-2">• {podcast.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                    {podcast.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {podcast.description}
                  </p>
                  
                  <div className="flex items-center text-amber-400 font-semibold group-hover:text-yellow-300 transition-colors duration-300">
                    Listen Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Blogs Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                <BookOpen className="inline-block w-12 h-12 mr-4 text-amber-400" />
                IMPACT
              </h2>
              <h3 className="text-2xl font-semibold text-amber-400 mb-6">
                Where Success Becomes Legacy
              </h3>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Giving that transforms — in-depth stories at the intersection of wisdom, innovation, and impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <a
                  key={index}
                  href={blog.url || '#'}
                  target={blog.url ? '_blank' : '_self'}
                  rel={blog.url ? 'noopener noreferrer' : undefined}
                  className="bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-700/50 group cursor-pointer block"
                >
                  <div className="mb-4">
                    <span className="text-amber-400 text-sm font-medium">{blog.date}</span>
                    <span className="text-slate-400 text-sm ml-2">• {blog.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                    {blog.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center text-amber-400 font-semibold group-hover:text-yellow-300 transition-colors duration-300">
                    {blog.url ? 'View Brochure' : 'Read More'}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default Media;