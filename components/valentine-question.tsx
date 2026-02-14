'use client';

import { useState } from 'react';
import HeartExplosion from './heart-explosion';
import { Button } from '@/components/ui/button';

interface ValentineQuestionProps {
  onYes: () => void;
}

export default function ValentineQuestion({ onYes }: ValentineQuestionProps) {
  const [showQuestion, setShowQuestion] = useState(false);
  const [explode, setExplode] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [yesButtonScale, setYesButtonScale] = useState(1);
  const [clickCount, setClickCount] = useState(0);

  const handleYes = () => {
    setExplode(true);
    setTimeout(() => {
      onYes();
    }, 2000);
  };

  const handleNo = () => {
    const newX = (Math.random() - 0.5) * 400;
    const newY = (Math.random() - 0.5) * 300;
    setNoButtonPosition({ x: newX, y: newY });
    setYesButtonScale(1 + (clickCount + 1) * 0.15);
    setClickCount(clickCount + 1);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {explode && <HeartExplosion />}
      
      <div className="text-center z-10 px-6">
        {!showQuestion ? (
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-primary">
              Nasnoussi, j'ai une question importante…
            </h1>
            <p className="text-2xl md:text-3xl italic text-primary/80 font-light">
              أنتِ نور عيني وجمال الحياة
            </p>
            <Button
              onClick={() => setShowQuestion(true)}
              className="px-12 py-6 text-xl bg-primary hover:bg-secondary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Clique ici
            </Button>
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-primary">
              Veux-tu être ma Valentine, Nasnoussi ?
            </h1>
            <p className="text-2xl md:text-3xl italic text-primary/80 font-light">
              حبك ينسيني كل همومي وألمي
            </p>
            <div className="flex gap-6 justify-center items-center flex-wrap">
              <Button
                onClick={handleYes}
                style={{ transform: `scale(${yesButtonScale})` }}
                className="px-12 py-6 text-xl bg-primary hover:bg-secondary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                Oui ❤️
              </Button>
              <Button
                onClick={handleNo}
                onMouseEnter={handleNo}
                style={{
                  transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                }}
                className="px-12 py-6 text-xl bg-gray-400 hover:bg-gray-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Non
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-float opacity-40"
            style={{
              left: `${20 + i * 20}%`,
              top: `${10 + i * 15}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    </div>
  );
}
