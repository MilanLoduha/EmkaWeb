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
        className="absolute z-20 text-kawaii-pink"
      >
        <Heart size={16} fill="currentColor" />
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
    <button onClick={handleClick} className="relative p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors">
      {showParticles && <ParticleEffect />}
      <Heart 
        size={20} 
        className={liked ? "fill-kawaii-pink text-kawaii-pink" : "text-kawaii-pink"} 
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
          className="text-5xl font-bold text-center mb-20 text-accent-black tracking-tight"
        >
          Náš <span className="text-kawaii-pink italic">magický</span> svet
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="relative aspect-square max-w-sm mx-auto w-full rounded-kawaii overflow-hidden border-2 border-white shadow-lg bg-white"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 right-4 z-10">
                <LikeButton />
              </div>
              <div className="absolute bottom-4 left-4 z-10 bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold text-accent-black border border-kawaii-pink">
                Emka #{image.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
