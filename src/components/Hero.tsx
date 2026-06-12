"use client";

import { motion } from "framer-motion";
import { Bow } from "./ui/Bow";
import { Heart } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-soft-pink/10 px-4">
      {/* Background elements */}
      <div className="absolute top-10 left-20 opacity-30 rotate-12">
        <Bow className="w-16 h-12" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-30 -rotate-12">
        <Bow className="w-16 h-12" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 bg-white/40 p-12 rounded-kitty backdrop-blur-sm border-2 border-primary-pink/20 shadow-xl"
      >
        <div className="flex justify-center mb-6">
          <Bow className="w-24 h-16" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-accent-black mb-4">
          Emka, <span className="text-primary-pink drop-shadow-sm">milujem ťa</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-medium">
          Si to najlepšie, čo ma kedy stretlo. Každý deň s tebou je ako sen.
        </p>

        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-12 flex justify-center"
        >
          <Heart className="text-primary-pink fill-primary-pink w-16 h-16 drop-shadow-md" />
        </motion.div>
      </motion.div>

      {/* Floating hearts animation with more spread */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary-pink opacity-40 pointer-events-none"
          initial={{ 
            x: (Math.random() * 1400) - 600, // More horizontal spread
            y: 1000, 
            scale: Math.random() * 0.6 + 0.4 
          }}
          animate={{ 
            y: -200, 
            rotate: 360,
            x: (Math.random() * 1400) - 600 // Slight horizontal drift
          }}
          transition={{ 
            duration: Math.random() * 8 + 8, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 5
          }}
        >
          <Heart fill="currentColor" size={Math.random() * 20 + 20} />
        </motion.div>
      ))}
    </section>
  );
};
