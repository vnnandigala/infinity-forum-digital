import React from 'react';
import { Calendar, Clock, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EventBanner = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 py-3 px-6 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span className="font-semibold text-sm">Next Event:</span>
          </div>
          
          <div className="hidden sm:flex items-center space-x-4 text-sm">
            <span className="font-medium">Wealth & Estate Masterclass</span>
            <span>•</span>
            <span>Sep 27th, 4-7 PM</span>
          </div>
          
          <div className="sm:hidden text-sm font-medium">
            Wealth & Estate - Sep 27th
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button 
            size="sm" 
            variant="outline"
            className="bg-white/20 border-slate-900/20 text-slate-900 hover:bg-white/30 text-xs px-3 py-1 h-auto"
          >
            RSVP
          </Button>
          
          <button
            onClick={() => setIsVisible(false)}
            className="hover:bg-white/20 rounded-full p-1 transition-colors"
            aria-label="Close banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventBanner;