"use client";

import { useState } from "react";

interface GallerySectionProps {
  showToast: (text: string) => void;
}

export default function GallerySection({ showToast }: GallerySectionProps) {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  const photos = [
    {
      src: "/images/couple.jpg",
      title: "The Glasshouse Sanctuary",
      location: "Glasshouse Conservatory, Verona",
    },
    {
      src: "/images/bride.jpg",
      title: "Eternal Covenant",
      location: "Handcrafted Gold",
    },
  ];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-8 max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <span className="text-xs uppercase tracking-[0.2em] font-bold text-brand-secondary">
          MOMENTS CAPTURED
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-brand-primary">
          Visual Poetry
        </h2>
        <p className="text-xs sm:text-sm text-brand-on-surface-variant font-light">
          Memories leading up to the celebration of our covenant
        </p>
      </div>

      {/* Asymmetric Editorial Gallery Grid */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* Main Large Image */}
        <div
          onClick={() => setActivePhoto(photos[0].src)}
          className="md:col-span-2 group relative h-80 sm:h-96 rounded-xl overflow-hidden cursor-pointer shadow-paper border border-brand-outline-variant/30"
        >
          <img
            src={photos[0].src}
            alt="Glasshouse Sanctuary"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
            <div className="text-white space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-amber-200 font-bold">
                THE SANCTUARY
              </span>
              <p className="font-serif text-lg">{photos[0].title}</p>
            </div>
          </div>
        </div>

        {/* Top Right Photo */}
        <div
          onClick={() => setActivePhoto(photos[1].src)}
          className="group relative h-80 sm:h-96 rounded-xl overflow-hidden cursor-pointer shadow-paper border border-brand-outline-variant/30"
        >
          <img
            src={photos[1].src}
            alt="Eternal Covenant"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
            <div className="text-white space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-amber-200 font-bold">
                THE COVENANT
              </span>
              <p className="font-serif text-sm">{photos[1].title}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Card */}
      <div className="bg-brand-primary text-white p-8 rounded-xl text-center space-y-4 shadow-paper border border-brand-secondary/30">
        <span className="text-3xl font-serif text-brand-secondary-container">“</span>
        <p className="font-serif text-xl sm:text-2xl italic tracking-wide max-w-2xl mx-auto leading-relaxed">
          My bounty is as boundless as the sea, my love as deep; the more I give to thee, the more I have, for both are infinite.
        </p>
        <span className="text-xs uppercase tracking-widest text-brand-secondary-container font-semibold block">
          — ACT II, SCENE II • ROMEO & JULIET
        </span>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute -top-12 right-0 text-white text-xl font-bold p-2"
            >
              ✕ Close
            </button>
            <img
              src={activePhoto}
              alt="Full preview"
              className="w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
