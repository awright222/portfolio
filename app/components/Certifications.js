"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, ExternalLink, Shield } from 'lucide-react';
import CertificationModal from './CertificationModal';

const Certifications = () => {
  const [selectedCertification, setSelectedCertification] = useState(null);

  const certifications = [
    {
      name: 'Microsoft Dynamics 365 Business Central',
      issuer: 'Microsoft',
      date: '2025',
      description: 'Comprehensive certification covering business application development, configuration, and implementation using Microsoft Dynamics 365 Business Central.',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: ['ERP Systems', 'Business Applications', 'Data Management', 'Process Automation'],
      pdfUrl: '/MicrosoftDynamics365BusinessCentralCert.pdf'
    }
  ];

  const handleCertificationClick = (certification) => {
    setSelectedCertification(certification);
  };

  const handleCloseModal = () => {
    setSelectedCertification(null);
  };

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

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
          CERTIFICATIONS
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-3xl card-hover mb-6 cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => handleCertificationClick(cert)}
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${cert.color} flex-shrink-0`}>
                  <div className="text-white">
                    {cert.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-textPrimary mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-textSecondary flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        {cert.issuer}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-textMuted">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                  </div>

                  <p className="text-textSecondary mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 glass rounded-full text-sm text-textSecondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Click to view indicator */}
                  <div className="flex items-center gap-2 text-primary text-sm opacity-75 hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4" />
                    <span>Click to view certificate</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-textSecondary mb-6">
            I'm committed to continuous learning and staying current with the latest technologies and industry standards.
          </p>
        </motion.div>
      </div>

      {/* Certification Modal */}
      <AnimatePresence>
        {selectedCertification && (
          <CertificationModal
            certification={selectedCertification}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Certifications;
