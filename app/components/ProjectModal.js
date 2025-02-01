import React from 'react';
import Image from 'next/image';

const ProjectModal = ({ site, onClose }) => {
  if (!site) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white p-8 rounded-lg shadow-lg relative w-[28rem]" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">{site.name}</h2>
          <a href={site.url} className="bg-[#84A98C] text-white px-4 py-2 rounded-lg ml-4" target="_blank" rel="noopener noreferrer">
            Visit Site
          </a>
        </div>
        <div className="flex items-center justify-center mb-4">
          <Image src={site.image} alt={site.name} width={240} height={240} className="rounded-lg" />
        </div>
        <p className="mt-4">{site.description}</p>
        <div className="mt-4 p-4 border border-gray-300 rounded-lg">
          <ul className="list-disc list-inside">
            {site.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;