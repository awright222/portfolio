"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ExternalLink, Github, Code, Rocket } from 'lucide-react';

const ProjectModal = ({ site, onClose }) => {
  if (!site) return null;

  const repoUrls = {
    'FORMULATE TESTS': 'https://github.com/awright222/TestApp',
    'GUIDE FINDER': 'https://github.com/awright222/Guide_Finder',
    'LOVELY PAWS': 'https://github.com/awright222/Lovely-Paws-Hotel',
    'MIGRATION STATION': 'https://github.com/awright222/MigrationStation',
    'Mortgage Calculator': 'https://github.com/awright222/Mortgage-Calculator',
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: 50,
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
          className="glass p-8 rounded-3xl w-full max-w-2xl relative z-10 max-h-[90vh] overflow-y-auto"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="text-primary">
                {site.icon}
              </div>
              <h2 className="text-2xl font-bold gradient-text">{site.name}</h2>
            </div>
            <motion.button
              className="p-2 glass rounded-xl glow-hover text-textSecondary hover:text-textPrimary transition-colors"
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Project Image */}
          <div className="relative mb-6 rounded-2xl overflow-hidden">
            <Image 
              src={site.image} 
              alt={site.name} 
              width={600} 
              height={400} 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Description */}
          <p className="text-textSecondary mb-6 leading-relaxed">
            {site.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-textPrimary mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {site.tools.map((tool, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 glass rounded-full text-sm text-textSecondary"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-textPrimary mb-3 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-secondary" />
              Key Features
            </h3>
            <div className="space-y-3">
              {site.details.map((detail, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-3 glass rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-textSecondary text-sm leading-relaxed">
                    {detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Demo Credentials */}
          {site.demoCredentials && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-textPrimary mb-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-accent" />
                Try the Demo
              </h3>
              <div className="glass p-4 rounded-xl mb-4">
                <h4 className="text-sm font-semibold text-primary mb-2">🎯 Demo Experience</h4>
                <p className="text-textSecondary text-sm mb-3">
                  Every new account (including demo accounts) automatically starts with a comprehensive demo test featuring all question types. You can explore test creation, editing, and taking functionality immediately without setup.
                </p>
              </div>
              <div className="space-y-4">
                <div className="glass p-4 rounded-xl">
                  <h4 className="text-sm font-semibold text-primary mb-2">Teacher Account (Test Creation & Management)</h4>
                  <div className="space-y-1 text-sm">
                    <p className="text-textSecondary">
                      <span className="text-textPrimary font-medium">Email:</span> {site.demoCredentials.teacher.email}
                    </p>
                    <p className="text-textSecondary">
                      <span className="text-textPrimary font-medium">Password:</span> {site.demoCredentials.teacher.password}
                    </p>
                  </div>
                </div>
                <div className="glass p-4 rounded-xl">
                  <h4 className="text-sm font-semibold text-secondary mb-2">Student Account (Test Taking Experience)</h4>
                  <div className="space-y-1 text-sm">
                    <p className="text-textSecondary">
                      <span className="text-textPrimary font-medium">Email:</span> {site.demoCredentials.student.email}
                    </p>
                    <p className="text-textSecondary">
                      <span className="text-textPrimary font-medium">Password:</span> {site.demoCredentials.student.password}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <motion.a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 glass rounded-2xl glow-hover text-primary hover:text-secondary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Visit Site</span>
            </motion.a>
            
            {repoUrls[site.name] && (
              <motion.a
                href={repoUrls[site.name]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 glass rounded-2xl glow-hover text-primary hover:text-secondary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                <span>View Code</span>
              </motion.a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;