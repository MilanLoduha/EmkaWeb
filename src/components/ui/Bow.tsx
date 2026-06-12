"use client";

import { motion } from "framer-motion";

export const Bow = ({ className }: { className?: string }) => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      <svg
        viewBox="0 0 100 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-8"
      >
        <path
          d="M50 30C50 30 20 10 10 30C0 50 30 55 50 35C70 55 100 50 90 30C80 10 50 30 50 30Z"
          fill="#FF69B4"
          stroke="#1A1A1A"
          strokeWidth="3"
        />
        <circle cx="50" cy="30" r="8" fill="#FF69B4" stroke="#1A1A1A" strokeWidth="3" />
      </svg>
    </motion.div>
  );
};
