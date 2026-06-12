"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

// Create 21 placeholders
const images = Array.from({ length: 21 }, (_, i) => ({
  id: i + 1,
  src: `/images/${i + 1}.jpg`,
  alt: `Emka Moment ${i + 1}`,
}));

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
    <section className="py-24 bg-gradient-to-b from-white to-kawaii-lavender/20 px-4 relative overflow-hidden">
      {/* Decorative Hello Kitty elements */}
      <motion.div className="absolute top-10 left-10 opacity-30" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
        <svg viewBox="0 0 100 100" className="w-24 h-24"><circle cx="50" cy="50" r="40" fill="#FFC0CB"/><path d="M30 40 Q 20 20 40 30 Q 50 25 60 30 Q 80 20 70 40" fill="#FFC0CB"/></svg>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-center mb-20 text-accent-black tracking-tight"
        >
          Náš <span className="text-kawaii-pink italic">magický</span> svet
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {images.map((image, index) => (
            <div key={image.id} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="relative aspect-square w-full max-w-sm rounded-kawaii overflow-hidden border-4 border-white shadow-xl bg-white"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                {/* Like button positioned bottom center */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                  <LikeButton />
                </div>
              </motion.div>
              {/* Caption area */}
              <div className="mt-4 w-full max-w-sm">
                <input 
                  type="text"
                  placeholder="Sem napíš popis fotky..."
                  className="w-full px-4 py-3 rounded-2xl border-2 border-kawaii-pink/30 bg-white text-accent-black text-lg font-medium placeholder:text-gray-400 focus:outline-none focus:border-kawaii-pink transition-colors"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
