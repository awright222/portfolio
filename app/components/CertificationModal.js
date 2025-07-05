"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink } from "lucide-react";

export default function CertificationModal({ certification, onClose }) {
  if (!certification) return null;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { 
        duration: 0.2 
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center z-50 p-4"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal Content */}
        <motion.div
          className="glass p-8 rounded-3xl w-full max-w-4xl relative z-10 max-h-[90vh] overflow-hidden"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-2xl bg-gradient-to-br ${certification.color}`}>
                <div className="text-white">
                  {certification.icon}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold gradient-text">{certification.name}</h2>
                <p className="text-textSecondary">{certification.issuer} • {certification.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <motion.a
                href={certification.pdfUrl}
                download
                className="flex items-center gap-2 px-4 py-2 glass rounded-xl glow-hover text-primary hover:text-secondary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                <span className="text-sm">Download</span>
              </motion.a>
              <motion.button
                className="p-2 glass rounded-xl glow-hover text-textSecondary hover:text-textPrimary transition-colors"
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-textSecondary leading-relaxed mb-4">
              {certification.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {certification.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 glass rounded-full text-sm text-textSecondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certificate iframe */}
          <div className="relative rounded-2xl overflow-hidden">
            <iframe
              src={certification.pdfUrl}
              className="w-full h-[70vh] border-0"
              title={`${certification.name} Certificate`}
            />
          </div>

          {/* Footer */}
          <div className="mt-6 flex justify-center">
            <motion.a
              href={certification.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 glass rounded-2xl glow-hover text-primary hover:text-secondary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open in New Tab</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
