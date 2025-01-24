import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { animate } from 'framer-motion';

const ContactInfo = () => {
  useEffect(() => {
    const element = document.querySelector('.contact-info');
    animate(element, { scale: [0.4, 1] }, { ease: "circInOut", duration: 1.2 });
  }, []);

  return (
    <div className="contact-info mt-0 p-4 bg-gray-800 bg-opacity-20 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">CONTACT ME</h2>
      <p className="mt-2">Email: <a href="mailto:alex.gr.wright@gmail.com" className="text-[#708070]">alex.gr.wright@gmail.com</a></p>
      <p>Phone: <a href="tel:+18313313051" className="text-[#708070]">+1 (831) 331-3051</a></p>
      <div className="mt-4">
        <h3 className="text-xl font-medium">SOCIAL</h3>
        <div className="flex space-x-4">
          <a href="https://github.com/awright222" className="text-[#708070] text-3xl" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/alexgwright2" className="text-[#708070] text-3xl" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;