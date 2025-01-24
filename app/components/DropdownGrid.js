import React, { useEffect } from 'react';
import Image from 'next/image';
import { animate } from 'framer-motion';

const DropdownGrid = () => {
  const sites = [
    { 
      name: 'MIGRATION STATION', 
      url: 'https://migrationstation-yv8v.onrender.com',
      description: 'Vacation rental clone using: Express, SQL, React, Redux',
      image: '/migration_station.png'
    },
    {
      name: 'LOVELY PAWS',
      url: 'https://lovely-paws-hotel-grvv.onrender.com',
      description: 'Pet boarding and services using: Python, Flask, SQLAlchemy, Docker, Redux Toolkit',
      image: '/lovely_paws.png'
    },
    {
      name: 'GUIDE FINDER',
      url: 'https://guide-finder.onrender.com/',
      description: 'Helping people achieve access to outdoor adventures using: Python, Flask, SQLAlchemy, Docker, Redux Toolkit',
      image: '/guide_finder.png' 
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll('.card');
    elements.forEach(element => {
      animate(element, { scale: [0.4, 1] }, { ease: "circInOut", duration: 1.2 });
    });
  }, []);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sites.map((site, index) => (
        <div 
          key={index} 
          className="card p-4 rounded-lg bg-white transition-transform duration-300 transform hover:scale-105 flex flex-col items-center group" 
          style={{ 
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    
            transition: 'background-color 0.3s ease, transform 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'white'; 
          }}
        >
          <Image src={site.image} alt={site.name} width={200} height={200} />
          <h3 className="mt-2 text-xl font-medium text-[var(--dark-green)]">{site.name}</h3>
          <p className="mt-2 text-[var(--dark-eucalyptus)]">{site.description}</p>
          <a href={site.url} className="mt-2 text-[var(--eucalyptus)] hover:underline">Visit Site</a>
        </div>
      ))}
    </div>
  );
};

export default DropdownGrid;
