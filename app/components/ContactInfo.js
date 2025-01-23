import React from 'react';

const ContactInfo = () => {
  return (
    <div className="mt-0 p-4 bg-gray-800 bg-opacity-75 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">Contact Information</h2>
      <p className="mt-2">Email: <a href="mailto:alex.gr.wright@gmail.com" className="text-[#708070]">alex.gr.wright@gmail.com</a></p>
      <p>Phone: <a href="tel:+18313313051" className="text-[#708070]">+1 (831) 331-3051</a></p>
      <div className="mt-4">
        <h3 className="text-xl font-medium">Social Links</h3>
        <ul className="list-disc list-inside">
          <li>
            <a href="https://github.com/awright222" className="text-[#708070]" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alexgwright2" className="text-[#708070]" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;