"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

export default function ResumeButton({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className="mt-6 px-8 py-4 glass rounded-2xl font-semibold flex items-center justify-center gap-3 group relative overflow-hidden glow-hover"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
      
      <FileText className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
      
      <span className="relative z-10 text-textPrimary group-hover:text-white transition-colors">
        VIEW RESUME
      </span>
      
      <motion.div
        className="text-primary group-hover:text-secondary transition-colors"
        animate={{ rotate: 0 }}
        whileHover={{ rotate: 45 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <ExternalLink className="w-4 h-4" />
      </motion.div>
    </motion.button>
  );
}