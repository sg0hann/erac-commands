import React, { useState, useEffect, useMemo } from 'react';
import { Background } from './components/Background';
import { Header } from './components/Header';
import { CommandCard } from './components/CommandCard';
import { PotatoPackCard } from './components/PotatoPackCard';
import { HUD_COMMANDS, MISC_COMMANDS, POTATO_PACKS } from './constants';
import { Category, CommandItem, PotatoPack } from './types';
import { AnimatePresence, motion } from 'framer-motion';
import { Youtube } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'ALL'>('ALL');

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        document.querySelector('input')?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const allItems = useMemo(() => {
    return [...HUD_COMMANDS, ...MISC_COMMANDS, ...POTATO_PACKS];
  }, []);

  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      const matchesCategory = activeCategory === 'ALL' || item.category === activeCategory;
      const q = searchQuery.toLowerCase();
      
      // Determine content to search based on type
      const isPotato = 'commandBlock' in item;
      const commandText = isPotato ? (item as PotatoPack).commandBlock : (item as CommandItem).command;
      
      const matchesSearch = 
        item.title.toLowerCase().includes(q) || 
        item.description.toLowerCase().includes(q) ||
        commandText.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory, allItems]);

  return (
    <div className="min-h-screen relative font-sans selection:bg-primary/30 selection:text-white">
      <Background />
      
      {/* Top Credit Bar */}
      <a 
        href="https://www.youtube.com/@sg0hann"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-[60] block w-full bg-surfaceHighlight/20 hover:bg-surfaceHighlight/60 border-b border-border/50 backdrop-blur-md transition-all duration-300 group cursor-pointer"
      >
        <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-center gap-3 text-[11px] md:text-xs font-medium tracking-wide text-gray-500 group-hover:text-gray-300 transition-colors">
          <span>DESIGNED & ARCHITECTED BY</span>
          <span className="text-gray-300 font-display font-bold text-sm tracking-widest group-hover:text-accent transition-colors uppercase">sg0hann</span>
          <div className="w-px h-3 bg-border mx-1" />
          <div className="flex items-center gap-1.5 text-gray-500 group-hover:text-[#FF0000] transition-colors">
            <Youtube size={14} />
            <span className="font-semibold">SUBSCRIBE</span>
          </div>
        </div>
      </a>

      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Dynamic Title based on selection */}
        <div className="mb-12">
          <motion.h1 
            key={activeCategory}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-4"
          >
            {activeCategory === 'ALL' ? 'Command Center' : activeCategory}
          </motion.h1>
          <p className="text-gray-400 max-w-2xl">
            Optimize your ERA gameplay. Browse high-performance configurations, HUD tweaks, and utility commands.
          </p>
        </div>

        {filteredItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-gray-500 border border-dashed border-border rounded-2xl bg-surface/50">
            <span className="text-lg">No commands found matching coordinates "{searchQuery}"</span>
            <button 
              onClick={() => {setSearchQuery(''); setActiveCategory('ALL');}}
              className="mt-4 text-primary hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => {
                if (item.category === Category.POTATO) {
                  return (
                    <PotatoPackCard 
                      key={item.id} 
                      pack={item as PotatoPack} 
                      index={0} 
                    />
                  );
                }
                return (
                  <CommandCard 
                    key={item.id} 
                    item={item as CommandItem} 
                    index={0}
                  />
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </main>

      <footer className="border-t border-border mt-20 bg-background/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-center md:justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} ERA Nexus. Community optimized.</p>
            <div className="hidden md:block w-1 h-1 rounded-full bg-gray-700" />
            <div className="flex gap-4">
               <span className="hover:text-primary cursor-pointer transition-colors">v1.2.0 Stable</span>
               <span>•</span>
               <span className="hover:text-primary cursor-pointer transition-colors">Docs</span>
            </div>
          </div>
          
          <div className="text-xs text-gray-600 font-mono">
             SYSTEM_STATUS: <span className="text-green-500">ONLINE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;