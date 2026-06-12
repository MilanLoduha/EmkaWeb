"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

// Tu si priamo upravuj popisky pre každú fotku:
const images = [
  { id: 1, src: "/images/1.jpg", alt: "Fotka 1", caption: "Milujem ťa s okuliarmi" },
  { id: 2, src: "/images/2.jpg", alt: "Fotka 2", caption: "Milujem ťa keď ležíš" },
  { id: 3, src: "/images/3.jpg", alt: "Fotka 3", caption: "Milujem ťa keď sa smeješ" },
  { id: 4, src: "/images/4.jpg", alt: "Fotka 4", caption: "Si taká elegantná" },
  { id: 5, src: "/images/5.jpg", alt: "Fotka 5", caption: "Niekedy aj našvaná" },
  { id: 6, src: "/images/6.jpg", alt: "Fotka 6", caption: "Ale väčšinou Sigma" },
  { id: 7, src: "/images/7.jpg", alt: "Fotka 7", caption: "A stále ma chceš viac, ako čokoľvek na svete" },
  { id: 8, src: "/images/8.jpg", alt: "Fotka 8", caption: "Máme rovnaké očká :) Také úžasné" },
  { id: 9, src: "/images/9.jpg", alt: "Fotka 9", caption: "Nádherne si čistíš zúbky" },
  { id: 10, src: "/images/10.jpg", alt: "Fotka 10", caption: "Na spapanie siii" },
  { id: 11, src: "/images/11.jpg", alt: "Fotka 11", caption: "Zaštekaj" },
  { id: 12, src: "/images/12.jpg", alt: "Fotka 12", caption: "A tu si so mnou. Radosť z teba srší." },
  { id: 13, src: "/images/13.jpg", alt: "Fotka 13", caption: "Podozrievaš ma z niečoho?" },
  { id: 14, src: "/images/14.jpg", alt: "Fotka 14", caption: "Nikomu nepoviem že ma škrtíš a biješ ma" },
  { id: 15, src: "/images/15.jpg", alt: "Fotka 15", caption: "Len papaj" },
  { id: 16, src: "/images/16.jpg", alt: "Fotka 16", caption: "Aj variť vieš 😇" },
  { id: 17, src: "/images/17.jpg", alt: "Fotka 17", caption: "A si tak nádherne šialená. Tak ako jaa" },
  { id: 18, src: "/images/18.jpg", alt: "Fotka 18", caption: "Predomnou sa neschováš" },
  { id: 19, src: "/images/19.jpg", alt: "Fotka 19", caption: "Oblížem ti jazyk" },
  { id: 20, src: "/images/20.jpg", alt: "Fotka 20", caption: "Aj oko" },
  { id: 21, src: "/images/21.jpg", alt: "Fotka 21", caption: "Ale vždy budeme šťastní spolu" },
];

const ParticleEffect = () => (
  <AnimatePresence>
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0, x: 0, y: 0 }}
        animate={{ 
          scale: [0, 1.5, 0], 
          x: (Math.random() - 0.5) * 100, 
          y: (Math.random() - 0.5) * 100 
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute z-20 text-red-500"
      >
        <Heart size={20} fill="currentColor" />
      </motion.div>
    ))}
  </AnimatePresence>
);

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
    setShowParticles(true);
    setTimeout(() => setShowParticles(false), 600);
  };

  return (
    <button onClick={handleClick} className="relative p-3 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110">
      {showParticles && <ParticleEffect />}
      <Heart 
        size={28} 
        className={liked ? "fill-red-500 text-red-500" : "text-red-500"} 
      />
    </button>
  );
};

export const PremiumGallery = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <motion.div className="absolute top-10 left-10 opacity-30" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
        <svg viewBox="0 0 100 100" className="w-24 h-24"><circle cx="50" cy="50" r="40" fill="#FFC0CB"/><path d="M30 40 Q 20 20 40 30 Q 50 25 60 30 Q 80 20 70 40" fill="#FFC0CB"/></svg>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <motion.h2 className="text-5xl md:text-6xl font-bold text-center mb-20 text-accent-black tracking-tight">
          Náš <span className="text-kawaii-pink italic">magický</span> svet
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24 max-w-7xl mx-auto px-6">
          {images.map((image, index) => (
            <div key={image.id} className="flex flex-col items-center pt-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="relative aspect-square w-full max-w-[320px] rounded-kawaii overflow-hidden border-4 border-white shadow-xl bg-white"
              >
                <Image src={image.src} alt={image.alt} fill className="object-cover" />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                  <LikeButton />
                </div>
              </motion.div>
              
              <div className="mt-8 w-full max-w-[320px] p-5 rounded-2xl border-2 border-kawaii-pink/40 bg-white/50 text-accent-black text-center min-h-[5rem]">
                <p className="text-accent-black font-semibold text-lg">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
