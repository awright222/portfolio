"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Code, Palette, Rocket, Mail, Phone, MapPin } from "lucide-react";
import About from "./components/About";
import ContactInfo from "./components/ContactInfo";
import ResumeButton from "./components/ResumeButton";
import DropdownGrid from "./components/DropdownGrid";
import Modal from "./components/Modal";
import Certifications from "./components/Certifications";

// Particle component for animated background
const Particle = ({ delay = 0 }) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    // Initialize position on client side
    setPosition({
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 100,
    });

    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 100,
      });
    }, 20000 + delay * 1000);

    return () => clearInterval(interval);
  }, [delay]);

  return (
    <motion.div
      className="particle"
      initial={{ x: position.x, y: position.y, opacity: 0 }}
      animate={{ 
        x: position.x + (Math.random() - 0.5) * 100,
        y: -100,
        opacity: [0, 1, 1, 0]
      }}
      transition={{
        duration: 20,
        delay: delay,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

// Hero Section Component
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Animated Background Particles */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <Particle key={i} delay={i * 2} />
        ))}
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          className="float"
          variants={itemVariants}
        >
          <Image
            src="/IMG_1563.JPG"
            alt="Alex Wright"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-8 glow"
            priority
          />
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
          variants={itemVariants}
        >
          ALEX WRIGHT
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-textSecondary mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Full-Stack Developer & Technical Consultant
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <Code className="w-5 h-5 text-primary" />
            <span>Full-Stack Development</span>
          </div>
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <Palette className="w-5 h-5 text-secondary" />
            <span>UI/UX Design</span>
          </div>
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <Rocket className="w-5 h-5 text-accent" />
            <span>Technical Consulting</span>
          </div>
        </motion.div>

        <motion.div
          className="animate-bounce"
          variants={itemVariants}
        >
          <ChevronDown className="w-8 h-8 text-textSecondary mx-auto cursor-pointer" />
        </motion.div>
      </div>
    </motion.section>
  );
};

// Skills Section Component
const SkillsSection = () => {
  const skills = [
    {
      category: "FRONTEND TECHNOLOGIES",
      items: ["React", "Next.js", "HTML/CSS", "Tailwind CSS"],
      icon: <Code className="w-6 h-6" />
    },
    {
      category: "BACKEND TECHNOLOGIES", 
      items: ["Node.js", "Express.js", "Python/Flask"],
      icon: <Rocket className="w-6 h-6" />
    },
    {
      category: "DATABASES & ORMS",
      items: ["Sequelize", "SQLAlchemy", "SQLite3", "PostgreSQL"],
      icon: <Palette className="w-6 h-6" />
    },
    {
      category: "CORE LANGUAGES",
      items: ["JavaScript", "Python"],
      icon: <Code className="w-6 h-6" />
    }
  ];

  return (
    <motion.section
      className="py-20 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 gradient-text"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          TECHNICAL SKILLS
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-2xl card-hover"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-primary mb-4">{skill.icon}</div>
              <h3 className="text-sm font-semibold mb-4 text-textPrimary">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-textSecondary text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <motion.section
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <About />
            </div>
            
            <motion.div
              className="flex flex-col items-center space-y-6"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="glass p-6 rounded-2xl">
                <ContactInfo />
                <ResumeButton onClick={handleModalToggle} />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <SkillsSection />

      <Certifications />

      <motion.section
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 gradient-text"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            FEATURED PROJECTS
          </motion.h2>
          
          <DropdownGrid />
        </div>
      </motion.section>

      <AnimatePresence>
        {isModalOpen && <Modal onClose={handleModalToggle} />}
      </AnimatePresence>
    </div>
  );
};

export default Page;
