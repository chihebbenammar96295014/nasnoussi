'use client';

import { useEffect, useState } from 'react';

export default function TypewriterMessage() {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  const fullText = "أنتِ سري الأول وآخر أحلامي - You are my first secret and the end of my dreams. Every moment with you is a treasure, nasnoussi. Your love is my sanctuary, and you make everything in life beautiful and meaningful. ❤️";

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      <div className="glass-effect rounded-3xl p-12 md:p-16 shadow-2xl">
        <p className="text-2xl md:text-3xl font-playfair text-foreground leading-relaxed text-center min-h-32 flex items-center justify-center">
          {displayedText}
          {index < fullText.length && (
            <span className="ml-1 animate-pulse text-primary">|</span>
          )}
        </p>
      </div>

      <div className="flex justify-center gap-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-primary opacity-60 animate-float"
            style={{
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
