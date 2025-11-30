import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Terminal } from 'lucide-react';
import anime from 'animejs';
import { CommandItem } from '../types';

interface CommandCardProps {
  item: CommandItem;
  index: number;
}

export const CommandCard: React.FC<CommandCardProps> = ({ item, index }) => {
  const [copied, setCopied] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(item.command);
    setCopied(true);
    
    // Micro-interaction using anime.js
    if (buttonRef.current) {
      anime({
        targets: buttonRef.current,
        scale: [1, 0.8, 1.2, 1],
        rotate: [0, -10, 10, 0],
        duration: 600,
        easing: 'easeOutElastic(1, .6)'
      });
    }

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="group relative flex flex-col justify-between h-full bg-surface border border-border rounded-xl p-6 hover:border-primary/50 transition-colors duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-surfaceHighlight rounded-lg border border-border/50 text-primary">
            <Terminal size={18} />
          </div>
          <h3 className="font-display font-bold text-xl text-white tracking-wide">
            {item.title}
          </h3>
        </div>
        
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="mt-auto">
        <div className="relative flex items-center bg-black/50 border border-border rounded-lg p-3 font-mono text-sm text-primary group-hover:shadow-[0_0_15px_-3px_rgba(0,240,255,0.2)] transition-shadow">
          <span className="truncate pr-8 select-all">{item.command}</span>
          
          <button
            ref={buttonRef}
            onClick={handleCopy}
            className="absolute right-2 p-1.5 rounded-md hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            aria-label="Copy command"
          >
            {copied ? (
              <Check size={16} className="text-green-400" />
            ) : (
              <Copy size={16} />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};