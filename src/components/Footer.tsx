
import React from 'react';
import { Infinity, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg flex items-center justify-center">
                <Infinity className="w-6 h-6 text-slate-900" strokeWidth={3} />
              </div>
              <span className="text-2xl font-bold">The Infinity Forum</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Limitless Learning. Limitless Impact. A private community of influential wealth creators, 
              visionary leaders, and deep thinkers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">W.I.S.D.O.M. Framework</h3>
            <ul className="space-y-3 text-slate-300">
              <li>Wealth & Estate</li>
              <li>Investments</li>
              <li>Spirituality, Health & Wellness</li>
              <li>Disruptions & Innovations</li>
              <li>Ownership & Legacy</li>
              <li>Mentorship & Giving Back</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="text-slate-300">unandigala@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <span className="text-slate-300">248-295-1770</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span className="text-slate-300">Private venues worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 The Infinity Forum. All rights reserved. | Crafted for visionary leaders.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
