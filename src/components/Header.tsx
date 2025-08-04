import React from 'react';
import { Infinity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg flex items-center justify-center">
              <Infinity className="w-5 h-5 text-slate-900" strokeWidth={3} />
            </div>
            <span className="text-xl font-bold text-white">The Infinity Forum</span>
          </Link>
          <Link to="/apply">
            <Button className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-900 font-semibold">
              Apply to Join
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;