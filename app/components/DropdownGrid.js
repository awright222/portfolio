import React, { useEffect } from 'react';
import Image from 'next/image';
import { animate } from 'framer-motion';

const DropdownGrid = () => {
  const sites = [
    { 
      name: 'Migration Station', 
      url: 'https://migrationstation-yv8v.onrender.com',
      description: 'Vacation rental clone using: Express, SQL, React, Redux',
      image: '/migration_station.png'
    },
    {
      name: 'Lovely Paws',
      url: 'https://lovely-paws-hotel-grvv.onrender.com',
      description: 'Pet boarding and services using: Python, Flask, SQLAlchemy, Docker, Redux Toolkit',
      image: '/lovely_paws.png'
    },
    {
      name: 'Guide Finder',
      url: 'https://guide-finder.onrender.com/',
      description: 'Helping people achieve access to outdoor adventures using: Python, Flask, SQLAlchemy, Docker, Redux Toolkit',
      image: '/guide_finder.png' 
    },
    {
      name: 'Project 4',
      url: 'https://example.com/project4',
      description: 'Description for Project 4',
      image: '/aw_nobg.png' 
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll('.card');
    elements.forEach(element => {
      animate(element, { scale: [0.4, 1] }, { ease: "circInOut", duration: 1.2 });
    });
  }, []);
  
  return (
    <div className="grid grid-cols-3 gap-4">
      {sites.map((site, index) => (
        <div key={index} className="card border p-4 rounded-lg hover:bg-[var(--eucalyptus)] flex flex-col items-center group" style={{ borderColor: 'var(--blue-green)' }}>
          <Image src={site.image} alt={site.name} width={200} height={200} />
          <h3 className="mt-2 text-xl font-medium" style={{ color: 'var(--dark-green)' }}>{site.name}</h3>
          <p className="mt-2" style={{ color: 'var(--dark-eucalyptus)' }}>{site.description}</p>
          <a href={site.url} className="mt-2" style={{ color: 'var(--eucalyptus)' }}>Visit Site</a>
        </div>
      ))}
    </div>
  );
};

export default DropdownGrid;