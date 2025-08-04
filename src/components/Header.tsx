import React, { useState, useEffect } from 'react';
import { Infinity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const headerClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
    ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}
    bg-black/60 backdrop-blur-xl border-b border-slate-800/30
  `;

  return (
    <div className={headerClasses}>
      <div className="max-w-7xl mx-auto py-4">
        <div className="flex items-center justify-between w-full px-6">
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg flex items-center justify-center">
              <Infinity className="w-5 h-5 text-slate-900" strokeWidth={3} />
            </div>
            <span className="text-xl font-bold text-white">The Infinity Forum</span>
          </Link>
          <div className="flex items-center space-x-4 flex-shrink-0">
            <Link to="/about">
              <Button variant="ghost" className="text-white hover:text-amber-400 hover:bg-white/10">
                About Us
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" className="text-white hover:text-amber-400 hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
            <Link to="/apply">
              <Button className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-900 font-semibold">
                Apply to Join
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;