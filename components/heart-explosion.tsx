'use client';

import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export default function HeartExplosion() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const newHearts: Heart[] = [];
    const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
    const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;

    for (let i = 0; i < 50; i++) {
      const angle = (i / 50) * Math.PI * 2;
      const velocity = 5 + Math.random() * 5;
      newHearts.push({
        id: i,
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        size: 16 + Math.random() * 24,
      });
    }
    setHearts(newHearts);

    // Animate hearts
    let animationId: NodeJS.Timeout;
    const animate = () => {
      setHearts((prevHearts) =>
        prevHearts.map((heart) => ({
          ...heart,
          x: heart.x + heart.vx,
          y: heart.y + heart.vy + 0.5, // gravity
          vy: heart.vy + 0.2,
        }))
      );
      animationId = setTimeout(animate, 30);
    };
    animate();

    return () => clearTimeout(animationId);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-red-500 animate-fade-out"
          style={{
            left: heart.x,
            top: heart.y,
            fontSize: heart.size,
            opacity: 1,
            animation: `fadeOut 2s ease-out forwards`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}
