"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Code2, Lightbulb } from 'lucide-react';

const About = () => {
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

  const highlights = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Full-Stack Developer",
      description: "Building modern web applications with React, Next.js, and Python"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Technical Consultant",
      description: "Bridging technology with business needs for optimal solutions"
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Problem Solver",
      description: "Creating innovative solutions that drive value for users"
    }
  ];

  return (
    <motion.section
      className="glass p-8 rounded-3xl card-hover"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold gradient-text">
            HI, I'M ALEX!
          </h2>
        </div>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8"></div>
      </motion.div>

      <motion.div className="space-y-6" variants={containerVariants}>
        <motion.p 
          className="text-lg leading-relaxed text-textSecondary"
          variants={itemVariants}
        >
          I'm a passionate{' '}
          <span className="font-semibold text-primary">
            technical consultant
          </span>{' '}
          and{' '}
          <span className="font-semibold text-secondary">
            full-stack software engineer
          </span>{' '}
          with a unique blend of technical expertise, client relations, and
          strategic leadership.
        </motion.p>

        <motion.div 
          className="grid md:grid-cols-3 gap-4 my-8"
          variants={containerVariants}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="glass p-4 rounded-2xl border border-white/10"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-primary mb-2">{highlight.icon}</div>
              <h3 className="font-semibold text-textPrimary mb-1">{highlight.title}</h3>
              <p className="text-sm text-textSecondary">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p 
          className="leading-relaxed text-textSecondary"
          variants={itemVariants}
        >
          My journey into software development began with an intensive
          six-month bootcamp at App Academy, where I gained hands-on
          experience in JavaScript, Python, React, Redux Toolkit, Flask, and
          SQL, building modern, user-focused web applications. I've continued
          to expand my expertise with certifications including Microsoft
          Dynamics 365 Business Central, demonstrating my commitment to
          enterprise-level business solutions.
        </motion.p>

        <motion.p 
          className="leading-relaxed text-textSecondary"
          variants={itemVariants}
        >
          Beyond writing code, I specialize in bridging technology with
          business needs. Whether it's developing scalable applications,
          designing efficient APIs, or optimizing user experiences, I thrive
          on creating innovative solutions that drive value for both users and
          stakeholders.
        </motion.p>

        <motion.p 
          className="leading-relaxed text-textSecondary"
          variants={itemVariants}
        >
          Prior to transitioning into tech, I spent years in program
          management and client-facing roles, leading high-performance teams
          and driving revenue growth. As a Program Manager with EXOS at
          Google, I spearheaded initiatives that expanded client engagement by
          30%.
        </motion.p>

        <motion.p 
          className="leading-relaxed text-textSecondary"
          variants={itemVariants}
        >
          When I'm not building software, you'll find me exploring the
          outdoors, spending time with family, or brainstorming the next big
          project!
        </motion.p>

        <motion.div
          className="mt-8 glass p-6 rounded-2xl border-l-4 border-primary"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className="font-medium text-textPrimary">
            💡 Let's connect! Whether you're looking for a software engineer,
            technical consultant, or solutions-focused strategist, I'd love to
            chat about how we can work together.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;