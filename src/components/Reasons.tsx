"use client";

import { motion } from "framer-motion";
import { Star, Heart, Cloud } from "lucide-react";

const reasons = [
  "Máš ten najkrajší úsmev na svete.",
  "Vždy vieš, ako ma rozosmiať.",
  "Si neuveriteľne láskavá a šikovná.",
  "Tvoje objatia sú to najbezpečnejšie miesto.",
  "Milujem tvoju energiu a radosť zo života.",
  "Si proste moja úžasná Emka."
];

export const Reasons = () => {
  return (
    <section className="py-20 bg-white px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-accent-black">
          Prečo ťa <span className="text-primary-pink">tak veľmi</span> milujem
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-kitty bg-soft-pink/20 border-2 border-primary-pink/30 flex items-center space-x-4 shadow-sm"
            >
              <Heart className="text-primary-pink fill-primary-pink w-6 h-6 shrink-0" />
              <p className="text-lg text-gray-800 font-medium">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative icons */}
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-20 right-10 text-soft-pink opacity-40"
      >
        <Star size={48} fill="currentColor" />
      </motion.div>
      <motion.div 
        animate={{ x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute bottom-10 left-10 text-soft-pink opacity-40"
      >
        <Cloud size={64} fill="currentColor" />
      </motion.div>
    </section>
  );
};
