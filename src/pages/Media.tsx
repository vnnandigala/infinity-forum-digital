import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, Headphones, ExternalLink } from 'lucide-react';

const Media = () => {
  const blogs = [
    {
      title: 'The Future of Leadership in a Digital Age',
      excerpt: 'Exploring how technology is reshaping leadership principles and practices.',
      date: 'December 15, 2024',
      readTime: '5 min read'
    },
    {
      title: 'Building Wealth Through Conscious Investment',
      excerpt: 'A deep dive into sustainable and ethical investment strategies.',
      date: 'December 10, 2024',
      readTime: '8 min read'
    },
    {
      title: 'The Art of Meaningful Philanthropy',
      excerpt: 'How to create lasting impact through strategic giving.',
      date: 'December 5, 2024',
      readTime: '6 min read'
    }
  ];

  const podcasts = [
    {
      title: 'Wisdom in Action: Leadership Lessons',
      description: 'A conversation with industry pioneers about transformative leadership.',
      duration: '45 min',
      episode: 'Episode 12'
    },
    {
      title: 'The Innovation Imperative',
      description: 'Exploring breakthrough technologies that will define the next decade.',
      duration: '38 min',
      episode: 'Episode 11'
    },
    {
      title: 'Mindful Wealth: Beyond Financial Success',
      description: 'Redefining prosperity through purpose and conscious living.',
      duration: '42 min',
      episode: 'Episode 10'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Media & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Insights</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-16">
              Discover thought-provoking content, insights, and conversations that inspire transformative growth.
            </p>
          </div>
        </div>

        {/* Blogs Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <BookOpen className="inline-block w-12 h-12 mr-4 text-amber-400" />
                Latest Blogs
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                In-depth articles exploring the intersection of wisdom, innovation, and impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <div 
                  key={index}
                  className="bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-700/50 group cursor-pointer"
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
                    Read More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Podcasts Section */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <Headphones className="inline-block w-12 h-12 mr-4 text-amber-400" />
                Featured Podcasts
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Engaging conversations with visionary leaders and change-makers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {podcasts.map((podcast, index) => (
                <div 
                  key={index}
                  className="bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-700/50 group cursor-pointer"
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
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="bg-white py-8"></div>
      </div>

      <Footer />
    </div>
  );
};

export default Media;