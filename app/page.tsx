'use client';

import { useEffect, useRef, useState } from 'react';
import ValentineQuestion from '@/components/valentine-question';
import WelcomeSection from '@/components/welcome-section';
import PhotoGallery from '@/components/photo-gallery';
import TypewriterMessage from '@/components/typewriter-message';
import LetterCard from '@/components/letter-card';
import Card3D from '@/components/card-3d';
import ParticleBackground from '@/components/particle-background';

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = containerRef.current;
      if (!section) return;

      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      
      parallaxElements.forEach((element) => {
        const element_html = element as HTMLElement;
        const speed = element_html.getAttribute('data-parallax');
        if (speed) {
          element_html.style.transform = `translateY(${scrollY * parseFloat(speed)}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative overflow-hidden">
      <ParticleBackground />
      
      {!showContent ? (
        <ValentineQuestion onYes={() => setShowContent(true)} />
      ) : (
        <div ref={containerRef} className="space-y-24 pb-20">
          <WelcomeSection />

          <section className="px-6 py-20">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-12 text-primary">
              <span className="animate-fade-in">عندنا لحظات جميلة معاً</span>
              <br />
              <span className="text-2xl md:text-3xl italic text-primary/80">Our Beautiful Moments with You</span>
            </h2>
            <PhotoGallery />
          </section>

          <section className="px-6 py-20 flex items-center justify-center">
            <TypewriterMessage />
          </section>

          <section className="px-6 py-20 flex items-center justify-center min-h-screen">
            <div className="w-full max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-12 text-primary">
                A Special Surprise
              </h2>
              <Card3D />
            </div>
          </section>

          <section className="px-6 py-20 flex items-center justify-center">
            <LetterCard />
          </section>

          <footer className="text-center py-12 text-muted-foreground">
            <p className="font-playfair text-2xl">بكل حبي - With all my love</p>
            <p className="mt-2 text-3xl">❤️ أنتِ حياتي ❤️</p>
          </footer>
        </div>
      )}
    </main>
  );
}
