"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Bow } from "./ui/Bow";
import { Heart } from "lucide-react";

// Client-side only component to avoid hydration mismatches
const FloatingHeart = ({ i }: { i: number }) => {
  const [initialStyle, setInitialStyle] = useState({ x: 0, scale: 0.5 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setInitialStyle({
      x: Math.random() * 1400 - 600,
      scale: Math.random() * 0.6 + 0.4,
    });
  }, []);

  if (!isMounted) return null;

  return (
    <motion.div
      className="absolute text-primary-pink opacity-40 pointer-events-none"
      initial={{ 
        x: initialStyle.x,
        y: 1000, 
        scale: initialStyle.scale 
      }}
      animate={{ 
        y: -200, 
        rotate: 360,
        x: initialStyle.x + (Math.random() * 200 - 100)
      }}
      transition={{ 
        duration: Math.random() * 8 + 8, 
        repeat: Infinity, 
        ease: "linear",
        delay: Math.random() * 5
      }}
    >
      <Heart fill="currentColor" size={25} />
    </motion.div>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FFF5F7] px-4 py-20">
      {/* Background elements */}
      <div className="absolute top-10 left-10 md:left-20 opacity-30 rotate-12">
        <Bow className="w-12 h-8 md:w-16 md:h-12" />
      </div>
      <div className="absolute bottom-20 right-10 md:right-20 opacity-30 -rotate-12">
        <Bow className="w-12 h-8 md:w-16 md:h-12" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 bg-white/60 p-8 md:p-12 rounded-kawaii backdrop-blur-sm border-2 border-kawaii-pink/30 shadow-xl max-w-3xl w-full"
      >
        <div className="flex justify-center mb-6">
          <Bow className="w-20 h-12 md:w-24 md:h-16" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-accent-black mb-6 leading-tight">
          Emka, <span className="text-kawaii-pink italic">milujem ťa</span>
        </h1>
        
        <p className="text-lg md:text-xl text-accent-black/90 max-w-xl mx-auto font-medium">
          Si to najlepšie, čo ma kedy stretlo. Každý deň s tebou je ako sen.
        </p>

        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-10 flex justify-center"
        >
          <Heart className="text-red-500 fill-red-500 w-12 h-12 md:w-16 md:h-16 drop-shadow-md" />
        </motion.div>
      </motion.div>

      {/* Floating hearts animation */}
      {[...Array(15)].map((_, i) => (
        <FloatingHeart key={i} i={i} />
      ))}
    </section>
  );
};
