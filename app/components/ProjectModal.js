import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

const ProjectModal = ({ site, onClose }) => {
  if (!site) return null;

  const repoUrls = {
    'GUIDE FINDER': 'https://github.com/awright222/Guide_Finder',
    'LOVELY PAWS': 'https://github.com/awright222/Lovely-Paws-Hotel',
    'MIGRATION STATION': 'https://github.com/awright222/MigrationStation',
    'Mortgage Calculator': 'https://github.com/awright222/Mortgage-Calculator',
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white p-8 rounded-lg shadow-lg relative w-[28rem]" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">{site.name}</h2>
          <div className="flex items-center">
            <a href={site.url} className="bg-[#84A98C] text-white px-4 py-2 rounded-lg ml-4" target="_blank" rel="noopener noreferrer">
              Visit Site
            </a>
            <a href={repoUrls[site.name]} className="ml-2" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-[#84A98C] text-4xl" />
            </a>
          </div>
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