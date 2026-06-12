"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { id: 1, src: "/images/placeholder.jpg", alt: "My Love 1" },
  { id: 2, src: "/images/placeholder.jpg", alt: "My Love 2" },
  { id: 3, src: "/images/placeholder.jpg", alt: "My Love 3" },
  { id: 4, src: "/images/placeholder.jpg", alt: "My Love 4" },
];

export const Gallery = () => {
  return (
    <section className="py-20 bg-soft-pink/30 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-accent-black">
          Naše <span className="text-primary-pink">momenty</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative aspect-[3/4] rounded-kitty overflow-hidden border-4 border-white shadow-xl bg-white"
            >
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 italic p-4 text-center">
                Sem vlož fotku do public/images/
              </div>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
        
        <p className="text-center mt-12 text-gray-500 italic">
          (Návod: Nahraj svoje fotky do priečinka /public/images/ a zmeň ich v kóde)
        </p>
      </div>
    </section>
  );
};
