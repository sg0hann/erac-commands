import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Cpu } from 'lucide-react';
import anime from 'animejs';
import { PotatoPack } from '../types';

interface PotatoPackCardProps {
  pack: PotatoPack;
  index: number;
}

export const PotatoPackCard: React.FC<PotatoPackCardProps> = ({ pack, index }) => {
  const [copied, setCopied] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(pack.commandBlock);
    setCopied(true);

    // Micro-interaction using anime.js
    if (buttonRef.current) {
      anime({
        targets: buttonRef.current,
        scale: [1, 0.95, 1.02, 1],
        duration: 500,
        easing: 'easeOutElastic(1, .5)'
      });
      
      // Separate burst effect for icon inside button if needed, 
      // but button scale is often satisfying enough for larger buttons.
    }

    setTimeout(() => setCopied(false), 2000);
  };

  // Split commands by pipe for display purposes
  const displayCommands = pack.commandBlock.split('|').map(c => c.trim()).filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className="col-span-1 md:col-span-2 lg:col-span-3 bg-surface border border-border hover:border-accent/50 rounded-xl overflow-hidden transition-all duration-300 relative group"
    >
       <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
        {/* Info Section */}
        <div className="md:w-1/3 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-accent/10 rounded-lg border border-accent/20 text-accent">
              <Cpu size={24} />
            </div>
            <h3 className="font-display font-bold text-2xl text-white">
              {pack.title}
            </h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {pack.description}
          </p>
          <button
            ref={buttonRef}
            onClick={handleCopy}
            className="mt-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-accent hover:text-white border border-border hover:border-accent text-gray-300 py-3 px-4 rounded-lg transition-colors font-medium group/btn w-full md:w-auto"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            <span>{copied ? 'Copied to Clipboard' : 'Copy All Commands'}</span>
          </button>
        </div>

        {/* Code Preview Section */}
        <div className="md:w-2/3 bg-black/40 rounded-lg border border-border p-4 font-mono text-xs md:text-sm text-gray-300 overflow-hidden relative">
          <div className="absolute top-0 right-0 px-3 py-1 bg-border/50 text-[10px] uppercase tracking-wider text-gray-400 rounded-bl-lg">
            Preview
          </div>
          <div className="h-48 overflow-y-auto pr-2 custom-scrollbar space-y-2 pt-2">
            {displayCommands.map((cmd, i) => (
              <div key={i} className="flex gap-3 border-b border-white/5 pb-1 last:border-0 last:pb-0">
                <span className="text-gray-600 select-none">{(i + 1).toString().padStart(2, '0')}</span>
                <span className="text-accent/90">{cmd}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};