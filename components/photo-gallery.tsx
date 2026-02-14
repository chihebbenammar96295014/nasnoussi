'use client';

import { useState } from 'react';
import Image from 'next/image';
import photo1 from '@/images/1.jpeg';
import photo2 from '@/images/2.jpeg';
import photo3 from '@/images/3.jpeg';
import photo4 from '@/images/4.jpeg';
import photo5 from '@/images/5.jpeg';
import photo6 from '@/images/6.jpeg';

export default function PhotoGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const photos = [
    {
      id: 1,
      title: 'Our First Embrace',
      src: photo1,
      alt: 'Romantic couple embracing',
    },
    {
      id: 2,
      title: 'Hands Together',
      src: photo2,
      alt: 'Hands holding with hearts',
    },
    {
      id: 3,
      title: 'Sunset Love',
      src: photo3,
      alt: 'Romantic sunset moment',
    },
    {
      id: 4,
      title: 'Romantic Dinner',
      src: photo4,
      alt: 'Candlelit romantic dinner',
    },
    {
      id: 5,
      title: 'Garden Joy',
      src: photo5,
      alt: 'Laughing in the garden',
    },
    {
      id: 6,
      title: 'Cozy Moments',
      src: photo6,
      alt: 'Warm cozy time together',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => setSelectedIndex(index)}
            className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 relative overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white font-playfair text-lg">{photo.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white rounded-2xl p-6 aspect-square flex items-center justify-center relative">
              <Image
                src={photos[selectedIndex].src}
                alt={photos[selectedIndex].alt}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <button
              className="absolute -top-10 right-0 text-white text-3xl hover:scale-125 transition-transform"
              onClick={() => setSelectedIndex(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
