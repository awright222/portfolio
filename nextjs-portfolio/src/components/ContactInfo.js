import React from 'react';

const ContactInfo = () => {
  return (
    <div className="mt-8 p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">Contact Information</h2>
      <p className="mt-2">Email: <a href="mailto:alex@example.com" className="text-blue-500">alex@example.com</a></p>
      <p>Phone: <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a></p>
      <div className="mt-4">
        <h3 className="text-xl font-medium">Social Links</h3>
        <ul className="list-disc list-inside">
          <li>
            <a href="https://github.com/alexwright" className="text-blue-500" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li>
            <a href="https://linkedin.com/in/alexwright" className="text-blue-500" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;