"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Code, Rocket, Database, Globe } from 'lucide-react';
import ProjectModal from './ProjectModal';

const DropdownGrid = () => {
  const [selectedSite, setSelectedSite] = useState(null);

  const sites = [
    {
      name: 'FORMULATE TESTS',
      url: 'https://fromulatetests.vercel.app/',
      description: 'A comprehensive React-based educational testing platform designed for modern education. Features multi-role authentication, test creation, class management, and advanced analytics. Every new account starts with a pre-loaded demo test showcasing all question types.',
      image: '/formulate.png',
      tools: ['React', 'Firebase', 'JavaScript', 'CSS3', 'React Router'],
      details: [
        'Built a full-featured educational platform with React 19.1.0 and Firebase 11.9.1, supporting multi-role user management for students, teachers, and administrators.',
        'Implemented comprehensive authentication system with Firebase Auth including Google Sign-In, profile management, and role-based access control.',
        'Developed advanced test creation tools with multiple question types, media support, timer settings, browser lockdown security, and real-time analytics dashboard.',
        'New accounts are automatically seeded with a comprehensive demo test featuring all question types (multiple choice, true/false, short answer, essay, etc.) so users can immediately explore the platform\'s capabilities.'
      ],
      demoCredentials: {
        teacher: {
          email: 'demo.teacher@example.com',
          password: 'DemoTeacher2024'
        },
        student: {
          email: 'demo.student@example.com', 
          password: 'DemoStudent2024'
        }
      },
      icon: <Code className="w-6 h-6" />
    },
    { 
      name: 'GUIDE FINDER', 
      url: 'https://guide-finder.onrender.com/',
      description: 'Helping people achieve access to outdoor adventures. Please excuse the speed of load. This project is hosted on Render and it will take 10-15 seconds to load.',
      image: '/guide_finder.png',
      tools: ['Python', 'Flask', 'SQLAlchemy', 'Docker', 'Redux Toolkit'],
      details: [
        'Created an advanced search and filtering system using React, Flask, and PostgreSQL, allowing users to refine outdoor guides by activity type, location, and skill level.',
        'Optimized backend API performance with SQLAlchemy and Flask-SQLAlchemy, reducing query times and ensuring smooth data retrieval for a responsive UI.',
        'Integrated secure authentication with Flask and bcrypt, ensuring protected user access.'
      ],
      icon: <Globe className="w-6 h-6" />
    },
    {
      name: 'Mortgage Calculator',
      url: 'https://mortgage-calculator-beige-nine.vercel.app/',
      description: 'Multi-functional mortgage calculator.',
      image: '/mortgage_calculator.png',
      tools: ['Next.js', 'Tailwind CSS'],
      details: [
        'Built a real-time mortgage calculator with Next.js, dynamically updating calculations based on user input.',
        'Designed a detailed amortization table using JavaScript array mapping, providing users with precise breakdowns of payments.',
        'Styled the interface with Tailwind CSS, achieving a modern, minimalist design with a clean user experience.'
      ],
      icon: <Code className="w-6 h-6" />
    },
    {
      name: 'LOVELY PAWS',
      url: 'https://lovely-paws-hotel-grvv.onrender.com',
      description: 'Pet boarding and services. Please excuse the speed of load. This project is hosted on Render and it will take 10-15 seconds to load.',
      image: '/lovely_paws.png',
      tools: ['Python', 'Flask', 'SQLAlchemy', 'Docker', 'Redux Toolkit'],
      details: [
        'Developed a mobile-responsive UI with CSS media queries, ensuring smooth navigation across all screen sizes.',
        'Built a RESTful Flask API with SQLAlchemy, enabling seamless pet boarding reservation management with efficient relational data queries.',
        'Containerized the application with Docker, standardizing development and deployment environments for reliability across multiple servers.'
      ],
      icon: <Database className="w-6 h-6" />
    },
    { 
      name: 'MIGRATION STATION', 
      url: 'https://migrationstation-yv8v.onrender.com',
      description: 'Vacation rental clone. Please excuse the speed of load. This project is hosted on Render and it will take 10-15 seconds to load.',
      image: '/migration_station.png',
      tools: ['Express', 'SQL', 'React', 'Redux'],
      details: [
        'Engineered a dynamic property listing and booking system with React and Express.js, enabling real-time updates and intuitive user interactions.',
        'Implemented session-based authentication using cookies, maintaining secure and persistent user sessions without exposing credentials.',
        'Optimized database queries using Sequelize with PostgreSQL, reducing response times for search and booking functionality, ensuring scalability as listings grow.'
      ],
      icon: <Rocket className="w-6 h-6" />
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const handleCardClick = (site) => {
    setSelectedSite(site);
  };

  const handleCloseModal = () => {
    setSelectedSite(null);
  };

  return (
    <>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {sites.map((site, index) => (
          <motion.div
            key={index}
            className="glass p-6 rounded-3xl cursor-pointer group relative overflow-hidden card-hover"
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => handleCardClick(site)}
          >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
            
            <div className="relative z-10">
              {/* Project Icon */}
              <div className="text-primary mb-4 group-hover:text-secondary transition-colors">
                {site.icon}
              </div>

              {/* Project Image */}
              <div className="relative mb-4 overflow-hidden rounded-2xl">
                <Image 
                  src={site.image} 
                  alt={site.name} 
                  width={300} 
                  height={200} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold text-textPrimary mb-3 group-hover:text-primary transition-colors">
                {site.name}
              </h3>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {site.tools.map((tool, i) => (
                  <span 
                    key={i} 
                    className="text-xs px-2 py-1 glass rounded-full text-textSecondary group-hover:text-textPrimary transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm text-textSecondary group-hover:text-textPrimary transition-colors line-clamp-3">
                {site.description}
              </p>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-end justify-center pb-6">
                <motion.div 
                  className="text-primary font-semibold flex items-center gap-2"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedSite && (
          <ProjectModal 
            site={selectedSite} 
            onClose={handleCloseModal} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default DropdownGrid;