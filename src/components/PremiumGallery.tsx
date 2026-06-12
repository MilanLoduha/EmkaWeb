"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Create 21 placeholders
const images = Array.from({ length: 21 }, (_, i) => ({
  id: i + 1,
  src: `/images/placeholder-${i + 1}.jpg`,
  alt: `Emka Moment ${i + 1}`,
}));

export const PremiumGallery = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-kawaii-lavender/20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-center mb-20 text-accent-black tracking-tight"
        >
          Náš <span className="text-kawaii-pink italic">magický</span> svet
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -10, rotate: index % 2 === 0 ? 2 : -2 }}
              className="relative aspect-square rounded-kawaii overflow-hidden border-2 border-white shadow-xl bg-kawaii-cream backdrop-blur-md"
            >
              <div className="absolute inset-0 flex items-center justify-center text-accent-black/30 font-medium italic p-4 text-center">
                Sem vlož fotku {image.id}
              </div>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover opacity-0 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-white/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-accent-black">
                Emka #{image.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
