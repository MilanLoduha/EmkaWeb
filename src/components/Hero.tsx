"use client";

import { motion } from "framer-motion";
import { Bow } from "./ui/Bow";
import { Heart } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white px-4">
      {/* Background elements */}
      <div className="absolute top-10 left-10 opacity-20 rotate-12">
        <Bow />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 -rotate-12">
        <Bow />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <div className="flex justify-center mb-6">
          <Bow className="w-24 h-16" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-accent-black mb-4">
          Emka, <span className="text-primary-pink">milujem ťa</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Si to najlepšie, čo ma kedy stretlo. Každý deň s tebou je ako sen.
        </p>

        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-12 flex justify-center"
        >
          <Heart className="text-primary-pink fill-primary-pink w-12 h-12" />
        </motion.div>
      </motion.div>

      {/* Floating hearts animation */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary-pink opacity-30 pointer-events-none"
          initial={{ 
            x: Math.random() * 1000 - 500, 
            y: 1000, 
            scale: Math.random() * 0.5 + 0.5 
          }}
          animate={{ 
            y: -200, 
            rotate: 360 
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 10
          }}
        >
          <Heart fill="currentColor" />
        </motion.div>
      ))}
    </section>
  );
};
