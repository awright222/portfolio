"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

const ContactInfo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const contactItems = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "alex.gr.wright@gmail.com",
      href: "mailto:alex.gr.wright@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone", 
      value: "+1 (831) 331-3051",
      href: "tel:+18313313051"
    }
  ];

  const socialItems = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/awright222"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alexgwright2"
    }
  ];

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-2xl font-bold gradient-text text-center"
        variants={itemVariants}
      >
        GET IN TOUCH
      </motion.h2>

      <motion.div className="space-y-4" variants={containerVariants}>
        {contactItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            className="flex items-center gap-3 p-3 glass rounded-xl glow-hover group"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-primary group-hover:text-secondary transition-colors">
              {item.icon}
            </div>
            <div>
              <div className="text-xs text-textMuted">{item.label}</div>
              <div className="text-sm text-textSecondary group-hover:text-textPrimary transition-colors">
                {item.value}
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <motion.div variants={itemVariants}>
        <h3 className="text-lg font-semibold text-textPrimary mb-4 text-center">
          CONNECT WITH ME
        </h3>
        <div className="flex justify-center space-x-4">
          {socialItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full glow-hover group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-primary group-hover:text-secondary transition-colors">
                {item.icon}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;