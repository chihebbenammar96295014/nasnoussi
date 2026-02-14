'use client';

import { useState } from 'react';

export default function Card3D() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* 3D Card Container */}
      <div
        className="w-full max-w-md h-96 cursor-pointer perspective"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{
          perspective: '1000px',
        }}
      >
        <div
          className="relative w-full h-full transition-transform duration-500 transform"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Front of card */}
          <div
            className="absolute w-full h-full glass-effect rounded-3xl p-12 flex flex-col items-center justify-center text-center"
            style={{
              backfaceVisibility: 'hidden',
            }}
          >
            <div className="space-y-6">
              <div className="text-8xl animate-float">💝</div>
              <h3 className="text-3xl font-playfair font-bold text-primary">
                Open Me
              </h3>
              <p className="text-lg text-muted-foreground">
                Click to reveal a special message
              </p>
            </div>
          </div>

          {/* Back of card */}
          <div
            className="absolute w-full h-full glass-effect rounded-3xl p-12 flex flex-col items-center justify-center text-center"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <div className="space-y-6">
              <p className="text-xl font-playfair text-primary leading-relaxed">
                أنتِ تجعلين عالمي أجمل،
                <br />
                وقلبي أكمل،
                <br />
                وروحي أسعد.
                <br />
                <span className="text-lg italic text-primary/90">You make my world brighter, my heart fuller, and my soul happier.</span>
              </p>
              <p className="text-lg text-secondary font-playfair italic">
                أنتِ حياتي - Forever yours ❤️
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Click instruction */}
      <div className="text-center text-muted-foreground animate-pulse">
        <p className="text-sm">Click the card to reveal</p>
      </div>

      {/* Floating particles around card */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              opacity: 0.3,
            }}
          >
            ✨
          </div>
        ))}
      </div>
    </div>
  );
}
