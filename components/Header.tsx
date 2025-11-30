import React from 'react';
import { Search, Command } from 'lucide-react';
import { Category } from '../types';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeCategory: Category | 'ALL';
  setActiveCategory: (c: Category | 'ALL') => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  searchQuery, 
  setSearchQuery, 
  activeCategory, 
  setActiveCategory 
}) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background/80 border-b border-border/50 supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row h-auto md:h-20 items-center justify-between py-4 md:py-0 gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-2 select-none">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_-3px_#00f0ff]">
              <Command className="text-black" size={20} />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-white">
              ERA<span className="text-primary">.COMMANDS</span>
            </span>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-96 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-500 group-focus-within:text-primary transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-border rounded-lg leading-5 bg-surfaceHighlight text-gray-300 placeholder-gray-500 focus:outline-none focus:bg-black focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-all shadow-sm"
              placeholder="Search commands (e.g., 'fps', 'recoil')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-600 text-xs border border-border px-1.5 py-0.5 rounded">⌘K</span>
            </div>
          </div>
          
        </div>
        
        {/* Mobile-friendly horizontal scrollable tabs */}
        <div className="flex space-x-1 md:space-x-4 overflow-x-auto pb-4 md:pb-0 md:h-12 items-center no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {(['ALL', ...Object.values(Category)] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                ${activeCategory === cat 
                  ? 'bg-white text-black shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)]' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'}
              `}
            >
              {cat === 'ALL' ? 'All Systems' : cat}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};